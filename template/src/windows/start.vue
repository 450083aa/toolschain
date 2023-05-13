<template>
    <div class="page-main" v-if="props.app.return">
        <HeaderCommon ref="headerComponent" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
        <div class="common-container">
            <NavCommon ref="navComponent" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
            <div class="container-item">
                <div class="container-box footer-resize" :style="'height: calc(100% - ' + (pageData.resize.footer.hide ? 0 : pageData.resize.footer.height) + 'px)'">
                    <ProjectContainer ref="projectContainer" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
                    <SimulationContainer ref="simulationContainer" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
                    <ConsoleContainer ref="consoleContainer" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
                </div>
                <div class="container-box footer-resize-box" :style="'height: ' + pageData.resize.footer.height + 'px'">
                    <div class="tools-header">
                        <div class="line" @mousedown="handleFooterResize"></div>
                        <div class="tools-header-box">
                            <div class="tools-header-item">{{pageData.tools.select === "terminal" ? "命令行终端" : (pageData.tools.select === "debug" ? "运行日志" : "Git管理工具")}}</div>
                            <div class="tools-header-item item" :class="pageData.tools.terminal.index === index ? 'select' : ''" v-for="(item, index) in pageData.tools.terminal.item" :key="index" v-if="pageData.tools.select === 'terminal'">{{item.name}}<span><el-icon class="studio" @click="onTerminalClose(index)"><Close /></el-icon></span></div>
                        </div>
                    </div>
                    <div class="tools-box">
                        <TerminalTools ref="terminalTools" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
                        <DebugTools ref="debugTools" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
                        <GitTools ref="gitTools" :app="props.app" :page="pageData" @onEventCallback="EventCallback" />
                    </div>
                </div>
            </div>
            <div class="container-item"></div>
        </div>
        <div class="common-footer">
            <div class="footer-item"></div>
            <div class="footer-item">
                <div class="item">
                    <span class="icon" :class="pageData.tools.footer.socket_status ? 'success' : ''"><el-icon><Comment /></el-icon></span>
                    <span>Message Service</span>
                </div>
                <div class="item">
                    <span class="icon"><el-icon><Promotion /></el-icon></span>
                    <span>No Remote Device</span>
                </div>
                <div class="item">
                    <span class="icon"><el-icon><Link /></el-icon></span>
                    <span>No STLink</span>
                </div>
                <div class="item">
                    <span class="icon" :class="props.app.return.environment_version !== '-' ? 'success' : ''"><el-icon><InfoFilled /></el-icon></span>
                    <span>Environment {{props.app.return.environment_version}}</span>
                </div>
                <div class="item">
                    <el-icon><Unlock /></el-icon>
                </div>
            </div>
        </div>
    </div>
    <NewProjectDialog ref="newProjectDialog" :app="props.app" :page="pageData" @onEventCallback="EventCallback" v-if="pageData.dialog.type === 'new_project' && pageData.dialog.status" />
    <EnvironmentDialog ref="environmentDialog" :app="props.app" :page="pageData" @onEventCallback="EventCallback" v-if="pageData.dialog.type === 'environment' && pageData.dialog.status && pageData.dialog.form" />
    <ChatGPTDialog ref="chatGPTDialog" :app="props.app" :page="pageData" @onEventCallback="EventCallback" v-if="pageData.dialog.type === 'ChatGPT' && pageData.dialog.status && pageData.dialog.form" />
    <SettingsDialog ref="settingsDialog" :app="props.app" :page="pageData" @onEventCallback="EventCallback" v-if="pageData.dialog.type === 'settings' && pageData.dialog.status && pageData.dialog.form" />
    <LoginDialog ref="loginDialog" :app="props.app" :page="pageData" @onEventCallback="EventCallback" v-if="pageData.dialog.type === 'login' && pageData.dialog.status && pageData.dialog.form" />
    <AboutDialog ref="aboutDialog" :app="props.app" :page="pageData" @onEventCallback="EventCallback" v-if="pageData.dialog.type === 'about' && pageData.dialog.status" />
</template>

