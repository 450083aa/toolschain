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

        const appData: any = ref({
            loading: ElLoading.service({
                lock: true,
                background: "rgba(0, 0, 0, .01)",
            }),
            return: false,
            menu: {
                select: "dashboard"
            },
            tools: {
                select: "",
                select_height: 260,
                chat_hide: false,
                terminal: {
                    container: null,
                    conn: false,
                    socket: false,
                    fit: false
                }
            },
            dialog: {
                status: false,
                type: "",
                config: {
                    title: "",
                    width: "550px",
                    close: true
                },
                form: false
            },
            device: {
                ip: "",
                password: "",
                status: "not_connected",
                socket: false
            }
        });

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
</style>
