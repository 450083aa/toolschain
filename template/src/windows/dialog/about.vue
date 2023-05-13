<template>
    <el-dialog custom-class="studio" v-model="props.page.dialog.status" :title="props.page.dialog.config.title" :width="props.page.dialog.config.width" draggable :modal="true" title="" :show-close="props.page.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="about-dialog">
            <div class="logo"></div>
            <div class="name-version">{{props.app.return.name}} {{props.app.return.version}}</div>
            <div class="site">https://www.geekros.com</div>
            <div class="copyright">Copyright © 2020-2023 GEEKROS. All Rights Reserved. </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
export default defineComponent({
    name: "AboutDialog",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

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
            dialogClose
        }
    }
});
</script>

<style scoped>
.about-dialog{
    width: 100%;
}
.about-dialog .logo{
    width: 100%;
    height: 80px;
    background: url("../../assets/image/logo.png") no-repeat center center;
    background-size: 10%;
}
.about-dialog .name-version{
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: #999999;
}
.about-dialog .site{
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: #999999;
}
.about-dialog .copyright{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    color: #666666;
}
</style>
