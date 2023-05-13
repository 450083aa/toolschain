<template>
    <div class="code-editor">
        <div class="editor" ref="EditorBox"></div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import { ElLoading, ElMessage, ElMessageBox } from "element-plus";
import * as monaco from "monaco-editor";
export default defineComponent({
    name: "LuaEditor",
    emits: [],
    props: ["app", "page", "item"],
    components: {},
    setup(props, context) {

        // 定义数据结构
        const editor: any = ref({
            content: "",
        });

        // 初始化编辑器
        const EditorBox = ref(null);
        let Editor_Dom: any = false;
        function InitEditor(){
            Editor_Dom = monaco.editor.create((EditorBox as any).value, {
                value: editor.value.content,
                language: "lua",
                theme: "vs-dark",
                selectOnLineNumbers: true,
                roundedSelection: false,
                readOnly: false,
                cursorStyle: "line",
                automaticLayout: true,
                glyphMargin: true,
                useTabStops: false,
                fontSize: 13,
                lineHeight: 22,
                autoIndent: "full",
                quickSuggestionsDelay: 100,
                scrollBeyondLastLine: false,
                foldingStrategy: "indentation",
                lineNumbersMinChars: 5,
                lineDecorationsWidth: 0,
            });
            // 语言服务
            monaco.languages.registerDefinitionProvider("lua", {
                provideDefinition(model: any, position: any, token: any){
                    return [];
                }
            });
            Editor_Dom.onKeyDown((key: any)=>{
                // 键盘保存事件事件
                if(key.code === "KeyS" && key.ctrlKey){
                    let code = Editor_Dom.getValue();
                    (window as any).go.StartWindows.Api.UpdateProjectFile(props.item.path, code).then((err: any)=>{
                        if(err){
                            ElMessage({
                                message: "保存失败，请重新尝试",
                                type: "warning",
                                customClass: "studio"
                            });
                        }
                    });
                }
            });
            // 监听值变化
            Editor_Dom.onDidChangeModelContent((val: any) => {

            });
            // 跳转事件
            Editor_Dom._codeEditorService.doOpenEditor = function(e: any, file: any) {
                console.log(e, file);
            };
        }

        // 页面渲染完成后需要执行的业务
        onMounted(() => {
            // 读取当前文件信息
            (window as any).go.StartWindows.Api.OpenProjectFile(props.item.path).then((content: any)=>{
                editor.value.content = content;
                if(props.page.header.project.config){
                    InitEditor();
                }
            });
        });

        // 离开页面之前需要执行的业务
        onBeforeUnmount(() => {

        });

        return {
            props,
            editor,
            EditorBox
        }
    }
});
</script>

<style scoped>
.code-editor{
    width: 100%;
    height: 100%;
}
.code-editor .editor{
    width: 100%;
    height: 100%;
}
</style>
