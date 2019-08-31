<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            {{ $t('passage_1') }}<br>
            {{ $t('passage_2') }}
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli {{ $t('documentation') }}</a>.
        </p>
        <h3>{{ $t('installed_plugins') }}</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
        </ul>
        <h3>{{ $t('essential_links') }}</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ $t('core_docs') }}</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ $t('forum') }}</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t('community_chat') }}</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t('twitter') }}</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t('news') }}</a></li>
        </ul>
        <h3>{{ $t('ecosystem') }}</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

<i18n>
{
    "en": {
        "core_docs": "Core docs",
        "forum": "Forum",
        "community_chat": "Community Chat",
        "twitter": "Twitter",
        "news": "News",
        "documentation": "documentation",
        "passage_1": "For a guide and recipes on how to configure / customize this project,",
        "passage_2": "check out the",
        "installed_plugins": "Installed CLI Plugins",
        "essential_links": "Essential Links",
        "ecosystem": "Ecosystem"
    },
    "zh-cn": {
        "core_docs": "核心文档",
        "forum": "论坛",
        "community_chat": "社群聊天",
        "twitter": "推特",
        "news": "新闻",
        "documentation": "文档",
        "passage_1": "如需关于如何配置/自定义本项目的教程和例子，",
        "passage_2": "请访问",
        "installed_plugins": "已安装的 CLI 插件",
        "essential_links": "重要的链接",
        "ecosystem": "生态"
    }
}
</i18n>
