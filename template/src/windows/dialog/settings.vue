<template>
    <el-dialog custom-class="studio" v-model="props.page.dialog.status" :title="props.page.dialog.config.title" :width="props.page.dialog.config.width" draggable :modal="true" title="" :show-close="props.page.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="settings-dialog" v-if="props.page.dialog.form">
            <div class="settings-item">
                <div class="settings-group">
                    <div class="title">系统设置</div>
                    <div class="children">
                        <div class="item" :class="props.page.dialog.form.left.select === 'language' ? 'select' : ''" @click="onSelect('language')">界面语言</div>
                        <div class="item" :class="props.page.dialog.form.left.select === 'environment' ? 'select' : ''" @click="onSelect('environment')">环境检测</div>
                    </div>
                </div>
                <div class="settings-group">
                    <div class="title">智能助手</div>
                    <div class="children">
                        <div class="item" :class="props.page.dialog.form.left.select === 'chat_settings' ? 'select' : ''" @click="onSelect('chat_settings')">模式配置</div>
                        <div class="item" :class="props.page.dialog.form.left.select === 'chat_device' ? 'select' : ''" @click="onSelect('chat_device')">智能设备</div>
                    </div>
                </div>
            </div>
            <div class="settings-item">
                <div class="right">
                    <div class="settings-main" v-if="props.page.dialog.form.left.select === 'language'">
                        <el-empty class="studio" :image-size="35" description="" />
                    </div>
                    <div class="settings-main" v-if="props.page.dialog.form.left.select === 'environment'">
                        <el-empty class="studio" :image-size="35" description="" />
                    </div>
                    <div class="settings-main" v-if="props.page.dialog.form.left.select === 'chat_settings'">
                        <div class="version-view">
                            <el-row :gutter="15">
                                <el-col :span="8">
                                    <div class="grid-content" :class="props.page.dialog.form.chat.mode === 'account' ? 'select' : ''" @click="onSelectChatMode('account')">
                                        <div class="title">获取账号</div>
                                        <div class="describe">注册OpenAI账号</div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content" :class="props.page.dialog.form.chat.mode === 'api' ? 'select' : ''" @click="onSelectChatMode('api')">
                                        <div class="title">API KEY 模式</div>
                                        <div class="describe">可配置普通版API KEY密钥</div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content" :class="props.page.dialog.form.chat.mode === 'pro' ? 'select' : ''" @click="onSelectChatMode('pro')">
                                        <div class="title">PRO KEY 模式</div>
                                        <div class="describe">可配置专业版PRO KEY密钥</div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="version-box">
                            <el-form class="studio" :model="props.page.dialog.form.chat" label-width="80px" v-if="props.page.dialog.form.chat.mode === 'account'">
                                <div class="wechat-image" style="margin-top: 60px">
                                    <qrcode-vue :value="props.page.dialog.form.chat.wechat" :size="120" level="H" />
                                </div>
                                <div class="wechat-tips" style="margin-top: 20px">没有账号？微信扫码 ¥45.00 购买一个</div>
                            </el-form>
                            <el-form class="studio" :model="props.page.dialog.form.chat" label-width="95px" v-if="props.page.dialog.form.chat.mode === 'api'">
                                <el-form-item label="SECRET KEY">
                                    <el-input class="studio" type="password" v-model="props.page.dialog.form.chat.api_token" placeholder="请输入OpenAI的SECRET KEY" autocomplete="off" spellcheck="false" show-password/>
                                    <span class="el-form-tips first">使用谷歌游览器打开<span class="font">https://beta.openai.com/account/api-keys</span>。</span>
                                    <span class="el-form-tips">在页面中申请获取<span class="font">SECRET KEY</span>。</span>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-button class="studio" :loading="props.page.dialog.form.chat.loading" type="primary" @click="onSubmit('chat_api')">保存</el-button>
                                </el-form-item>
                            </el-form>
                            <el-form class="studio" :model="props.page.dialog.form.chat" label-width="95px" v-if="props.page.dialog.form.chat.mode === 'pro'">
                                <el-form-item label="PRO KEY">
                                    <el-input class="studio" type="password" v-model="props.page.dialog.form.chat.pro_token" placeholder="请输入OpenAI的PRO KEY" autocomplete="off" spellcheck="false" show-password/>
                                    <span class="el-form-tips first">使用谷歌游览器打开<span class="font">https://beta.openai.com/account/api-keys</span>。</span>
                                    <span class="el-form-tips">在页面中申请获取<span class="font">PRO KEY</span>。</span>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-button class="studio" :loading="props.page.dialog.form.chat.loading" type="primary" @click="onSubmit('chat_pro')">保存</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div class="settings-main" v-if="props.page.dialog.form.left.select === 'chat_device'">
                        <div class="account-info">
                            <div class="account-info-item">
                                <div class="account">
                                    <el-form class="studio" :model="props.page.dialog.form" label-width="60px">
                                        <el-form-item label="小米账号">
                                            <el-input class="studio" v-model="props.page.dialog.form.mi.login.account" placeholder="请输入小米登录账号" autocomplete="off" spellcheck="false" style="width: 180px"/>
                                        </el-form-item>
                                        <el-form-item label="登录密码">
                                            <el-input class="studio" show-password type="password" v-model="props.page.dialog.form.mi.login.password" placeholder="请输入小米账号登录密码" autocomplete="off" spellcheck="false" style="width: 180px"/>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <el-button class="studio" :loading="props.page.dialog.form.mi.login.loading" type="primary" @click="onXiaomi">查询米家设备</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                        </div>
                        <div class="account-network">
                            <el-table class="studio" :data="dialogData.table" style="width: 100%">
                                <el-table-column prop="did" label="DID" width="120" />
                                <el-table-column prop="name" label="设备名称" width="200" />
                                <el-table-column prop="isOnline" label="在线状态" width="80">
                                    <template #default="scope">
                                        <span style="color: #67C23A" v-if="scope.row.isOnline">在线</span>
                                        <span style="color: #E6A23C" v-else>离线</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="admin" label="操作">
                                    <template #default="scope">
                                        <span class="stop" @click="stopBindDevice" v-if="scope.row.did === props.page.dialog.form.mi.did">取消关联</span>
                                        <span class="start" @click="setBindDevice(scope.row)" v-else>关联设备</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import { ElLoading, ElMessage } from "element-plus";
