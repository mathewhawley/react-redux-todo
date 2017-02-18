module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-properties')(),
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('postcss-custom-selectors')(),
    require('postcss-calc')(),
    require('postcss-nesting')(),
    require('postcss-color-function')(),
    require('postcss-selector-matches')(),
    require('postcss-selector-not')(),
    require('pleeease-filters')(),
    require('autoprefixer')(),
  ],
}
