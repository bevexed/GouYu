const { override, fixBabelImports, addLessLoader,addPostcssPlugins,ad } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addPostcssPlugins([
    require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        mediaQuery: true,
        selectorBlackList: ['am-'],
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
      },
      require('autoprefixer')()
    ),])
);
