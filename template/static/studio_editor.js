'use strict';
Blockly.Categories = {
    system: "system",
    world: "world",
    ai: "ai",
    control: "control",
    operator: "operators",
    data: "data",
    data_list: "data_list",
    data_pid: "data_pid",
    function: "function",
};
Blockly.Colours = {
    system: {
        primary: "#7EBAD9",
        secondary: "#AADDEF",
        tertiary: "#D8EAF3",
        dropdown: "#A4CEE4",
        textColour: "#607280"
    },
    basic: {
        primary: "#58C0A6",
        secondary: "#AADDEF",
        tertiary: "#D8EAF3",
        dropdown: "#A4CEE4",
        textColour: "#607280"
    },
    world: {
        primary: "#503ABE",
        secondary: "#6576D5",
        tertiary: "#C6CAE7",
        dropdown: "#7B84C7",
        textColour: "#607280"
    },
    ai: {
        primary: "#6A6AFF",
        secondary: "#6576D5",
        tertiary: "#C6CAE7",
        dropdown: "#7B84C7",
        textColour: "#607280"
    },
    control: {
        primary: "#4350AF",
        secondary: "#6576D5",
        tertiary: "#C6CAE7",
        dropdown: "#7B84C7",
        textColour: "#607280"
    },
    operator: {
        primary: "#286DFA",
        secondary: "#3F98FD",
        tertiary: "#BED3FD",
        dropdown: "#6899FB",
        textColour: "#607280"
    },
    data: {
        primary: "#4FA0FF",
        secondary: "#75C9FF",
        tertiary: "#CAE2FF",
        dropdown: "#84BCFF",
        textColour: "#607280",
    },
    data_list: {
        primary: "#21AEF3",
        secondary: "#35D4FB",
        tertiary: "#AEE1FA",
        dropdown: "#64C6F6",
        textColour: "#607280"
    },
    data_pid: {
        primary: "#64C7DE",
        secondary: "#8EE5F2",
        tertiary: "#D0EEF5",
        dropdown: "#92D7E7",
        textColour: "#607280"
    },
    function: {
        primary: "#3D3DFF",
        secondary: "#5D5DFF",
        tertiary: "#C5C5FF",
        dropdown: "#7777FF",
        textColour: "#607280"
    },
    workspace: "#0b1724",
    flyout: "#12283d",
    toolbox: "#08111A",
    toolboxHover: "#12283d",
    toolboxSelected: "#FFFFFF",
    toolBoxText: "#FFFFFF",
    text: "#ffffff",
    stackGlow: "#FFFFFF",
    stackGlowOpacity: .8,
    scrollbar: "#CECDCE",
    scrollbarHover: "#CECDCE",
    dropdownFill: "#FFFFFF",
    dropdownFillOpacity: .3,
    dropdownStroke: "#FFFFFF",
    dropdownStrokeOpacity: .6,
    textField: "#FFFFFF",
    textFieldOpacity: .3,
    textFieldStroke: "#FFFFFF",
    textFieldStrokeOpacity: .6,
    insertionMarker: "#000000",
    insertionMarkerOpacity: .2,
    dragShadowOpacity: .3,
    replacementGlow: "#FFFFFF",
    replacementGlowOpacity: 1,
    colourPickerStroke: "#FFFFFF",
    fieldShadow: "rgba(0,0,0,0.1)",
    dropDownShadow: "rgba(0, 0, 0, .3)",
    numPadBackground: "#547AB2",
    numPadBorder: "#435F91",
    numPadActiveBackground: "#435F91",
    numPadText: "#FFFFFF",
    valueReportBackground: "#FFFFFF",
    valueReportBorder: "#AAAAAA"
};

