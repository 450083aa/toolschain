'use strict';

Blockly.Blocks.robot_on_start = {
    init: function () {
        this.jsonInit({
            id: "robot_on_start",
            message0: Blockly.Msg.toolbox_robot_on_start,
            message1: "%1",
            args1: [{type: "input_statement", name: "SUBSTACK"}],
            deletable: false,
            inputsInline: true,
            extensions: ["colours_system"],
            shapeType: "event"
        })
    }
};

Blockly.Blocks.set_world_action = {
    init: function () {
        this.jsonInit({
            id: "set_world_action",
            message0: Blockly.Msg.set_world_action,
            args0: [{
                type: "input_value",
                name: "name",
                check: "String"
            },{
                type: "input_value",
                name: "action",
                check: "String"
            }],
            category: Blockly.Categories.world,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_world"]
        })
    }
}

Blockly.Blocks.set_world_move = {
    init: function () {
        this.jsonInit({
            id: "set_world_move",
            message0: Blockly.Msg.set_world_move,
            args0: [{
                type: "input_value",
                name: "name",
                check: "String"
            },{
                type: "field_down",
                name: "axis",
                check: "String",
                options: [
                    [
                        "x轴",
                        "x"
                    ],
                    [
                        "y轴",
                        "y"
                    ],
                    [
                        "z轴",
                        "z"
                    ]
                ]
            },{
                type: "input_value",
                name: "rice",
                check: "Number"
            }],
            category: Blockly.Categories.world,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_world"]
        })
    }
}

Blockly.Blocks.set_world_angle = {
    init: function () {
        this.jsonInit({
            id: "set_world_angle",
            message0: Blockly.Msg.set_world_angle,
            args0: [{
                type: "input_value",
                name: "name",
                check: "String"
            },{
                type: "field_down",
                name: "axis",
                check: "String",
                options: [
                    [
                        "x轴",
                        "x"
                    ],
                    [
                        "y轴",
                        "y"
                    ],
                    [
                        "z轴",
                        "z"
                    ]
                ]
            },{
                type: "input_value",
                name: "angle",
                check: "Number"
            }],
            category: Blockly.Categories.world,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_world"]
        })
    }
}

Blockly.Blocks.set_camera = {
    init: function () {
        this.jsonInit({
            id: "set_camera",
            message0: Blockly.Msg.set_camera,
            args0: [{
                type: "field_down",
                name: "type",
                check: "String",
                options: [
                    [
                        "USB摄像头",
                        "usb"
                    ],
                    [
                        "MIPI摄像头",
                        "mipi"
                    ],
                    [
                        "RGBD摄像头",
                        "rgbd"
                    ]
                ]
            }],
            category: Blockly.Categories.ai,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_ai"]
        })
    }
};

