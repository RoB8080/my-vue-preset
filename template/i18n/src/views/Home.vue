<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$t('msg')"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<i18n>
{
    "en": {
        "msg": "Welcome to Your Vue.js + TypeScript App"
    },
    "zh-cn": {
        "msg": "欢迎来到你的 Vue.js + TypeScript App"
    }
}
</i18n>
