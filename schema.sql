-- ==============================================================================
-- SCHEMA CƠ SỞ DỮ LIỆU CLOUDFLARE D1 (SERVERLESS SQLITE)
-- ỨNG DỤNG HỌC TIẾNG NHẬT MINNA NO NIHONGO (BÀI 1 - 50: N5 & N4)
-- File: schema.sql
-- ==============================================================================

-- 1. BẢNG NGƯỜI DÙNG (USERS)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  display_name TEXT,
  created_at INTEGER NOT NULL,
  last_login_at INTEGER NOT NULL
);

-- 2. BẢNG TIẾN TRÌNH HỌC TẬP ĐA THIẾT BỊ (USER_PROGRESS)
-- Lưu trữ bài đang học gần nhất, danh sách bài đã xong, điểm số bài tập, đọc hiểu & cấu hình thiết bị
CREATE TABLE IF NOT EXISTS user_progress (
  user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  last_active_id TEXT NOT NULL DEFAULT 'bai-1',
  completed_modules TEXT NOT NULL DEFAULT '[]',
  practice_answers TEXT NOT NULL DEFAULT '{}',
  dokkai_answers TEXT NOT NULL DEFAULT '{}',
  device_settings TEXT NOT NULL DEFAULT '{}',
  updated_at INTEGER NOT NULL
);

-- 3. CHỈ MỤC TỐI ƯU HIỆU NĂNG TÌM KIẾM
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_progress_updated_at ON user_progress(updated_at);
