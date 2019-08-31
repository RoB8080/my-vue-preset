---
extend: '@vue/cli-service/generator/template/vue.config.js'
replace: !!js/regexp /module.exports = {/
---

<%# REPLACE %>
module.exports = {
    chainWebpack: config => {
      config.module
        .rule("i18n")
        .resourceQuery(/blockType=i18n/)
        .type('javascript/auto')
        .use("i18n")
          .loader("@kazupon/vue-i18n-loader")
          .end();
    },
<%# END_REPLACE %>
