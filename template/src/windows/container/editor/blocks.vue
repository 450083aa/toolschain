<template>
    <div class="blocks-editor">
        <div class="editor" ref="EditorBox"></div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import { ElLoading, ElMessage, ElMessageBox } from "element-plus";
import EditorPackage from "../../../package/editor/editor";
export default defineComponent({
    name: "BlocksEditor",
    emits: [],
    props: ["app", "page", "item"],
    components: {},
    setup(props, context) {

        // 定义数据结构
        const editor: any = ref({
            content: "",
            options: {
                ADD_START_HATS: true,
                toolbox: [],
                comments: false,
                disable: false,
                collapse: false,
                readOnly: false,
                rtl: false,
                scrollbars: true,
                scroll: "",
                toolboxPosition: "start",
                horizontalLayout: false,
                trashcan: false,
                sounds:true,
                zoom: {
                    controls: false,
                    wheel: false,
                    startScale: 1/1.22,
                    maxScale: 3,
                    minScale: .3,
                    scaleSpeed: .1
                },
                media: "static/media/",
                renderer: "zelos"
            },
        });

        // 定义格式数据
        function formatString(string: any, args: any): string{
            let result: any = string;
            for (let key in args) {
                let reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
            return result;
        }

        // 初始化编辑器
        const EditorBox = ref(null);
        let Editor_Dom: any = false;
        function InitEditor(){
            let tools_json: any = EditorPackage.block_base_help.concat(props.page.header.project.config.help);
            let toolbox: any = [];
            if (tools_json.length > 0) {
                tools_json.forEach(function (item: any, index: any, array: any) {
                    let item_categories: any = {};
                    item_categories[`${item.id}`] = item.id;
                    Object.assign((window as any).Blockly.Categories, item_categories);
                    let item_colours: any = {};
                    item_colours[`${item.id}`] = item.colours;
                    item_colours[`${item.id}`].secondary = "#FFFFFF";
                    item_colours[`${item.id}`].tertiary = "#FFFFFF";
                    (window as any).Blockly.ColoursInit(Object.assign((window as any).Blockly.Colours, item_colours));
                    let message: any = [];
                    message[`${"toolbox_" + item.id}`] = item.title;
                    (window as any).Blockly.Msg = Object.assign(message, (window as any).Blockly.Msg);
                    item.blocks.forEach(function (blocks: any, blocks_index: any, blocks_array: any) {
                        if (blocks.name) { // 仅保留设置了积木数据
                            let template_parameter = "";
                            if (blocks.function.args0.length > 0) {
                                blocks.function.args0.forEach(function (parameter: any, parameter_index: any, parameter_array: any) {
                                    if (parameter.type === "input_value" && parameter.check === "String") {
                                        template_parameter += '<value name="' + parameter.name + '"><shadow type="math_text"><field name="TEXT"><param name="value">' + parameter.default + '</param></field></shadow></value>'
                                    }
                                    if (parameter.type === "input_value" && parameter.check === "Number") {
                                        template_parameter += '<value name="' + parameter.name + '"><shadow type="math_number"><field name="NUM"><param name="value">' + parameter.default + '</param><param name="minimum">' + parameter.min + '</param><param name="maximum">' + parameter.max + '</param><param name="precision">' + parameter.precision + '</param></field></shadow></value>'
                                    }
                                });
                            }
                            blocks.template = '<block disabled="' + blocks.disabled + '"  type="' + blocks.name + '" id="' + blocks.name + '">' + template_parameter + '</block>';
                            let init: any = [];
                            init[`${blocks.name}`] = {
                                init: function () {
                                    blocks.function.id = blocks.name;
                                    blocks.function.category = item.id;
                                    blocks.function.extensions = ["colours_" + item.id];
                                    blocks.function.inputsInline = true;
                                    if (!blocks.function.output) {
                                        // 如果不是输出类型，且不是事件类型
                                        if (blocks.function.shapeType !== "event") {
                                            blocks.function.previousStatement = null;
                                            blocks.function.nextStatement = null;
                                        }
                                    }
                                    if (blocks.function.output) {
                                        // 如果是输出类型
                                        blocks.function.outputShape = 2;
                                    }
                                    this.jsonInit(blocks.function);
                                },
                                onchange: function (e: any){
                                    // 积木事件
                                }
                            }
                            Object.assign((window as any).Blockly.Blocks, init);
                            let code: any = [];
                            code[`${blocks.name}`] = function (a: any) {
                                let format_code: any = "";
                                let code_arg: any = {}
                                if (blocks.function.output) {
                                    if (blocks.function.args0.length > 0) {
                                        blocks.function.args0.forEach(function (arg: any, arg_index: any, arg_array: any) {
                                            if (arg.type === "field_down") {
                                                code_arg[`${arg.name}`] = arg.check === "Number" ? a.getFieldValue(arg.name) : '"' + a.getFieldValue(arg.name) + '"';
                                            }
                                            if (arg.type === "input_value") {
                                                code_arg[`${arg.name}`] = (window as any).Blockly.Python.valueToCode(a, arg.name, (window as any).Blockly.Python.ORDER_NONE)
                                            }
                                        });
                                        format_code = [formatString(blocks.code, code_arg).replace(/'/g, '"'), (window as any).Blockly.Python.ORDER_FUNCTION_CALL];
                                    } else {
                                        format_code = [blocks.code, (window as any).Blockly.Python.ORDER_FUNCTION_CALL];
                                    }
                                } else if (blocks.function.shapeType) {
                                    if (blocks.function.args0.length > 0) {
                                        blocks.function.args0.forEach(function (arg: any, arg_index: any, arg_array: any) {
                                            if (arg.type === "field_down") {
                                                code_arg[`${arg.name}`] = a.getFieldValue(arg.name);
                                            }
                                            if (arg.type === "input_value") {
                                                code_arg[`${arg.name}`] = (window as any).Blockly.Python.valueToCode(a, arg.name, (window as any).Blockly.Python.ORDER_NONE)
                                            }
                                        });
                                        code_arg["code"] = (window as any).Blockly.Python.genFunction(a) || (window as any).Blockly.Python.PASS;
                                        format_code = formatString(blocks.code, code_arg).replace(/'/g, '"');
                                    } else {
                                        code_arg["code"] = (window as any).Blockly.Python.genFunction(a) || (window as any).Blockly.Python.PASS;
                                        format_code = formatString(blocks.code, code_arg).replace(/'/g, '"');
                                    }
                                } else {
                                    if (blocks.function.args0.length > 0) {
                                        blocks.function.args0.forEach(function (arg: any, arg_index: any, arg_array: any) {
                                            if (arg.type === "field_down") {
                                                code_arg[`${arg.name}`] = arg.check === "Number" ? a.getFieldValue(arg.name) : '"' + a.getFieldValue(arg.name) + '"';
                                            }
                                            if (arg.type === "input_value") {
                                                code_arg[`${arg.name}`] = (window as any).Blockly.Python.valueToCode(a, arg.name, (window as any).Blockly.Python.ORDER_NONE)
                                            }
                                        });
                                        format_code = formatString(blocks.code, code_arg).replace(/'/g, '"');
                                    } else {
                                        format_code = blocks.code;
                                    }
                                }
                                return format_code;
                            }
                            Object.assign((window as any).Blockly.Python, code);
                        }
                    });
                    toolbox.push({
                        category: { id: item.id, name: "toolbox_" + item.id, title: item.title },
                        blocks: item.blocks
                    });
                });
                (window as any).Blockly.BlockSvg.prototype.showHelp = function () {
                    console.log("新手帮助");
                };
                (window as any).Blockly.FieldDown.prototype.triggerPop = function(a: any){
                    Editor_Dom.getAudioManager().play("window_popup");
                };
                (window as any).Blockly.FieldColour.prototype.triggerPop = function() {
                    Editor_Dom.getAudioManager().play("window_popup");
                };
                (window as any).Blockly.FieldNumber.prototype.triggerPop = function(){
                    Editor_Dom.getAudioManager().play("window_popup");
                };
                (window as any).Blockly.alert = function(a: any, b: any){
                    ElMessage({
                        message: a,
                        type: "warning",
                        customClass: "studio"
                    });
                    b&&b();
                };
                (window as any).Blockly.confirm = function(a: any, b: any){
                    ElMessageBox.confirm(a, "", {
                        customClass:"studio",
                        confirmButtonText: "确定",
                        confirmButtonClass: "studio",
                        showCancelButton: false,
                        type: "warning"
                    }).then(() => {
                        b(true);
                    }).catch(() => {});
                };
                (window as any).Blockly.prompt = function(a: any, b: any, c: any, d: any, e: any){
                    ElMessageBox.prompt(a, "", {
                        customClass:"studio",
                        closeOnClickModal: false,
                        confirmButtonText: "确定",
                        confirmButtonClass: "studio",
                        showCancelButton: false,
                        inputPattern: /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                        inputErrorMessage: (window as any).Blockly.Msg.VARIABLE_INVAILD
                    }).then(({ value }: any) => {
                        c(value,b);
                    }).catch(() => {});
                };
                toolbox = toolbox.concat((window as any).Blockly.Mentor.ToolBox);
                editor.value.options.toolbox = (window as any).Blockly.Mentor.InitToolBox(toolbox);
                Editor_Dom = (window as any).Blockly.inject((EditorBox as any).value, editor.value.options);
                if(editor.value.content === ""){
                    editor.value.content = '<xml><block type="robot_on_start" id="IHaPSqHhBBYOmqiUn7Dz" deletable="false" x="255" y="99"></block></xml>';
                }
                let start_xml = (window as any).Blockly.Xml.textToDom(editor.value.content);
                (window as any).Blockly.Xml.clearWorkspaceAndLoadFromXml(start_xml, Editor_Dom);
                Editor_Dom.clearUndo();
                Editor_Dom.undoStack_ = [];

                // 监听快捷键
                document.onkeydown = function(e) {
                    if(e.ctrlKey && e.key === "s"){
                        if(props.item.path === props.page.header.project.tabs.value){
                            let xml: any = (window as any).Blockly.Xml.domToText((window as any).Blockly.Xml.workspaceToDom(Editor_Dom));
                            (window as any).go.StartWindows.Api.UpdateProjectFile(props.item.path, xml).then((err: any)=>{
                                if(err){
                                    ElMessage({
                                        message: "保存失败，请重新尝试",
                                        type: "warning",
                                        customClass: "studio"
                                    });
                                }
                            });
                        }
                    }
                }
            }
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
.blocks-editor{
    width: 100%;
    height: 100%;
}
.blocks-editor .editor{
    width: 100%;
    height: 100%;
}
</style>
