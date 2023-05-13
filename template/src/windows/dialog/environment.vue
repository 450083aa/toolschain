<template>
    <el-dialog custom-class="studio" v-model="props.page.dialog.status" :title="props.page.dialog.config.title" :width="props.page.dialog.config.width" :modal="true" title="" :show-close="props.page.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="environment-dialog" v-if="props.page.dialog.form">
            <div class="environment-text">{{props.page.dialog.form.progress_text}}</div>
            <div class="environment-progress" v-if="props.page.dialog.form.progress">
                <el-progress class="studio" :percentage="props.page.dialog.form.progress" :show-text="false" />
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import { ElLoading, ElMessage } from "element-plus";
export default defineComponent({
    name: "EnvironmentDialog",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 消息监听器
        (window as any).runtime.EventsOn("environment_download", (val: any) => {
            if(val.status) {
                props.page.dialog.form.progress = parseFloat(((val.download * 100) / val.length).toFixed(2));
                if (Number.isNaN(props.page.dialog.form.progress)) {
                    props.page.dialog.form.progress = 0.0001;
                }
                if (!props.page.dialog.form.download_status && props.page.dialog.form.progress === 100) {
                    props.page.dialog.form.download_status = true;
                    props.page.dialog.form.progress_text = "部署即将完成，请耐心等待";
                    if (val.path && val.file && val.path !== "" && val.file !== "") {
                        // 发送解压指令
                        (window as any).go.StartWindows.Api.Unzip("environment_zip", val.path + val.file, "");
                    }
                }
            }else{
                ElMessage({
                    message: "基础开发环境部署失败，请重新尝试",
                    type: "warning",
                    customClass: "studio"
                });
            }
        });
        (window as any).runtime.EventsOn("environment_zip", (val: any) => {
            if(val.status){
                dialogClose(false);
                context.emit("onEventCallback", {type: "environment_success"});
            }else{
                ElMessage({
                    message: "基础开发环境部署失败，请重新尝试",
                    type: "warning",
                    customClass: "studio"
                });
            }
        });

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
            // 发送下载指令
            (window as any).go.StartWindows.Api.Download("environment_download", "https://cdn.geekros.com/studio/install/environment/build_" + props.app.return.os + ".zip", "");
        });

        // 离开页面之前需要执行的业务
        onBeforeUnmount(() => {

        });

        return {
            props,
            dialogClose
        }
    }
});
</script>

<style scoped>
.environment-dialog{
    width: 100%;
    height: 160px;
    padding: 30px;
}
.environment-dialog .environment-text{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
}
.environment-dialog .environment-progress{
    width: auto;
    padding: 20px;
}
</style>
