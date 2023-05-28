<template>
    <el-dialog custom-class="studio" v-model="props.app.dialog.status" :title="props.app.dialog.config.title" :width="props.app.dialog.config.width" draggable :modal="true" title="" :show-close="props.app.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="settings-dialog">
            <div class="settings-dialog-item">
                <div class="settings-nav">
                    <div class="settings-group">
                        <div class="title">系统设置</div>
                        <div class="children">
                            <div class="item" :class="props.app.settings.select === 'language' ? 'select' : ''" @click="onSelect('language')">界面语言</div>
                            <div class="item" :class="props.app.settings.select === 'model' ? 'select' : ''" @click="onSelect('model')">模型配置</div>
                        </div>
                    </div>
                    <div class="settings-group">
                        <div class="title">授权密钥</div>
                        <div class="children">
                            <div class="item" :class="props.app.settings.select === 'keys' ? 'select' : ''" @click="onSelect('keys')">密钥管理</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="settings-dialog-item">
                <div class="settings-main" v-if="props.app.settings.select === 'language'">
                    <el-form class="studio" label-width="100px">
                        <el-form-item label="界面语言">
                            <el-radio-group class="studio" v-model="props.app.language" @change="onLanguageChange">
                                <el-radio-button label="zh" name="简体中文">简体中文</el-radio-button>
                                <el-radio-button label="en" name="English">English</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="settings-main" v-if="props.app.settings.select === 'model'">
                    <el-form class="studio" label-width="100px" v-if="props.app.device.status === 'connected' && props.app.dialog.form">
                        <el-form-item label="对话模型">
                            <el-select class="studio select" popper-class="studio select" v-model="props.app.dialog.form.current" placeholder="请选择对话模型">
                                <el-option v-for="(item, index) in props.app.dialog.form.model" :key="index" :label="item.name" :value="item.name"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-button class="studio" :loading="props.app.dialog.form.loading" type="primary" @click="onModelUpdate">保存</el-button>
                        </el-form-item>
                    </el-form>
                    <el-empty class="studio" description="description" :image-size="30" v-else/>
                </div>
                <div class="settings-main" v-if="props.app.settings.select === 'keys'">
                    <el-form class="studio" label-width="100px" v-if="props.app.device.status === 'connected' && props.app.dialog.form">
                        <el-form-item label="OpenAI 密钥">
                            <el-input class="studio" type="password" v-model="props.app.dialog.form.openai_api_key" show-password placeholder="请输入OpenAI API KEY" maxlength="140" autocomplete="off" spellcheck="false" style="width: 480px"/>
                        </el-form-item>
                        <el-form-item label="">
                            <el-button class="studio" :loading="props.app.dialog.form.loading" type="primary" @click="onKeyUpdate">保存</el-button>
                        </el-form-item>
                    </el-form>
                    <el-empty class="studio" description="description" :image-size="30" v-else />
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import {Device} from "../../package/request/request";
import {ElMessage} from "element-plus";
export default defineComponent({
    name: "SettingsDialog",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

        function onSelect(select: any){
            if(props.app.settings.select !== select){
                if(select === "model" && props.app.device.status === "connected") {
                    Device(props.app.device.ip, "/model/get", "GET", {}, {}).then((res: any) => {
                        if (res) {
                            if (res.data.code === 0) {
                                props.app.dialog.form = res.data.data;
                                props.app.dialog.form.loading = false;
                                props.app.settings.select = select;
                            } else {
                                ElMessage({
                                    message: "设备通讯失败，请检查后重新尝试",
                                    type: "warning",
                                    customClass: "studio"
                                });
                            }
                        } else {
                            ElMessage({
                                message: "设备通讯失败，请检查后重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }else if(select === "keys" && props.app.device.status === "connected"){
                    Device(props.app.device.ip, "/auth/get", "GET", {}, {}).then((res: any) => {
                        if (res) {
                            if (res.data.code === 0) {
                                props.app.dialog.form = res.data.data;
                                props.app.dialog.form.loading = false;
                                props.app.settings.select = select;
                            } else {
                                ElMessage({
                                    message: "设备通讯失败，请检查后重新尝试",
                                    type: "warning",
                                    customClass: "studio"
                                });
                            }
                        } else {
                            ElMessage({
                                message: "设备通讯失败，请检查后重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }else{
                    props.app.settings.select = select;
                }
            }
        }

        function onLanguageChange(value: any){
            props.app.language = value;
            localStorage.setItem("chain:settings:language", props.app.language);
        }

        function onModelUpdate(){
            if(props.app.settings.select === "model" && props.app.device.status === "connected") {
                props.app.dialog.form.loading = true;
                Device(props.app.device.ip, "/model/update", "POST", {}, {model: props.app.dialog.form.current}).then((res: any) => {
                    if (res) {
                        if (res.data.code === 0) {
                            props.app.dialog.form.loading = false;
                            ElMessage({
                                message: "保存成功",
                                type: "success",
                                customClass: "studio"
                            });
                        } else {
                            props.app.dialog.form.loading = false;
                            ElMessage({
                                message: "设备通讯失败，请检查后重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    } else {
                        props.app.dialog.form.loading = false;
                        ElMessage({
                            message: "设备通讯失败，请检查后重新尝试",
                            type: "warning",
                            customClass: "studio"
                        });
                    }
                });
            }
        }

        function onKeyUpdate(){
            if(props.app.settings.select === "keys" && props.app.device.status === "connected") {
                props.app.dialog.form.loading = true;
                Device(props.app.device.ip, "/auth/update", "POST", {}, {openai_api_key: props.app.dialog.form.openai_api_key}).then((res: any) => {
                    if (res) {
                        if (res.data.code === 0) {
                            props.app.dialog.form.loading = false;
                            ElMessage({
                                message: "保存成功",
                                type: "success",
                                customClass: "studio"
                            });
                        } else {
                            props.app.dialog.form.loading = false;
                            ElMessage({
                                message: "设备通讯失败，请检查后重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    } else {
                        props.app.dialog.form.loading = false;
                        ElMessage({
                            message: "设备通讯失败，请检查后重新尝试",
                            type: "warning",
                            customClass: "studio"
                        });
                    }
                });
            }
        }

        function dialogClose(close: any){
            if(close){
                close();
            }
            props.app.dialog.status = false;
            setTimeout(()=>{
                props.app.dialog.type = "";
                props.app.dialog.form = false;
            }, 200);
        }

        onMounted(() => {});

        onBeforeUnmount(() => {});

        return {
            props,
            onSelect,
            onLanguageChange,
            onModelUpdate,
            onKeyUpdate,
            dialogClose
        }
    }
});
</script>

<style scoped>
.settings-dialog{
    width: 100%;
    height: 480px;
}
.settings-dialog .settings-dialog-item{
    width: calc(100% - 160px);
    height: 100%;
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
}
.settings-dialog .settings-dialog-item:first-child{
    width: 160px;
    border-right: 1px solid rgba(59, 60, 61, .5);
}
.settings-dialog .settings-dialog-item .settings-nav{
    width: 100%;
    height: 100%;
}
.settings-dialog .settings-dialog-item .settings-nav .settings-group{
    width: 100%;
}
.settings-dialog .settings-dialog-item .settings-nav .settings-group .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #666666;
    background-color: rgba(30, 31, 34, .2);
}
.settings-dialog .settings-dialog-item .settings-nav .settings-group .children{
    width: 100%;
    padding: 5px;
}
.settings-dialog .settings-dialog-item .settings-nav .settings-group .children .item{
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #999999;
    text-align: center;
}
.settings-dialog .settings-dialog-item .settings-nav .settings-group .children .item:hover{
    cursor: pointer;
    color: #ffffff;
}
.settings-dialog .settings-dialog-item .settings-nav .settings-group .children .item.select{
    color: #ffffff;
}
.settings-dialog .settings-dialog-item .settings-main{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 30px 15px;
}
.settings-dialog .settings-dialog-item .settings-main .version{
    font-size: 12px;
    color: #999999;
}
</style>