Blockly.zelos = {};
Blockly.zelos.ConstantProvider = function () {
    Blockly.zelos.ConstantProvider.superClass_.constructor.call(this);
    this.SMALL_PADDING = this.GRID_UNIT = 4;
    this.MEDIUM_PADDING = 2 * this.GRID_UNIT;
    this.MEDIUM_LARGE_PADDING = 3 * this.GRID_UNIT;
    this.LARGE_PADDING = 4 * this.GRID_UNIT;
    this.CORNER_RADIUS = 1 * this.GRID_UNIT;
    this.NOTCH_WIDTH = 9 * this.GRID_UNIT;
    this.NOTCH_HEIGHT = 2 * this.GRID_UNIT;
    this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT = 3 * this.GRID_UNIT;
    this.MIN_BLOCK_WIDTH = 2 * this.GRID_UNIT;
    this.MIN_BLOCK_HEIGHT = 12 * this.GRID_UNIT;
    this.EMPTY_STATEMENT_INPUT_HEIGHT = 6 * this.GRID_UNIT;
    this.TAB_OFFSET_FROM_TOP = 0;
    this.TOP_ROW_MIN_HEIGHT = this.CORNER_RADIUS;
    this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING;
    this.BOTTOM_ROW_MIN_HEIGHT = this.CORNER_RADIUS;
    this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = 6 * this.GRID_UNIT;
    this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT;
    this.STATEMENT_INPUT_SPACER_MIN_WIDTH = 40 * this.GRID_UNIT;
    this.STATEMENT_INPUT_PADDING_LEFT = 4 * this.GRID_UNIT;
    this.EMPTY_INLINE_INPUT_PADDING = 4 * this.GRID_UNIT;
    this.EMPTY_INLINE_INPUT_HEIGHT = 8 * this.GRID_UNIT;
    this.DUMMY_INPUT_MIN_HEIGHT = 8 * this.GRID_UNIT;
    this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = 6 * this.GRID_UNIT;
    this.CURSOR_WS_WIDTH = 20 * this.GRID_UNIT;
    this.CURSOR_COLOUR = "#ffa200";
    this.CURSOR_RADIUS = 5;
    this.JAGGED_TEETH_WIDTH = this.JAGGED_TEETH_HEIGHT = 0;
    this.START_HAT_HEIGHT = 22;
    this.START_HAT_WIDTH = 96;
    this.SHAPES = {
        HEXAGONAL: 1,
        ROUND: 2,
        SQUARE: 3,
        PUZZLE: 4,
        NOTCH: 5
    };
    this.SHAPE_IN_SHAPE_PADDING = {
        1: {
            0: 5 * this.GRID_UNIT,
            1: 2 * this.GRID_UNIT,
            2: 5 * this.GRID_UNIT,
            3: 5 * this.GRID_UNIT
        },
        2: {
            0: 3 * this.GRID_UNIT,
            1: 3 * this.GRID_UNIT,
            2: 1 * this.GRID_UNIT,
            3: 2 * this.GRID_UNIT
        },
        3: {
            0: 2 * this.GRID_UNIT,
            1: 2 * this.GRID_UNIT,
            2: 2 * this.GRID_UNIT,
            3: 2 * this.GRID_UNIT
        }
    };
    this.FULL_BLOCK_FIELDS = !0;
    this.FIELD_TEXT_FONTSIZE = 3 * this.GRID_UNIT;
    this.FIELD_TEXT_FONTWEIGHT = "normal";
    this.FIELD_TEXT_FONTFAMILY = '"NotoSansCJKsc-Bold","Roboto-Regular", "Noto-Regular", "Helvetica Neue", Helvetica, Avenir, Helvetica, Arial, sans-serif';
    this.FIELD_BORDER_RECT_RADIUS = this.CORNER_RADIUS;
    this.FIELD_BORDER_RECT_X_PADDING = 2 * this.GRID_UNIT;
    this.FIELD_BORDER_RECT_Y_PADDING = 1.625 * this.GRID_UNIT;
    this.FIELD_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT;
    this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT;
    this.FIELD_DROPDOWN_SVG_ARROW = this.FIELD_DROPDOWN_COLOURED_DIV = this.FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW = !0;
    this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING;
    this.FIELD_COLOUR_FULL_BLOCK = this.FIELD_TEXTINPUT_BOX_SHADOW = !0;
    this.FIELD_COLOUR_DEFAULT_WIDTH = 2 * this.GRID_UNIT;
    this.FIELD_COLOUR_DEFAULT_HEIGHT = 4 * this.GRID_UNIT;
    this.FIELD_CHECKBOX_X_OFFSET = 1 * this.GRID_UNIT;
    this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH = 12 * this.GRID_UNIT;
    this.SELECTED_GLOW_COLOUR = "";
    this.SELECTED_GLOW_SIZE = .2;
    this.REPLACEMENT_GLOW_COLOUR = "";
    this.REPLACEMENT_GLOW_SIZE = 2;
    this.selectedGlowFilterId = "";
    this.selectedGlowFilter_ = null;
    this.replacementGlowFilterId = "";
    this.replacementGlowFilter_ = null
};
Blockly.utils.object.inherits(Blockly.zelos.ConstantProvider, Blockly.blockRendering.ConstantProvider);
Blockly.zelos.ConstantProvider.prototype.setFontConstants_ = function (a) {
    Blockly.zelos.ConstantProvider.superClass_.setFontConstants_.call(this, a);
    this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT = this.FIELD_TEXT_HEIGHT + 2 * this.FIELD_BORDER_RECT_Y_PADDING
};
Blockly.zelos.ConstantProvider.prototype.init = function () {
    Blockly.zelos.ConstantProvider.superClass_.init.call(this);
    this.HEXAGONAL = this.makeHexagonal();
    this.ROUNDED = this.makeRounded();
    this.SQUARED = this.makeSquared();
    this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT + this.INSIDE_CORNERS.rightWidth
};
Blockly.zelos.ConstantProvider.prototype.setDynamicProperties_ = function (a) {
    Blockly.zelos.ConstantProvider.superClass_.setDynamicProperties_.call(this, a);
    this.SELECTED_GLOW_COLOUR = a.getComponentStyle("selectedGlowColour") || this.SELECTED_GLOW_COLOUR;
    var b = Number(a.getComponentStyle("selectedGlowSize"));
    this.SELECTED_GLOW_SIZE = b && !isNaN(b) ? b : this.SELECTED_GLOW_SIZE;
    this.REPLACEMENT_GLOW_COLOUR = a.getComponentStyle("replacementGlowColour") || this.REPLACEMENT_GLOW_COLOUR;
    this.REPLACEMENT_GLOW_SIZE = (a = Number(a.getComponentStyle("replacementGlowSize"))) && !isNaN(a) ? a : this.REPLACEMENT_GLOW_SIZE
};
Blockly.zelos.ConstantProvider.prototype.dispose = function () {
    Blockly.zelos.ConstantProvider.superClass_.dispose.call(this);
    this.selectedGlowFilter_ && Blockly.utils.dom.removeNode(this.selectedGlowFilter_);
    this.replacementGlowFilter_ && Blockly.utils.dom.removeNode(this.replacementGlowFilter_)
};
Blockly.zelos.ConstantProvider.prototype.makeStartHat = function () {
    var a = this.START_HAT_HEIGHT
        , b = this.START_HAT_WIDTH
        ,
        c = Blockly.utils.svgPaths.curve("c", [Blockly.utils.svgPaths.point(25, -a), Blockly.utils.svgPaths.point(71, -a), Blockly.utils.svgPaths.point(b, 0)]);
    return {
        height: a,
        width: b,
        path: c
    }
};
Blockly.zelos.ConstantProvider.prototype.makeHexagonal = function () {
    function a(a, d, e) {
        var c = a / 2;
        c = c > b ? b : c;
        e = e ? -1 : 1;
        a = (d ? -1 : 1) * a / 2;
        return Blockly.utils.svgPaths.lineTo(-e * c, a) + Blockly.utils.svgPaths.lineTo(e * c, a)
    }

    var b = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
    return {
        type: this.SHAPES.HEXAGONAL,
        isDynamic: !0,
        width: function (a) {
            a /= 2;
            return a > b ? b : a
        },
        height: function (a) {
            return a
        },
        connectionOffsetY: function (a) {
            return a / 2
        },
        connectionOffsetX: function (a) {
            return -a
        },
        pathDown: function (b) {
            return a(b, !1, !1)
        },
        pathUp: function (b) {
            return a(b, !0, !1)
        },
        pathRightDown: function (b) {
            return a(b, !1, !0)
        },
        pathRightUp: function (b) {
            return a(b, !1, !0)
        }
    }
};
Blockly.zelos.ConstantProvider.prototype.makeRounded = function () {
    function a(a, b, f) {
        var d = a > c ? a - c : 0;
        a = (a > c ? c : a) / 2;
        return Blockly.utils.svgPaths.arc("a", "0 0,1", a, Blockly.utils.svgPaths.point((b ? -1 : 1) * a, (b ? -1 : 1) * a)) + Blockly.utils.svgPaths.lineOnAxis("v", (f ? 1 : -1) * d) + Blockly.utils.svgPaths.arc("a", "0 0,1", a, Blockly.utils.svgPaths.point((b ? 1 : -1) * a, (b ? -1 : 1) * a))
    }

    var b = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH
        , c = 2 * b;
    return {
        type: this.SHAPES.ROUND,
        isDynamic: !0,
        width: function (a) {
            a /= 2;
            return a > b ? b : a
        },
        height: function (a) {
            return a
        },
        connectionOffsetY: function (a) {
            return a / 2
        },
        connectionOffsetX: function (a) {
            return -a
        },
        pathDown: function (b) {
            return a(b, !1, !1)
        },
        pathUp: function (b) {
            return a(b, !0, !1)
        },
        pathRightDown: function (b) {
            return a(b, !1, !0)
        },
        pathRightUp: function (b) {
            return a(b, !1, !0)
        }
    }
};
Blockly.zelos.ConstantProvider.prototype.makeSquared = function () {
    function a(a, d, e) {
        a -= 2 * b;
        return Blockly.utils.svgPaths.arc("a", "0 0,1", b, Blockly.utils.svgPaths.point((d ? -1 : 1) * b, (d ? -1 : 1) * b)) + Blockly.utils.svgPaths.lineOnAxis("v", (e ? 1 : -1) * a) + Blockly.utils.svgPaths.arc("a", "0 0,1", b, Blockly.utils.svgPaths.point((d ? 1 : -1) * b, (d ? -1 : 1) * b))
    }

    var b = this.CORNER_RADIUS;
    return {
        type: this.SHAPES.SQUARE,
        isDynamic: !0,
        width: function (a) {
            return b
        },
        height: function (a) {
            return a
        },
        connectionOffsetY: function (a) {
            return a / 2
        },
        connectionOffsetX: function (a) {
            return -a
        },
        pathDown: function (b) {
            return a(b, !1, !1)
        },
        pathUp: function (b) {
            return a(b, !0, !1)
        },
        pathRightDown: function (b) {
            return a(b, !1, !0)
        },
        pathRightUp: function (b) {
            return a(b, !1, !0)
        }
    }
};
Blockly.zelos.ConstantProvider.prototype.shapeFor = function (a) {
    var b = a.getCheck();
    !b && a.targetConnection && (b = a.targetConnection.getCheck());
    switch (a.type) {
        case Blockly.INPUT_VALUE:
        case Blockly.OUTPUT_VALUE:
            a = a.getSourceBlock().getOutputShape();
            if (null != a)
                switch (a) {
                    case this.SHAPES.HEXAGONAL:
                        return this.HEXAGONAL;
                    case this.SHAPES.ROUND:
                        return this.ROUNDED;
                    case this.SHAPES.SQUARE:
                        return this.SQUARED
                }
            if (b && -1 != b.indexOf("Boolean"))
                return this.HEXAGONAL;
            if (b && -1 != b.indexOf("Number"))
                return this.ROUNDED;
            b && b.indexOf("String");
            return this.ROUNDED;
        case Blockly.PREVIOUS_STATEMENT:
        case Blockly.NEXT_STATEMENT:
            return this.NOTCH;
        default:
            throw Error("Unknown type");
    }
};
Blockly.zelos.ConstantProvider.prototype.makeNotch = function () {
    function a(a) {
        return Blockly.utils.svgPaths.curve("c", [Blockly.utils.svgPaths.point(a * e / 2, 0), Blockly.utils.svgPaths.point(a * e * 3 / 4, g / 2), Blockly.utils.svgPaths.point(a * e, g)]) + Blockly.utils.svgPaths.line([Blockly.utils.svgPaths.point(a * e, f)]) + Blockly.utils.svgPaths.curve("c", [Blockly.utils.svgPaths.point(a * e / 4, g / 2), Blockly.utils.svgPaths.point(a * e / 2, g), Blockly.utils.svgPaths.point(a * e, g)]) + Blockly.utils.svgPaths.lineOnAxis("h", a * d) + Blockly.utils.svgPaths.curve("c", [Blockly.utils.svgPaths.point(a * e / 2, 0), Blockly.utils.svgPaths.point(a * e * 3 / 4, -(g / 2)), Blockly.utils.svgPaths.point(a * e, -g)]) + Blockly.utils.svgPaths.line([Blockly.utils.svgPaths.point(a * e, -f)]) + Blockly.utils.svgPaths.curve("c", [Blockly.utils.svgPaths.point(a * e / 4, -(g / 2)), Blockly.utils.svgPaths.point(a * e / 2, -g), Blockly.utils.svgPaths.point(a * e, -g)])
    }

    var b = this.NOTCH_WIDTH
        , c = this.NOTCH_HEIGHT
        , d = b / 3
        , e = d / 3
        , f = c / 2
        , g = f / 2
        , h = a(1)
        , k = a(-1);
    return {
        type: this.SHAPES.NOTCH,
        width: b,
        height: c,
        pathLeft: h,
        pathRight: k
    }
};
Blockly.zelos.ConstantProvider.prototype.makeInsideCorners = function () {
    var a = this.CORNER_RADIUS
        , b = Blockly.utils.svgPaths.arc("a", "0 0,0", a, Blockly.utils.svgPaths.point(-a, a))
        , c = Blockly.utils.svgPaths.arc("a", "0 0,1", a, Blockly.utils.svgPaths.point(-a, a))
        , d = Blockly.utils.svgPaths.arc("a", "0 0,0", a, Blockly.utils.svgPaths.point(a, a))
        , e = Blockly.utils.svgPaths.arc("a", "0 0,1", a, Blockly.utils.svgPaths.point(a, a));
    return {
        width: a,
        height: a,
        pathTop: b,
        pathBottom: d,
        rightWidth: a,
        rightHeight: a,
        pathTopRight: c,
        pathBottomRight: e
    }
};
Blockly.zelos.ConstantProvider.prototype.generateSecondaryColour_ = function (a) {
    return Blockly.utils.colour.blend("#000", a, .15) || a
};
Blockly.zelos.ConstantProvider.prototype.generateTertiaryColour_ = function (a) {
    return Blockly.utils.colour.blend("#000", a, .25) || a
};
Blockly.zelos.ConstantProvider.prototype.createDom = function (a, b, c) {
    Blockly.zelos.ConstantProvider.superClass_.createDom.call(this, a, b, c);
    a = Blockly.utils.dom.createSvgElement("defs", {}, a);
    b = Blockly.utils.dom.createSvgElement("filter", {
        id: "blocklySelectedGlowFilter" + this.randomIdentifier,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%"
    }, a);
    Blockly.utils.dom.createSvgElement("feGaussianBlur", {
        "in": "SourceGraphic",
        stdDeviation: this.SELECTED_GLOW_SIZE
    }, b);
    c = Blockly.utils.dom.createSvgElement("feComponentTransfer", {
        result: "outBlur"
    }, b);
    Blockly.utils.dom.createSvgElement("feFuncA", {
        type: "table",
        tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
    }, c);
    Blockly.utils.dom.createSvgElement("feFlood", {
        "flood-color": this.SELECTED_GLOW_COLOUR,
        "flood-opacity": 1,
        result: "outColor"
    }, b);
    Blockly.utils.dom.createSvgElement("feComposite", {
        "in": "outColor",
        in2: "outBlur",
        operator: "in",
        result: "outGlow"
    }, b);
    this.selectedGlowFilterId = b.id;
    this.selectedGlowFilter_ = b;
    a = Blockly.utils.dom.createSvgElement("filter", {
        id: "blocklyReplacementGlowFilter" + this.randomIdentifier,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%"
    }, a);
    Blockly.utils.dom.createSvgElement("feGaussianBlur", {
        "in": "SourceGraphic",
        stdDeviation: this.REPLACEMENT_GLOW_SIZE
    }, a);
    b = Blockly.utils.dom.createSvgElement("feComponentTransfer", {
        result: "outBlur"
    }, a);
    Blockly.utils.dom.createSvgElement("feFuncA", {
        type: "table",
        tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
    }, b);
    Blockly.utils.dom.createSvgElement("feFlood", {
        "flood-color": this.REPLACEMENT_GLOW_COLOUR,
        "flood-opacity": 1,
        result: "outColor"
    }, a);
    Blockly.utils.dom.createSvgElement("feComposite", {
        "in": "outColor",
        in2: "outBlur",
        operator: "in",
        result: "outGlow"
    }, a);
    Blockly.utils.dom.createSvgElement("feComposite", {
        "in": "SourceGraphic",
        in2: "outGlow",
        operator: "over"
    }, a);
    this.replacementGlowFilterId = a.id;
    this.replacementGlowFilter_ = a
};
Blockly.zelos.ConstantProvider.prototype.getCSS_ = function (a) {
    return [a + " .blocklyText, ", a + " .blocklyFlyoutLabelText {", "font-family: " + this.FIELD_TEXT_FONTFAMILY + ";", "font-size: " + this.FIELD_TEXT_FONTSIZE + "pt;", "font-weight: " + this.FIELD_TEXT_FONTWEIGHT + ";", "}", a + " .blocklyText {", "fill: #fff;", "}", a + " .blocklyNonEditableText>rect:not(.blocklyDropdownRect),", a + " .blocklyEditableText>rect:not(.blocklyDropdownRect) {", "fill: " + this.FIELD_BORDER_RECT_COLOUR + ";", "}", a + " .blocklyNonEditableText>text,", a + " .blocklyEditableText>text,", a + " .blocklyNonEditableText>g>text,", a + " .blocklyEditableText>g>text {", "fill: #575E75;", "}", a + " .blocklyFlyoutLabelText {", "fill: #575E75;", "}", a + " .blocklyText.blocklyBubbleText {", "fill: #575E75;", "}", a + " .blocklyDraggable:not(.blocklyDisabled)", " .blocklyEditableText:not(.editing):hover>rect ,", a + " .blocklyDraggable:not(.blocklyDisabled)", " .blocklyEditableText:not(.editing):hover>.blocklyPath {", "stroke: #fff;", "stroke-width: 2;", "}", a + " .blocklyHtmlInput {", "font-family: " + this.FIELD_TEXT_FONTFAMILY + ";", "font-weight: " + this.FIELD_TEXT_FONTWEIGHT + ";", "color: #575E75;", "}", a + " .blocklyDropdownText {", "fill: #fff !important;", "}", a + ".blocklyWidgetDiv .goog-menuitem,", a + ".blocklyDropDownDiv .goog-menuitem {", "font-family: " + this.FIELD_TEXT_FONTFAMILY + ";", "}", a + ".blocklyDropDownDiv .goog-menuitem-content {", "color: #fff;", "}", a + " .blocklyHighlightedConnectionPath {", "stroke: " + this.SELECTED_GLOW_COLOUR + ";", "}", a + " .blocklyDisabled > .blocklyOutlinePath {", "fill: url(#blocklyDisabledPattern" + this.randomIdentifier + ")", "}", a + " .blocklyInsertionMarker>.blocklyPath {", "fill-opacity: " + this.INSERTION_MARKER_OPACITY + ";", "stroke: none", "}"]
};
Blockly.zelos.TopRow = function (a) {
    Blockly.zelos.TopRow.superClass_.constructor.call(this, a)
};
Blockly.utils.object.inherits(Blockly.zelos.TopRow, Blockly.blockRendering.TopRow);
Blockly.zelos.TopRow.prototype.endsWithElemSpacer = function () {
    return !1
};
Blockly.zelos.TopRow.prototype.hasLeftSquareCorner = function (a) {
    var b = (a.hat ? "cap" === a.hat : this.constants_.ADD_START_HATS) && !a.outputConnection && !a.previousConnection;
    return !!a.outputConnection || b
};
Blockly.zelos.TopRow.prototype.hasRightSquareCorner = function (a) {
    return !!a.outputConnection && !a.statementInputCount && !a.nextConnection
};
Blockly.zelos.BottomRow = function (a) {
    Blockly.zelos.BottomRow.superClass_.constructor.call(this, a)
};
Blockly.utils.object.inherits(Blockly.zelos.BottomRow, Blockly.blockRendering.BottomRow);
Blockly.zelos.BottomRow.prototype.endsWithElemSpacer = function () {
    return !1
};
Blockly.zelos.BottomRow.prototype.hasLeftSquareCorner = function (a) {
    return !!a.outputConnection
};
Blockly.zelos.BottomRow.prototype.hasRightSquareCorner = function (a) {
    return !!a.outputConnection && !a.statementInputCount && !a.nextConnection
};
Blockly.zelos.RightConnectionShape = function (a) {
    Blockly.zelos.RightConnectionShape.superClass_.constructor.call(this, a);
    this.type |= Blockly.blockRendering.Types.getType("RIGHT_CONNECTION");
    this.width = this.height = 0
};
Blockly.utils.object.inherits(Blockly.zelos.RightConnectionShape, Blockly.blockRendering.Measurable);
Blockly.zelos.StatementInput = function (a, b) {
    Blockly.zelos.StatementInput.superClass_.constructor.call(this, a, b);
    if (this.connectedBlock) {
        for (a = this.connectedBlock; a.getNextBlock();)
            a = a.getNextBlock();
        a.nextConnection || (this.height = this.connectedBlockHeight,
            this.connectedBottomNextConnection = !0)
    }
};
Blockly.utils.object.inherits(Blockly.zelos.StatementInput, Blockly.blockRendering.StatementInput);
Blockly.zelos.RenderInfo = function (a, b) {
    Blockly.zelos.RenderInfo.superClass_.constructor.call(this, a, b);
    this.topRow = new Blockly.zelos.TopRow(this.constants_);
    this.bottomRow = new Blockly.zelos.BottomRow(this.constants_);
    this.isInline = !0;
    this.isMultiRow = !b.getInputsInline() || b.isCollapsed();
    this.hasStatementInput = 0 < b.statementInputCount;
    this.rightSide = this.outputConnection ? new Blockly.zelos.RightConnectionShape(this.constants_) : null
};
Blockly.utils.object.inherits(Blockly.zelos.RenderInfo, Blockly.blockRendering.RenderInfo);
Blockly.zelos.RenderInfo.prototype.getRenderer = function () {
    return this.renderer_
};
Blockly.zelos.RenderInfo.prototype.measure = function () {
    this.createRows_();
    this.addElemSpacing_();
    this.addRowSpacing_();
    this.adjustXPosition_();
    this.computeBounds_();
    this.alignRowElements_();
    this.finalize_()
};
Blockly.zelos.RenderInfo.prototype.shouldStartNewRow_ = function (a, b) {
    return b ? a.type == Blockly.NEXT_STATEMENT || b.type == Blockly.NEXT_STATEMENT ? !0 : a.type == Blockly.INPUT_VALUE || a.type == Blockly.DUMMY_INPUT ? !this.isInline || this.isMultiRow : !1 : !1
};
Blockly.zelos.RenderInfo.prototype.getDesiredRowWidth_ = function (a) {
    return a.hasStatement ? this.width - this.startX - (this.constants_.INSIDE_CORNERS.rightWidth || 0) : Blockly.zelos.RenderInfo.superClass_.getDesiredRowWidth_.call(this, a)
};
Blockly.zelos.RenderInfo.prototype.getInRowSpacing_ = function (a, b) {
    return a && b || !this.outputConnection || !this.outputConnection.isDynamicShape || this.hasStatementInput || this.bottomRow.hasNextConnection ? !a && b && Blockly.blockRendering.Types.isStatementInput(b) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : a && Blockly.blockRendering.Types.isLeftRoundedCorner(a) && b && (Blockly.blockRendering.Types.isPreviousConnection(b) || Blockly.blockRendering.Types.isNextConnection(b)) ? b.notchOffset - this.constants_.CORNER_RADIUS : a && Blockly.blockRendering.Types.isLeftSquareCorner(a) && b && Blockly.blockRendering.Types.isHat(b) ? this.constants_.NO_PADDING : this.constants_.MEDIUM_PADDING : this.constants_.NO_PADDING
};
Blockly.zelos.RenderInfo.prototype.getSpacerRowHeight_ = function (a, b) {
    if (Blockly.blockRendering.Types.isTopRow(a) && Blockly.blockRendering.Types.isBottomRow(b))
        return this.constants_.EMPTY_BLOCK_SPACER_HEIGHT;
    var c = Blockly.blockRendering.Types.isInputRow(a) && a.hasStatement
        , d = Blockly.blockRendering.Types.isInputRow(b) && b.hasStatement;
    return d || c ? (a = Math.max(this.constants_.NOTCH_HEIGHT, this.constants_.INSIDE_CORNERS.rightHeight || 0),
        d && c ? Math.max(a, this.constants_.DUMMY_INPUT_MIN_HEIGHT) : a) : Blockly.blockRendering.Types.isTopRow(a) ? a.hasPreviousConnection || this.outputConnection && !this.hasStatementInput ? this.constants_.NO_PADDING : Math.abs(this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS) : Blockly.blockRendering.Types.isBottomRow(b) ? this.outputConnection ? !b.hasNextConnection && this.hasStatementInput ? Math.abs(this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS) : this.constants_.NO_PADDING : Math.max(this.topRow.minHeight, Math.max(this.constants_.NOTCH_HEIGHT, this.constants_.CORNER_RADIUS)) - this.constants_.CORNER_RADIUS : this.constants_.MEDIUM_PADDING
};
Blockly.zelos.RenderInfo.prototype.getSpacerRowWidth_ = function (a, b) {
    var c = this.width - this.startX;
    return Blockly.blockRendering.Types.isInputRow(a) && a.hasStatement || Blockly.blockRendering.Types.isInputRow(b) && b.hasStatement ? Math.max(c, this.constants_.STATEMENT_INPUT_SPACER_MIN_WIDTH) : c
};
Blockly.zelos.RenderInfo.prototype.getElemCenterline_ = function (a, b) {
    if (a.hasStatement && !Blockly.blockRendering.Types.isSpacer(b) && !Blockly.blockRendering.Types.isStatementInput(b))
        return a.yPos + this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT / 2;
    if (Blockly.blockRendering.Types.isInlineInput(b)) {
        var c = b.connectedBlock;
        if (c && c.outputConnection && c.nextConnection)
            return a.yPos + c.height / 2
    }
    return Blockly.zelos.RenderInfo.superClass_.getElemCenterline_.call(this, a, b)
};
Blockly.zelos.RenderInfo.prototype.addInput_ = function (a, b) {
    a.type == Blockly.DUMMY_INPUT && b.hasDummyInput && b.align == Blockly.ALIGN_LEFT && a.align == Blockly.ALIGN_RIGHT && (b.rightAlignedDummyInput = a);
    Blockly.zelos.RenderInfo.superClass_.addInput_.call(this, a, b)
};
Blockly.zelos.RenderInfo.prototype.addAlignmentPadding_ = function (a, b) {
    if (a.rightAlignedDummyInput) {
        for (var c, d = 0, e; (e = a.elements[d]) && (Blockly.blockRendering.Types.isSpacer(e) && (c = e),
        !Blockly.blockRendering.Types.isField(e) || e.parentInput != a.rightAlignedDummyInput); d++)
            ;
        if (c) {
            c.width += b;
            a.width += b;
            return
        }
    }
    Blockly.zelos.RenderInfo.superClass_.addAlignmentPadding_.call(this, a, b)
};
Blockly.zelos.RenderInfo.prototype.adjustXPosition_ = function () {
    for (var a = this.constants_.NOTCH_OFFSET_LEFT + this.constants_.NOTCH_WIDTH, b = a, c = 2; c < this.rows.length - 1; c += 2) {
        var d = this.rows[c - 1]
            , e = this.rows[c]
            , f = this.rows[c + 1];
        d = 2 == c ? !!this.topRow.hasPreviousConnection : !!d.followsStatement;
        f = c + 2 >= this.rows.length - 1 ? !!this.bottomRow.hasNextConnection : !!f.precedesStatement;
        if (Blockly.blockRendering.Types.isInputRow(e) && e.hasStatement)
            e.measure(),
                b = e.width - e.getLastInput().width + a;
        else if (d && (2 == c || f) && Blockly.blockRendering.Types.isInputRow(e) && !e.hasStatement) {
            f = e.xPos;
            d = null;
            for (var g = 0, h; h = e.elements[g]; g++)
                Blockly.blockRendering.Types.isSpacer(h) && (d = h),
                !(d && (Blockly.blockRendering.Types.isField(h) || Blockly.blockRendering.Types.isInput(h)) && f < b) || Blockly.blockRendering.Types.isField(h) && (h.field instanceof Blockly.FieldLabel || h.field instanceof Blockly.FieldImage) || (d.width += b - f),
                    f += h.width
        }
    }
};
Blockly.zelos.RenderInfo.prototype.finalizeOutputConnection_ = function () {
    if (this.outputConnection && this.outputConnection.isDynamicShape) {
        for (var a = 0, b = 0, c; c = this.rows[b]; b++)
            c.yPos = a,
                a += c.height;
        this.height = a;
        b = this.bottomRow.hasNextConnection ? this.height - this.bottomRow.descenderHeight : this.height;
        a = this.outputConnection.shape.height(b);
        b = this.outputConnection.shape.width(b);
        this.outputConnection.height = a;
        this.outputConnection.width = b;
        this.outputConnection.startX = b;
        this.outputConnection.connectionOffsetY = this.outputConnection.shape.connectionOffsetY(a);
        this.outputConnection.connectionOffsetX = this.outputConnection.shape.connectionOffsetX(b);
        c = 0;
        this.hasStatementInput || this.bottomRow.hasNextConnection || (c = b,
            this.rightSide.height = a,
            this.rightSide.width = c,
            this.rightSide.centerline = a / 2,
            this.rightSide.xPos = this.width + c);
        this.startX = b;
        this.width += b + c;
        this.widthWithChildren += b + c
    }
};
Blockly.zelos.RenderInfo.prototype.finalizeHorizontalAlignment_ = function () {
    if (this.outputConnection && !this.hasStatementInput && !this.bottomRow.hasNextConnection) {
        for (var a = 0, b = 0, c; c = this.rows[b]; b++)
            if (Blockly.blockRendering.Types.isInputRow(c)) {
                a = c.elements[c.elements.length - 2];
                var d = this.getNegativeSpacing_(c.elements[1])
                    , e = this.getNegativeSpacing_(a);
                a = d + e;
                var f = this.constants_.MIN_BLOCK_WIDTH + 2 * this.outputConnection.width;
                this.width - a < f && (a = this.width - f,
                    d = a / 2,
                    e = a / 2);
                c.elements.unshift(new Blockly.blockRendering.InRowSpacer(this.constants_, -d));
                c.elements.push(new Blockly.blockRendering.InRowSpacer(this.constants_, -e))
            }
        if (a)
            for (this.width -= a,
                     this.widthWithChildren -= a,
                     this.rightSide.xPos -= a,
                     b = 0; c = this.rows[b]; b++)
                Blockly.blockRendering.Types.isTopOrBottomRow(c) && (c.elements[1].width -= a,
                    c.elements[1].widthWithConnectedBlocks -= a),
                    c.width -= a,
                    c.widthWithConnectedBlocks -= a
    }
};
Blockly.zelos.RenderInfo.prototype.getNegativeSpacing_ = function (a) {
    if (!a)
        return 0;
    var b = this.outputConnection.width
        , c = this.outputConnection.shape.type
        , d = this.constants_;
    if (this.isMultiRow && 1 < this.inputRows.length)
        switch (c) {
            case d.SHAPES.ROUND:
                return c = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH,
                    c = this.height / 2 > c ? c : this.height / 2,
                b - c * (1 - Math.sin(Math.acos((c - this.constants_.SMALL_PADDING) / c)));
            default:
                return 0
        }
    if (Blockly.blockRendering.Types.isInlineInput(a)) {
        var e = a.connectedBlock;
        a = e ? e.pathObject.outputShapeType : a.shape.type;
        return e && e.outputConnection && (e.statementInputCount || e.nextConnection) || c == d.SHAPES.HEXAGONAL && c != a ? 0 : b - this.constants_.SHAPE_IN_SHAPE_PADDING[c][a]
    }
    return Blockly.blockRendering.Types.isField(a) ? c == d.SHAPES.ROUND && a.field instanceof Blockly.FieldTextInput ? b - 2.75 * d.GRID_UNIT : b - this.constants_.SHAPE_IN_SHAPE_PADDING[c][0] : Blockly.blockRendering.Types.isIcon(a) ? this.constants_.SMALL_PADDING : 0
};
Blockly.zelos.RenderInfo.prototype.finalizeVerticalAlignment_ = function () {
    if (!this.outputConnection)
        for (var a = 2; a < this.rows.length - 1; a += 2) {
            var b = this.rows[a - 1]
                , c = this.rows[a]
                , d = this.rows[a + 1]
                , e = 2 == a
                , f = a + 2 >= this.rows.length - 1 ? !!this.bottomRow.hasNextConnection : !!d.precedesStatement;
            if (e ? this.topRow.hasPreviousConnection : b.followsStatement) {
                var g = 3 == c.elements.length && (c.elements[1].field instanceof Blockly.FieldLabel || c.elements[1].field instanceof Blockly.FieldImage);
                if (!e && g)
                    b.height -= this.constants_.SMALL_PADDING,
                        d.height -= this.constants_.SMALL_PADDING,
                        c.height -= this.constants_.MEDIUM_PADDING;
                else if (!e && !f)
                    b.height += this.constants_.SMALL_PADDING;
                else if (f) {
                    e = !1;
                    for (f = 0; g = c.elements[f]; f++)
                        if (Blockly.blockRendering.Types.isInlineInput(g) && g.connectedBlock && !g.connectedBlock.isShadow() && 40 <= g.connectedBlock.getHeightWidth().height) {
                            e = !0;
                            break
                        }
                    e && (b.height -= this.constants_.SMALL_PADDING,
                        d.height -= this.constants_.SMALL_PADDING)
                }
            }
        }
};
Blockly.zelos.RenderInfo.prototype.finalize_ = function () {
    this.finalizeOutputConnection_();
    this.finalizeHorizontalAlignment_();
    this.finalizeVerticalAlignment_();
    Blockly.zelos.RenderInfo.superClass_.finalize_.call(this);
    this.rightSide && (this.widthWithChildren += this.rightSide.width)
};
Blockly.zelos.Drawer = function (a, b) {
    Blockly.zelos.Drawer.superClass_.constructor.call(this, a, b)
};
Blockly.utils.object.inherits(Blockly.zelos.Drawer, Blockly.blockRendering.Drawer);
Blockly.zelos.Drawer.prototype.draw = function () {
    var a = this.block_.pathObject;
    a.beginDrawing();
    this.hideHiddenIcons_();
    this.drawOutline_();
    this.drawInternals_();
    a.setPath(this.outlinePath_ + "\n" + this.inlinePath_);
    this.info_.RTL && a.flipRTL();
    Blockly.blockRendering.useDebugger && this.block_.renderingDebugger.drawDebug(this.block_, this.info_);
    this.recordSizeOnBlock_();
    this.info_.outputConnection && (a.outputShapeType = this.info_.outputConnection.shape.type);
    a.endDrawing()
};
Blockly.zelos.Drawer.prototype.drawOutline_ = function () {
    this.info_.outputConnection && this.info_.outputConnection.isDynamicShape && !this.info_.hasStatementInput && !this.info_.bottomRow.hasNextConnection ? (this.drawFlatTop_(),
        this.drawRightDynamicConnection_(),
        this.drawFlatBottom_(),
        this.drawLeftDynamicConnection_()) : Blockly.zelos.Drawer.superClass_.drawOutline_.call(this)
};
Blockly.zelos.Drawer.prototype.drawLeft_ = function () {
    this.info_.outputConnection && this.info_.outputConnection.isDynamicShape ? this.drawLeftDynamicConnection_() : Blockly.zelos.Drawer.superClass_.drawLeft_.call(this)
};
Blockly.zelos.Drawer.prototype.drawRightSideRow_ = function (a) {
    if (!(0 >= a.height))
        if (a.precedesStatement || a.followsStatement) {
            var b = this.constants_.INSIDE_CORNERS.rightHeight;
            b = a.height - (a.precedesStatement ? b : 0);
            this.outlinePath_ += (a.followsStatement ? this.constants_.INSIDE_CORNERS.pathBottomRight : "") + (0 < b ? Blockly.utils.svgPaths.lineOnAxis("V", a.yPos + b) : "") + (a.precedesStatement ? this.constants_.INSIDE_CORNERS.pathTopRight : "")
        } else
            this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis("V", a.yPos + a.height)
};
Blockly.zelos.Drawer.prototype.drawRightDynamicConnection_ = function () {
    this.outlinePath_ += this.info_.outputConnection.shape.pathRightDown(this.info_.outputConnection.height)
};
Blockly.zelos.Drawer.prototype.drawLeftDynamicConnection_ = function () {
    this.positionOutputConnection_();
    this.outlinePath_ += this.info_.outputConnection.shape.pathUp(this.info_.outputConnection.height);
    this.outlinePath_ += "z"
};
Blockly.zelos.Drawer.prototype.drawFlatTop_ = function () {
    var a = this.info_.topRow;
    this.positionPreviousConnection_();
    this.outlinePath_ += Blockly.utils.svgPaths.moveBy(a.xPos, this.info_.startY);
    this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis("h", a.width)
};
Blockly.zelos.Drawer.prototype.drawFlatBottom_ = function () {
    var a = this.info_.bottomRow;
    this.positionNextConnection_();
    this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis("V", a.baseline);
    this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis("h", -a.width)
};
Blockly.zelos.Drawer.prototype.drawInlineInput_ = function (a) {
    this.positionInlineInputConnection_(a);
    var b = a.input.name;
    if (!a.connectedBlock && !this.info_.isInsertionMarker) {
        var c = a.width - 2 * a.connectionWidth;
        a = Blockly.utils.svgPaths.moveTo(a.xPos + a.connectionWidth, a.centerline - a.height / 2) + Blockly.utils.svgPaths.lineOnAxis("h", c) + a.shape.pathRightDown(a.height) + Blockly.utils.svgPaths.lineOnAxis("h", -c) + a.shape.pathUp(a.height) + "z";
        this.block_.pathObject.setOutlinePath(b, a)
    }
};
Blockly.zelos.Drawer.prototype.drawStatementInput_ = function (a) {
    var b = a.getLastInput()
        , c = b.xPos + b.notchOffset + b.shape.width
        ,
        d = b.shape.pathRight + Blockly.utils.svgPaths.lineOnAxis("h", -(b.notchOffset - this.constants_.INSIDE_CORNERS.width)) + this.constants_.INSIDE_CORNERS.pathTop
        , e = a.height - 2 * this.constants_.INSIDE_CORNERS.height;
    b = this.constants_.INSIDE_CORNERS.pathBottom + Blockly.utils.svgPaths.lineOnAxis("h", b.notchOffset - this.constants_.INSIDE_CORNERS.width) + (b.connectedBottomNextConnection ? "" : b.shape.pathLeft);
    this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis("H", c) + d + Blockly.utils.svgPaths.lineOnAxis("v", e) + b + Blockly.utils.svgPaths.lineOnAxis("H", a.xPos + a.width);
    this.positionStatementInputConnection_(a)
};
Blockly.zelos.PathObject = function (a, b, c) {
    Blockly.zelos.PathObject.superClass_.constructor.call(this, a, b, c);
    this.constants = c;
    this.svgPathSelected_ = null;
    this.outlines_ = {};
    this.outputShapeType = this.remainingOutlines_ = null
};
Blockly.utils.object.inherits(Blockly.zelos.PathObject, Blockly.blockRendering.PathObject);
Blockly.zelos.PathObject.prototype.setPath = function (a) {
    Blockly.zelos.PathObject.superClass_.setPath.call(this, a);
    this.svgPathSelected_ && this.svgPathSelected_.setAttribute("d", a)
};
Blockly.zelos.PathObject.prototype.applyColour = function (a) {
    Blockly.zelos.PathObject.superClass_.applyColour.call(this, a);
    a.isShadow() && a.getParent() && this.svgPath.setAttribute("stroke", a.getParent().style.colourTertiary);
    a = 0;
    for (var b = Object.keys(this.outlines_), c; c = b[a]; a++)
        this.outlines_[c].setAttribute("fill", this.style.colourTertiary)
};
Blockly.zelos.PathObject.prototype.flipRTL = function () {
    Blockly.zelos.PathObject.superClass_.flipRTL.call(this);
    for (var a = 0, b = Object.keys(this.outlines_), c; c = b[a]; a++)
        this.outlines_[c].setAttribute("transform", "scale(-1 1)")
};
Blockly.zelos.PathObject.prototype.updateSelected = function (a) {
    // this.setClass_("blocklySelected", a);
    // a ? this.svgPathSelected_ || (this.svgPathSelected_ = this.svgPath.cloneNode(!0),
    //     this.svgPathSelected_.setAttribute("fill", "none"),
    //     this.svgPathSelected_.setAttribute("filter", "url(#" + this.constants.selectedGlowFilterId + ")"),
    //     this.svgRoot.appendChild(this.svgPathSelected_)) : this.svgPathSelected_ && (this.svgRoot.removeChild(this.svgPathSelected_),
    //     this.svgPathSelected_ = null)
};
Blockly.zelos.PathObject.prototype.updateReplacementFade = function (a) {
    this.setClass_("blocklyReplaceable", a);
    a ? this.svgPath.setAttribute("filter", "url(#" + this.constants.replacementGlowFilterId + ")") : this.svgPath.removeAttribute("filter")
};
Blockly.zelos.PathObject.prototype.updateShapeForInputHighlight = function (a, b) {
    a = a.getParentInput().name;
    (a = this.getOutlinePath_(a)) && (b ? a.setAttribute("filter", "url(#" + this.constants.replacementGlowFilterId + ")") : a.removeAttribute("filter"))
};
Blockly.zelos.PathObject.prototype.beginDrawing = function () {
    this.remainingOutlines_ = {};
    for (var a = 0, b = Object.keys(this.outlines_), c; c = b[a]; a++)
        this.remainingOutlines_[c] = 1
};
Blockly.zelos.PathObject.prototype.endDrawing = function () {
    if (this.remainingOutlines_)
        for (var a = 0, b = Object.keys(this.remainingOutlines_), c; c = b[a]; a++)
            this.removeOutlinePath_(c);
    this.remainingOutlines_ = null
};
Blockly.zelos.PathObject.prototype.setOutlinePath = function (a, b) {
    a = this.getOutlinePath_(a);
    a.setAttribute("d", b);
    a.setAttribute("fill", this.style.colourTertiary)
};
Blockly.zelos.PathObject.prototype.getOutlinePath_ = function (a) {
    this.outlines_[a] || (this.outlines_[a] = Blockly.utils.dom.createSvgElement("path", {
        "class": "blocklyOutlinePath",
        d: ""
    }, this.svgRoot));
    this.remainingOutlines_ && delete this.remainingOutlines_[a];
    return this.outlines_[a]
};
Blockly.zelos.PathObject.prototype.removeOutlinePath_ = function (a) {
    this.outlines_[a].parentNode.removeChild(this.outlines_[a]);
    delete this.outlines_[a]
};
Blockly.zelos.MarkerSvg = function (a, b, c) {
    Blockly.zelos.MarkerSvg.superClass_.constructor.call(this, a, b, c)
};
Blockly.utils.object.inherits(Blockly.zelos.MarkerSvg, Blockly.blockRendering.MarkerSvg);
Blockly.zelos.MarkerSvg.prototype.showWithInput_ = function (a) {
    var b = a.getSourceBlock();
    a = a.getLocation().getOffsetInBlock();
    this.positionCircle_(a.x, a.y);
    this.setParent_(b);
    this.showCurrent_()
};
Blockly.zelos.MarkerSvg.prototype.showWithBlock_ = function (a) {
    a = a.getLocation();
    var b = a.getHeightWidth();
    this.positionRect_(0, 0, b.width, b.height);
    this.setParent_(a);
    this.showCurrent_()
};
Blockly.zelos.MarkerSvg.prototype.positionCircle_ = function (a, b) {
    this.markerCircle_.setAttribute("cx", a);
    this.markerCircle_.setAttribute("cy", b);
    this.currentMarkerSvg = this.markerCircle_
};
Blockly.zelos.MarkerSvg.prototype.showAtLocation_ = function (a) {
    var b = !1;
    a.getType() == Blockly.ASTNode.types.OUTPUT ? (this.showWithInput_(a),
        b = !0) : a.getType() == Blockly.ASTNode.types.BLOCK && (this.showWithBlock_(a),
        b = !0);
    b || Blockly.zelos.MarkerSvg.superClass_.showAtLocation_.call(this, a)
};
Blockly.zelos.MarkerSvg.prototype.hide = function () {
    Blockly.zelos.MarkerSvg.superClass_.hide.call(this);
    this.markerCircle_.style.display = "none"
};
Blockly.zelos.MarkerSvg.prototype.createDomInternal_ = function () {
    Blockly.zelos.MarkerSvg.superClass_.createDomInternal_.call(this);
    this.markerCircle_ = Blockly.utils.dom.createSvgElement("circle", {
        r: this.constants_.CURSOR_RADIUS,
        style: "display: none",
        "stroke-width": this.constants_.CURSOR_STROKE_WIDTH
    }, this.markerSvg_);
    if (this.isCursor()) {
        var a = this.getBlinkProperties_();
        Blockly.utils.dom.createSvgElement("animate", a, this.markerCircle_)
    }
    return this.markerSvg_
};
Blockly.zelos.MarkerSvg.prototype.applyColour_ = function () {
    Blockly.zelos.MarkerSvg.superClass_.applyColour_.call(this);
    this.markerCircle_.setAttribute("fill", this.colour_);
    this.markerCircle_.setAttribute("stroke", this.colour_);
    this.isCursor() && this.markerCircle_.firstChild.setAttribute("values", this.colour_ + ";transparent;transparent;")
};
Blockly.zelos.Renderer = function (a) {
    Blockly.zelos.Renderer.superClass_.constructor.call(this, a)
};
Blockly.utils.object.inherits(Blockly.zelos.Renderer, Blockly.blockRendering.Renderer);
Blockly.zelos.Renderer.prototype.makeConstants_ = function () {
    return new Blockly.zelos.ConstantProvider
};
Blockly.zelos.Renderer.prototype.makeRenderInfo_ = function (a) {
    return new Blockly.zelos.RenderInfo(this, a)
};
Blockly.zelos.Renderer.prototype.makeDrawer_ = function (a, b) {
    return new Blockly.zelos.Drawer(a, b)
};
Blockly.zelos.Renderer.prototype.makeMarkerDrawer = function (a, b) {
    return new Blockly.zelos.MarkerSvg(a, this.getConstants(), b)
};
Blockly.zelos.Renderer.prototype.makePathObject = function (a, b) {
    return new Blockly.zelos.PathObject(a, b, this.getConstants())
};
Blockly.zelos.Renderer.prototype.shouldHighlightConnection = function (a) {
    return a.type != Blockly.INPUT_VALUE && a.type !== Blockly.OUTPUT_VALUE
};
Blockly.zelos.Renderer.prototype.getConnectionPreviewMethod = function (a, b, c) {
    return b.type == Blockly.OUTPUT_VALUE ? a.isConnected() ? Blockly.InsertionMarkerManager.PREVIEW_TYPE.REPLACEMENT_FADE : Blockly.InsertionMarkerManager.PREVIEW_TYPE.INPUT_OUTLINE : Blockly.zelos.Renderer.superClass_.getConnectionPreviewMethod(a, b, c)
};
Blockly.blockRendering.register("zelos", Blockly.zelos.Renderer);
Blockly.requires = {};