Blockly.Blocks.set_model = {
    init: function () {
        this.jsonInit({
            id: "set_model",
            message0: Blockly.Msg.set_model,
            args0: [{
                type: "field_down",
                name: "type",
                check: "String",
                options: [
                    [
                        "目标检测",
                        "fcos"
                    ]
                ]
            }],
            category: Blockly.Categories.ai,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_ai"]
        })
    }
};
Blockly.Blocks.vision_event = {
    init: function () {
        this.jsonInit({
            id: "vision_event",
            message0: Blockly.Msg.vision_event,
            message1: "%1",
            args0: [{
                type: "input_value",
                name: "info",
                check: "String"
            }],
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            category: Blockly.Categories.ai,
            shapeType: "event",
            inputsInline: true,
            extensions: ["colours_ai"]
        })
    }
}
Blockly.Blocks.robot_wait = {
    init: function () {
        this.jsonInit({
            id: "robot_wait",
            message0: Blockly.Msg.robot_wait,
            args0: [{
                type: "input_value",
                name: "second",
                check: "Number"
            }],
            category: Blockly.Categories.control,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_control"]
        })
    }
};
Blockly.Blocks.robot_repeat = {
    init: function () {
        this.jsonInit({
            id: "robot_repeat",
            message0: Blockly.Msg.robot_repeat,
            message1: "%1",
            lastDummyAlign2: "RIGHT",
            args0: [{
                type: "input_value",
                name: "TIMES",
                check: "Number"
            }],
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            category: Blockly.Categories.control,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_control"]
        })
    }
};
Blockly.Blocks.robot_forever = {
    init: function () {
        this.jsonInit({
            id: "robot_forever",
            message0: Blockly.Msg.robot_forever,
            message1: "%1",
            lastDummyAlign2: "RIGHT",
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            category: Blockly.Categories.control,
            previousStatement: null,
            inputsInline: true,
            extensions: ["colours_control"]
        })
    }
};
Blockly.Blocks.robot_if = {
    init: function () {
        this.jsonInit({
            type: "control_if",
            message0: Blockly.Msg.robot_if,
            message1: "%1",
            args0: [{
                type: "input_value",
                name: "CONDITION",
                check: "Boolean"
            }],
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            category: Blockly.Categories.control,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_control"]
        })
    }
};
Blockly.Blocks.robot_if_else = {
    init: function () {
        this.jsonInit({
            type: "control_if_else",
            message0: Blockly.Msg.robot_if_else,
            message1: "%1",
            message2: Blockly.Msg.toolbox_else,
            message3: "%1",
            args0: [{
                type: "input_value",
                name: "CONDITION",
                check: "Boolean"
            }],
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            args3: [{
                type: "input_statement",
                name: "SUBSTACK2"
            }],
            category: Blockly.Categories.control,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_control"]
        })
    }
};
Blockly.Blocks.robot_repeat_until = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.robot_repeat_until,
            message1: "%1",
            lastDummyAlign2: "RIGHT",
            args0: [{
                type: "input_value",
                name: "CONDITION",
                check: "Boolean"
            }],
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            category: Blockly.Categories.control,
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            extensions: ["colours_control"]
        })
    }
};
Blockly.Blocks.robot_operator_addition = {
    init: function () {
        this.jsonInit({
            message0: "%1 + %2",
            args0: [{
                type: "input_value",
                name: "NUM1",
                check: "Number"
            }, {
                type: "input_value",
                name: "NUM2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_subtraction = {
    init: function () {
        this.jsonInit({
            message0: "%1 - %2",
            args0: [{
                type: "input_value",
                name: "NUM1",
                check: "Number"
            }, {
                type: "input_value",
                name: "NUM2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_multiplication = {
    init: function () {
        this.jsonInit({
            message0: "%1 * %2",
            args0: [{
                type: "input_value",
                name: "NUM1",
                check: "Number"
            }, {
                type: "input_value",
                name: "NUM2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_division = {
    init: function () {
        this.jsonInit({
            message0: "%1 / %2",
            args0: [{
                type: "input_value",
                name: "NUM1",
                check: "Number"
            }, {
                type: "input_value",
                name: "NUM2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_random_number = {
    init: function () {
        this.jsonInit({
            message0: "在%1到%2间随机选一个数值",
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_round = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.robot_operator_round,
            args0: [{
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_mod = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.robot_operator_mod,
            args0: [{
                type: "input_value",
                name: "NUM1",
                check: "Number"
            }, {
                type: "input_value",
                name: "NUM2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_equal = {
    init: function () {
        this.jsonInit({
            message0: "%1 == %2",
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Number"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_not_equal = {
    init: function () {
        this.jsonInit({
            message0: "%1 != %2",
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Number"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_lt = {
    init: function () {
        this.jsonInit({
            message0: "%1 < %2",
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Number"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_lt_equal = {
    init: function () {
        this.jsonInit({
            message0: "%1 <= %2",
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Number"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_gt = {
    init: function () {
        this.jsonInit({
            message0: "%1 > %2",
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Number"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_gt_equal = {
    init: function () {
        this.jsonInit({
            message0: "%1 >= %2",
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Number"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Number"
            }],
            category: Blockly.Categories.operator,
            inputsInline: true,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_and = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.robot_operator_and,
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Boolean"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Boolean"
            }],
            category: Blockly.Categories.operator,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_or = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.robot_operator_or,
            args0: [{
                type: "input_value",
                name: "OPERAND1",
                check: "Boolean"
            }, {
                type: "input_value",
                name: "OPERAND2",
                check: "Boolean"
            }],
            category: Blockly.Categories.operator,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};
Blockly.Blocks.robot_operator_not = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.robot_operator_not,
            args0: [{
                type: "input_value",
                name: "OPERAND",
                check: "Boolean"
            }],
            category: Blockly.Categories.operator,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_operator"]
        })
    }
};

Blockly.Constants = {};

Blockly.Blocks.math = {};
Blockly.Blocks.math_whole_number = {
    init: function () {
        this.jsonInit({
            message0: "%1",
            args0: [{
                type: "field_number",
                name: "NUM",
                min: 0,
                precision: 1
            }],
            output: "Number",
            colour: Blockly.Colours.textField,
            colourSecondary: Blockly.Colours.textField,
            colourTertiary: Blockly.Colours.textField
        })
    }
};
Blockly.Blocks.math_positive_number = {
    init: function () {
        this.jsonInit({
            message0: "%1",
            args0: [{
                type: "field_number",
                name: "NUM",
                min: 0
            }],
            output: "Number",
            colour: Blockly.Colours.textField,
            colourSecondary: Blockly.Colours.textField,
            colourTertiary: Blockly.Colours.textField
        })
    }
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "math_number",
        message0: "%1",
        args0: [{
            type: "field_number",
            name: "NUM",
            value: 0
        }],
        output: "Number",
        style: "math_blocks",
        extensions: ["parent_tooltip_when_inline"]
    },
    {
        type: "colour_picker",
        message0: "%1",
        args0: [{
            type: "field_colour",
            name: "COLOUR",
            colour: "#ff0000"
        }],
        output: "Colour",
        style: "colour_blocks",
        extensions: ["parent_tooltip_when_inline"]
    }
]);

Blockly.Blocks.data = {};
Blockly.Constants.Data = {};
Blockly.Blocks.data_setvariableto = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_setvariableto,
            args0: [{
                type: "field_variable",
                name: "VARIABLE"
            }, {
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            category: Blockly.Categories.data,
            extensions: ["colours_data"]
        })
    }
};
Blockly.Blocks.data_changevariableby = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_changevariableby,
            args0: [{
                type: "field_variable",
                name: "VARIABLE"
            }, {
                type: "input_value",
                name: "VALUE"
            }],
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            category: Blockly.Categories.data,
            extensions: ["colours_data"]
        })
    }
};
Blockly.Blocks.data_showvariable = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_showvariable,
            args0: [{
                type: "field_variable",
                name: "VARIABLE"
            }],
            previousStatement: null,
            nextStatement: null,
            category: Blockly.Categories.data,
            colour: Blockly.Colours.data.primary,
            colourSecondary: Blockly.Colours.data.secondary,
            colourTertiary: Blockly.Colours.data.tertiary
        })
    }
};
Blockly.Blocks.data_hidevariable = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_hidevariable,
            args0: [{
                type: "field_variable",
                name: "VARIABLE"
            }],
            previousStatement: null,
            nextStatement: null,
            category: Blockly.Categories.data,
            colour: Blockly.Colours.data.primary,
            colourSecondary: Blockly.Colours.data.secondary,
            colourTertiary: Blockly.Colours.data.tertiary
        })
    }
};
Blockly.Blocks.data_listindexall = {
    init: function () {
        this.jsonInit({
            message0: "%1",
            args0: [{
                type: "field_numberdropdown",
                name: "INDEX",
                value: "1",
                min: 1,
                precision: 1,
                options: [["1", "1"], ["last", "last"], ["all", "all"]]
            }],
            category: Blockly.Categories.data,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "String",
            extensions: ["colours_textfield"]
        })
    }
};
Blockly.Blocks.data_listindexrandom = {
    init: function () {
        this.jsonInit({
            message0: "%1",
            args0: [{
                type: "field_numberdropdown",
                name: "INDEX",
                value: "1",
                min: 1,
                precision: 1,
                options: [["1", "1"], ["last", "last"], ["random", "random"]]
            }],
            category: Blockly.Categories.data,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "String",
            extensions: ["colours_textfield"]
        })
    }
};
Blockly.Blocks.data_addtolist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_addtolist,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }, {
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_copytolist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_copytolist,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }, {
                type: "input_value",
                name: "VALUE",
                check: "String"
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_deleteoflist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_deleteoflist,
            args0: [{
                type: "input_value",
                name: "INDEX",
                check: "Number"
            }, {
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_deletealloflist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_deleteoption,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }, {
                type: "field_dropdown",
                name: "OPTIONS",
                options: [[Blockly.Msg.toolbox_data_deleteoption_all, "clear"], [Blockly.Msg.toolbox_data_deleteoption_last, "pop"]]
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_deleteoption = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_deleteoption,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }, {
                type: "field_dropdown",
                name: "OPTION",
                options: [[Blockly.Msg.toolbox_data_deleteoption_all, "clear"], [Blockly.Msg.toolbox_data_deleteoption_last, "pop"]]
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_indexof_list = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_indexof_list,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }, {
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }],
            category: Blockly.Categories.data_list,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_insertatlist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_insertatlist,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }, {
                type: "input_value",
                name: "INDEX",
                check: "Number"
            }, {
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_replaceitemoflist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_replaceitemoflist,
            args0: [{
                type: "input_value",
                name: "INDEX",
                check: "Number"
            }, {
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }, {
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_itemoflist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_itemoflist,
            args0: [{
                type: "input_value",
                name: "INDEX",
                check: "Number"
            }, {
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            output: "Number",
            category: Blockly.Categories.data_list,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_lengthoflist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_lengthoflist,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_list,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_listcontainsitem = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_listcontainsitem,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }, {
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }],
            category: Blockly.Categories.data_list,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.HEXAGONAL,
            output: "Boolean",
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_showlist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_showlist,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_hidelist = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_hidelist,
            args0: [{
                type: "field_variable",
                name: "LIST",
                variableTypes: [Blockly.LIST_VARIABLE_TYPE],
                defaultType: Blockly.LIST_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_list,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_list"]
        })
    }
};
Blockly.Blocks.data_pid = {
    init: function () {
        this.jsonInit({
            message0: "%1",
            args0: [{
                type: "field_variable_getter",
                text: "",
                name: "PID",
                variableType: Blockly.PID_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_pid,
            extensions: ["colours_data_pid"],
            output: "Object"
        })
    }
};
Blockly.Blocks.data_setpiderror = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_setpiderror,
            args0: [{
                type: "field_variable",
                name: "PID"
            }, {
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }],
            category: Blockly.Categories.data_pid,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_pid"]
        })
    }
};
Blockly.Blocks.data_changepid = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_changepid,
            args0: [{
                type: "field_variable",
                name: "PID"
            }, {
                type: "input_value",
                name: "KP",
                check: "Number"
            }, {
                type: "input_value",
                name: "KI",
                check: "Number"
            }, {
                type: "input_value",
                name: "KD",
                check: "Number"
            }],
            category: Blockly.Categories.data_pid,
            previousStatement: null,
            nextStatement: null,
            inputsInline: !0,
            extensions: ["colours_data_pid"]
        })
    }
};
Blockly.Blocks.data_pidoutput = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.toolbox_data_pidoutput,
            args0: [{
                type: "field_variable",
                text: "",
                name: "PID",
                variableType: Blockly.PID_VARIABLE_TYPE
            }],
            category: Blockly.Categories.data_pid,
            inputsInline: !0,
            outputShape: Blockly.OUTPUT_SHAPE.ROUND,
            output: "Number",
            extensions: ["colours_data_pid"]
        })
    }
};
Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_VARIABLE_MIXIN = {
    customContextMenu: function (a, b) {
        var c = b.type;
        if (!this.isCollapsed())
            if (this.isInFlyout) {
                b = {
                    text: c === Blockly.LIST_VARIABLE_BLOCK_TYPE ? Blockly.Msg.RENAME_LIST : Blockly.Msg.RENAME_VARIABLE,
                    enabled: !0,
                    callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this)
                };
                var d = c === Blockly.LIST_VARIABLE_BLOCK_TYPE ? this.getField(Blockly.LIST_VARIABLE_FIEID).text_ : this.getField(Blockly.VARIABLE_FIEID).text_;
                c = {
                    text: c === Blockly.LIST_VARIABLE_BLOCK_TYPE ? Blockly.Msg.DELETE_LIST.replace("%1", d) : Blockly.Msg.DELETE_VARIABLE.replace("%1", d),
                    enabled: !0,
                    callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this)
                };
                a.push(b);
                a.push(c)
            } else
                for (b = c === Blockly.LIST_VARIABLE_BLOCK_TYPE ? this.workspace.getVariablesOfType(Blockly.LIST_VARIABLE_TYPE) : this.workspace.getVariablesOfType(Blockly.VARIABLE_TYPE),
                         c = 0; c < b.length; c++)
                    d = {
                        enabled: !0
                    },
                        d.text = b[c].name,
                        d.callback = Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(this, b[c].id_),
                        a.push(d)
    }
};
Blockly.Extensions.registerMixin("contextMenu_getVariableBlock", Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_VARIABLE_MIXIN);
Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY = function (a, b) {
    return function () {
        var c;
        (c = a.type === Blockly.LIST_VARIABLE_BLOCK_TYPE ? a.getField(Blockly.LIST_VARIABLE_FIEID) : a.getField(Blockly.VARIABLE_FIEID)) || console.log("Tried to get a variable field on the wrong type of block.");
        c.setValue(b)
    }
};
Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
        var b = a.workspace;
        var c = a.type === Blockly.LIST_VARIABLE_BLOCK_TYPE ? a.getField(Blockly.LIST_VARIABLE_FIEID).getVariable() : a.getField(Blockly.VARIABLE_FIEID).getVariable();
        Blockly.Variables.renameVariable(b, c)
    }
};
Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
        var b = a.workspace;
        var c = a.type === Blockly.LIST_VARIABLE_BLOCK_TYPE ? a.getField(Blockly.LIST_VARIABLE_FIEID).getVariable() : a.getField(Blockly.VARIABLE_FIEID).getVariable();
        b.deleteVariableById(c.getId())
    }
};

Blockly.Blocks.variables = {};
Blockly.Constants.Variables = {};
Blockly.Constants.Variables.HUE = 330;
Blockly.defineBlocksWithJsonArray([{
    type: "variables_get",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
}, {
    type: "data_variable",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VARIABLE",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter", "colours_data"]
}, {
    type: "data_listcontents",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "LIST",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
        variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        defaultType: Blockly.LIST_VARIABLE_TYPE
    }],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["colours_data_list"]
}, {
    type: "variables_set",
    message0: "set %1 to %2",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
}]);
Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
    customContextMenu: function (a) {
        if (!this.isInFlyout) {
            if ("variables_get" == this.type)
                var b = "variables_set"
                    , c = Blockly.Msg.VARIABLES_GET_CREATE_SET;
            else
                "data_variable" == this.type ? (b = "data_setvariableto",
                    c = Blockly.Msg.VARIABLES_GET_CREATE_SET) : (b = "variables_get",
                    c = Blockly.Msg.VARIABLES_SET_CREATE_GET);
            var d = {
                enabled: 0 < this.workspace.remainingCapacity()
            }
                , e = this.getField("VAR").getText();
            d.text = c.replace("%1", e);
            c = Blockly.utils.xml.createElement("field");
            c.setAttribute("name", "VAR");
            c.appendChild(Blockly.utils.xml.createTextNode(e));
            e = Blockly.utils.xml.createElement("block");
            e.setAttribute("type", b);
            e.appendChild(c);
            d.callback = Blockly.ContextMenu.callbackFactory(this, e);
            a.push(d)
        } else if ("data_variable" == this.type || "variables_get" == this.type || "variables_get_reporter" == this.type)
            b = {
                text: Blockly.Msg.RENAME_VARIABLE,
                enabled: !0,
                callback: Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)
            }/*,
                e = this.getField("VAR").getText(),
                d = {
                    text: Blockly.Msg.DELETE_VARIABLE.replace("%1", e),
                    enabled: !0,
                    callback: Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)
                },
                a.unshift(b),
                a.unshift(d)*/
    }
};
Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
        var b = a.workspace
            , c = a.getField("VAR").getVariable();
        Blockly.Variables.renameVariable(b, c)
    }
};
Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
        var b = a.workspace
            , c = a.getField("VAR").getVariable();
        b.deleteVariableById(c.getId());
        b.refreshToolboxSelection()
    }
};
Blockly.Extensions.registerMixin("contextMenu_variableSetterGetter", Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
Blockly.Constants.VariablesDynamic = {};
Blockly.Constants.VariablesDynamic.HUE = 310;
Blockly.defineBlocksWithJsonArray([{
    type: "variables_get_dynamic",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_dynamic_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableDynamicSetterGetter"]
}, {
    type: "variables_set_dynamic",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_dynamic_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableDynamicSetterGetter"]
}]);
Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
    customContextMenu: function (a) {
        if (!this.isInFlyout) {
            var b = this.getFieldValue("VAR");
            var c = this.workspace.getVariableById(b).type;
            if ("variables_get_dynamic" == this.type) {
                b = "variables_set_dynamic";
                var d = Blockly.Msg.VARIABLES_GET_CREATE_SET
            } else
                b = "variables_get_dynamic",
                    d = Blockly.Msg.VARIABLES_SET_CREATE_GET;
            var e = {
                enabled: 0 < this.workspace.remainingCapacity()
            }
                , f = this.getField("VAR").getText();
            e.text = d.replace("%1", f);
            d = Blockly.utils.xml.createElement("field");
            d.setAttribute("name", "VAR");
            d.setAttribute("variabletype", c);
            d.appendChild(Blockly.utils.xml.createTextNode(f));
            f = Blockly.utils.xml.createElement("block");
            f.setAttribute("type", b);
            f.appendChild(d);
            e.callback = Blockly.ContextMenu.callbackFactory(this, f);
            a.push(e)
        } else if ("variables_get_dynamic" == this.type || "variables_get_reporter_dynamic" == this.type)
            b = {
                text: Blockly.Msg.RENAME_VARIABLE,
                enabled: !0,
                callback: Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)
            },
                f = this.getField("VAR").getText(),
                e = {
                    text: Blockly.Msg.DELETE_VARIABLE.replace("%1", f),
                    enabled: !0,
                    callback: Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)
                },
                a.unshift(b),
                a.unshift(e)
    },
    onchange: function (a) {
        a = this.getFieldValue("VAR");
        a = Blockly.Variables.getVariable(this.workspace, a);
        "variables_get_dynamic" == this.type ? this.outputConnection.setCheck(a.type) : this.getInput("VALUE").connection.setCheck(a.type)
    }
};
Blockly.Constants.VariablesDynamic.RENAME_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
        var b = a.workspace
            , c = a.getField("VAR").getVariable();
        Blockly.Variables.renameVariable(b, c)
    }
};
Blockly.Constants.VariablesDynamic.DELETE_OPTION_CALLBACK_FACTORY = function (a) {
    return function () {
        var b = a.workspace
            , c = a.getField("VAR").getVariable();
        b.deleteVariableById(c.getId());
        b.refreshToolboxSelection()
    }
};
Blockly.Extensions.registerMixin("contextMenu_variableDynamicSetterGetter", Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);

