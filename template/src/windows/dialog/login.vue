<template>
    <el-dialog custom-class="studio" v-model="props.page.dialog.status" :title="props.page.dialog.config.title" :width="props.page.dialog.config.width" draggable :modal="true" title="" :show-close="props.page.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="login-dialog" v-if="props.page.dialog.form">
            <el-form class="studio" :model="props.page.dialog.form" label-width="60px">
                <el-form-item label="手机号码">
                    <el-input class="studio" v-model="props.page.dialog.form.phone" placeholder="请输入手机号码" maxlength="11" autocomplete="off" spellcheck="false" />
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input class="studio" v-model="props.page.dialog.form.code" placeholder="验证码" maxlength="6" autocomplete="off" spellcheck="false" style="width: 180px">
                        <template #append>
                            <span @click="onSendCode">{{props.page.dialog.form.count_text}}</span>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button class="studio" :loading="props.page.dialog.form.loading" type="primary" @click="onSubmit">登录/注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import { ElLoading, ElMessage } from "element-plus";
import { api, Service } from "../../package/request/request";
import Network from "../../package/network/network";
export default defineComponent({
    name: "LoginDialog",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 获取验证码
        function onSendCode(){
            if(props.page.dialog.form.phone !== "" && props.page.dialog.form.count === 60){
                let check_phone = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/;
                if(!check_phone.test(props.page.dialog.form.phone) || props.page.dialog.form.phone.length !== 11){
                    ElMessage({
                        message: "手机号码不合法",
                        type: "warning",
                        customClass: "studio"
                    });
                    return;
                }
                // 发送服务请求
                props.page.dialog.form.count = 59;
                Network.status(()=>{
                    Service("api/login/code", "GET", {phone: props.page.dialog.form.phone}, {}).then((res: any) => {
                        if(res.status === 200){
                            if(res.data.code === 0){
                                props.page.dialog.form.timer = setInterval(() => {
                                    props.page.dialog.form.count--;
                                    if(props.page.dialog.form.count <= 0){
                                        clearInterval(props.page.dialog.form.timer);
                                        props.page.dialog.form.count = 60;
                                        props.page.dialog.form.timer = false;
                                        props.page.dialog.form.count_text = "获取验证码";
                                        return;
                                    }
                                    props.page.dialog.form.count_text = props.page.dialog.form.count + " 秒";
                                }, 1000);
                            }else{
                                props.page.dialog.form.count = 60;
                                ElMessage({
                                    message: "服务请求失败，请重新尝试",
                                    type: "warning",
                                    customClass: "studio"
                                });
                            }
                        }else{
                            props.page.dialog.form.count = 60;
                            ElMessage({
                                message: "服务请求失败，请重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }, ()=>{
                    props.page.dialog.form.count = 60;
                    ElMessage({
                        message: "网络异常，请重新尝试",
                        type: "warning",
                        customClass: "studio"
                    });
                });
            }
        }

        // 登录提交
        function onSubmit(){
            props.page.dialog.form.loading = true;
            if(props.page.dialog.form.phone !== "" && props.page.dialog.form.code !== ""){
                let check_phone = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/;
                if(!check_phone.test(props.page.dialog.form.phone) || props.page.dialog.form.phone.length !== 11){
                    props.page.dialog.form.loading = false;
                    ElMessage({
                        message: "手机号码不合法",
                        type: "warning",
                        customClass: "studio"
                    });
                    return;
                }
                // 发送服务请求
                Network.status(()=>{
                    Service("api/login/submit", "GET", {phone: props.page.dialog.form.phone, code: props.page.dialog.form.code}, {}).then((res: any) => {
                        if(res.status === 200){
                            if(res.data.code === 0){
                                props.app.account = res.data.data.account;
                                localStorage.setItem("studio:account:token", res.data.data.login_token);
                                dialogClose(false);
                                ElMessage({
                                    message: "账号登录成功",
                                    type: "success",
                                    customClass: "studio"
                                });
                            }else{
                                props.page.dialog.form.loading = false;
                                ElMessage({
                                    message: "账号登录失败，请重新尝试",
                                    type: "warning",
                                    customClass: "studio"
                                });
                            }
                        }else{
                            props.page.dialog.form.loading = false;
                            ElMessage({
                                message: "服务请求失败，请重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }, ()=>{
                    props.page.dialog.form.loading = false;
                    ElMessage({
                        message: "网络异常，请重新尝试",
                        type: "warning",
                        customClass: "studio"
                    });
                });
            }
        }

        // 弹窗关闭事件
        function dialogClose(close: any){
            if(close){
                close();
            }
            props.page.dialog.status = false;
            setTimeout(()=>{
                // 需要延迟处理的一些业务
                if(props.page.dialog.form.timer){
                    clearInterval(props.page.dialog.form.timer);
                }
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
            onSendCode,
            onSubmit,
            dialogClose
        }
    }
});
</script>

<style scoped>
.login-dialog{
    width: 100%;
    padding: 30px 20px;
}
</style>
