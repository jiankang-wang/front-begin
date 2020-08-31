module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: '47.94.226.84:12005',
        changeOrigin: true
      }
    }
  }
}