Blockly.Blocks.texts = {};
Blockly.Constants.Text = {};
Blockly.Constants.Text.HUE = 160;
Blockly.defineBlocksWithJsonArray([{
    type: "text",
    message0: "%1",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: ""
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
}, {
    type: "math_text",
    message0: "%1",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "",
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "text_multiline",
    message0: "%1 %2",
    args0: [{
        type: "field_image",
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",
        width: 12,
        height: 17,
        alt: "\u00b6"
    }, {
        type: "field_multilinetext",
        name: "TEXT",
        text: ""
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "text_join",
    message0: "",
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator"
}, {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [{
        type: "input_dummy"
    }, {
        type: "input_statement",
        name: "STACK"
    }],
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1
}, {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1
}, {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_TEXT_APPEND_VARIABLE}"
    }, {
        type: "input_value",
        name: "TEXT"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    extensions: ["text_append_tooltip"]
}, {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Number",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}"
}, {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Boolean",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
}, {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "String"
    }, {
        type: "field_dropdown",
        name: "END",
        options: [["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"], ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]]
    }, {
        type: "input_value",
        name: "FIND",
        check: "String"
    }],
    output: "Number",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"]
}, {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "String"
    }, {
        type: "field_dropdown",
        name: "WHERE",
        options: [["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"], ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"], ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"], ["%{BKY_TEXT_CHARAT_LAST}", "LAST"], ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]]
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator"
}]);
Blockly.Blocks.text_getSubstring = {
    init: function () {
        this.WHERE_OPTIONS_1 = [[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]];
        this.WHERE_OPTIONS_2 = [[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]];
        this.setStyle("text_blocks");
        this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        this.appendDummyInput("AT1");
        this.appendDummyInput("AT2");
        Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
        this.setInputsInline(!0);
        this.setOutput(!0, "String");
        this.updateAt_(1, !0);
        this.updateAt_(2, !0);
    },
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation")
            , b = this.getInput("AT1").type == Blockly.INPUT_VALUE;
        a.setAttribute("at1", b);
        b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
        a.setAttribute("at2", b);
        return a
    },
    domToMutation: function (a) {
        var b = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.updateAt_(1, b);
        this.updateAt_(2, a)
    },
    updateAt_: function (a, b) {
        this.removeInput("AT" + a);
        this.removeInput("ORDINAL" + a, !0);
        b ? (this.appendValueInput("AT" + a).setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + a);
        2 == a && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput("TAIL", !0),
            this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));
        var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (c) {
                var d = "FROM_START" == c || "FROM_END" == c;
                if (d != b) {
                    var f = this.getSourceBlock();
                    f.updateAt_(a, d);
                    f.setFieldValue(c, "WHERE" + a);
                    return null
                }
            }
        );
        this.getInput("AT" + a).appendField(c, "WHERE" + a);
        1 == a && (this.moveInputBefore("AT1", "AT2"),
        this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2"))
    }
};
Blockly.Blocks.text_changeCase = {
    init: function () {
        var a = [[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]];
        this.setStyle("text_blocks");
        this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "CASE");
        this.setOutput(!0, "String");
    }
};
Blockly.Blocks.text_trim = {
    init: function () {
        var a = [[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"], [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"], [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]];
        this.setStyle("text_blocks");
        this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "MODE");
        this.setOutput(!0, "String");
    }
};
Blockly.Blocks.text_print = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_PRINT_TITLE,
            args0: [{
                type: "input_value",
                name: "Boolean"
            }],
            previousStatement: null,
            nextStatement: null,
            style: "text_blocks",
        })
    }
};
Blockly.Blocks.text_prompt_ext = {
    init: function () {
        var a = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]];
        this.setStyle("text_blocks");
        var b = this;
        a = new Blockly.FieldDropdown(a, function (a) {
                b.updateType_(a)
            }
        );
        this.appendValueInput("TEXT").appendField(a, "TYPE");
        this.setOutput(!0, "String");
    },
    updateType_: function (a) {
        this.outputConnection.setCheck("NUMBER" == a ? "Number" : "String")
    },
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("type", this.getFieldValue("TYPE"));
        return a
    },
    domToMutation: function (a) {
        this.updateType_(a.getAttribute("type"))
    }
};
Blockly.Blocks.text_prompt = {
    init: function () {
        this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
        var a = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]]
            , b = this;
        this.setStyle("text_blocks");
        a = new Blockly.FieldDropdown(a, function (a) {
                b.updateType_(a)
            }
        );
        this.appendDummyInput().appendField(a, "TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(!1));
        this.setOutput(!0, "String");
    },
    updateType_: Blockly.Blocks.text_prompt_ext.updateType_,
    mutationToDom: Blockly.Blocks.text_prompt_ext.mutationToDom,
    domToMutation: Blockly.Blocks.text_prompt_ext.domToMutation
};
Blockly.Blocks.text_count = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_COUNT_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "SUB",
                check: "String"
            }, {
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "Number",
            inputsInline: !0,
            style: "text_blocks",
        })
    }
};
Blockly.Blocks.text_replace = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_REPLACE_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "String"
            }, {
                type: "input_value",
                name: "TO",
                check: "String"
            }, {
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "String",
            inputsInline: !0,
            style: "text_blocks",
        })
    }
};
Blockly.Blocks.text_reverse = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_REVERSE_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "String",
            inputsInline: !0,
            style: "text_blocks",
        })
    }
};
Blockly.Constants.Text.QUOTE_IMAGE_MIXIN = {
    QUOTE_IMAGE_LEFT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
    QUOTE_IMAGE_RIGHT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
    QUOTE_IMAGE_WIDTH: 12,
    QUOTE_IMAGE_HEIGHT: 12,
    quoteField_: function (a) {
        for (var b = 0, c; c = this.inputList[b]; b++)
            for (var d = 0, e; e = c.fieldRow[d]; d++)
                if (a == e.name) {
                    c.insertFieldAt(d, this.newQuote_(!0));
                    c.insertFieldAt(d + 2, this.newQuote_(!1));
                    return
                }
        console.warn('field named "' + a + '" not found in ' + this.toDevString())
    },
    newQuote_: function (a) {
        a = this.RTL ? !a : a;
        return new Blockly.FieldImage(a ? this.QUOTE_IMAGE_LEFT_DATAURI : this.QUOTE_IMAGE_RIGHT_DATAURI, this.QUOTE_IMAGE_WIDTH, this.QUOTE_IMAGE_HEIGHT, a ? "\u201c" : "\u201d")
    }
};
Blockly.Constants.Text.TEXT_QUOTES_EXTENSION = function () {
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    this.quoteField_("TEXT")
}
;
Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN = {
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("items", this.itemCount_);
        return a
    },
    domToMutation: function (a) {
        this.itemCount_ = parseInt(a.getAttribute("items"), 10);
        this.updateShape_()
    },
    decompose: function (a) {
        var b = a.newBlock("text_create_join_container");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
            var e = a.newBlock("text_create_join_item");
            e.initSvg();
            c.connect(e.previousConnection);
            c = e.nextConnection
        }
        return b
    },
    compose: function (a) {
        var b = a.getInputTargetBlock("STACK");
        for (a = []; b;)
            a.push(b.valueConnection_),
                b = b.nextConnection && b.nextConnection.targetBlock();
        for (b = 0; b < this.itemCount_; b++) {
            var c = this.getInput("ADD" + b).connection.targetConnection;
            c && -1 == a.indexOf(c) && c.disconnect()
        }
        this.itemCount_ = a.length;
        this.updateShape_();
        for (b = 0; b < this.itemCount_; b++)
            Blockly.Mutator.reconnect(a[b], this, "ADD" + b)
    },
    saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK");
        for (var b = 0; a;) {
            var c = this.getInput("ADD" + b);
            a.valueConnection_ = c && c.connection.targetConnection;
            b++;
            a = a.nextConnection && a.nextConnection.targetBlock()
        }
    },
    updateShape_: function () {
        this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));
        for (var a = 0; a < this.itemCount_; a++)
            if (!this.getInput("ADD" + a)) {
                var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
                0 == a && b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)
            }
        for (; this.getInput("ADD" + a);)
            this.removeInput("ADD" + a),
                a++
    }
};
Blockly.Constants.Text.TEXT_JOIN_EXTENSION = function () {
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(["text_create_join_item"]))
};
Blockly.Extensions.register("text_append_tooltip", Blockly.Extensions.buildTooltipWithFieldText("%{BKY_TEXT_APPEND_TOOLTIP}", "VAR"));
Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION = function () {
    var a = this;
};
Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN = {
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("at", !!this.isAt_);
        return a
    },
    domToMutation: function (a) {
        a = "false" != a.getAttribute("at");
        this.updateAt_(a)
    },
    updateAt_: function (a) {
        this.removeInput("AT", !0);
        this.removeInput("ORDINAL", !0);
        a && (this.appendValueInput("AT").setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX));
        Blockly.Msg.TEXT_CHARAT_TAIL && (this.removeInput("TAIL", !0),
            this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));
        this.isAt_ = a
    }
};
Blockly.Constants.Text.TEXT_CHARAT_EXTENSION = function () {
    this.getField("WHERE").setValidator(function (a) {
        a = "FROM_START" == a || "FROM_END" == a;
        a != this.isAt_ && this.getSourceBlock().updateAt_(a)
    });
    this.updateAt_(!0);
    var a = this;
};
Blockly.Extensions.register("text_indexOf_tooltip", Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION);
Blockly.Extensions.register("text_quotes", Blockly.Constants.Text.TEXT_QUOTES_EXTENSION);
Blockly.Extensions.registerMutator("text_join_mutator", Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN, Blockly.Constants.Text.TEXT_JOIN_EXTENSION);
Blockly.Extensions.registerMutator("text_charAt_mutator", Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN, Blockly.Constants.Text.TEXT_CHARAT_EXTENSION);

