<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">{{ $t('home') }}</router-link> |
            <router-link to="/about">{{ $t('about') }}</router-link> |
            <a href="javascript:void(0);" @click="switchLanguage">{{ $t('language') }}</a>
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
        private switchLanguage() {
            this.$root.$i18n.locale = this.$root.$i18n.locale === 'zh-cn' ? 'en' : 'zh-cn';
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

<i18n>
{
    "en": {
        "home": "Home",
        "about": "About",
        "language": "Switch to Chinese"
    },
    "zh-cn": {
        "home": "主页",
        "about": "关于",
        "language": "切换到英语"
    }
}
</i18n>
