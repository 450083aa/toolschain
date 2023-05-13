'use strict';

Blockly.Python = new Blockly.Generator("Python");
Blockly.Python.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,g-e-e-k-r-o-s,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
Blockly.Python.ORDER_ATOMIC = 0;
Blockly.Python.ORDER_COLLECTION = 1;
Blockly.Python.ORDER_STRING_CONVERSION = 1;
Blockly.Python.ORDER_MEMBER = 2.1;
Blockly.Python.ORDER_FUNCTION_CALL = 2.2;
Blockly.Python.ORDER_EXPONENTIATION = 3;
Blockly.Python.ORDER_UNARY_SIGN = 4;
Blockly.Python.ORDER_BITWISE_NOT = 4;
Blockly.Python.ORDER_MULTIPLICATIVE = 5;
Blockly.Python.ORDER_ADDITIVE = 6;
Blockly.Python.ORDER_BITWISE_SHIFT = 7;
Blockly.Python.ORDER_BITWISE_AND = 8;
Blockly.Python.ORDER_BITWISE_XOR = 9;
Blockly.Python.ORDER_BITWISE_OR = 10;
Blockly.Python.ORDER_RELATIONAL = 11;
Blockly.Python.ORDER_LOGICAL_NOT = 12;
Blockly.Python.ORDER_LOGICAL_AND = 13;
Blockly.Python.ORDER_LOGICAL_OR = 14;
Blockly.Python.ORDER_CONDITIONAL = 15;
Blockly.Python.ORDER_LAMBDA = 16;
Blockly.Python.ORDER_NONE = 99;
Blockly.Python.FUNCTION_PREFIX = "";
Blockly.Python.ORDER_OVERRIDES = [[Blockly.Python.ORDER_FUNCTION_CALL, Blockly.Python.ORDER_MEMBER], [Blockly.Python.ORDER_FUNCTION_CALL, Blockly.Python.ORDER_FUNCTION_CALL], [Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_MEMBER], [Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL], [Blockly.Python.ORDER_LOGICAL_NOT, Blockly.Python.ORDER_LOGICAL_NOT], [Blockly.Python.ORDER_LOGICAL_AND, Blockly.Python.ORDER_LOGICAL_AND], [Blockly.Python.ORDER_LOGICAL_OR, Blockly.Python.ORDER_LOGICAL_OR]];
Blockly.Python.init = function (a) {
    Blockly.Python.PASS = this.INDENT + "pass\n";
    Blockly.Python.definitions_ = Object.create(null);
    Blockly.Python.functionNames_ = Object.create(null);
    Blockly.Python.variableDB_ ? Blockly.Python.variableDB_.reset() : Blockly.Python.variableDB_ = new Blockly.Names(Blockly.Python.RESERVED_WORDS_);
    Blockly.Python.variableDB_.setVariableMap(a.getVariableMap());
    for (var b = [], c = a.getAllVariables(), d = 0; d < c.length; d++) {
        var e = "";
        var f = c[d].type;
        f === Blockly.LIST_VARIABLE_TYPE ? (f = " = sdk.utils.list.init()", e =
            Blockly.LIST_PREFIX) : f === Blockly.PID_VARIABLE_TYPE ? (f = " = mentor_pid_list() ", e = Blockly.PID_PREFIX) : f === Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE ? f = " = None" : (e = Blockly.VARIABLE_PREFIX, f = " = 0");
        b[d] = e + c[d].name + f
    }
    c = Blockly.Variables.allDeveloperVariables(a);
    for (d = 0; d < c.length; d++) console.log("devVarList[i]", c[d]), b.push(Blockly.VARIABLE_PREFIX + Blockly.Python.variableDB_.getName(c[d], Blockly.Names.DEVELOPER_VARIABLE_TYPE) + " = None");
    c = Blockly.Variables.allUsedVarModels(a);
    for (d = 0; d < c.length; d++) ;
    Blockly.Python.definitions_.variables =
        b.join("\n")
};
Blockly.Python.finish = function (a) {
    var b = [], c = [], d;
    for (d in Blockly.Python.definitions_) {
        var e = Blockly.Python.definitions_[d];
        e.match(/^(from\s+\S+\s+)?import\s+\S+/) ? b.push(e) : c.push(e)
    }
    delete Blockly.Python.definitions_;
    delete Blockly.Python.functionNames_;
    Blockly.Python.variableDB_.reset();
    return (b.join("\n") + "\n\n" + c.join("\n\n")).replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
};
Blockly.Python.scrubNakedValue = function (a) {
    return a + "\n"
};
Blockly.Python.quote_ = function (a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n");
    var b = "'";
    -1 !== a.indexOf("'") && (-1 === a.indexOf('"') ? b = '"' : a = a.replace(/'/g, "\\'"));
    return b + a + b
};
Blockly.Python.multiline_quote_ = function (a) {
    a = a.replace(/'''/g, "\\'\\'\\'");
    return "'''" + a + "'''"
};
Blockly.Python.scrub_ = function (a, b, c) {
    var d = "";
    if (!a.outputConnection || !a.outputConnection.targetConnection) {
        var e = a.getCommentText();
        e && (e = Blockly.utils.string.wrap(e, Blockly.Python.COMMENT_WRAP - 3), d += Blockly.Python.prefixLines(e + "\n", "# "));
        for (var f = 0; f < a.inputList.length; f++) a.inputList[f].type == Blockly.INPUT_VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = Blockly.Python.allNestedComments(e)) && (d += Blockly.Python.prefixLines(e, "# "))
    }
    a = a.nextConnection && a.nextConnection.targetBlock();
    c =
        c ? "" : Blockly.Python.blockToCode(a);
    return d + b + c
};
Blockly.Python.getAdjustedInt = function (a, b, c, d) {
    c = c || 0;
    a.workspace.options.oneBasedIndex && c--;
    var e = a.workspace.options.oneBasedIndex ? "1" : "0";
    a = Blockly.Python.valueToCode(a, b, c ? Blockly.Python.ORDER_ADDITIVE : Blockly.Python.ORDER_NONE) || e;
    Blockly.isNumber(a) ? (a = parseInt(a, 10) + c, d && (a = -a)) : (a = 0 < c ? "int(" + a + " + " + c + ")" : 0 > c ? "int(" + a + " - " + -c + ")" : "int(" + a + ")", d && (a = "-" + a));
    return a
};
Blockly.Python.genFunction = function (a) {
    var b = Blockly.Python.statementToCode(a, "SUBSTACK");
    b ? (a = Blockly.Python.global(a.workspace)) && (b = a + "\n" + b) : b = Blockly.Python.PASS;
    return b
};
Blockly.Python.global = function (a) {
    var b = [], c = a.getVariablesOfType(""), d = a.getVariablesOfType("list");
    a = a.getVariablesOfType("pid");
    for (var e = 0; e < c.length; e++) console.log(c[e].name, "\u540d\u5b57", c[e]), b.push(this.INDENT + "global " + Blockly.VARIABLE_PREFIX + c[e].name);
    for (e = 0; e < d.length; e++) console.log(d[e].name, "list", d[e]), b.push(this.INDENT + "global " + Blockly.LIST_PREFIX + d[e].name);
    for (e = 0; e < a.length; e++) console.log(a[e].name, "pid", a[e]), b.push(this.INDENT + "global " + Blockly.PID_PREFIX + a[e].name);
    return b.join("\n")
};


Blockly.Python.math = {};
Blockly.Python.addReservedWords("math,random,Number");
Blockly.Python.math_number = function (a) {
    a = Number(a.getFieldValue("NUM"));
    if (Infinity == a) {
        a = 'float("inf")';
        var b = Blockly.Python.ORDER_FUNCTION_CALL
    } else
        -Infinity == a ? (a = '-float("inf")',
            b = Blockly.Python.ORDER_UNARY_SIGN) : b = 0 > a ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
    return [a, b]
};
Blockly.Python.math_integer = function (a) {
    a = a.getFieldValue("NUM");
    return [a, Infinity == a ? Blockly.Python.ORDER_FUNCTION_CALL : -Infinity == a ? Blockly.Python.ORDER_UNARY_SIGN : 0 > a ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python.robot_on_start = function (a) {
    return "def sdk_start(sdk):\n" + Blockly.Python.genFunction(a) + "\n"
};

Blockly.Python.set_world_action = function (a) {
    let name = Blockly.Python.valueToCode(a, "name", Blockly.Python.ORDER_NONE).replace(/'/g, '"') || "";
    let action = Blockly.Python.valueToCode(a, "action", Blockly.Python.ORDER_NONE).replace(/'/g, '"') || "";
    return `sdk.utils.world.set_action(${name}, ${action})\n`
};

Blockly.Python.set_world_move = function (a) {
    let name = Blockly.Python.valueToCode(a, "name", Blockly.Python.ORDER_NONE).replace(/'/g, '"') || "";
    let axis_type = {
        x: "x",
        y: "y",
        z: "z"
    }
    let axis = axis_type[a.getFieldValue("axis")];
    let rice = Blockly.Python.valueToCode(a, "rice", Blockly.Python.ORDER_NONE) || 0;
    return `sdk.utils.world.set_move(${name}, "${axis}", ${rice})\n`
};

Blockly.Python.set_world_angle = function (a) {
    let name = Blockly.Python.valueToCode(a, "name", Blockly.Python.ORDER_NONE).replace(/'/g, '"') || "";
    let axis_type = {
        x: "x",
        y: "y",
        z: "z"
    }
    let axis = axis_type[a.getFieldValue("axis")];
    let angle = Blockly.Python.valueToCode(a, "angle", Blockly.Python.ORDER_NONE) || 0;
    return `sdk.utils.world.set_angle(${name}, "${axis}", ${angle})\n`
};

Blockly.Python.set_camera = function (a) {
    let type = {
        usb: "usb",
        mipi: "mipi",
        rgbd: "rgbd"
    }
    let type_state = type[a.getFieldValue("type")];
    return `sdk.utils.model.set_camera("${type_state}")\n`
};

Blockly.Python.set_model = function (a) {
    let type = {
        fcos: "fcos"
    }
    let type_state = type[a.getFieldValue("type")];
    return `sdk.utils.model.set_model("${type_state}")\n`
};

Blockly.Python.vision_event = function (a) {
    let info = Blockly.Python.valueToCode(a, "info", Blockly.Python.ORDER_NONE) || 0;
    let code = Blockly.Python.genFunction(a) || Blockly.Python.PASS;
    return "def model_event_" + info.replace("'", "").replace("'", "") + "(sdk):\n" + code + "\n"
};

Blockly.Python.robot_wait = function (a) {
    return "sdk.utils.time.sleep(" + (Blockly.Python.valueToCode(a, "second", Blockly.Python.ORDER_NONE) || 0) + ")\n"
};
Blockly.Python.robot_repeat = function (a) {
    let b = a.getField("TIMES") ? String(parseInt(a.getFieldValue("TIMES"), 10)) : Blockly.Python.valueToCode(a, "TIMES", Blockly.Python.ORDER_NONE) || "0";
    b = Blockly.isNumber(b) ? parseInt(b, 10) : "int(" + b + ")";
    let c = Blockly.Python.statementToCode(a, "SUBSTACK");
    c = Blockly.Python.addLoopTrap(c, a.id) || Blockly.Python.PASS;
    return "for " + Blockly.Python.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE) + " in range(" + b + "):\n" + c
};
Blockly.Python.robot_forever = function (a) {
    let b = Blockly.Python.statementToCode(a, "SUBSTACK");
    b = Blockly.Python.addLoopTrap(b, a.id) || Blockly.Python.PASS;
    return "while True:\n" + b
};
Blockly.Python.robot_if = function (a) {
    let b = Blockly.Python.valueToCode(a, "CONDITION", Blockly.Python.ORDER_NONE) || "False";
    a = Blockly.Python.statementToCode(a, "SUBSTACK") || Blockly.Python.PASS;
    return "if " + b + ":\n" + a
};
Blockly.Python.robot_if_else = function (a) {
    let b = "";
    let c = Blockly.Python.valueToCode(a, "CONDITION", Blockly.Python.ORDER_NONE) || "False";
    let d = Blockly.Python.statementToCode(a, "SUBSTACK") || Blockly.Python.PASS;
    b += "if " + c + ":\n" + d;
    d = Blockly.Python.statementToCode(a, "SUBSTACK2") || Blockly.Python.PASS;
    return b + ("else:\n" + d)
};
Blockly.Python.robot_repeat_until = function (a) {
    let b = Blockly.Python.valueToCode(a, "CONDITION", Blockly.Python.ORDER_LOGICAL_NOT) || "False"
        , c = Blockly.Python.statementToCode(a, "SUBSTACK");
    c = Blockly.Python.addLoopTrap(c, a.id) || Blockly.Python.PASS;
    return "while not " + b + ":\n" + c
};

Blockly.Python.robot_operator_addition = function (a) {
    let b = Blockly.Python.valueToCode(a, "NUM1", Blockly.Python.ORDER_ADDITIVE) || "0";
    a = Blockly.Python.valueToCode(a, "NUM2", Blockly.Python.ORDER_ADDITIVE) || "0";
    return [b + " + " + a, Blockly.Python.ORDER_ADDITIVE]
};
Blockly.Python.robot_operator_subtraction = function (a) {
    let b = Blockly.Python.valueToCode(a, "NUM1", Blockly.Python.ORDER_ADDITIVE) || "0";
    a = Blockly.Python.valueToCode(a, "NUM2", Blockly.Python.ORDER_ADDITIVE) || "0";
    return [b + " - " + a, Blockly.Python.ORDER_ADDITIVE]
};
Blockly.Python.robot_operator_multiplication = function (a) {
    let b = Blockly.Python.valueToCode(a, "NUM1", Blockly.Python.ORDER_ADDITIVE) || "0";
    a = Blockly.Python.valueToCode(a, "NUM2", Blockly.Python.ORDER_ADDITIVE) || "0";
    return [b + " * " + a, Blockly.Python.ORDER_ADDITIVE]
};
Blockly.Python.robot_operator_division = function (a) {
    let b = Blockly.Python.valueToCode(a, "NUM1", Blockly.Python.ORDER_ADDITIVE) || "0";
    a = Blockly.Python.valueToCode(a, "NUM2", Blockly.Python.ORDER_ADDITIVE) || "0";
    return [b + " / " + a, Blockly.Python.ORDER_ADDITIVE]
};
Blockly.Python.robot_operator_random_number = function (a) {
    let b = Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE) || "0";
    a = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "1";
    return [(-1 !== b.indexOf(".") || -1 !== b.indexOf(".") ? "frame.utils.random.uniform" : "frame.utils.random.randint") + "(" + b + ", " + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.robot_operator_round = function (a) {
    //Blockly.Python.definitions_.import_math = "import math";
    return ["frame.utils.random.round(" + (Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_NONE) || "0") + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.robot_operator_mod = function (a) {
    let b = Blockly.Python.valueToCode(a, "NUM1", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
    a = Blockly.Python.valueToCode(a, "NUM2", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
    return [b + " % " + a, Blockly.Python.ORDER_MULTIPLICATIVE]
};
Blockly.Python.robot_operator_equal = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_RELATIONAL) || "0";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_RELATIONAL) || "0";
    return [b + " == " + a, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.robot_operator_not_equal = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_RELATIONAL) || "0";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_RELATIONAL) || "0";
    return [b + " != " + a, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.robot_operator_lt = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_RELATIONAL) || "0";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_RELATIONAL) || "0";
    return [b + " < " + a, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.robot_operator_lt_equal = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_RELATIONAL) || "0";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_RELATIONAL) || "0";
    return [b + " <= " + a, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.robot_operator_gt = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_RELATIONAL) || "0";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_RELATIONAL) || "0";
    return [b + " > " + a, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.robot_operator_gt_equal = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_RELATIONAL) || "0";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_RELATIONAL) || "0";
    return [b + " >= " + a, Blockly.Python.ORDER_RELATIONAL]
};
Blockly.Python.robot_operator_and = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_LOGICAL_AND) || "False";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_LOGICAL_AND) || "False";
    b || (b = "True");
    a || (a = "True");
    return [b + " and " + a, Blockly.Python.ORDER_LOGICAL_AND]
};
Blockly.Python.robot_operator_or = function (a) {
    let b = Blockly.Python.valueToCode(a, "OPERAND1", Blockly.Python.ORDER_LOGICAL_AND) || "False";
    a = Blockly.Python.valueToCode(a, "OPERAND2", Blockly.Python.ORDER_LOGICAL_AND) || "False";
    b || (b = "True");
    a || (a = "True");
    return [b + " or " + a, Blockly.Python.ORDER_LOGICAL_AND]
};
Blockly.Python.robot_operator_not = function (a) {
    return ["not " + (Blockly.Python.valueToCode(a, "OPERAND", Blockly.Python.ORDER_LOGICAL_NOT) || "True"), Blockly.Python.ORDER_LOGICAL_NOT]
};

Blockly.Python.math_whole_number = Blockly.Python.math_integer;
Blockly.Python.math_positive_number = Blockly.Python.math_number;

Blockly.Python.colour = {};
Blockly.Python.colour_picker = function (a) {
    return [Blockly.Python.quote_(a.getFieldValue("COLOUR")), Blockly.Python.ORDER_ATOMIC]
}

Blockly.Python.data = {};
Blockly.Python.data_variable = function (a) {
    console.log(a.getFieldValue("VARIABLE"), "data_variable");
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("VARIABLE"), Blockly.Variables.NAME_TYPE);
    a = Blockly.VARIABLE_PREFIX + a;
    return [a, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.data_setvariableto = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("VARIABLE"), Blockly.Variables.NAME_TYPE);
    a = Blockly.VARIABLE_PREFIX + a;
    return a + " = " + b + "\n"
};
Blockly.Python.data_changevariableby = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("VARIABLE"), Blockly.Variables.NAME_TYPE);
    a = Blockly.VARIABLE_PREFIX + a;
    return a + " = " + a + " + " + b + "\n"
};
Blockly.Python.data_listcontents = function (a) {
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return ['" ".join(' + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.data_addtolist = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return a + ".append(" + b + ")\n"
};
Blockly.Python.data_copytolist = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''";
    if (0 <= b.indexOf(".join")) {
        var c = b.indexOf("(")
            , d = b.indexOf(")");
        b = b.slice(c + 1, d)
    }
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return b === "'" + Blockly.Msg.toolbox_data_copytolist_empty + "'" ? a + " = frame.utils.list.init()\n" : a + " = frame.utils.list.set(" + b + ")\n"
};
Blockly.Python.data_deleteoflist = function (a) {
    var b = Blockly.Python.valueToCode(a, "INDEX", Blockly.Python.ORDER_NONE) + "" || "0";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return a + ".pop(" + b + ")\n"
};
Blockly.Python.data_deletealloflist = function (a) {
    var b = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    b = Blockly.LIST_PREFIX + b;
    a = a.getFieldValue("OPTIONS") || "clear";
    return b + ("." + a + "()\n")
};
Blockly.Python.data_indexof_list = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "1";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return ["(" + a + ".index(" + b + "))", Blockly.Python.ORDER_MEMBER]
};
Blockly.Python.data_insertatlist = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''";
    var c = Blockly.Python.valueToCode(a, "INDEX", Blockly.Python.ORDER_NONE) + "" || "0";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return a + ".insert(" + c + ", " + b + ")\n"
};
Blockly.Python.data_replaceitemoflist = function (a) {
    var b = Blockly.Python.valueToCode(a, "INDEX", Blockly.Python.ORDER_NONE) + "" || "0";
    var c = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return a + "[" + b + "] = " + c + "\n"
};
Blockly.Python.data_itemoflist = function (a) {
    var b = Blockly.Python.valueToCode(a, "INDEX", Blockly.Python.ORDER_NONE) + "" || "0";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return [a + "[" + b + "]", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.data_lengthoflist = function (a) {
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return ["len(" + a + ")", Blockly.Python.ORDER_MEMBER]
};
Blockly.Python.data_listcontainsitem = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("LIST"), Blockly.Variables.NAME_TYPE);
    a = Blockly.LIST_PREFIX + a;
    return ["(" + b + " in (" + a + "))", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.data_pid = function (a) {
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("data_pid"), Blockly.Variables.NAME_TYPE);
    a = Blockly.PID_PREFIX + a;
    return [a, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.data_setpiderror = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("PID"), Blockly.Variables.NAME_TYPE);
    a = Blockly.PID_PREFIX + a;
    return a + (".set_error(" + b + ")\n")
};
Blockly.Python.data_changepid = function (a) {
    var b = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("PID"), Blockly.Variables.NAME_TYPE)
        , c = Blockly.Python.valueToCode(a, "KP", Blockly.Python.ORDER_NONE) || "0"
        , d = Blockly.Python.valueToCode(a, "KI", Blockly.Python.ORDER_NONE) || "0";
    a = Blockly.Python.valueToCode(a, "KD", Blockly.Python.ORDER_NONE) || "0";
    b = Blockly.PID_PREFIX + b;
    return b + (".set_ctrl_params(" + c + "," + d + "," + a + ")\n")
};
Blockly.Python.data_pidoutput = function (a) {
    a = Blockly.Python.variableDB_.getSourceName(a.getFieldValue("PID"), Blockly.Variables.NAME_TYPE);
    a = Blockly.PID_PREFIX + a + ".get_output()";
    return [a, Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python.texts = {};
Blockly.Python.text = function (a) {
    return [Blockly.Python.quote_(a.getFieldValue("TEXT")), Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.math_text = function (a) {
    return [Blockly.Python.quote_(a.getFieldValue("TEXT")), Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.text_multiline = function (a) {
    return [Blockly.Python.multiline_quote_(a.getFieldValue("TEXT")), Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.text.forceString_ = function (a) {
    return Blockly.Python.text.forceString_.strRegExp.test(a) ? a : "str(" + a + ")"
};
Blockly.Python.text.forceString_.strRegExp = /^\s*'([^']|\\')*'\s*$/;
Blockly.Python.text_join = function (a) {
    switch (a.itemCount_) {
        case 0:
            return ["''", Blockly.Python.ORDER_ATOMIC];
        case 1:
            return a = Blockly.Python.valueToCode(a, "ADD0", Blockly.Python.ORDER_NONE) || "''",
                a = Blockly.Python.text.forceString_(a),
                [a, Blockly.Python.ORDER_FUNCTION_CALL];
        case 2:
            var b = Blockly.Python.valueToCode(a, "ADD0", Blockly.Python.ORDER_NONE) || "''";
            a = Blockly.Python.valueToCode(a, "ADD1", Blockly.Python.ORDER_NONE) || "''";
            a = Blockly.Python.text.forceString_(b) + " + " + Blockly.Python.text.forceString_(a);
            return [a, Blockly.Python.ORDER_ADDITIVE];
        default:
            b = [];
            for (var c = 0; c < a.itemCount_; c++)
                b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.Python.ORDER_NONE) || "''";
            a = Blockly.Python.variableDB_.getDistinctName("x", Blockly.VARIABLE_CATEGORY_NAME);
            a = "''.join([str(" + a + ") for " + a + " in [" + b.join(", ") + "]])";
            return [a, Blockly.Python.ORDER_FUNCTION_CALL]
    }
};
Blockly.Python.text_append = function (a) {
    var b = Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
    a = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''";
    return b + " = str(" + b + ") + " + Blockly.Python.text.forceString_(a) + "\n"
};
Blockly.Python.text_length = function (a) {
    return ["len(" + (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''") + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.text_isEmpty = function (a) {
    return ["not len(" + (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''") + ")", Blockly.Python.ORDER_LOGICAL_NOT]
};
Blockly.Python.text_indexOf = function (a) {
    var b = "FIRST" == a.getFieldValue("END") ? "find" : "rfind"
        , c = Blockly.Python.valueToCode(a, "FIND", Blockly.Python.ORDER_NONE) || "''";
    b = (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_MEMBER) || "''") + "." + b + "(" + c + ")";
    return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.Python.ORDER_ADDITIVE] : [b, Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.text_charAt = function (a) {
    var b = a.getFieldValue("WHERE") || "FROM_START"
        , c = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_MEMBER) || "''";
    switch (b) {
        case "FIRST":
            return [c + "[0]", Blockly.Python.ORDER_MEMBER];
        case "LAST":
            return [c + "[-1]", Blockly.Python.ORDER_MEMBER];
        case "FROM_START":
            return a = Blockly.Python.getAdjustedInt(a, "AT"),
                [c + "[" + a + "]", Blockly.Python.ORDER_MEMBER];
        case "FROM_END":
            return a = Blockly.Python.getAdjustedInt(a, "AT", 1, !0),
                [c + "[" + a + "]", Blockly.Python.ORDER_MEMBER];
        case "RANDOM":
            return Blockly.Python.definitions_.import_random = "import random",
                [Blockly.Python.provideFunction_("text_random_letter", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(text):", "  x = int(random.random() * len(text))", "  return text[x];"]) + "(" + c + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    }
    throw Error("Unhandled option (text_charAt).");
};
Blockly.Python.text_getSubstring = function (a) {
    var b = a.getFieldValue("WHERE1")
        , c = a.getFieldValue("WHERE2")
        , d = Blockly.Python.valueToCode(a, "STRING", Blockly.Python.ORDER_MEMBER) || "''";
    switch (b) {
        case "FROM_START":
            b = Blockly.Python.getAdjustedInt(a, "AT1");
            "0" == b && (b = "");
            break;
        case "FROM_END":
            b = Blockly.Python.getAdjustedInt(a, "AT1", 1, !0);
            break;
        case "FIRST":
            b = "";
            break;
        default:
            throw Error("Unhandled option (text_getSubstring)");
    }
    switch (c) {
        case "FROM_START":
            a = Blockly.Python.getAdjustedInt(a, "AT2", 1);
            break;
        case "FROM_END":
            a = Blockly.Python.getAdjustedInt(a, "AT2", 0, !0);
            Blockly.isNumber(String(a)) ? "0" == a && (a = "") : (Blockly.Python.definitions_.import_sys = "import sys",
                a += " or sys.maxsize");
            break;
        case "LAST":
            a = "";
            break;
        default:
            throw Error("Unhandled option (text_getSubstring g-e-e-k-r-o-s)");
    }
    return [d + "[" + b + " : " + a + "]", Blockly.Python.ORDER_MEMBER]
};
Blockly.Python.text_changeCase = function (a) {
    var b = {
        UPPERCASE: ".upper()",
        LOWERCASE: ".lower()",
        TITLECASE: ".title()"
    }[a.getFieldValue("CASE")];
    return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + b, Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.text_trim = function (a) {
    var b = {
        LEFT: ".lstrip()",
        RIGHT: ".rstrip()",
        BOTH: ".strip()"
    }[a.getFieldValue("MODE")];
    return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + b, Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.text_print = function (a) {
    return "print(" + (Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''") + ")\n"
};
Blockly.Python.text_prompt_ext = function (a) {
    var b = Blockly.Python.provideFunction_("text_prompt", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(msg):", "  try:", "    return raw_input(msg)", "  except NameError:", "    return input(msg)"])
        ,
        c = a.getField("TEXT") ? Blockly.Python.quote_(a.getFieldValue("TEXT")) : Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''";
    b = b + "(" + c + ")";
    "NUMBER" == a.getFieldValue("TYPE") && (b = "float(" + b + ")");
    return [b, Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.text_prompt = Blockly.Python.text_prompt_ext;
Blockly.Python.text_count = function (a) {
    var b = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''";
    a = Blockly.Python.valueToCode(a, "SUB", Blockly.Python.ORDER_NONE) || "''";
    return [b + ".count(" + a + ")", Blockly.Python.ORDER_MEMBER]
};
Blockly.Python.text_replace = function (a) {
    var b = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''"
        , c = Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE) || "''";
    a = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "''";
    return [b + ".replace(" + c + ", " + a + ")", Blockly.Python.ORDER_MEMBER]
};
Blockly.Python.text_reverse = function (a) {
    return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + "[::-1]", Blockly.Python.ORDER_MEMBER]
};

Blockly.Python.procedures = {};
Blockly.Python.procedures_defreturn = function (a) {
    for (var b = [], c, d = a.workspace, e = Blockly.Variables.allUsedVarModels(d) || [], f = 0; c = e[f]; f++)
        c = c.name,
        -1 == a.arguments_.indexOf(c) && b.push(Blockly.Python.variableDB_.getName(c, Blockly.VARIABLE_CATEGORY_NAME));
    d = Blockly.Variables.allDeveloperVariables(d);
    for (f = 0; f < d.length; f++)
        b.push(Blockly.Python.variableDB_.getName(d[f], Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    b = e.length ? e.map(function (a) {
        return Blockly.Python.INDENT + "global " + (a.type || "variable") + "_" + a.name + "\n"
    }).join("") : "";
    e = Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.PROCEDURE_CATEGORY_NAME);
    d = "";
    Blockly.Python.STATEMENT_PREFIX && (d += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, a));
    Blockly.Python.STATEMENT_SUFFIX && (d += Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, a));
    d && (d = Blockly.Python.prefixLines(d, Blockly.Python.INDENT));
    c = "";
    Blockly.Python.INFINITE_LOOP_TRAP && (c = Blockly.Python.prefixLines(Blockly.Python.injectId(Blockly.Python.INFINITE_LOOP_TRAP, a), Blockly.Python.INDENT));
    var h = Blockly.Python.statementToCode(a, "STACK")
        , g = Blockly.Python.valueToCode(a, "RETURN", Blockly.Python.ORDER_NONE) || ""
        , k = "";
    h && g && (k = d);
    g ? g = Blockly.Python.INDENT + "return " + g + "\n" : h || (h = Blockly.Python.PASS);
    var l = [];
    for (f = 0; f < a.arguments_.length; f++)
        l[f] = Blockly.Python.variableDB_.getName(a.arguments_[f], Blockly.VARIABLE_CATEGORY_NAME);
    b = "def " + e + "(" + l.join(", ") + "):\n" + b + d + c + h + k + g;
    b = Blockly.Python.scrub_(a, b);
    Blockly.Python.definitions_["%" + e] = b;
    return null
};
Blockly.Python.procedures_defnoreturn = Blockly.Python.procedures_defreturn;
Blockly.Python.procedures_callreturn = function (a) {
    for (var b = Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.PROCEDURE_CATEGORY_NAME), c = [], d = 0; d < a.arguments_.length; d++)
        c[d] = Blockly.Python.valueToCode(a, "ARG" + d, Blockly.Python.ORDER_NONE) || "None";
    return [b + "(" + c.join(", ") + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};
Blockly.Python.procedures_callnoreturn = function (a) {
    return Blockly.Python.procedures_callreturn(a)[0] + "\n"
};
Blockly.Python.procedures_ifreturn = function (a) {
    var b = "if " + (Blockly.Python.valueToCode(a, "CONDITION", Blockly.Python.ORDER_NONE) || "False") + ":\n";
    Blockly.Python.STATEMENT_SUFFIX && (b += Blockly.Python.prefixLines(Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, a), Blockly.Python.INDENT));
    a.hasReturnValue_ ? (a = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "None",
        b += Blockly.Python.INDENT + "return " + a + "\n") : b += Blockly.Python.INDENT + "return\n";
    return b
};
Blockly.Python.procedures_definition_redefine = function (a) {
    var b = Blockly.Python.genFunction(a);
    return "def " + ("" + Blockly.Python.FUNCTION_PREFIX + a.getProcedureName()) + "():\n" + b + "\n"
};
Blockly.Python.procedures_block_definition_redefine = function (a) {
    a.getBlockType();
    return "" + Blockly.Python.FUNCTION_PREFIX + a.getProcedureName() + "()\n"
}

