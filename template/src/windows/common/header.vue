<template>
    <div class="common-header">
        <div class="common-header-item">
            <div class="item logo"></div>
            <div class="item menu">
                <el-icon><Grid /></el-icon>
                <div class="dropdown">
                    <div class="dropdown-item">
                        <div class="dropdown-item-item">
                            <el-icon><Tickets /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>项目</span>
                        </div>
                        <div class="dropdown-item-item">
                            <el-icon class="arrow"><ArrowRight /></el-icon>
                        </div>
                        <div class="dropdown-more">
                            <div class="dropdown-item" @click="onNewProject">
                                <div class="dropdown-item-item"></div>
                                <div class="dropdown-item-item">
                                    <span>新建项目</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                            <div class="dropdown-item" @click="onChangeProject({name: 'open', path: ''})">
                                <div class="dropdown-item-item">
                                    <el-icon><FolderOpened /></el-icon>
                                </div>
                                <div class="dropdown-item-item">
                                    <span>打开项目...</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-item">
                        <div class="dropdown-item-item"></div>
                        <div class="dropdown-item-item">
                            <span>编辑</span>
                        </div>
                        <div class="dropdown-item-item">
                            <el-icon class="arrow"><ArrowRight /></el-icon>
                        </div>
                        <div class="dropdown-more">
                            <div class="dropdown-item">
                                <div class="dropdown-item-item"></div>
                                <div class="dropdown-item-item">
                                    <span>撤销</span>
                                </div>
                                <div class="dropdown-item-item"><i>Ctrl+Z</i></div>
                            </div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-item"></div>
                                <div class="dropdown-item-item">
                                    <span>重做</span>
                                </div>
                                <div class="dropdown-item-item"><i>Ctrl+Shift+Z</i></div>
                            </div>
                            <div class="dropdown-item line"></div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-item">
                                    <el-icon><Search /></el-icon>
                                </div>
                                <div class="dropdown-item-item">
                                    <span>查找...</span>
                                </div>
                                <div class="dropdown-item-item"><i>Ctrl+F</i></div>
                            </div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-item">
                                    <el-icon><Sort /></el-icon>
                                </div>
                                <div class="dropdown-item-item">
                                    <span>替换...</span>
                                </div>
                                <div class="dropdown-item-item"><i>Ctrl+R</i></div>
                            </div>
                            <div class="dropdown-item line"></div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-item"></div>
                                <div class="dropdown-item-item">
                                    <span>格式化代码</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-item line"></div>
                    <div class="dropdown-item" @click="onSettings">
                        <div class="dropdown-item-item">
                            <el-icon><Setting /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>设置</span>
                        </div>
                        <div class="dropdown-item-item"></div>
                    </div>
                    <div class="dropdown-item" @click="onReload">
                        <div class="dropdown-item-item">
                            <el-icon><Refresh /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>重载窗口</span>
                        </div>
                        <div class="dropdown-item-item"></div>
                    </div>
                    <div class="dropdown-item">
                        <div class="dropdown-item-item">
                            <el-icon><QuestionFilled /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>帮助</span>
                        </div>
                        <div class="dropdown-item-item">
                            <el-icon class="arrow"><ArrowRight /></el-icon>
                        </div>
                        <div class="dropdown-more">
                            <div class="dropdown-item" @click="onOpenSite">
                                <div class="dropdown-item-item">
                                    <el-icon><ChromeFilled /></el-icon>
                                </div>
                                <div class="dropdown-item-item">
                                    <span>官方网站</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                            <div class="dropdown-item line"></div>
                            <div class="dropdown-item" @click="onAbout">
                                <div class="dropdown-item-item"></div>
                                <div class="dropdown-item-item">
                                    <span>关于</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-item line"></div>
                    <div class="dropdown-item" @click="onQuit">
                        <div class="dropdown-item-item"></div>
                        <div class="dropdown-item-item">
                            <span>退出</span>
                        </div>
                        <div class="dropdown-item-item"></div>
                    </div>
                </div>
            </div>
            <div class="item select">
                <el-select class="studio" popper-class="studio select" :value-key="JSON.stringify(props.page.header.project.open)" :value="props.page.header.project.path" :placeholder="props.page.header.project.open.name !== '' ? props.page.header.project.open.name : '快捷打开项目'" @change="onChangeProject">
                    <el-option :value="{name: 'open', path: ''}">
                        <div class="select-option-item">
                            <div class="item">
                                <el-icon><FolderOpened /></el-icon>
                            </div>
                            <div class="item">打开项目</div>
                        </div>
                    </el-option>
                    <el-option :value="{name: 'current', path: ''}" :disabled="true">
                        <div class="select-option-line">Open Projects</div>
                    </el-option>
                    <el-option :value="JSON.stringify(props.page.header.project.open)" v-if="props.page.header.project.open.path !== ''">
                        <div class="select-project-item">
                            <div class="item">{{props.page.header.project.open.name.charAt(0).toUpperCase()}}</div>
                            <div class="item">
                                <div class="name">{{props.page.header.project.open.name}}</div>
                                <div class="path">{{props.page.header.project.open.path}}</div>
                            </div>
                        </div>
                    </el-option>
                    <el-option :value="{name: 'null', path: ''}" :disabled="true" v-else>
                        <div class="select-project-empty">
                            <el-empty class="studio" :image-size="35" description="" />
                        </div>
                    </el-option>
                    <el-option :value="{name: 'recent', path: ''}" :disabled="true">
                        <div class="select-option-line">Recent Projects</div>
                    </el-option>
                    <el-option v-for="(item, index) in props.page.header.project.recent" :key="item.path" :label="item.name" :value="JSON.stringify({name: item.name, path: item.path})" v-if="props.page.header.project.recent.length > 0">
                        <div class="select-project-item">
                            <div class="item">{{item.name.charAt(0).toUpperCase()}}</div>
                            <div class="item">
                                <div class="name">{{item.name}}</div>
                                <div class="path">{{item.path}}</div>
                            </div>
                        </div>
                    </el-option>
                    <el-option :value="{name: 'recent', path: ''}" :disabled="true" v-else>
                        <div class="select-project-empty">
                            <el-empty class="studio" :image-size="35" description="" />
                        </div>
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="common-header-item"></div>
        <div class="common-header-item">
            <div class="header-tools">
                <div class="header-tools-item">
                    <div class="tools-item">
                        <el-tooltip popper-class="studio" effect="dark" content="运行" placement="bottom" v-if="props.page.header.run.status === 'run'">
                            <el-icon class="run"><CaretRight /></el-icon>
                        </el-tooltip>
                        <el-icon class="is-loading running" v-if="props.page.header.run.status === 'running'">
                            <Loading />
                        </el-icon>
                        <el-tooltip popper-class="studio" effect="dark" content="停止" placement="bottom" v-if="props.page.header.run.status === 'stop'">
                            <el-icon class="stop"><CloseBold /></el-icon>
                        </el-tooltip>
                    </div>
                    <div class="tools-item">
                        <el-progress class="studio" :percentage="props.page.header.run.progress" :show-text="false" />
                    </div>
                    <div class="tools-item" @click="onSettings">
                        <el-tooltip popper-class="studio" effect="dark" content="设置" placement="bottom">
                            <el-icon><Setting /></el-icon>
                        </el-tooltip>
                    </div>
                </div>
                <div class="header-tools-item">
                    <div class="tools-item" v-if="props.app.account && props.app.account.token !== ''">
                        <el-icon><User /></el-icon>
                    </div>
                    <div class="tools-item" @click="onLogin" v-else>
                        <el-tooltip popper-class="studio" effect="dark" content="登录账号" placement="bottom">
                            <el-icon><User /></el-icon>
                        </el-tooltip>
                    </div>
                </div>
                <div class="header-tools-item">
                    <div class="tools-item" @click="onChatGPT">
                        <el-tooltip popper-class="studio" effect="dark" content="智能助手" placement="bottom">
                            <el-icon><Opportunity /></el-icon>
                        </el-tooltip>
                    </div>
                </div>
                <div class="header-tools-item">
                    <div class="tools-item">
                        <el-tooltip popper-class="studio" effect="dark" content="搜索" placement="bottom">
                            <el-icon><Search /></el-icon>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {ElLoading, ElMessage} from "element-plus";
