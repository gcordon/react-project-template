const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
    app.use(
        '/mock/*',
        createProxyMiddleware({
            target: "http://localhost:4000",
            changeOrigin: true
        }))
    app.use(
        '/request',
        createProxyMiddleware({
            target: "http://localhost:4001",
            changeOrigin: true
        }))
}