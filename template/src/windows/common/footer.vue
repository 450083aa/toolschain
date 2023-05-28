<template>
    <div class="footer-header">
        <div class="line" @mousedown="handleFooterResize"></div>
        <div class="footer-header-item" :class="props.app.tools.select === 'debug' ? 'select' : ''" @click="onTag('debug')">运行日志</div>
        <div class="footer-header-item" :class="props.app.tools.select === 'terminal' ? 'select' : ''" @click="onTag('terminal')">命令行终端</div>
    </div>
    <div class="footer-bottom" id="footerBottom">
        <div class="box" :class="props.app.tools.select === 'debug' ? 'show' : ''"></div>
        <div class="box" :class="props.app.tools.select === 'terminal' ? 'show' : ''">
            <div id="terminalContainer" ref="terminalContainer"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, nextTick, onBeforeUnmount, onMounted, ref} from "vue";
import {Terminal} from "xterm";
import "xterm/css/xterm.css";
export default defineComponent({
    name: "FooterCommon",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

        function onTag(select: any){
            if(props.app.tools.select !== select){
                props.app.tools.select = select;
            }
        }

        const terminalContainer = ref(null);
        function initTerminal(){
            if(props.app.device.ip !== ""){
                let terminal_container_size = getTerminalContainerSize();
                props.app.tools.terminal.conn = new Terminal({
                    fontSize: 13,
                    lineHeight: 1.2,
                    cursorBlink: true,
                    cols: terminal_container_size.cols,
                    rows: terminal_container_size.rows,
                    theme: {
                        foreground: "#ffffff",
                        background: "rgba(30, 31, 34, 1)"
                    },
                });
                props.app.tools.terminal.socket = new WebSocket("ws://" + props.app.device.ip + ":10081/tools/terminal", ["webssh"]);
                props.app.tools.terminal.socket.binaryType = "arraybuffer";
                props.app.tools.terminal.socket.onopen = function () {
                    props.app.tools.terminal.socket.send(JSON.stringify({type: "addr", data: utf8_to_base64(props.app.device.ip + ":22")}));
                    props.app.tools.terminal.socket.send(JSON.stringify({type: "login", data: utf8_to_base64("root")}));
                    props.app.tools.terminal.socket.send(JSON.stringify({type: "password", data: utf8_to_base64(props.app.device.password)}));
                    props.app.tools.terminal.socket.send(JSON.stringify({ type: "resize", cols: terminal_container_size.cols, rows: terminal_container_size.rows }));
                    props.app.tools.terminal.conn.resize(terminal_container_size.cols, terminal_container_size.rows);
                };
                props.app.tools.terminal.socket.onmessage = function (message: any) {
                    if (typeof message.data === "object") {
                        console.log("object", message.data);
                    }else{
                        try {
                            let message_json = JSON.parse(message.data);
                            switch (message_json.type) {
                                case "stdout":
                                case "stderr":
                                    if(props.app.tools.terminal.conn){
                                        props.app.tools.terminal.conn.write(base64_to_utf8(message_json.data));
                                    }
                                    break;
                                default:
                                    if(props.app.tools.terminal.conn) {
                                        props.app.tools.terminal.conn.write("Unknown data format");
                                    }
                            }
                        } catch (err: any) {
                            if(props.app.tools.terminal.conn) {
                                props.app.tools.terminal.conn.write("Unknown data format", err);
                            }
                        }
                    }
                };
                props.app.tools.terminal.socket.onerror = function (err: any) {
                    if(props.app.tools.terminal.conn){
                        props.app.tools.terminal.conn.write("connect error", err);
                    }
                }
                props.app.tools.terminal.socket.onclose = function (err: any) {
                    if(props.app.tools.terminal.conn){
                        props.app.tools.terminal.conn.write("disconnect", err);
                    }
                }
                props.app.tools.terminal.conn.onData(function (data: any) {
                    if(props.app.tools.terminal.socket){
                        props.app.tools.terminal.socket.send(JSON.stringify({ type: "stdin", data: utf8_to_base64(data)}));
                    }
                });
                props.app.tools.terminal.conn.open(document.getElementById("terminalContainer"));
                props.app.tools.terminal.conn.focus();
            }
        }

        function getTerminalContainerSize() {
            props.app.tools.terminal.container = document.getElementById("footerBottom");
            return {cols: Math.floor(props.app.tools.terminal.container.offsetWidth / 8), rows: Math.floor(props.app.tools.terminal.container.offsetHeight/ 18)};
        }

        function utf8_to_base64(rawString: any) {
            return btoa(unescape(encodeURIComponent(rawString)));
        }

        function base64_to_utf8(encodeString: any) {
            return decodeURIComponent(escape(atob(encodeString)));
        }

        function onResize(){
            let terminal_container_size = getTerminalContainerSize();
            props.app.tools.terminal.conn.resize(terminal_container_size.cols, terminal_container_size.rows);
            props.app.tools.terminal.socket.send(JSON.stringify({ type: "resize", cols: terminal_container_size.cols, rows: terminal_container_size.rows}));
        }

        function onClose(){
            if(props.app.tools.terminal.conn){
                props.app.tools.terminal.conn.dispose();
                props.app.tools.terminal.conn = false;
                props.app.tools.terminal.fit = false;
            }
            if(props.app.tools.terminal.socket){
                props.app.tools.terminal.socket.close();
                props.app.tools.terminal.socket = false;
            }
        }

        function handleFooterResize(event: any){
            let boxDiv: any = document.getElementsByClassName("footer-resize");
            let boxDivHeight: any = boxDiv[0].offsetHeight;
            let targetDiv: any = document.getElementsByClassName("footer-resize-box");
            let targetDivHeight: any = targetDiv[0].offsetHeight;
            let startY: any = event.clientY;
            document.onmousemove = function (event: any) {
                let distY = Math.abs(event.clientY - startY);
                if (event.clientY > startY) {
                    let check_height = targetDivHeight - distY;
                    if(check_height > 260){
                        targetDiv[0].style.height = check_height + "px";
                        boxDiv[0].style.height = boxDivHeight + distY + "px";
                        props.app.tools.select_height = check_height;
                    }
                }
                if (event.clientY < startY) {
                    let check_height = targetDivHeight + distY;
                    if (check_height < 500) {
                        targetDiv[0].style.height = check_height + "px";
                        boxDiv[0].style.height = boxDivHeight - distY + "px";
                        props.app.tools.select_height = check_height;
                    }
                }
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                if(props.app.tools.terminal.conn){
                    onResize();
                }
            }
        }

        onMounted(() => {
            nextTick(()=>{
                initTerminal();
            });
        });

        onBeforeUnmount(() => {
            onClose();
        });

        return {
            props,
            onTag,
            onResize,
            onClose,
            handleFooterResize,
            terminalContainer
        }
    }
});
</script>

<style scoped>
.footer-header{
    width: 100%;
    height: 40px;
    background-color: rgba(43, 45, 48, 1);
    border-top: solid 1px rgba(30, 31, 34, 1);
    border-bottom: solid 1px rgba(30, 31, 34, 1);
    position: relative;
}
.footer-header .line{
    width: 100%;
    height: 3px;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(43, 45, 48, 0);
    position: absolute;
}
.footer-header .line:hover{
    cursor: n-resize;
}
.footer-header .footer-header-item{
    width: auto;
    height: 38px;
    line-height: 38px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    padding: 0 15px;
    color: #999999;
}
.footer-header .footer-header-item:hover{
    cursor: pointer;
    color: #ffffff;
}
.footer-header .footer-header-item.select{
    color: #ffffff;
    border-bottom: solid 2px rgba(94, 78, 255, .5);
}
.footer-bottom{
    width: 100%;
    height: calc(100% - 40px);
    position: relative;
}
.footer-bottom .box{
    width: 100%;
    height: 100%;
    background-color: rgba(30, 31, 34, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
.footer-bottom .box.show{
    z-index: 200;
}
</style>