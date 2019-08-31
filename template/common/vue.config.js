module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/theme/variables.scss";`
            }
        }
    },
    <%_ if (options.i18n) { _%>
    chainWebpack: config => {
          config.module
            .rule("i18n")
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use("i18n")
              .loader("@kazupon/vue-i18n-loader")
              .end();
        },
    <%_ } _%>
    "outputDir": "dist",
    "assetsDir": "static",
    "filenameHashing": true,
    "runtimeCompiler": false,
    "transpileDependencies": [],
    "productionSourceMap": false,
};