Blockly.Blocks.procedures = {};
Blockly.Blocks.procedures_defnoreturn = {
    init: function () {
        var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
        a.setSpellcheck(!1);
        this.appendDummyInput().appendField(Blockly.Msg.toolbox_procedures_definition_redefine.replace("%1", "")).appendField(a, "NAME").appendField("", "PARAMS");
        this.setStyle("procedure_blocks");
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.setStatements_(!0);
        this.statementConnection_ = null
    },
    setStatements_: function (a) {
        this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO),
        this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0),
            this.hasStatements_ = a)
    },
    updateParams_: function () {
        var a = "";
        this.arguments_.length && (a = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", "));
        Blockly.Events.disable();
        try {
            this.setFieldValue(a, "PARAMS")
        } finally {
            Blockly.Events.enable()
        }
    },
    mutationToDom: function (a) {
        var b = Blockly.utils.xml.createElement("mutation");
        a && b.setAttribute("name", this.getFieldValue("NAME"));
        for (var c = 0; c < this.argumentVarModels_.length; c++) {
            var d = Blockly.utils.xml.createElement("arg")
                , e = this.argumentVarModels_[c];
            d.setAttribute("name", e.name);
            d.setAttribute("varid", e.getId());
            a && this.paramIds_ && d.setAttribute("paramId", this.paramIds_[c]);
            b.appendChild(d)
        }
        this.hasStatements_ || b.setAttribute("statements", "false");
        return b
    },
    domToMutation: function (a) {
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        for (var b = 0, c; c = a.childNodes[b]; b++)
            if ("arg" == c.nodeName.toLowerCase()) {
                var d = c.getAttribute("name");
                c = c.getAttribute("varid") || c.getAttribute("varId");
                this.arguments_.push(d);
                c = Blockly.Variables.getOrCreateVariablePackage(this.workspace, c, d, "");
                null != c ? this.argumentVarModels_.push(c) : console.log("Failed to create a variable with name " + d + ", ignoring.")
            }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
        this.setStatements_("false" !== a.getAttribute("statements"))
    },
    decompose: function (a) {
        var b = Blockly.utils.xml.createElement("block");
        b.setAttribute("type", "procedures_mutatorcontainer");
        var c = Blockly.utils.xml.createElement("statement");
        c.setAttribute("name", "STACK");
        b.appendChild(c);
        for (var d = 0; d < this.arguments_.length; d++) {
            var e = Blockly.utils.xml.createElement("block");
            e.setAttribute("type", "procedures_mutatorarg");
            var f = Blockly.utils.xml.createElement("field");
            f.setAttribute("name", "NAME");
            var g = Blockly.utils.xml.createTextNode(this.arguments_[d]);
            f.appendChild(g);
            e.appendChild(f);
            f = Blockly.utils.xml.createElement("next");
            e.appendChild(f);
            c.appendChild(e);
            c = f
        }
        a = Blockly.Xml.domToBlock(b, a);
        "procedures_defreturn" == this.type ? a.setFieldValue(this.hasStatements_, "STATEMENTS") : a.removeInput("STATEMENT_INPUT");
        Blockly.Procedures.mutateCallers(this);
        return a
    },
    compose: function (a) {
        this.arguments_ = [];
        this.paramIds_ = [];
        this.argumentVarModels_ = [];
        for (var b = a.getInputTargetBlock("STACK"); b;) {
            var c = b.getFieldValue("NAME");
            this.arguments_.push(c);
            c = this.workspace.getVariable(c, "");
            this.argumentVarModels_.push(c);
            this.paramIds_.push(b.id);
            b = b.nextConnection && b.nextConnection.targetBlock()
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
        a = a.getFieldValue("STATEMENTS");
        if (null !== a && (a = "TRUE" == a,
        this.hasStatements_ != a))
            if (a)
                this.setStatements_(!0),
                    Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK"),
                    this.statementConnection_ = null;
            else {
                a = this.getInput("STACK").connection;
                if (this.statementConnection_ = a.targetConnection)
                    a = a.targetBlock(),
                        a.unplug(),
                        a.bumpNeighbours();
                this.setStatements_(!1)
            }
    },
    getProcedureDef: function () {
        return [this.getFieldValue("NAME"), this.arguments_, !1]
    },
    getVars: function () {
        return this.arguments_
    },
    getVarModels: function () {
        return this.argumentVarModels_
    },
    renameVarById: function (a, b) {
        var c = this.workspace.getVariableById(a);
        if ("" == c.type) {
            c = c.name;
            b = this.workspace.getVariableById(b);
            for (var d = !1, e = 0; e < this.argumentVarModels_.length; e++)
                this.argumentVarModels_[e].getId() == a && (this.arguments_[e] = b.name,
                    this.argumentVarModels_[e] = b,
                    d = !0);
            d && (this.displayRenamedVar_(c, b.name),
                Blockly.Procedures.mutateCallers(this))
        }
    },
    updateVarName: function (a) {
        for (var b = a.name, c = !1, d = 0; d < this.argumentVarModels_.length; d++)
            if (this.argumentVarModels_[d].getId() == a.getId()) {
                var e = this.arguments_[d];
                this.arguments_[d] = b;
                c = !0
            }
        c && (this.displayRenamedVar_(e, b),
            Blockly.Procedures.mutateCallers(this))
    },
    displayRenamedVar_: function (a, b) {
        this.updateParams_();
        if (this.mutator && this.mutator.isVisible())
            for (var c = this.mutator.workspace_.getAllBlocks(!1), d = 0, e; e = c[d]; d++)
                "procedures_mutatorarg" == e.type && Blockly.Names.equals(a, e.getFieldValue("NAME")) && e.setFieldValue(b, "NAME")
    },
    customContextMenu: function (a) {
        if (!this.isInFlyout) {

        }
    },
    callType_: "procedures_callnoreturn"
};
Blockly.Blocks.procedures_defreturn = {
    init: function () {
        var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
        a.setSpellcheck(!1);
        this.setAttribute("shapeType", "procedure");
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
        this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
        (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT && this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
        this.setStyle("procedure_blocks");
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.setStatements_(!0);
        this.statementConnection_ = null
    },
    setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    getProcedureDef: function () {
        return [this.getFieldValue("NAME"), this.arguments_, !0]
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    getVarModels: Blockly.Blocks.procedures_defnoreturn.getVarModels,
    renameVarById: Blockly.Blocks.procedures_defnoreturn.renameVarById,
    updateVarName: Blockly.Blocks.procedures_defnoreturn.updateVarName,
    displayRenamedVar_: Blockly.Blocks.procedures_defnoreturn.displayRenamedVar_,
    customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
    callType_: "procedures_callreturn"
};
Blockly.Blocks.procedures_definition_redefine = {
    init: function () {
        this.jsonInit({
            id: "procedures_definition_redefine",
            message0: Blockly.Msg.toolbox_procedures_definition_redefine,
            message1: "%1",
            args0: [{
                type: "input_value",
                name: "PROCEDURE_NAME",
                check: "String"
            }],
            args1: [{
                type: "input_statement",
                name: "SUBSTACK"
            }],
            nocopy: !0,
            shapeType: "procedure",
            category: Blockly.Categories.function,
            inputsInline: !0,
            extensions: ["colours_function"]
        })
    }
};
Blockly.Blocks.procedures_mutatorcontainer = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput("STACK");
        this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
        this.setStyle("procedure_blocks");
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
Blockly.Blocks.procedures_mutatorarg = {
    init: function () {
        var a = new Blockly.FieldTextInput(Blockly.Procedures.DEFAULT_ARG, this.validator_);
        a.oldShowEditorFn_ = a.showEditor_;
        a.showEditor_ = function () {
            this.createdVariables_ = [];
            this.oldShowEditorFn_()
        }
        ;
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(a, "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setStyle("procedure_blocks");
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.onFinishEditing_ = this.deleteIntermediateVars_;
        a.createdVariables_ = [];
        a.onFinishEditing_("x")
    },
    validator_: function (a) {
        var b = this.getSourceBlock()
            , c = Blockly.Mutator.findParentWs(b.workspace);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a)
            return null;
        for (var d = (b.workspace.targetWorkspace || b.workspace).getAllBlocks(!1), e = a.toLowerCase(), f = 0; f < d.length; f++)
            if (d[f].id != this.getSourceBlock().id) {
                var g = d[f].getFieldValue("NAME");
                if (g && g.toLowerCase() == e)
                    return null
            }
        if (b.isInFlyout)
            return a;
        (b = c.getVariable(a, "")) && b.name != a && c.renameVariableById(b.getId(), a);
        b || (b = c.createVariable(a, "")) && this.createdVariables_ && this.createdVariables_.push(b);
        return a
    },
    deleteIntermediateVars_: function (a) {
        var b = Blockly.Mutator.findParentWs(this.getSourceBlock().workspace);
        if (b)
            for (var c = 0; c < this.createdVariables_.length; c++) {
                var d = this.createdVariables_[c];
                d.name != a && b.deleteVariableById(d.getId())
            }
    }
};
Blockly.Blocks.procedures_callnoreturn = {
    init: function () {
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setStyle("procedure_blocks");
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null;
        this.previousEnabledState_ = !0
    },
    getProcedureCall: function () {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function (a, b) {
        Blockly.Names.equals(a, this.getProcedureCall()) && (this.setFieldValue(b, "NAME"),
            this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b)))
    },
    setProcedureParameters_: function (a, b) {
        var c = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace)
            , d = c && c.mutator && c.mutator.isVisible();
        d || (this.quarkConnections_ = {},
            this.quarkIds_ = null);
        if (b)
            if (a.join("\n") == this.arguments_.join("\n"))
                this.quarkIds_ = b;
            else {
                if (b.length != a.length)
                    throw RangeError("paramNames and paramIds must be the same length.");
                this.setCollapsed(!1);
                this.quarkIds_ || (this.quarkConnections_ = {},
                    this.quarkIds_ = []);
                c = this.rendered;
                this.rendered = !1;
                for (var e = 0; e < this.arguments_.length; e++) {
                    var f = this.getInput("ARG" + e);
                    f && (f = f.connection.targetConnection,
                        this.quarkConnections_[this.quarkIds_[e]] = f,
                    d && f && -1 == b.indexOf(this.quarkIds_[e]) && (f.disconnect(),
                        f.getSourceBlock().bumpNeighbours()))
                }
                this.arguments_ = [].concat(a);
                this.argumentVarModels_ = [];
                for (e = 0; e < this.arguments_.length; e++)
                    a = Blockly.Variables.getOrCreateVariablePackage(this.workspace, null, this.arguments_[e], ""),
                        this.argumentVarModels_.push(a);
                this.updateShape_();
                if (this.quarkIds_ = b)
                    for (e = 0; e < this.arguments_.length; e++)
                        b = this.quarkIds_[e],
                        b in this.quarkConnections_ && (f = this.quarkConnections_[b],
                        Blockly.Mutator.reconnect(f, this, "ARG" + e) || delete this.quarkConnections_[b]);
                (this.rendered = c) && this.render()
            }
    },
    updateShape_: function () {
        for (var a = 0; a < this.arguments_.length; a++) {
            var b = this.getField("ARGNAME" + a);
            if (b) {
                Blockly.Events.disable();
                try {
                    b.setValue(this.arguments_[a])
                } finally {
                    Blockly.Events.enable()
                }
            } else
                b = new Blockly.FieldLabel(this.arguments_[a]),
                    this.appendValueInput("ARG" + a).setAlign(Blockly.ALIGN_RIGHT).appendField(b, "ARGNAME" + a).init()
        }
        for (; this.getInput("ARG" + a);)
            this.removeInput("ARG" + a),
                a++;
        if (a = this.getInput("TOPROW"))
            this.arguments_.length ? this.getField("WITH") || (a.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"),
                a.init()) : this.getField("WITH") && a.removeField("WITH")
    },
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("name", this.getProcedureCall());
        for (var b = 0; b < this.arguments_.length; b++) {
            var c = Blockly.utils.xml.createElement("arg");
            c.setAttribute("name", this.arguments_[b]);
            a.appendChild(c)
        }
        return a
    },
    domToMutation: function (a) {
        var b = a.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), b);
        b = [];
        for (var c = [], d = 0, e; e = a.childNodes[d]; d++)
            "arg" == e.nodeName.toLowerCase() && (b.push(e.getAttribute("name")),
                c.push(e.getAttribute("paramId")));
        this.setProcedureParameters_(b, c)
    },
    getVarModels: function () {
        return this.argumentVarModels_
    },
    onchange: function (a) {
        if (this.workspace && !this.workspace.isFlyout && a.recordUndo)
            if (a.type == Blockly.Events.BLOCK_CREATE && -1 != a.ids.indexOf(this.id)) {
                var b = this.getProcedureCall();
                b = Blockly.Procedures.getDefinition(b, this.workspace);
                !b || b.type == this.defType_ && JSON.stringify(b.arguments_) == JSON.stringify(this.arguments_) || (b = null);
                if (!b) {
                    Blockly.Events.setGroup(a.group);
                    a = Blockly.utils.xml.createElement("xml");
                    b = Blockly.utils.xml.createElement("block");
                    b.setAttribute("type", this.defType_);
                    var c = this.getRelativeToSurfaceXY()
                        , d = c.y + 2 * Blockly.SNAP_RADIUS;
                    b.setAttribute("x", c.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1));
                    b.setAttribute("y", d);
                    c = this.mutationToDom();
                    b.appendChild(c);
                    c = Blockly.utils.xml.createElement("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(Blockly.utils.xml.createTextNode(this.getProcedureCall()));
                    b.appendChild(c);
                    a.appendChild(b);
                    Blockly.Xml.domToWorkspace(a, this.workspace);
                    Blockly.Events.setGroup(!1)
                }
            } else
                a.type == Blockly.Events.BLOCK_DELETE ? (b = this.getProcedureCall(),
                    b = Blockly.Procedures.getDefinition(b, this.workspace),
                b || (Blockly.Events.setGroup(a.group),
                    this.dispose(!0),
                    Blockly.Events.setGroup(!1))) : a.type == Blockly.Events.CHANGE && "disabled" == a.element && (b = this.getProcedureCall(),
                (b = Blockly.Procedures.getDefinition(b, this.workspace)) && b.id == a.blockId && ((b = Blockly.Events.getGroup()) && console.log("Saw an existing group while responding to a definition change"),
                    Blockly.Events.setGroup(a.group),
                    a.newValue ? (this.previousEnabledState_ = this.isEnabled(),
                        this.setEnabled(!1)) : this.setEnabled(this.previousEnabledState_),
                    Blockly.Events.setGroup(b)))
    },
    customContextMenu: function (a) {
        if (this.workspace.isMovable()) {

        }
    },
    defType_: "procedures_defnoreturn"
};
Blockly.Blocks.procedures_callreturn = {
    init: function () {
        this.appendDummyInput("TOPROW").appendField("", "NAME");
        this.setOutput(!0);
        this.setStyle("procedure_blocks");
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null;
        this.previousEnabledState_ = !0
    },
    getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters_: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,
    updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    getVarModels: Blockly.Blocks.procedures_callnoreturn.getVarModels,
    onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
    defType_: "procedures_defreturn"
};
Blockly.Blocks.procedures_ifreturn = {
    init: function () {
        this.appendValueInput("CONDITION").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setStyle("procedure_blocks");
        this.hasReturnValue_ = !0
    },
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("value", Number(this.hasReturnValue_));
        return a
    },
    domToMutation: function (a) {
        this.hasReturnValue_ = 1 == a.getAttribute("value");
        this.hasReturnValue_ || (this.removeInput("VALUE"),
            this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function (a) {
        if (this.workspace.isDragging && !this.workspace.isDragging()) {
            a = !1;
            var b = this;
            do {
                if (-1 != this.FUNCTION_TYPES.indexOf(b.type)) {
                    a = !0;
                    break
                }
                b = b.getSurroundParent()
            } while (b);
            a ? ("procedures_defnoreturn" == b.type && this.hasReturnValue_ ? (this.removeInput("VALUE"),
                this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN),
                this.hasReturnValue_ = !1) : "procedures_defreturn" != b.type || this.hasReturnValue_ || (this.removeInput("VALUE"),
                this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN),
                this.hasReturnValue_ = !0),
                this.setWarningText(null),
            this.isInFlyout || this.setEnabled(!0)) : (this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING),
            this.isInFlyout || this.getInheritedDisabled() || this.setEnabled(!1))
        }
    },
    FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
};