import Network from "../../package/network/network";
import new_project from "../dialog/new_project.vue";
export default defineComponent({
    name: "HeaderCommon",
    computed: {
        new_project() {
            return new_project
        }
    },
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 新建项目
        function onNewProject(){
            props.page.dialog.form = {
                name: "",
                path: ""
            }
            props.page.dialog.config.title = "新建项目";
            props.page.dialog.config.width = "480px";
            props.page.dialog.config.close = true;
            props.page.dialog.type = "new_project";
            props.page.dialog.status = true;
        }

        // 设置事件
        function onSettings(){
            // 触发弹窗事件
            props.page.dialog.form = {
                left: {
                    select: "language"
                },
                chat: {
                    loading: false,
                    content: "",
                    wechat: "https://u.wechat.com/ECH2eCew0-0f65Xmkm8xIy0",
                    mode: localStorage.getItem("settings_chat_mode") ? localStorage.getItem("settings_chat_mode") : "account",
                    api_token: localStorage.getItem("settings_chat_api_token") ? localStorage.getItem("settings_chat_api_token") : "",
                    pro_token: localStorage.getItem("settings_chat_pro_token") ? localStorage.getItem("settings_chat_pro_token") : ""
                },
                mi: {
                    did: localStorage.getItem("settings_mi_did") ? localStorage.getItem("settings_mi_did") : "",
                    login: {
                        loading: false,
                        account: localStorage.getItem("settings_mi_account") ? localStorage.getItem("settings_mi_account") : "",
                        password: localStorage.getItem("settings_mi_password") ? localStorage.getItem("settings_mi_password") : ""
                    }
                }
            };
            props.page.dialog.config.title = "设置";
            props.page.dialog.config.width = "780px";
            props.page.dialog.config.close = true;
            props.page.dialog.type = "settings";
            props.page.dialog.status = true;
        }

        // 重载事件
        function onReload(){
            (window as any).runtime.WindowReloadApp();
        }

        // 打开官网事件
        function onOpenSite(){
            (window as any).runtime.BrowserOpenURL("https://www.geekros.com");
        }

        // 关于事件
        function onAbout(){
            props.page.dialog.config.title = "关于";
            props.page.dialog.config.width = "380px";
            props.page.dialog.config.close = true;
            props.page.dialog.type = "about";
            props.page.dialog.status = true;
        }

        // 退出事件
        function onQuit(){
            (window as any).runtime.Quit();
        }

        // 登录事件
        function onLogin(){
            // 触发弹窗事件
            props.page.dialog.form = {
                phone: "",
                code: "",
                count: 60,
                count_text: "获取验证码",
                timer: false,
                loading: false
            };
            props.page.dialog.config.title = "登录/注册";
            props.page.dialog.config.width = "340px";
            props.page.dialog.config.close = true;
            props.page.dialog.type = "login";
            props.page.dialog.status = true;
        }

        // 智能助手事件
        function onChatGPT(){
            Network.status(()=>{
                if(localStorage.getItem("settings_chat_api_token")){
                    // 触发弹窗事件
                    props.page.dialog.form = {
                        content: "",
                        loading: false
                    };
                    props.page.dialog.config.title = "智能助手";
                    props.page.dialog.config.width = "740px";
                    props.page.dialog.config.close = true;
                    props.page.dialog.type = "ChatGPT";
                    props.page.dialog.status = true;
                }else{
                    if(localStorage.getItem("settings_chat_pro_token")){
                        // 触发弹窗事件
                        props.page.dialog.form = {
                            content: "",
                            loading: false
                        };
                        props.page.dialog.config.title = "智能助手";
                        props.page.dialog.config.width = "680px";
                        props.page.dialog.config.close = true;
                        props.page.dialog.type = "ChatGPT";
                        props.page.dialog.status = true;
                    }else{
                        ElMessage({
                            message: "请先设置OpenAI KEY",
                            type: "warning",
                            customClass: "studio"
                        });
                    }
                }
            }, ()=>{
                ElMessage({
                    message: "网络异常，请重新尝试",
                    type: "warning",
                    customClass: "studio"
                });
            });
        }

        // 切换项目事件
        function onChangeProject(value: any){
            let value_json = value;
            if(typeof value === "string"){
                // 如果不是JSON数据则进行解析
                value_json = JSON.parse(value_json);
            }
            if(value_json.name !== "open"){
                if(props.page.header.project.open.path !== value_json.path){
                    let value_json = JSON.parse(value);
                    (window as any).go.StartWindows.Api.OpenProject(value_json.path, "config.geekros").then((data: any)=>{
                        let json = JSON.parse(data);
                        if(json.config && json.tree){
                            context.emit("onEventCallback", {type: "open_project", project: {config: json.config, tree: json.tree, open: {name: json.config.name, path: json.path}}})
                        }
                    });
                }
            }else{
                (window as any).go.StartWindows.Api.OpenProjectDialog("打开新项目", "config.geekros").then((data: any)=>{
                    let json = JSON.parse(data);
                    if(json.config && json.tree){
                        context.emit("onEventCallback", {type: "open_project", project: {config: json.config, tree: json.tree, open: {name: json.config.name, path: json.path}}})
                    }
                });
            }
        }

        return {
            props,
            onNewProject,
            onSettings,
            onReload,
            onOpenSite,
            onAbout,
            onQuit,
            onLogin,
            onChatGPT,
            onChangeProject
        }
    }
});
</script>

