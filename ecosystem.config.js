/**
 * ==============================================================================
 * PM2 PRODUCTION PROCESS ECOSYSTEM CONFIGURATION
 * File: ecosystem.config.js
 * ==============================================================================
 */

module.exports = {
  apps: [
    {
      name: 'tiengnhat-security-gateway',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0',
        CANONICAL_DOMAIN: 'tiengnhat-minna.pages.dev'
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      merge_logs: true
    }
  ]
};
