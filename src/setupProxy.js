const { createProxyMiddleware } = require('http-proxy-middleware');
const { BASE_URL } = require('./constants');

module.exports = function(app) {
  app.use(
    '/atr-gateway/',
    createProxyMiddleware({
      target: BASE_URL,
      changeOrigin: true,
    })
  );
};