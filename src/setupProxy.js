import { createProxyMiddleware } from "http-proxy-middleware";
module.exports = () => {
    app.use(
        '/api/compass',
        createProxyMiddleware({
            target: "http://localhost:4000/api/compass",
            changeOrigin: true
        }))
    app.use(
        '/api/test',
        createProxyMiddleware({
            target: "http://localhost:4000/api/test",
            changeOrigin: true
        }))
}