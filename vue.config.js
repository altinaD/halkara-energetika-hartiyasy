const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
    configureWebpack: (config) => {
        config.plugins = config.plugins.concat(
            new WebpackAssetsManifest({
                output: "asset-manifest.json",
            })
        );
    },
};
