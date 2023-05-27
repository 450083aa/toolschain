<template>
    <el-dialog custom-class="studio" v-model="props.app.dialog.status" :title="props.app.dialog.config.title" :width="props.app.dialog.config.width" draggable :modal="true" title="" :show-close="props.app.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="about-dialog">
            <div class="logo"></div>
            <div class="name-version">{{props.app.dialog.form.name}} {{props.app.dialog.form.version}}</div>
            <div class="site">https://www.geekros.com</div>
            <div class="copyright">Copyright © 2020-2023 GEEKROS. All Rights Reserved.</div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
export default defineComponent({
    name: "AboutDialog",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

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
            dialogClose
        }
    }
});
</script>

<style scoped>
.about-dialog{
    width: 100%;
    font-size: 12px;
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
    color: #999999;
}
.about-dialog .site{
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #999999;
}
.about-dialog .copyright{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #666666;
}
</style>