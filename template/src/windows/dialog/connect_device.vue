<template>
    <el-dialog custom-class="studio" v-model="props.app.dialog.status" :title="props.app.dialog.config.title" :width="props.app.dialog.config.width" draggable :modal="true" title="" :show-close="props.app.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="device-dialog">
            <el-form class="studio" :model="props.app.dialog.form" label-width="80px">
                <el-form-item label="部署脚本">
                    <el-input class="studio" value="sudo curl -s https://cdn.geekros.com/robotchain/install.sh|bash" placeholder="" autocomplete="off" spellcheck="false">
                        <template #append>
                            <el-icon @click="onCopy"><DocumentCopy /></el-icon>
                        </template>
                    </el-input>
                    <div class="tips">连接前请使用上方的自动化脚本完成RobotChain的部署</div>
                </el-form-item>
                <el-form-item label="设备IP地址">
                    <el-input class="studio" v-model="props.app.dialog.form.device_ip" placeholder="请输入目标设备的IP地址" maxlength="140" autocomplete="off" spellcheck="false" style="width: 200px" />
                </el-form-item>
                <el-form-item label="登录密码">
                    <el-input class="studio" type="password" v-model="props.app.dialog.form.device_password" show-password placeholder="请输入目标设备的ROOT登录密码" maxlength="140" autocomplete="off" spellcheck="false" style="width: 260px" />
                </el-form-item>
                <el-form-item label="">
                    <el-button class="studio" :loading="props.app.dialog.form.loading" type="primary" @click="onConnect">连接设备</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import {Device} from "../../package/request/request";
export default defineComponent({
    name: "ConnectDeviceDialog",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

        function onCopy(){
            (window as any).runtime.ClipboardSetText("sudo curl -s https://cdn.geekros.com/robotchain/install.sh|bash");
            ElMessage({
                message: "复制成功",
                type: "success",
                customClass: "studio"
            });
        }

        function onConnect(){
            if(props.app.dialog.form.device_ip !== ""){
                props.app.dialog.form.loading = true;
                Device(props.app.dialog.form.device_ip, "/ping", "GET", {}, {}).then((res: any)=>{
                    if(res){
                        if(res.data.code === 0) {
                            localStorage.setItem("chain:device:ip", props.app.dialog.form.device_ip);
                            localStorage.setItem("chain:device:password", props.app.dialog.form.device_password);
                            (window as any).runtime.EventsEmit("event_message", {type: "connected_device", status: true});
                            dialogClose(false);
                        }else{
                            props.app.dialog.form.loading = false;
                            ElMessage({
                                message: "设备连接失败，请检查后重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    }else{
                        props.app.dialog.form.loading = false;
                        (window as any).runtime.EventsEmit("event_message", {type: "connected_device", status: false});
                        ElMessage({
                            message: "设备连接失败，请检查后重新尝试",
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
            onCopy,
            onConnect,
            dialogClose
        }
    }
});
</script>

<style scoped>
.device-dialog{
    width: 100%;
    padding: 20px 15px;
}
.device-dialog .shell{
    width: 450px;
    height: 38px;
    font-size: 12px;
    background-color: rgba(30, 31, 34, 1);
    border: 1px solid rgba(59, 60, 61, .9);
    border-radius: 4px;
    padding: 0 5px;
    position: relative;
}
.device-dialog .shell .shell-cmd{
    width: 100%;
    height: 36px;
    line-height: 36px;
    user-select: text;
}
</style>