import  * as icons from "@element-plus/icons-vue";
import Network from "../../package/network/network";
import QrcodeVue from "qrcode.vue";
import * as monaco from "monaco-editor";
export default defineComponent({
    name: "SettingsDialog",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {
        QrcodeVue
    },
    setup(props, context) {

        // 定义数据结构
        const dialogData: any = ref({
            table: [

            ]
        });

        // 左侧菜单选择事件
        function onSelect(value: any){
            if(props.page.dialog.form.left.select !== value){
                props.page.dialog.form.left.select = value;
            }
        }

        // 切换智能助手模式事件
        function onSelectChatMode(mode: any){
            if(props.page.dialog.form.chat.mode !== mode){
                props.page.dialog.form.chat.mode = mode;
            }
        }

        // 提交事件
        function onSubmit(type: any){
            if(type === "chat_api"){
                props.page.dialog.form.chat.loading = true;
                localStorage.setItem("settings_chat_mode", props.page.dialog.form.chat.mode);
                localStorage.setItem("settings_chat_api_token", props.page.dialog.form.chat.api_token);
                ElMessage({
                    message: "保存成功",
                    type: "success",
                    customClass: "studio"
                });
                props.page.dialog.form.chat.loading = false;
            }
            if(type === "chat_pro"){
                props.page.dialog.form.chat.loading = true;
                localStorage.setItem("settings_chat_mode", props.page.dialog.form.chat.mode);
                localStorage.setItem("settings_chat_pro_token", props.page.dialog.form.chat.pro_token);
                ElMessage({
                    message: "保存成功",
                    type: "success",
                    customClass: "studio"
                });
                props.page.dialog.form.chat.loading = false;
            }
        }

        // 登录小米账号
        function onXiaomi(){
            Network.status(()=>{
                if(props.page.dialog.form.mi.login.account !== "" && props.page.dialog.form.mi.login.password !== ""){
                    props.page.dialog.form.mi.login.loading = true;
                    (window as any).go.StartWindows.Api.Xiaomi(props.page.dialog.form.mi.login.account, props.page.dialog.form.mi.login.password).then((content: any, status: any)=>{
                        props.page.dialog.form.mi.login.loading = false;
                        dialogData.value.table = [];
                        if(content.message === "ok"){
                            content.result.list.forEach((item: any, index: any)=>{
                                if(item.model.indexOf("speaker") != -1){
                                    dialogData.value.table.push(item);
                                }
                            });
                            localStorage.setItem("settings_mi_account", props.page.dialog.form.mi.login.account);
                            localStorage.setItem("settings_mi_password", props.page.dialog.form.mi.login.password);
                        }else{
                            ElMessage({
                                message: "获取失败，请重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }
            }, ()=>{
                ElMessage({
                    message: "网络异常，请重新尝试",
                    type: "warning",
                    customClass: "studio"
                });
            });
        }

        // 绑定关联米家设备事件
        function setBindDevice(device: any){
            if(device.isOnline){
                props.page.dialog.form.mi.did = device.did;
                localStorage.setItem("settings_mi_did", device.did);
            }else{
                ElMessage({
                    message: "设备不在线，请重新尝试",
                    type: "warning",
                    customClass: "studio"
                });
            }
        }

        // 取消关联米家设备事件
        function stopBindDevice(){
            props.page.dialog.form.mi.did = "";
            localStorage.removeItem("settings_mi_did");
        }

        // 弹窗关闭事件
        function dialogClose(close: any){
            if(close){
                close();
            }
            props.page.dialog.status = false;
            setTimeout(()=>{
                // 需要延迟处理的一些业务
                props.page.dialog.type = "";
                props.page.dialog.form = false;
            }, 200);
        }

        // 页面渲染完成后需要执行的业务
        onMounted(() => {

        });

        // 离开页面之前需要执行的业务
        onBeforeUnmount(() => {

        });

        return {
            props,
            icons,
            dialogData,
            onSelect,
            onSelectChatMode,
            onSubmit,
            onXiaomi,
            setBindDevice,
            stopBindDevice,
            dialogClose
        }
    }
});
</script>

<style scoped>
.settings-dialog{
    width: 100%;
    height: 460px;
    font-size: 12px;
    color: #ffffff;
}
.settings-dialog .settings-item{
    width: auto;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.settings-dialog .settings-item:first-child{
    width: 200px;
    background-color: rgba(30, 31, 34, .2);
    border-right: 1px solid rgba(59, 60, 61, .5) !important;
}
.settings-dialog .settings-item:last-child{
    width: calc(100% - 200px);
    overflow-y: auto;
}
.settings-dialog .settings-item .right{
    width: 100%;
    min-height: 100px;
    padding: 15px;
}
.settings-dialog .settings-item .settings-group{
    width: 100%;
}
.settings-dialog .settings-item .settings-group .title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    color: #666666;
    background-color: rgba(30, 31, 34, .5);
}
.settings-dialog .settings-item .settings-group .children{
    width: 100%;
    padding: 5px;
}
.settings-dialog .settings-item .settings-group .children .item{
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #999999;
    text-align: center;
}
.settings-dialog .settings-item .settings-group .children .item:hover{
    cursor: pointer;
    color: #ffffff;
}
.settings-dialog .settings-item .settings-group .children .item.select{
    color: #ffffff;
}
.settings-dialog .settings-item .settings-main{
    width: 100%;
}
.settings-dialog .settings-item .settings-main .el-empty.studio{
    padding: 50px !important;
}
.settings-dialog .settings-item .settings-main .version-view{
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
}
.settings-dialog .settings-item .settings-main .version-view .grid-content{
    width: 100%;
    height: 100px;
    background-color: rgba(30, 31, 34, .2);
    border-radius: 4px;
    padding: 10px;
}
.settings-dialog .settings-item .settings-main .version-view .grid-content:hover{
    cursor: pointer;
    background-color: rgba(30, 31, 34, .4);
}
.settings-dialog .settings-item .settings-main .version-view .grid-content.select{
    cursor: pointer;
    background-color: rgba(30, 31, 34, .4);
    border-bottom: 6px solid #409EFF;
}
.settings-dialog .settings-item .settings-main .version-view .grid-content .title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #ffffff;
}
.settings-dialog .settings-item .settings-main .version-view .grid-content .describe{
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #666666;
}
.settings-dialog .settings-item .settings-main .wechat-image{
    width: 140px;
    height: 140px;
    background-color: #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    padding: 10px;
}
.settings-dialog .settings-item .settings-main .wechat-tips{
    width: 240px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: rgba(30, 31, 34, .4);
    margin: 0 auto;
    border-radius: 17px;
    color: #999999;
}
.settings-dialog .settings-item .settings-main .account-info{
    width: 100%;
    background-color: rgba(30, 31, 34, .2);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 30px;
}
.settings-dialog .settings-item .settings-main .account-info .account-info-item{
    width: 100%;
}
.settings-dialog .settings-item .settings-main .account-info .account-info-item .account{
    width: 100%;
}
.settings-dialog .settings-item .settings-main .account-network{
    width: 100%;
}
.settings-dialog .settings-item .settings-main .account-network span.start{
    width: 80px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    display: inline-block;
    border-radius: 15px;
    background-color: rgba(30, 31, 34, .4);
}
.settings-dialog .settings-item .settings-main .account-network span.start:hover{
    color: #ffffff;
    cursor: pointer;
}
.settings-dialog .settings-item .settings-main .account-network span.stop{
    width: 80px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    display: inline-block;
    border-radius: 15px;
    background-color: rgba(30, 31, 34, .4);
}
.settings-dialog .settings-item .settings-main .account-network span.stop:hover{
    color: #F56C6C;
    cursor: pointer;
}
</style>
