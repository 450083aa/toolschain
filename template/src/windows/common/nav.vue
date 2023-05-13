<template>
    <div class="container-item">
        <div class="nav-box">
            <div class="nav-item" :class="props.page.nav.select === 'project' ? 'select' : ''" @click="onNavSelect('project')">
                <el-tooltip popper-class="studio" effect="dark" content="项目" placement="right">
                    <el-icon class="icon"><Folder /></el-icon>
                </el-tooltip>
            </div>
            <div class="nav-item" :class="props.page.nav.select === 'simulation' ? 'select' : ''" @click="onNavSelect('simulation')">
                <el-tooltip popper-class="studio" effect="dark" content="模拟器" placement="right">
                    <el-icon class="icon"><MapLocation /></el-icon>
                </el-tooltip>
            </div>
            <div class="nav-item" :class="props.page.nav.select === 'console' ? 'select' : ''" @click="onNavSelect('console')">
                <el-tooltip popper-class="studio" effect="dark" content="控制台" placement="right">
                    <el-icon class="icon"><Place /></el-icon>
                </el-tooltip>
            </div>
        </div>
        <div class="nav-box">
            <div class="nav-item" :class="props.page.tools.select === 'terminal' ? 'select' : ''">
                <el-tooltip popper-class="studio" effect="dark" content="命令行终端" placement="right">
                    <el-icon class="icon" @click="onToolsSelect('terminal')"><Platform /></el-icon>
                </el-tooltip>
            </div>
            <div class="nav-item" :class="props.page.tools.select === 'debug' ? 'select' : ''">
                <el-tooltip popper-class="studio" effect="dark" content="运行日志" placement="right">
                    <el-icon class="icon" @click="onToolsSelect('debug')"><WarnTriangleFilled /></el-icon>
                </el-tooltip>
            </div>
            <div class="nav-item" :class="props.page.tools.select === 'git' ? 'select' : ''">
                <el-tooltip popper-class="studio" effect="dark" content="Git管理工具" placement="right">
                    <el-icon class="icon" @click="onToolsSelect('git')"><Share /></el-icon>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "NavCommon",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 切换导航事件
        function onNavSelect(type: any){
            if(props.page.nav.select !== type){
                props.page.nav.select = type;
            }
        }

        // 切换工具箱事件
        function onToolsSelect(type: any){
            if(type !== props.page.tools.select){
                props.page.tools.select = type;
                props.page.resize.footer.hide = false;
                if(props.page.tools.select === "terminal"){
                    // 调用父级统一回调事件
                    context.emit("onEventCallback", {type: "terminal_resize"});
                }
            }else{
                if(props.page.tools.select === "terminal"){
                    // 调用父级统一回调事件
                    context.emit("onEventCallback", {type: "terminal_resize"});
                }
                props.page.resize.footer.hide = true;
                props.page.tools.select = "";
            }
        }

        return {
            props,
            onNavSelect,
            onToolsSelect
        }
    }
});
</script>

<style scoped>
.nav-box{
    width: 100%;
    height: calc(100% - 135px);
}
.nav-box:last-child{
    height: 135px;
}
.nav-box .nav-item{
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    margin-bottom: 5px;
}
.nav-box .nav-item .el-icon.icon{
    width: 29px;
    height: 29px;
}
.nav-box .nav-item:hover .el-icon.icon{
    cursor: pointer;
    background-color: rgba(78, 81, 87, .2);
    border-radius: 4px;
}
.nav-box .nav-item.select .el-icon.icon{
    background-color: rgba(78, 81, 87, .5);
    border-radius: 4px;
}
</style>
