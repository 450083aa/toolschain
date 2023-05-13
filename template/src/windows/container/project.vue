<template>
    <div class="project-view" :class="props.page.nav.select">
        <div class="project-item-box left-resize-box" :style="'width: ' + props.page.resize.left.width + 'px'">
            <div class="line" @mousedown="handleLeftResize"></div>
            <div class="project-tree">
                <el-tree class="studio" empty-text="打开或新建一个项目" :expand-on-click-node="false" :data="props.page.header.project.tree" :props="pageData.defaultProps" @node-click="handleThreeNode">
                    <template #default="{node,data}">
                        <div class="label" :class="data.type">{{node.label}}<span v-if="data.type === 'project'">{{data.path}}</span></div>
                    </template>
                </el-tree>
            </div>
        </div>
        <div class="project-item-box left-resize" :style="'width: calc(100% - ' + props.page.resize.left.width + 'px)'">
            <el-tabs v-model="props.page.header.project.tabs.value" type="card" class="studio" @tab-remove="onRemoveTab" v-if="props.page.header.project.tabs.item.length > 0">
                <el-tab-pane class="studio" :closable="true" :data-suffix="item.suffix" v-for="(item, index) in props.page.header.project.tabs.item" :key="index" :label="item.title" :name="item.path">
                    <BlocksEditor ref="blocksEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'blocks'" />
                    <PythonEditor ref="pythonEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'python'" />
                    <CppEditor ref="cppEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'cpp'" />
                    <JsonEditor ref="jsonEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'json'" />
                    <MarkdownEditor ref="markdownEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'markdown'" />
                    <LuaEditor ref="luaEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'lua'" />
                    <ShellEditor ref="shellEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'shell'" />
                    <JavascriptEditor ref="javascriptEditor" :app="props.app" :page="props.page" :item="item" v-if="item.suffix === 'javascript'" />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import { ElLoading, ElMessage } from "element-plus";
import EditorPackage from "../../package/editor/editor";
import BlocksEditor from "./editor/blocks.vue";
import PythonEditor from "./editor/python.vue";
import CppEditor from "./editor/cpp.vue";
import JsonEditor from "./editor/json.vue";
import MarkdownEditor from "./editor/markdown.vue";
import LuaEditor from "./editor/lua.vue";
import ShellEditor from "./editor/shell.vue";
import JavascriptEditor from "./editor/javascript.vue";
export default defineComponent({
    name: "ProjectContainer",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {
        BlocksEditor,
        PythonEditor,
        CppEditor,
        JsonEditor,
        MarkdownEditor,
        LuaEditor,
        ShellEditor,
        JavascriptEditor
    },
    setup(props, context) {

        // 定义数据结构
        const pageData: any = ref({
            defaultProps: {
                children: "children",
                label: "name",
                type: "type",
                path: "path",
                disabled: "disabled",
            }
        });

        // 项目目录节点点击事件
        function handleThreeNode(event: any){
            if(event.type === "file"){
                let file_suffix = event.name.split("."); // 获取文件后缀
                if(file_suffix.length > 1 && EditorPackage.check_file_suffix(file_suffix[file_suffix.length - 1]) !== ""){
                    let check_tabs: any = false;
                    // 校验文件是否已经打开
                    props.page.header.project.tabs.item.forEach((tab: any, index: any) => {
                        if(tab.path === event.path){
                            check_tabs = true;
                            // 定位到文件所在的TAB
                            props.page.header.project.tabs.value = event.path;
                        }
                    });
                    if(!check_tabs){
                        props.page.header.project.tabs.item.push({
                            title: event.name,
                            path: event.path,
                            suffix: EditorPackage.check_file_suffix(file_suffix[file_suffix.length - 1]),
                            close: true
                        });
                        props.page.header.project.tabs.value = event.path;
                    }
                }else{
                    ElMessage({
                        message: "编辑器暂不支持该文件类型",
                        type: "warning",
                        customClass: "studio"
                    });
                }
            }
        }

        // 关闭某个编辑器TAB
        function onRemoveTab(event: any){
            let activeName = props.page.header.project.tabs.value;
            props.page.header.project.tabs.item.forEach((tab: any, index: any) => {
                if(tab.path === event){
                    let nextTab = props.page.header.project.tabs.item[index + 1] || props.page.header.project.tabs.item[index - 1];
                    if (nextTab) {
                        activeName = nextTab.path;
                    }else{
                        activeName = "";
                    }
                }
            });
            props.page.header.project.tabs.value = activeName;
            props.page.header.project.tabs.item = props.page.header.project.tabs.item.filter((tab: any) => tab.path !== event);
        }

        // 左侧区域拖拽事件
        function handleLeftResize(event: any){
            let boxDiv: any = document.getElementsByClassName("left-resize");
            let boxDivWidth: any = boxDiv[0].offsetWidth;
            let targetDiv: any = document.getElementsByClassName("left-resize-box");
            let targetDivWidth: any = targetDiv[0].offsetWidth;
            let startX: any = event.clientX;
            document.onmousemove = function (event) {
                let distX = Math.abs(event.clientX - startX);
                // 向右拖动
                if (event.clientX < startX) {
                    let check_width = targetDivWidth - distX;
                    if(check_width > 240){
                        targetDiv[0].style.width = check_width + "px";
                        boxDiv[0].style.width = boxDivWidth + distX + "px";
                        props.page.resize.left.width = check_width;
                    }
                }
                // 向左拖动
                if (event.clientX > startX) {
                    let check_width = targetDivWidth + distX;
                    if(check_width < 600){
                        targetDiv[0].style.width = check_width + "px";
                        boxDiv[0].style.width = boxDivWidth - distX + "px";
                        props.page.resize.left.width = check_width;
                    }
                }
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }

        return {
            props,
            pageData,
            handleThreeNode,
            onRemoveTab,
            handleLeftResize
        }
    }
});
</script>

<style scoped>
.project-view{
    width: 100%;
    height: 100%;
    display: none;
}
.project-view.project{
    display: block;
}
.project-view .project-item-box{
    width: calc(100% - 260px);
    height: 100%;
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.project-view .project-item-box:first-child{
    width: 260px;
    background-color: rgba(43, 45, 48, 1);
    border-right: solid 1px rgba(30, 31, 34, 1);
    overflow-y: auto;
}
.project-view .project-item-box:first-child .line{
    width: 3px;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(43, 45, 48, 0);
    position: absolute;
}
.project-view .project-item-box:first-child .line:hover{
    cursor: e-resize;
}
.project-view .project-item-box .project-tree{
    width: 100%;
}
</style>