<style scoped>
.common-header{
    width: 100%;
    height: 40px;
    background-color: rgba(43, 45, 48, 1);
    border-top: solid 1px rgba(30, 31, 34, 1);
}
.common-header .common-header-item{
    width: calc(100% - 1100px);
    height: 40px;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item:first-child{
    width: 500px;
}
.common-header .common-header-item:last-child{
    width: 600px;
}
.common-header .common-header-item .item{
    width: auto;
    height: 39px;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.logo{
    width: 40px;
    background: url("../../assets/image/logo.png") no-repeat center center;
    background-size: 46%;
}
.common-header .common-header-item .item.menu{
    width: 40px;
    line-height: 36px;
    text-align: center;
    padding: 6px;
    position: relative;
}
.common-header .common-header-item .item.menu:hover{
    cursor: pointer;
    background-color: rgba(57, 59, 64, .5);
}
.common-header .common-header-item .item.menu .el-icon{
    font-size: 18px;
}
.common-header .common-header-item .item.menu .dropdown{
    width: max-content;
    white-space: nowrap;
    min-width: 120px;
    line-height: normal;
    position: absolute;
    top: 40px;
    left: 0;
    text-align: left;
    background-color: rgba(43, 45, 48, 1);
    border: 1px solid rgba(59, 60, 61, 1);
    z-index: 100;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 4px;
    color: #999999;
    display: none;
}
.common-header .common-header-item .item.menu:hover .dropdown{
    display: block;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item{
    width: 100%;
    height: 30px;
    position: relative;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item:hover{
    color: #ffffff;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item.line{
    height: 1px;
    border-bottom: 1px solid rgba(59, 60, 61, 1);
    margin: 6px 0;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item{
    width: auto;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item:first-child{
    width: 30px;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item span{
    width: auto;
    min-width: 60px;
    height: 30px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item .el-icon{
    width: 30px;
    height: 30px;
    font-size: 14px;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item:last-child .el-icon{
    float: right;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item:not(:hover) .dropdown-item-item .el-icon.arrow{
    font-size: 12px;
    color: #666666;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item i{
    color: #666666;
    padding-right: 5px;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-more{
    width: max-content;
    white-space: nowrap;
    min-width: 140px;
    line-height: normal;
    position: absolute;
    top: 0;
    left: calc(100%);
    text-align: left;
    background-color: rgba(43, 45, 48, 1);
    border: 1px solid rgba(59, 60, 61, 1);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 4px;
    color: #999999;
    display: none;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item:hover .dropdown-more{
    display: block;
}
.common-header .common-header-item .item.select{
    padding: 0 5px;
    line-height: 34px;
    margin-top: 1px;
}
.common-header .common-header-item .header-tools{
    width: 100%;
    height: 40px;
    text-align: right;
}
.common-header .common-header-item .header-tools .header-tools-item{
    width: auto;
    height: 39px;
    display: inline-block;
    vertical-align: top;
    padding: 0 10px;
}
.common-header .common-header-item .header-tools .header-tools-item:first-child{
    background-color: rgba(57, 59, 64, .5);
    padding: 0 10px;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item{
    width: auto;
    height: 39px;
    line-height: 46px;
    display: inline-block;
    vertical-align: top;
    padding: 0 5px;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item .el-progress.studio{
    min-width: 180px;
    padding: 17px 0;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item .el-icon{
    font-size: 16px;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item .el-icon:hover{
    cursor: pointer;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item .el-icon.run{
    color: #67C23A;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item .el-icon.running{
    color: #999999;
}
.common-header .common-header-item .header-tools .header-tools-item .tools-item .el-icon.stop{
    color: #F56C6C;
}
.select-option-item{
    width: 100%;
    height: 30px;
    padding: 0 10px;
    font-weight: 400;
}
.select-option-item:hover{
    background-color: rgba(46, 67, 110, 1);
    border-radius: 4px;
}
.select-option-item .item{
    width: auto;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: top;
    color: #ffffff;
}
.select-option-item .item:first-child{
    width: auto;
    line-height: 36px;
    text-align: center;
    margin-right: 5px;
}
.select-option-item .item .el-icon{
    font-size: 16px !important;
}
.select-project-item{
    width: 100%;
    padding: 8px;
    margin-bottom: 5px;
}
.select-project-item:hover{
    background-color: rgba(46, 67, 110, 1);
    border-radius: 4px;
}
.select-project-item .item{
    width: auto;
    height: 40px;
    line-height: 20px;
    display: inline-block;
    vertical-align: top;
    color: #ffffff;
    font-weight: 400;
}
.select-project-item .item .path{
    color: rgba(157, 160, 168, .8);
    font-size: 12px;
    font-weight: 400;
}
.select-project-item .item:first-child{
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-color: #E6A23C;
    border-radius: 4px;
    font-size: 12px;
}
.select-project-item .item:last-child{
    padding-left: 5px;
}
.select-option-line{
    width: 100%;
    height: 24px;
    line-height: 24px;
    margin-top: 5px;
    position: relative;
    color: rgba(157, 160, 168, .8);
    font-size: 10px;
}
.select-option-line:before{
    content: " ";
    position: absolute;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(59, 60, 61, 1);
    top: 0;
}
</style>
