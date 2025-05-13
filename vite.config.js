const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vite.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 12000,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: [
      'work-1-ulgvbxnwsxwstvjs.prod-runtime.all-hands.dev',
      'work-2-ulgvbxnwsxwstvjs.prod-runtime.all-hands.dev',
      'localhost'
    ],
  },
})
