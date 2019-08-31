module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        dependencies: {
            "axios": "^0.19.0",
        },
        devDependencies: {
            "mockjs": "^1.0.1-beta3"
        }
    });

    // vuex
    if (options.vuex) {
        api.extendPackage({
            dependencies: {
                "vuex": '^3.1.1'
            },
            devDependencies: {
                "vuex-module-decorators": "^0.10.1",
                "vuex-class": "^0.3.2"
            }
        });
        api.render('./template/vuex');
    }

    // i18n
    if(options.i18n) {
        api.extendPackage({
            dependencies: {
                "vue-i18n": "^8.14.0",
            },
            devDependencies: {
                "@kazupon/vue-i18n-loader": "^0.4.1",
                "@types/vue-i18n": "^7.0.0"
            }
        });
        api.render('./template/i18n');
    }

    // element-ui
    if (options.element) {
        api.extendPackage({
            devDependencies: {
                "element-ui": "2.12.0"
            }
        });
        api.render('./template/element-ui');
    }

    // 公共基础目录和文件
    api.render('./template/common');
};