<script lang="ts">
import { ref, defineComponent, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import { ElLoading, ElMessage, ElNotification } from "element-plus";
import * as monaco from "monaco-editor";
import ReWebsocket from "reconnecting-websocket";
import {api, Service} from "../package/request/request";
import Network from "../package/network/network";
import HeaderCommon from "./common/header.vue";
import NavCommon from "./common/nav.vue";
import ProjectContainer from "./container/project.vue";
import SimulationContainer from "./container/simulation.vue";
import ConsoleContainer from "./container/console.vue";
import TerminalTools from "./tools/terminal.vue";
import DebugTools from "./tools/debug.vue";
import GitTools from "./tools/git.vue";
import EnvironmentDialog from "./dialog/environment.vue";
import NewProjectDialog from "./dialog/new_project.vue";
import AboutDialog from "./dialog/about.vue";
import ChatGPTDialog from "./dialog/chat_gpt.vue";
import SettingsDialog from "./dialog/settings.vue";
import LoginDialog from "./dialog/login.vue";
import EditorPackage from "../package/editor/editor";
export default defineComponent({
    name: "Start",
    emits: [],
    props: ["app"],
    components: {
        HeaderCommon,
        NavCommon,
        ProjectContainer,
        SimulationContainer,
        ConsoleContainer,
        TerminalTools,
        DebugTools,
        GitTools,
        NewProjectDialog,
        EnvironmentDialog,
        AboutDialog,
        ChatGPTDialog,
        SettingsDialog,
        LoginDialog
    },
    setup(props, context) {

        // 定义数据结构
        const pageData: any = ref({
            header: {
                project: {
                    open: {
                        name: "",
                        path: ""
                    },
                    config: false,
                    tree: [],
                    recent: [],
                    tabs: {
                        value: "",
                        item: []
                    }
                },
                run: {
                    status: "run",
                    progress: 0
                }
            },
            resize: {
                left: {
                    width: 260
                },
                footer: {
                    hide: true,
                    height: 260
                }
            },
            nav: {
                select: "project",
            },
            tools: {
                select: "",
                terminal: {
                    index: 0,
                    item: []
                },
                footer: {
                    socket: false,
                    socket_status: false
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
            }
        });

        // 连接消息服务
        function onConnectionMessageService(){
            if(!pageData.value.tools.footer.socket){
                pageData.value.tools.footer.socket = new ReWebsocket("ws://127.0.0.1:10081", undefined, {maxReconnectionDelay: 500, minReconnectionDelay: 100});
                pageData.value.tools.footer.socket.onopen = function () {
                    // 消息服务连接成功
                    pageData.value.tools.footer.socket_status = true;
                }
                pageData.value.tools.footer.socket.onerror = function () {
                    // 消息服务连接出错
                    pageData.value.tools.footer.socket_status = false;
                }
                pageData.value.tools.footer.socket.onclose = function () {
                    // 消息服务连接断开
                    pageData.value.tools.footer.socket_status = false;
                }
                pageData.value.tools.footer.socket.onmessage = function (message: any) {
                    // 收到消息服务消息数据
                    console.log(message.data);
                }
            }
        }

        // 关闭某个命令行终端
        function onTerminalClose(index: any){
            if(pageData.value.tools.terminal.item.length === 1){
                // 只有一个时直接隐藏
                pageData.value.resize.footer.hide = true;
                pageData.value.tools.select = "";
            }
        }

        // 子组件统一回调事件
        function EventCallback(data: any){
            if(data.type && data.type === "terminal_resize"){
                // 处理命令行终端布局
                if((terminalTools as any).value){
                    (terminalTools as any).value.onResize();
                }
            }
            if(data.type && data.type === "environment_success"){
                onInit();
            }
            if(data.type && data.type === "open_project"){
                openProject(data.project);
            }
        }

        // 请求后端接口
        function onInit(){
            (window as any).go.StartWindows.Api.Ping().then((data: any)=>{
                // 将接口数据赋值到数据结构中
                props.app.return = data;
                // 连接消息服务
                onConnectionMessageService();
                // 打开项目
                let current_project = localStorage.getItem("current_project");
                if(current_project){
                    let current_project_json = JSON.parse(current_project);
                    (window as any).go.StartWindows.Api.OpenProject(current_project_json.path, "config.geekros").then((data: any)=>{
                        let json = JSON.parse(data);
                        if(json.config && json.tree){
                            openProject({config: json.config, tree: json.tree, open: {name: json.config.name, path: json.path}});
                        }
                    });
                }
                // 基础环境检测
                Network.status(()=>{
                    // 请求云服务
                    Service("vscode/index", "GET", {}, {}).then((res: any) => {
                        if(res.status === 200){
                            if(res.data.code === 0){
                                // 关闭加载遮罩层
                                props.app.loading.close();
                                // 将接口数据赋值到数据结构中
                                props.app.account = res.data.data.account;
                                // 校验软件版本
                                if(props.app.return.version !== res.data.data.version.version_number){
                                    ElNotification({
                                        title: "发现新版本",
                                        message: "点击这里前往官网下载最新版本。",
                                        type: "info",
                                        position: "bottom-right",
                                        duration: 0,
                                        customClass: "studio",
                                        onClick: ()=>{
                                            ElNotification.closeAll();
                                            (window as any).runtime.BrowserOpenURL("https://www.geekros.com");
                                        }
                                    });
                                }
                                // 校验基础开发环境
                                if(props.app.return.environment_version === "-") {
                                    // 触发弹窗事件
                                    pageData.value.dialog.form = {
                                        progress: 1,
                                        progress_text: "正在为你部署所需的基础开发环境",
                                        download_status: false
                                    };
                                    pageData.value.dialog.config.title = "初始化开发环境";
                                    pageData.value.dialog.config.width = "450px";
                                    pageData.value.dialog.config.close = false;
                                    pageData.value.dialog.type = "environment";
                                    pageData.value.dialog.status = true;
                                }else{
                                    // 校验是否需要升级基础开发环境
                                    if(props.app.return.environment_version !== res.data.data.environment.version_number){
                                        // 需要升级，触发弹窗事件
                                        pageData.value.dialog.form = {
                                            progress: 1,
                                            progress_text: "正在为你升级所需的基础开发环境",
                                            download_status: false
                                        };
                                        pageData.value.dialog.config.title = "升级开发环境";
                                        pageData.value.dialog.config.width = "450px";
                                        pageData.value.dialog.config.close = false;
                                        pageData.value.dialog.type = "environment";
                                        pageData.value.dialog.status = true;
                                    }
                                }
                            }else{
                                ElMessage({
                                    message: "服务请求失败，请重新尝试",
                                    type: "warning",
                                    customClass: "studio"
                                });
                            }
                        }else{
                            ElMessage({
                                message: "服务请求失败，请重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }, ()=>{
                    // 关闭加载遮罩层
                    props.app.loading.close();
                });
            });
        }

        // 打开项目
        function openProject(project: any){
            pageData.value.header.project.config = project.config;
            pageData.value.header.project.tree = project.tree;
            pageData.value.header.project.open = project.open;
            // 清空当前的TAB数据
            pageData.value.header.project.tabs.value = "";
            pageData.value.header.project.tabs.item = [];
            // 清空编辑器资源数据
            let models = monaco.editor.getModels();
            models.forEach((model: any, index: any)=>{
                model.dispose();
            });
            // 记录当前打开的项目
            localStorage.setItem("current_project", JSON.stringify(pageData.value.header.project.open));
            // 记录到最近打开项目
            let recent_project = localStorage.getItem("recent_project");
            if(recent_project){
                let recent_project_json = JSON.parse(recent_project);
                recent_project_json.forEach((item: any, index: any)=>{
                    if(item.path === pageData.value.header.project.open.path){
                        recent_project_json.splice(index, 1);
                    }
                });
                recent_project_json.unshift(pageData.value.header.project.open);
                // 更新记录
                pageData.value.header.project.recent = recent_project_json;
                localStorage.setItem("recent_project", JSON.stringify(recent_project_json));
            }else{
                // 新增历史记录
                localStorage.setItem("recent_project", JSON.stringify([pageData.value.header.project.open]));
            }
            // 将项目资源注册到编辑器
            onProjectToEditor(pageData.value.header.project.tree);
        }

        // 将项目资源注册到编辑器
        function onProjectToEditor(resources: any){
            resources.forEach((item: any, index: any, array: any)=>{
                if(item.type === "file"){
                    let file_suffix = item.name.split(".");
                    let language = EditorPackage.check_file_suffix(file_suffix[file_suffix.length - 1]);
                    if(language !== ""){
                        // 读取文件内容
                        (window as any).go.StartWindows.Api.OpenProjectFile(item.path).then((content: any)=>{
                            monaco.editor.createModel(content, language, monaco.Uri.parse(item.path));
                        });
                    }
                }else{
                    if(item.children.length > 0){
                        onProjectToEditor(item.children);
                    }
                }
            });
        }

        // 底部区域拖拽事件
        const terminalTools = ref(null);
        function handleFooterResize(event: any){
            let boxDiv: any = document.getElementsByClassName("footer-resize");
            let boxDivHeight: any = boxDiv[0].offsetHeight;
            let targetDiv: any = document.getElementsByClassName("footer-resize-box");
            let targetDivHeight: any = targetDiv[0].offsetHeight;
            let startY: any = event.clientY;
            document.onmousemove = function (event: any) {
                let distY = Math.abs(event.clientY - startY);
                // 向下拖动
                if (event.clientY > startY) {
                    let check_height = targetDivHeight - distY;
                    if(check_height > 260){
                        targetDiv[0].style.height = check_height + "px";
                        boxDiv[0].style.height = boxDivHeight + distY + "px";
                        pageData.value.resize.footer.height = check_height;
                    }
                }
                // 向上拖动
                if (event.clientY < startY) {
                    let check_height = targetDivHeight + distY;
                    if (check_height < 500) {
                        targetDiv[0].style.height = check_height + "px";
                        boxDiv[0].style.height = boxDivHeight - distY + "px";
                        pageData.value.resize.footer.height = check_height;
                    }
                }
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                // 处理命令行终端布局
                if((terminalTools as any).value){
                    (terminalTools as any).value.onResize();
                }
            }
        }

        // 页面渲染完成前需要执行的业务
        onBeforeMount(() => {
            props.app.loading = ElLoading.service({
                lock: true,
                background: "rgba(0, 0, 0, .01)",
                fullscreen: true
            });
        });

        // 页面渲染完成后需要执行的业务
        onMounted(() => {
            // 接口请求
            onInit();
        });

        // 离开页面之前需要执行的业务
        onBeforeUnmount(() => {
            // 关闭消息服务连接
            if(pageData.value.tools.footer.socket){
                pageData.value.tools.footer.socket.close();
                pageData.value.tools.footer.socket_status = false;
            }
        });

        // 离开页面之后需要执行的业务
        onUnmounted(() => {

        });

        return {
            props,
            pageData,
            terminalTools,
            onTerminalClose,
            EventCallback,
            handleFooterResize
        }
    }
});
</script>

<style scoped>
.common-footer{
    width: 100%;
    height: 30px;
    background-color: rgba(43, 45, 48, 1);
    border-top: 1px solid rgba(30, 31, 34, 1);
    z-index: 100;
    position: relative;
}
.common-footer .footer-item{
    width: 50%;
    height: 30px;
    display: inline-block;
    vertical-align: top;
}
.common-footer .footer-item:last-child{
    text-align: right;
}
.common-footer .footer-item .item{
    width: auto;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: top;
    padding: 0 10px;
    color: rgba(157, 160, 168, 1);
}
.common-footer .footer-item .item:hover{
    background-color: rgba(57, 59, 64, .5);
}
.common-footer .footer-item .item span.icon{
    width: auto;
    height: 30px;
    line-height: 35px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    margin-right: 5px;
}
.common-footer .footer-item .item span.icon.success .el-icon{
    color: #67C23A;
}
.common-footer .footer-item .item:last-child{
    width: 39px;
    padding: 0;
    text-align: center;
}
</style>
