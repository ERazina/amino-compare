const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@custom-types": path.resolve(__dirname, "src/types"),
    },
  },
};