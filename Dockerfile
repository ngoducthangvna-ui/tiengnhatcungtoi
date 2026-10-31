# ==============================================================================
# PRODUCTION DOCKERFILE - MULTI-STAGE SECURE BUILD
# Base: Node.js 22 Alpine (Minimal Attack Surface & Non-root User)
# ==============================================================================

FROM node:22-alpine AS runtime

# Thiết lập nhãn metadata OCI chuẩn
LABEL maintainer="security@tiengnhat.edu.vn"
LABEL description="Minna no Nihongo Japanese Learning Platform - Production Hardened"
LABEL version="2026.10"

WORKDIR /app

# Thiết lập biến môi trường chuẩn production
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV CANONICAL_DOMAIN=tiengnhat.edu.vn

# Sao chép toàn bộ mã nguồn ứng dụng & cấu hình bảo mật
COPY . /app

# Tạo người dùng không có đặc quyền root (Non-root user execution)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

USER appuser

# Healthcheck định kỳ kiểm tra trạng thái máy chủ bảo mật
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/api/speech', (r) => { if (r.statusCode !== 200) process.exit(1); })"

EXPOSE 3000

# Khởi chạy máy chủ bảo mật chuẩn doanh nghiệp
CMD ["node", "server.js"]
