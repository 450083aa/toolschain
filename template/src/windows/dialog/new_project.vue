<template>
    <el-dialog custom-class="studio" v-model="props.page.dialog.status" :title="props.page.dialog.config.title" :width="props.page.dialog.config.width" draggable :modal="true" title="" :show-close="props.page.dialog.config.close" :before-close="dialogClose" :lock-scroll="true" :closeOnClickModal="false" :closeOnPressEscape="false" :destroy-on-close="true">
        <div class="new-project" v-if="props.page.dialog.form">
            <div class="form">
                <el-form class="studio" :model="props.page.dialog.form" label-width="60px">
                    <el-form-item label="项目名称">
                        <el-input class="studio" v-model="props.page.dialog.form.name" placeholder="请输入项目名称" maxlength="24" autocomplete="off" spellcheck="false" show-word-limit style="width: 260px" />
                        <span class="el-form-tips first">仅英文或英文、下划线组合</span>
                    </el-form-item>
                    <el-form-item label="保存位置">
                        <el-input class="studio" :value="props.page.dialog.form.path" placeholder="请先择项目保存位置" maxlength="24" autocomplete="off" spellcheck="false">
                            <template #append>
                                <el-icon class="studio"><FolderOpened /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button class="studio" :loading="props.page.dialog.form.loading" type="primary" @click="onSubmit">创建项目</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
export default defineComponent({
    name: "NewProjectDialog",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 保存项目事件
        function onSubmit(){

        }

        // 弹窗关闭事件
        function dialogClose(close: any){
            if(close){
                close();
            }
            props.page.dialog.status = false;
            setTimeout(()=>{
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
            onSubmit,
            dialogClose
        }
    }
});
</script>

<style scoped>
.new-project{
    width: 100%;
}
.new-project .form{
    width: 100%;
    padding: 15px;
}
.new-project .form .el-icon.studio:hover{
    cursor: pointer;
}
.new-project .template{
    width: 100%;
    font-size: 12px;
    background-color: rgba(30, 31, 34, .5) !important;
}
.new-project .template .template-header{
    width: 100%;
    height: 40px;
    background-color: rgba(30, 31, 34, .5) !important;
}
.new-project .template .template-box{
    width: 100%;
    min-height: 200px;
}
</style>
