<template>
    <div class="page-main" v-if="props.app.return">
        <HeaderCommon ref="headerComponent" :app="props.app"/>
        <div class="main-item">
            <div class="main-item-item">
                <MenuCommon ref="menuCommon" :app="props.app" />
            </div>
            <div class="main-item-item">
                <div class="main-hd footer-resize" :style="props.app.tools.select !== '' ? 'height: calc(100%  - ' + props.app.tools.select_height + 'px);' : ''">
                    <div class="main-box" v-if="!props.app.tools.chat_hide">
                        <ChatCommon ref="chatCommon" :app="props.app" />
                    </div>
                    <div class="main-box" :class="props.app.tools.chat_hide ? 'max' : ''">
                        <DashboardMain ref="dashboardMain" :app="props.app" v-if="props.app.menu.select === 'dashboard'" />
                    </div>
                </div>
                <div class="main-footer footer-resize-box" :style="props.app.tools.select !== '' ? 'height: ' + props.app.tools.select_height + 'px;' : ''">
                    <FooterCommon ref="footerCommon" :app="props.app" v-if="props.app.tools.select !== ''" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {ref, defineComponent, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick} from "vue";
import {ElLoading} from "element-plus";
import HeaderCommon from "./common/header.vue";
import MenuCommon from "./common/menu.vue";
import ChatCommon from "./common/chat.vue";
import FooterCommon from "./common/footer.vue";
import DashboardMain from "./main/dashboard.vue";
export default defineComponent({
    name: "Start",
    emits: [],
    props: ["app"],
    components: {
        HeaderCommon,
        MenuCommon,
        ChatCommon,
        FooterCommon,
        DashboardMain
    },
    setup(props, context) {

        const footerCommon = ref(null);

        (window as any).runtime.EventsOn("event_message", (message: any) => {
            if(message.type === "connected_device"){
                if(message.status){
                    props.app.device.ip = localStorage.getItem("chain:device:ip") ? localStorage.getItem("chain:device:ip") : "";
                    props.app.device.password = localStorage.getItem("chain:device:password") ? localStorage.getItem("chain:device:password") : "";
                    onConnectDevice();
                }else{
                    onCloseDevice();
                }
            }
            if(message.type === "close_device"){
                onCloseDevice();
            }
        });

        function onConnectDevice(){
            if(!props.app.device.socket){
                if(props.app.device.ip !== ""){
                    props.app.device.socket = new WebSocket("ws://" + props.app.device.ip + ":10081/message/service", undefined);
                    console.log(props.app.device.socket);
                    props.app.device.socket.onopen = function () {
                        props.app.device.status = "connected";
                        props.app.device.socket_time = setInterval(()=>{
                            props.app.device.socket.send(JSON.stringify({command:"ping"}));
                        }, 5000);
                    };
                    props.app.device.socket.onmessage = function (message: any) {
                        console.log(message);
                    }
                    props.app.device.socket.onerror = function () {
                        onCloseDevice();
                    }
                    props.app.device.socket.onclose = function () {
                        onCloseDevice();
                    }
                }
            }
        }

        function onCloseDevice(){
            props.app.device.status = "not_connected";
            if(props.app.tools.select !== ""){
                props.app.tools.select = "";
            }
            if(props.app.device.socket){
                props.app.device.socket.close();
                props.app.device.socket = false;
            }
            if(props.app.device.socket_time){
                clearInterval(props.app.device.socket_time);
                props.app.device.socket_time = false;
            }
            if((footerCommon as any).value){
                (footerCommon as any).value.onClose();
            }
        }

        function onInit(){
            props.app.loading.close();
            props.app.return = true;
            props.app.device.ip = localStorage.getItem("chain:device:ip") ? localStorage.getItem("chain:device:ip") : "";
            props.app.device.password = localStorage.getItem("chain:device:password") ? localStorage.getItem("chain:device:password") : "";
            props.app.language = localStorage.getItem("chain:settings:language") ? localStorage.getItem("chain:settings:language") : "zh";
        }

        onBeforeMount(() => {
            props.app.loading = ElLoading.service({
                lock: true,
                background: "rgba(0, 0, 0, .01)",
                fullscreen: true
            });
        });

        onMounted(() => {
            nextTick(()=>{
                onInit();
            });
            (window as any).onresize = ()=>{
                if((footerCommon as any).value){
                    (footerCommon as any).value.onResize();
                }
            };
        });

        onBeforeUnmount(() => {});

        onUnmounted(() => {});

        return {
            props,
            footerCommon
        }
    }
});
</script>

<style scoped>
.main-item{
    width: 100%;
    height: calc(100% - 40px);
    border-top: 1px solid rgba(30, 31, 34, 1);
}
.main-item .main-item-item{
    width: 40px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    background-color: rgba(43, 45, 48, 1);
}
.main-item .main-item-item:first-child{
    border-right: solid 1px rgba(30, 31, 34, 1);
}
.main-item .main-item-item:last-child{
    width: calc(100% - 40px);
    background-color: rgba(43, 45, 48, .5);
}
.main-item .main-item-item .main-hd{
    width: 100%;
    height: 100%;
}
.main-item .main-item-item .main-hd .main-box{
    width: calc(100% - 360px);
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.main-item .main-item-item .main-hd .main-box:first-child{
    width: 360px;
    background-color: rgba(43, 45, 48, .5);
}
.main-item .main-item-item .main-hd .main-box:last-child{
    padding: 20px;
    overflow-y: auto;
}
.main-item .main-item-item .main-hd .main-box.max{
    width: 100%;
}
.main-item .main-item-item .main-footer{
    width: 100%;
    min-height: 260px;
    background-color: rgba(30, 31, 34, 1);
}
</style>
