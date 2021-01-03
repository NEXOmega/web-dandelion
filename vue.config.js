const path = require('path')
const aliases = {
  assets: 'src/assets',
  audio: 'src/assets/audio',
  texture: "src/assets/textures",
  font: 'src/assets/fonts',
  image: "src/assets/images",
  cmp: "src/components",
  views: 'src/views',
  downloads: 'public/downloads'
}

const registerAliases = (a, config) => Object.entries(a).forEach(([k, v]) => config.resolve.alias.set('@' + k, path.join(__dirname, v)))

module.exports = {
  chainWebpack: config => {
    registerAliases(aliases, config)
	},
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
