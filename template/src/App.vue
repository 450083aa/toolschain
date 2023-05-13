<template>
    <router-view ref="routerView" v-slot="{Component}">
        <component :is="Component" :app="appData" />
    </router-view>
</template>

<script lang="ts">
import {ref, defineComponent} from "vue";
import { ElLoading } from "element-plus";
export default defineComponent({
    name: "App",
    emits: [],
    props: [],
    components: {},
    setup(props, context) {

        // 定义数据结构
        const appData: any = ref({
            loading: ElLoading.service({
                lock: true,
                background: "rgba(0, 0, 0, .01)",
            }),
            return: false,
            account: false
        });

        // 实例化
        return {
            props,
            appData
        }
    }
});
</script>

<style>
@import "./assets/css/base.scss";
@import "./assets/css/element.scss";
@import "./assets/css/blocks_editor.scss";
@import "./assets/css/code_editor.scss";
@import "./assets/css/markdown_editor.scss";
</style>
