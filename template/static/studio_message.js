'use strict';

Blockly.Msg = {
    toolbox_robot_on_start: "开始运行",

    toolbox_world: "模拟器",
    toolbox_ai: "人工智能",
    toolbox_control: "条件语句",
    toolbox_operator: "运算符",
    toolbox_data: "数据对象",
    toolbox_function: "函数体",

    set_world_action: "控制场景%1对象执行%2动作",
    set_world_move: "控制场景%1对象向%2移动%3米",
    set_world_angle: "控制场景%1对象%2角度为%3度",

    set_camera: "修改摄像头类型%1",
    set_model: "开启%1",
    vision_event: "当视觉识别结果为%1时",

    robot_wait: "等待%1秒",
    robot_repeat: "重复执行%1次",
    robot_forever: "一直执行",
    robot_if: "如果%1然后",
    robot_if_else: "如果%1然后",
    toolbox_else: "否则",
    robot_repeat_until: "重复直到%1",

    robot_operator_round: "四合五入%1",
    robot_operator_mod: "%1除以%2的余数",
    robot_operator_and: "%1与%2",
    robot_operator_or: "%1或%2",
    robot_operator_not: "非%1",

    NEW_VARIABLE: "创建一个变量",
    NEW_VARIABLE_TITLE: "新变量名称",
    RENAME_VARIABLE: "修改变量名",
    RENAME_VARIABLE_TITLE: "将所有的 %1 变量重命名为：",
    VARIABLE_ALREADY_EXISTS: "变量 %1 已经存在",
    VARIABLE_INVAILD: "请以下划线或字母开头，只能包含数字、大小写字母和下划线",
    DELETE_VARIABLE: "删除变量 %1",
    DELETE_VARIABLE_CONFIRMATION: "删除 %1 处 '%2' 变量吗？",
    toolbox_data_setvariableto: "将 %1 设为 %2",
    toolbox_data_changevariableby: "将 %1 增加 %2",
    toolbox_data_hidevariable: "隐藏变量 %1",
    toolbox_data_showvariable: "显示变量 %1",
    VARIABLES_GET_CREATE_SET: 'Create "set %1"',

    toolbox_data_addtolist: "将 %1 添加到 %2 末尾",
    toolbox_data_copytolist: "将%1 设为 %2",
    toolbox_data_deleteoflist: "删除 %2 的第 %1 项",
    toolbox_data_deleteoption: "删除 %1 的 %2",
    toolbox_data_deleteoption_all: "全部项",
    toolbox_data_deleteoption_last: "末尾项",
    toolbox_data_indexof_list: "%1中 第一个 %2 的索引",
    toolbox_data_insertatlist: "在 %3 的 第 %2 项前插入 %1",
    toolbox_data_replaceitemoflist: "将 %2 的 第 %1 项替换为 %3",
    toolbox_data_itemoflist: "%2 的第 %1 项",
    toolbox_data_lengthoflist: "%1 的项目数",
    toolbox_data_listcontainsitem: "%1 包含 %2?",
    toolbox_data_showlist: "显示列表 %1",
    toolbox_data_hidelist: "隐藏列表 %1",
    toolbox_data_copytolist_empty: "空",
    RENAME_LIST: "修改列表名",
    DELETE_LIST: '删除列表 "%1"',
    toolbox_procedures_definition_redefine: "函数 %1",

    HELP: "新手帮助",
    UNDO: "撤销",
    REDO: "恢复",
    COLLAPSE_ALL: "折叠",
    COLLAPSE_BLOCK: "折叠代码块",
    EXPAND_ALL: "展开",
    EXPAND_BLOCK: "展开代码块",
    DUPLICATE_BLOCK: "复制以下",
    DUPLICATE_BLOCK_SINGLE: "复制模块",
    CLEAN_UP: "整理模块",
    DISABLE_BLOCK: "禁用代码块",
    ENABLE_BLOCK: "激活代码块",
    ADD_COMMENT: "添加注释",
    DELETE_BLOCK: "删除模块",
    DELETE_X_BLOCKS: "删除 %1 模块",
    DELETE_ALL_BLOCKS: "删除全部 %1 模块",

    PROCEDURES_DEFNORETURN_PROCEDURE: "new_func1",
    PROCEDURES_CALLNORETURN_TOOLTIP: 'Run the user-defined function "%1".',
    PROCEDURES_CALLRETURN_TOOLTIP: 'Run the user-defined function "%1" and use its output.',
    PROCEDURES_DEFNORETURN_DO: "",
    PROCEDURES_BEFORE_PARAMS: "with:",
    PROCEDURES_CREATE_DO: "Create %1",
    VARIABLES_SET_CREATE_GET: 'Create "get %1"',
    PROCEDURES_DEFRETURN_TITLE: "to",
    PROCEDURES_DEFRETURN_RETURN: "return",
    PROCEDURES_DEFRETURN_COMMENT: "Describe this function...",
    PROCEDURES_DEFRETURN_TOOLTIP: "Creates a function with an output.",
    PROCEDURES_DEFRETURN_HELPURL: "https://en.wikipedia.org/wiki/Subroutine",
    PROCEDURES_MUTATORCONTAINER_TITLE: "inputs",
    PROCEDURES_ALLOW_STATEMENTS: "allow statements",
    PROCEDURES_MUTATORCONTAINER_TOOLTIP: "Add, remove, or reorder inputs to this function.",
    PROCEDURES_MUTATORARG_TITLE: "input name:",
    PROCEDURES_MUTATORARG_TOOLTIP: "Add an input to the function.",
    PROCEDURES_CALLNORETURN_HELPURL: "https://en.wikipedia.org/wiki/Subroutine",
    PROCEDURES_CALL_BEFORE_PARAMS: "with:",
    PROCEDURES_HIGHLIGHT_DEF: "Highlight function definition",
    PROCEDURES_CALLRETURN_HELPURL: "https://en.wikipedia.org/wiki/Subroutine",
    PROCEDURES_IFRETURN_WARNING: "Warning: This block may be used only within a function definition.",
    PROCEDURES_IFRETURN_TOOLTIP: "If a value is true, then return a second value.",
    PROCEDURES_IFRETURN_HELPURL: "http://c2.com/cgi/wiki?GuardClause",
    TEXT_GET_SUBSTRING_START_FROM_START: "get substring from letter #",
    TEXT_GET_SUBSTRING_START_FROM_END: "get substring from letter # from end",
    TEXT_GET_SUBSTRING_START_FIRST: "get substring from first letter",
    TEXT_GET_SUBSTRING_END_FROM_START: "to letter #",
    TEXT_GET_SUBSTRING_END_FROM_END: "to letter # from end",
    TEXT_GET_SUBSTRING_END_LAST: "to last letter",
    TEXT_GET_SUBSTRING_INPUT_IN_TEXT: "in text",
    TEXT_GET_SUBSTRING_TAIL: "",
    TEXT_GET_SUBSTRING_TOOLTIP: "Returns a specified portion of the text.",
    ORDINAL_NUMBER_SUFFIX: "",
    TEXT_CHANGECASE_OPERATOR_UPPERCASE: "to UPPER CASE",
    TEXT_CHANGECASE_OPERATOR_LOWERCASE: "to lower case",
    TEXT_CHANGECASE_OPERATOR_TITLECASE: "to Title Case",
    TEXT_CHANGECASE_TOOLTIP: "Return a copy of the text in a different case.",
    TEXT_TRIM_OPERATOR_BOTH: "trim spaces from both sides of",
    TEXT_TRIM_OPERATOR_LEFT: "trim spaces from left side of",
    TEXT_TRIM_OPERATOR_RIGHT: "trim spaces from right side of",
    TEXT_PRINT_TITLE: "print %1",
    TEXT_PROMPT_TYPE_TEXT: "prompt for text with message",
    TEXT_PROMPT_TYPE_NUMBER: "prompt for number with message",
    TEXT_COUNT_MESSAGE0: "count %1 in %2",
    TEXT_REPLACE_MESSAGE0: "replace %1 with %2 in %3",
    TEXT_REVERSE_MESSAGE0: "reverse %1",
    TEXT_JOIN_TITLE_CREATEWITH: "create text with",
    TEXT_CHARAT_TAIL: "",
    BKY_TEXT_APPEND_TOOLTIP: "%1"
}
