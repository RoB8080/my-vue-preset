import {
    Module,
    VuexModule,
    Mutation,
    Action,
    MutationAction,
    getModule } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'example' })
export default class ExampleModule extends VuexModule {
    level = 1;
    get levelLabel(){
        return `Lv.${this.level}`;
    }
    @Mutation
    upgrade(times: number) {
        this.level += times;
    }

    @Action
    levelUp(times: number) {
        this.context.commit('upgrade', times);
    }
}
