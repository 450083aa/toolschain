<template>
    <div class="terminal-tools" :class="props.page.tools.select">
        <div class="terminal-item" :style="'z-index:' + (index + 1) " :id="'terminal_' + (index + 1)" v-for="(item, index) in props.page.tools.terminal.item" :key="index"></div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted} from "vue";
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";
import Base64 from "crypto-js/enc-base64.js";
import Utf8 from "crypto-js/enc-utf8.js";
export default defineComponent({
    name: "TerminalTools",
    emits: [],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 新建命令行终端
        function onTerminal(length: any){
            props.page.tools.terminal.item.push({name: "Local（" + length + "）", terminal: false, attach: false, fit: false, container: null, socket: false});
            props.page.tools.terminal.item[length - 1].socket = new WebSocket("ws://127.0.0.1:10081/terminal");
            props.page.tools.terminal.item[length - 1].socket.binaryType = "arraybuffer";
            props.page.tools.terminal.item[length - 1].socket.onmessage = (event: any) => {
                // 收到反馈消息
                if (event.data instanceof ArrayBuffer) {

                }
            }
            props.page.tools.terminal.item[length - 1].socket.onopen = () => {
                props.page.tools.terminal.item[length - 1].terminal = new Terminal({
                    fontSize: 13,
                    lineHeight: 1.2,
                    cursorBlink: true,
                    theme: {
                        foreground: "#ffffff",
                        background: "rgba(30, 31, 34, 1)"
                    },
                });
                props.page.tools.terminal.item[length - 1].attach = new AttachAddon(props.page.tools.terminal.item[length - 1].socket);
                props.page.tools.terminal.item[length - 1].terminal.loadAddon(props.page.tools.terminal.item[length - 1].attach);
                props.page.tools.terminal.item[length - 1].fit = new FitAddon();
                props.page.tools.terminal.item[length - 1].terminal.loadAddon(props.page.tools.terminal.item[length - 1].fit);
                props.page.tools.terminal.item[length - 1].container = document.getElementById("terminal_" + length);
                props.page.tools.terminal.item[length - 1].terminal.open(props.page.tools.terminal.item[length - 1].container);
                props.page.tools.terminal.item[length - 1].terminal.onData((data: any) => {
                    props.page.tools.terminal.item[length - 1].socket.send(new TextEncoder().encode("\x00" + data));
                });
                props.page.tools.terminal.item[length - 1].terminal.onKey((key: any, dom: any) => {
                    // 快捷键事件
                    if(key.domEvent.key === "v" && key.domEvent.ctrlKey){
                        // 从剪贴获取数据传入命令行终端
                    }
                });
                props.page.tools.terminal.item[length - 1].fit.fit();
                props.page.tools.terminal.item[length - 1].terminal.focus();
            }
            props.page.tools.terminal.item[length - 1].socket.onclose = () => {

            }
        }

        // 页面大小变化事件
        function onResize(){
            props.page.tools.terminal.item.forEach((item: any)=>{
                item.fit.fit();
            });
        }

        // 页面渲染完成后需要执行的业务
        onMounted(() => {
            if(props.page.tools.terminal.item.length === 0){
                // 默认初始化一个命令行终端
                onTerminal(props.page.tools.terminal.item.length + 1);
            }
        });

        // 离开页面之前需要执行的业务
        onBeforeUnmount(() => {

        });

        return {
            props,
            onResize
        }
    }
});
</script>

<style scoped>
.terminal-tools{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.terminal-tools.terminal{
    z-index: 5;
}
.terminal-tools .terminal-item{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(30, 31, 34, 1);
}
</style>
