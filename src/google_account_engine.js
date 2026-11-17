(function (root) {
  'use strict';

  const storage = root.StorageEngine;
  const accountCache = 'minna_auth_google_user';
  const avatarKey = 'minna_google_avatar';
  const keys = [
    ...storage.PROGRESS_KEY_PATTERNS.filter(key => key !== 'minna_module_scroll_pos'),
    'minna_mazii_history', 'minna_quiz_auto_advance', 'minna_show_furigana', 'minna_furigana_setting',
    'minna_theme', 'minna_voice_settings', 'speechgen_speed', 'speechgen_pitch',
    'speechgen_speaker', avatarKey
  ];
  let user = null;
  let configured = false;
  let syncPromise = null;
  let refreshPromise = null;
  let notify = () => {};
  let status = 'Đang kiểm tra kết nối…';

  const keyFor = (uid, key) => 'u_' + uid + '_' + key;
  const read = (uid, key) => storage.secureGetRaw(keyFor(uid, key), null);
  const canConnect = () => location.protocol === 'https:' || location.hostname === 'localhost';
  const authError = 'Không kết nối được tài khoản Google. Vui lòng thử lại.';

  function setUser(next) {
    const changed = user?.uid !== next?.uid;
    user = next;
    root.AuthEngine.setGoogleUser(next);
    if (next) storage.secureSetRaw(accountCache, JSON.stringify(next));
    else storage.safeRemoveRaw(accountCache);
    return changed;
  }

  function fingerprint(value) {
    if (value === null) return '';
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
    return value.length + ':' + (hash >>> 0);
  }

  async function synchronize() {
    const uid = user?.uid;
    if (!uid || !configured) return;
    const checkpointKey = keyFor(uid, 'google_sync_checkpoint');
    const checkpoint = storage.secureGetJsonRaw(checkpointKey, {}) || {};
    const before = {};
    const changes = {};
    for (const key of keys) {
      before[key] = read(uid, key);
      if (fingerprint(before[key]) !== (checkpoint[key]?.hash || '')) changes[key] = before[key];
    }

    const body = JSON.stringify(changes);
    const response = await fetch('/api/account/sync', {
      method: 'POST',
      cache: 'no-store',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', 'X-Minna-Account': uid },
      body,
      keepalive: document.hidden === true && new TextEncoder().encode(body).byteLength < 60 * 1024
    });
    if (uid !== user?.uid) return;
    if (response.status === 401) {
      status = 'Phiên Google đã hết hạn. Hãy đăng nhập lại để tiếp tục đồng bộ.';
      notify(setUser(null));
      return;
    }
    if (response.status === 409) {
      status = 'Tài khoản Google đã thay đổi. Đang kiểm tra lại…';
      notify(setUser(null));
      root.setTimeout(refreshSession, 0);
      return;
    }
    if (!response.ok) throw new Error('Sync unavailable');
    const { entries } = await response.json();
    if (uid !== user?.uid) return;
    const updated = [];
    for (const key of keys) {
      const entry = entries?.[key];
      if (!entry || !Number.isFinite(entry.revision) || entry.revision < (checkpoint[key]?.revision || 0)) continue;
      const { value, revision } = entry;
      if (value !== null && typeof value !== 'string') continue;
      if (read(uid, key) === before[key] && before[key] !== value) {
        if (value === null) storage.safeRemoveRaw(keyFor(uid, key));
        else storage.secureSetRaw(keyFor(uid, key), value);
        if (read(uid, key) !== value) throw new Error('Storage unavailable');
        updated.push(key);
      }
      checkpoint[key] = { hash: fingerprint(value), revision };
    }
    storage.secureSetRaw(checkpointKey, JSON.stringify(checkpoint));
    status = 'Đã đồng bộ ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    notify(false, updated);
  }

  function sync() {
    if (!syncPromise) {
      syncPromise = synchronize().catch(() => {
        status = 'Chưa đồng bộ. Dữ liệu vẫn được lưu trên thiết bị.';
        notify(false);
      }).finally(() => { syncPromise = null; });
    }
    return syncPromise;
  }

  function refreshSession() {
    if (!canConnect()) {
      status = 'Hãy mở bản web qua HTTPS để đăng nhập bằng Google.';
      notify(false);
      return Promise.resolve();
    }
    if (!refreshPromise) {
      refreshPromise = (async () => {
        const response = await fetch('/api/account/session', { cache: 'no-store', credentials: 'same-origin' });
        if (!response.ok) throw new Error('Account unavailable');
        const session = await response.json();
        configured = session.configured === true;
        const changed = setUser(session.user || null);
        status = !configured ? 'Máy chủ chưa cấu hình đăng nhập Google.'
          : user ? 'Đang đồng bộ…' : 'Đăng nhập để đồng bộ tiến độ giữa các thiết bị.';
        notify(changed);
        await sync();
      })().catch(() => {
        status = user ? 'Đang ngoại tuyến. Dữ liệu được lưu trên thiết bị.' : authError;
        notify(false);
      }).finally(() => { refreshPromise = null; });
    }
    return refreshPromise;
  }

  async function saveAvatar(file) {
    const uid = user?.uid;
    if (!uid || !file || file.size > 20 * 1024 * 1024 || file.type === 'image/svg+xml') {
      throw new Error('Hãy chọn một tệp ảnh dưới 20 MB.');
    }
    const url = URL.createObjectURL(file);
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      if (uid !== user?.uid) return;
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 256;
      const context = canvas.getContext('2d');
      if (!context || !image.naturalWidth || !image.naturalHeight) throw new Error();
      const side = Math.min(image.naturalWidth, image.naturalHeight);
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, 256, 256);
      context.drawImage(image, (image.naturalWidth - side) / 2, (image.naturalHeight - side) / 2, side, side, 0, 0, 256, 256);
      const avatar = canvas.toDataURL('image/jpeg', 0.82);
      storage.secureSetRaw(keyFor(uid, avatarKey), avatar);
      if (read(uid, avatarKey) !== avatar) throw new Error('Thiết bị không đủ chỗ lưu ảnh.');
      notify(false, [avatarKey]);
      if (syncPromise) await syncPromise;
      await sync();
    } catch (error) {
      throw new Error(error.message === 'Thiết bị không đủ chỗ lưu ảnh.' ? error.message : 'Không đọc được ảnh này. Hãy thử ảnh JPG hoặc PNG.');
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async function importLocalProgress(sourceUid) {
    const uid = user?.uid;
    if (!uid || !sourceUid) return;
    if (syncPromise) await syncPromise;
    if (uid !== user?.uid) return;
    const source = storage.exportUserProgressSnapshot(sourceUid);
    const current = storage.exportUserProgressSnapshot(uid);
    const data = storage.mergeProgressData(source.data, current.data);
    storage.importUserProgressSnapshot(uid, { ...current, data }, false);
    notify(false, Object.keys(data));
    await sync();
  }

  root.GoogleAccountEngine = {
    restore() {
      const cached = canConnect() && storage.secureGetJsonRaw(accountCache, null);
      setUser(cached && /^google_\d{1,40}$/.test(cached.uid) ? cached : null);
      root.KaiwaEngine?.reloadUserProgress();
    },
    init(onUpdate) {
      notify = onUpdate;
      refreshSession();
      root.setInterval(() => { if (!document.hidden) sync(); }, 30000);
      root.addEventListener('online', refreshSession);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) sync();
        else refreshSession();
      });
    },
    getStatus: () => ({ configured, status, signedIn: Boolean(user) }),
    getAvatar(account) {
      if (!account?.uid) return '';
      const custom = read(account.uid, avatarKey);
      if (custom && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+={0,2}$/.test(custom)) return custom;
      return /^https:\/\/lh\d+\.googleusercontent\.com\//i.test(account.picture || '') ? account.picture : '';
    },
    saveAvatar,
    sync,
    async logout() {
      if (syncPromise) await syncPromise;
      const uid = user?.uid;
      if (!uid) return;
      await sync();
      if (uid !== user?.uid) return;
      const response = await fetch('/api/account/logout', {
        method: 'POST', credentials: 'same-origin', headers: { 'X-Minna-Account': uid }
      });
      if (!response.ok) throw new Error('Không thể đăng xuất lúc này. Hãy thử lại.');
      status = 'Đã đăng xuất.';
      notify(setUser(null));
    },
    importGuestProgress: () => importLocalProgress('guest'),
    importLegacyProgress: () => importLocalProgress(root.AuthEngine.getLegacyImportSource()?.uid)
  };
})(window);
