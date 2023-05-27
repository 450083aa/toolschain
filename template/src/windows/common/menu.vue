<template>
    <div class="container-menu">
        <div class="menu-box">
            <div class="menu-item" :class="props.app.menu.select === 'dashboard' ? 'select' : ''" @click="onMenuSelect('dashboard')">
                <el-tooltip popper-class="studio" effect="dark" content="仪表盘" placement="right">
                    <el-icon class="icon"><Stopwatch /></el-icon>
                </el-tooltip>
            </div>
            <div class="menu-item" :class="props.app.menu.select === 'simulation' ? 'select' : ''" @click="onMenuSelect('simulation')">
                <el-tooltip popper-class="studio" effect="dark" content="模拟器" placement="right">
                    <el-icon class="icon"><MapLocation /></el-icon>
                </el-tooltip>
            </div>
            <div class="menu-item" :class="props.app.menu.select === 'console' ? 'select' : ''" @click="onMenuSelect('console')">
                <el-tooltip popper-class="studio" effect="dark" content="控制台" placement="right">
                    <el-icon class="icon"><Place /></el-icon>
                </el-tooltip>
            </div>
        </div>
        <div class="menu-box">
            <div class="menu-item">
                <el-tooltip popper-class="studio" effect="dark" :content="!props.app.tools.chat_hide ? '隐藏对话' : '显示对话'" placement="right">
                    <el-icon class="icon" @click="onToolsSelect('chat')">
                        <Fold v-if="!props.app.tools.chat_hide" />
                        <Expand v-else />
                    </el-icon>
                </el-tooltip>
            </div>
            <div class="menu-item" :class="props.app.tools.select === 'terminal' ? 'select' : ''">
                <el-tooltip popper-class="studio" effect="dark" content="命令行终端" placement="right">
                    <el-icon class="icon" @click="onToolsSelect('terminal')"><Platform /></el-icon>
                </el-tooltip>
            </div>
            <div class="menu-item" :class="props.app.tools.select === 'debug' ? 'select' : ''">
                <el-tooltip popper-class="studio" effect="dark" content="运行日志" placement="right">
                    <el-icon class="icon" @click="onToolsSelect('debug')"><WarnTriangleFilled /></el-icon>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    name: "MenuCommon",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

        function onMenuSelect(type: any){
            if(props.app.menu.select !== type){
                props.app.menu.select = type;
            }
        }

        function onToolsSelect(type: any){
            if(type === "chat"){
                props.app.tools.chat_hide = !props.app.tools.chat_hide;
                return;
            }else{
                if(props.app.tools.select !== type){
                    props.app.tools.select = type;
                }else{
                    props.app.tools.select = "";
                }
            }
        }

        return {
            props,
            onMenuSelect,
            onToolsSelect
        }
    }
});
</script>

<style scoped>
.container-menu{
    width: 100%;
    height: 100%;
}
.container-menu .menu-box{
    width: 100%;
    height: calc(100% - 135px);
}
.container-menu .menu-box:last-child{
    height: 135px;
}
.container-menu .menu-box .menu-item{
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 18px;
    padding: 5px;
}
.container-menu .menu-box .menu-item .el-icon.icon{
    width: 29px;
    height: 29px;
    font-size: 16px;
    color: #999999;
}
.container-menu .menu-box .menu-item:hover .el-icon.icon{
    cursor: pointer;
    background-color: rgba(78, 81, 87, .2);
    border-radius: 4px;
    color: #ffffff;
}
.container-menu .menu-box .menu-item.select .el-icon.icon{
    background-color: rgba(78, 81, 87, .5);
    border-radius: 4px;
}
</style>