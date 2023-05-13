'use strict';

Blockly.ColoursInit = function (Colours) {
    for (let [key, value] of Object.entries(Colours)) {
        if (value.primary) {
            let check_colours = "colours_" + key;
            if (Blockly.Extensions.ALL_[check_colours]) {
                Blockly.Extensions.unregister("colours_" + key);
            }
            Blockly.Extensions.register("colours_" + key, function () {
                this.style.colourPrimary = value.primary;
                this.style.colourSecondary = value.secondary || this.colour_;
                this.style.colourTertiary = value.tertiary || this.colour_
            });
        }
    }
};
Blockly.FieldDown = function (a, b, c) {
    this.config_ = c;
    this.name_ = c.name;
    this.selections = c.options || [];
    this.selectedItem = this.selections[0] || [];
    this.precision_ = c.precision || 0;
    this.initValue_(c.default);
    Blockly.FieldDown.superClass_.constructor.call(this, this.getValue(), null, null)
};
Blockly.utils.object.inherits(Blockly.FieldDown, Blockly.FieldTextInput);
Blockly.FieldDown.prototype.widgetCreate_ = function () {
    return Blockly.FieldDown.superClass_.widgetCreate_.call(this)
};
Blockly.FieldDown.NAME = {};
Blockly.FieldDown.prototype.initValue_ = function (a) {
    this.setValue(this.value_ || this.selectedItem[1] || "");
};
Blockly.FieldDown.prototype.getText_ = function () {
    return this.selectedItem[0];
};
Blockly.FieldDown.prototype.setPopValue = function (a) {
    this.setValue(a);
};
Blockly.FieldDown.prototype.doValueUpdate_ = function (a) {
    Blockly.FieldDown.superClass_.doValueUpdate_.call(this, a);
    for (a = this.selections.length; a--;) {
        if (!this.selections[a][1]) {
            console.error("block options\u6ca1\u6709\u914d\u7f6eval\u503c");
            break
        }
        if (this.selections[a][1] === this.value_) {
            this.selectedItem = this.selections[a];
            break
        }
    }
};
Blockly.FieldDown.prototype.searchType_ = function (a) {
    return a.sourceBlock_ ? this.searchType_(a.sourceBlock_) : a.type
};
Blockly.FieldDown.prototype.showEditor_ = function () {
    this.triggerPop(this.config_)
};
Blockly.FieldDown.prototype.triggerPop = function (a) {
    this.setPopValue(a)
};
Blockly.FieldDown.fromJson = function (a) {
    return new Blockly.FieldDown(a.options, void 0, a)
};
Blockly.FieldDown.prototype.doClassValidation_ = function (a) {
    return a
};
Blockly.fieldRegistry.register("field_down", Blockly.FieldDown);

Blockly.Mentor = {};

