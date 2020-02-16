module.exports = {
  title: 'Hello tailwind-press!',
  description: 'Create a curriculum vitae with vuepress + tailwindcss',
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
}