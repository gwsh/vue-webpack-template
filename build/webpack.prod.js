const merge = require("webpack-merge")
const common = require("./webpack_base")
const path = require("path")

module.exports = merge(common,{
  mode: "production",
  output: {
    filename: "js/[name].[hash].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "http://cdn.com/"
  }
});