Blockly.Mentor.ToolBox = [
    {
        category: {
            id: "world",
            name: "toolbox_world"
        },
        blocks: [
            {
                name: "set_world_action",
                template: '<block type="set_world_action" id="set_world_action"><value name="name"><shadow type="math_text"><field name="TEXT"><param name="value">name</param></field></shadow></value><value name="action"><shadow type="math_text"><field name="TEXT"><param name="value">action</param></field></shadow></value></block>'
            },
            {
                name: "set_world_move",
                template: '<block type="set_world_move" id="set_world_move"><value name="name"><shadow type="math_text"><field name="TEXT"><param name="value">name</param></field></shadow></value><value name="rice"><shadow type="math_positive_number"><field name="TEXT"><param name="value">action</param></field></shadow></value></block>'
            },
            {
                name: "set_world_angle",
                template: '<block type="set_world_angle" id="set_world_angle"><value name="name"><shadow type="math_text"><field name="TEXT"><param name="value">name</param></field></shadow></value><value name="angle"><shadow type="math_positive_number"><field name="TEXT"><param name="value">action</param></field></shadow></value></block>'
            }
        ]
    },
    {
        category: {
            id: "ai",
            name: "toolbox_ai"
        },
        blocks: [
            {
                name: "set_camera",
                template: '<block type="set_camera" id="set_camera" ></block>'
            },
            {
                name: "set_model",
                template: '<block type="set_model" id="set_model" ></block>'
            },
            {
                name: "vision_event",
                template: '<block type="vision_event" id="vision_event"><value name="info"><shadow type="math_text"><field name="TEXT"><param name="value">data</param></field></shadow></value></block>'
            }
        ]
    },
    {
        category: {
            id: "control",
            name: "toolbox_control"
        },
        blocks: [
            {
                name: "robot_wait",
                template: '<block type="robot_wait" id="robot_wait" ><value name="second"><shadow type="math_positive_number"><field name="NUM"><param name="value">1</param><param name="minimum">0</param><param name="maximum">3600</param><param name="precision">0.001</param></field></shadow></value></block>'
            },
            {
                name: "robot_repeat",
                template: '<block type="robot_repeat" id="robot_repeat" ><value name="TIMES"><shadow type="math_whole_number"><field name="NUM"><param name="value">10</param><param name="minimum">0</param><param name="precision">1</param></field></shadow></value></block>'
            },
            {
                name: "robot_forever",
                template: '<block type="robot_forever" id="robot_forever" ></block>'
            },
            {
                name: "robot_if",
                template: '<block type="robot_if" id="robot_if" ></block>'
            },
            {
                name: "robot_if_else",
                template: '<block type="robot_if_else" id="robot_if_else" ></block>'
            },
            {
                name: "robot_repeat_until",
                template: '<block type="robot_repeat_until" id="robot_repeat_until" ></block>'
            }
        ]
    },
    {
        category: {
            id: "operator",
            name: "toolbox_operator"
        },
        blocks: [
            {
                name: "robot_operator_addition",
                template: '<block type="robot_operator_addition" id="robot_operator_addition" ><value name="NUM1"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param> <param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="NUM2"><shadow type="math_number"><field name="NUM" copyright="geek-ros"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_subtraction",
                template: '<block type="robot_operator_subtraction" id="robot_operator_subtraction" ><value name="NUM1"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param> <param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="NUM2"><shadow type="math_number"><field name="NUM" copyright="geek-ros"><param name="value" copyright="blocklymakeryanggeek-ros">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_multiplication",
                template: '<block type="robot_operator_multiplication" id="robot_operator_multiplication" ><value name="NUM1"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param> <param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="NUM2"><shadow type="math_number" copyright="geek-ros"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_division",
                template: '<block type="robot_operator_division" id="robot_operator_division" ><value name="NUM1"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">0</param> <param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="NUM2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum" copyright="blocklymakeryanggeek-ros">0</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_random_number",
                template: '<block type="robot_operator_random_number" id="robot_operator_random_number" ><value name="FROM"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param> <param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_round",
                template: '<block type="robot_operator_round" id="robot_operator_round" ><value name="NUM"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_mod",
                template: '<block type="robot_operator_mod" id="robot_operator_mod" ><value name="NUM1"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param> <param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="NUM2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_equal",
                template: '<block type="robot_operator_equal" id="robot_operator_equal" ><value name="OPERAND1"> <shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_not_equal",
                template: '<block type="robot_operator_not_equal" id="robot_operator_not_equal" ><value name="OPERAND1"> <shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_lt",
                template: '<block type="robot_operator_lt" id="robot_operator_lt" ><value name="OPERAND1"> <shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_lt_equal",
                template: '<block type="robot_operator_lt_equal" id="robot_operator_lt_equal" ><value name="OPERAND1"> <shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum" copyright="blocklymakeryanggeek-ros">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_gt",
                template: '<block type="robot_operator_gt" id="robot_operator_gt" ><value name="OPERAND1"> <shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum" copyright="geek-ros">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_gt_equal",
                template: '<block type="robot_operator_gt_equal" id="robot_operator_gt_equal" ><value name="OPERAND1"> <shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value><value name="OPERAND2"><shadow type="math_number"><field name="NUM"><param name="value">0</param><param name="minimum">-100000000</param><param name="maximum">100000000</param><param name="precision">0.01</param></field></shadow></value></block>'
            },
            {
                name: "robot_operator_and",
                template: '<block type="robot_operator_and" id="robot_operator_and" ></block>'
            },
            {
                name: "robot_operator_or",
                template: '<block type="robot_operator_or" id="robot_operator_or" ></block>'
            },
            {
                name: "robot_operator_not",
                template: '<block type="robot_operator_not" id="robot_operator_not" ></block>'
            }
        ]
    },
    {
        category: {
            id: "data",
            name: "toolbox_data",
            custom: "VARIABLE"
        },
        blocks: []
    },
    {
        category: {
            id: "function",
            name: "toolbox_function",
            custom: "PROCEDURE"
        },
        blocks: [
            {
                name: "procedures_defreturn",
                template: '<block type="procedures_defreturn" id="procedures_defreturn"><value name="PROCEDURE_NAME"><shadow type="text"><field name="TEXT" type="PROCEDURE_NAME_TXT">funcName</field></shadow></value></block>'
            }
        ]
    }
]

Blockly.Mentor.InitToolBox = function (e) {
    let html = "";
    for (let category = 0; category < e.length; category++) {
        let c = e[category].category;
        let blocks_html = "";
        for (let blocks = 0; blocks < e[category].blocks.length; blocks++) {
            let blocks_item = e[category].blocks[blocks];
            blocks_html += blocks_item.template;
        }
        html += "<category ".concat(c.disabled ? 'disabled="true"' : "", ' id="').concat(c.id, '" name="').concat(Blockly.Msg[c.name], '" colour="').concat(c.colour || Blockly.Colours[c.id].primary, '" secondaryColour="').concat(c.secondaryColour || Blockly.Colours[c.id].secondary, '" ').concat(c.custom ? 'custom="' + c.custom + '"' : "", "> ").concat(blocks_html, "</category>")
    }
    return '<xml id="toolbox-categories" style="display: none">' + html + '</xml>';
}
