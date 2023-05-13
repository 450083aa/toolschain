export default ({
    check_file_suffix: (type: any)=>{
        let suffix: any = {
            "py": "python",
            "c": "cpp",
            "h": "cpp",
            "s": "cpp",
            "lua": "lua",
            "geekros": "json",
            "blocks": "blocks",
            "json": "json",
            "js": "javascript",
            "html": "html",
            "vue": "html",
            "scss": "scss",
            "css": "css",
            "ts": "typescript",
            "md": "markdown",
            "gitignore": "shell"
        }
        return suffix[type] ? suffix[type] : "";
    },
    block_base_help: [
        {
            "id": "basic",
            "title": "基础",
            "colours": {
                "primary": "#58C0A6"
            },
            "blocks": [
                {
                    "name": "connect_serial_device",
                    "disabled": false,
                    "function": {
                        "message0": "连接%1地址为%2端口为%3的设备",
                        "args0": [
                            {
                                "type": "field_down",
                                "name": "type",
                                "check": "String",
                                "options":[
                                    [
                                        "串口",
                                        "serial"
                                    ],
                                    [
                                        "网络",
                                        "net"
                                    ],
                                    [
                                        "ROS",
                                        "ros"
                                    ]
                                ]
                            },
                            {
                                "type": "input_value",
                                "name": "address",
                                "check": "String",
                                "default": "串口或IP地址"
                            },
                            {
                                "type": "input_value",
                                "name": "port",
                                "check": "Number",
                                "default": 0
                            }
                        ]
                    },
                    "code": "sdk.connect_device({type}, {address}, {port})\n"
                },
                {
                    "name": "on_exit",
                    "disabled": false,
                    "function": {
                        "message0": "当程序退出时",
                        "args0": [],
                        "message1": "%1",
                        "args1": [
                            {
                                "type": "input_statement",
                                "name": "SUBSTACK"
                            }
                        ],
                        "shapeType": "event"
                    },
                    "code": "def on_exit(sdk):\n{code}\n"
                },
                {
                    "name": "time_state",
                    "disabled": false,
                    "function": {
                        "message0": "设置计时器状态为%1",
                        "args0": [
                            {
                                "type": "field_down",
                                "name": "time_state",
                                "check": "String",
                                "options":[
                                    [
                                        "开始",
                                        "start"
                                    ],
                                    [
                                        "暂停",
                                        "pause"
                                    ],
                                    [
                                        "结束",
                                        "end"
                                    ]
                                ]
                            }
                        ]
                    },
                    "code": "sdk.utils.time.set_state({time_state})\n"
                },
                {
                    "name": "time_data",
                    "disabled": false,
                    "function": {
                        "message0": "当前计时器数值",
                        "args0": [],
                        "output": "Number"
                    },
                    "code": "sdk.utils.time.millisecond"
                },
                {
                    "name": "log_string",
                    "disabled": false,
                    "function": {
                        "message0": "输出日志%1",
                        "args0": [
                            {
                                "type": "input_value",
                                "name": "content",
                                "check": "String",
                                "default": "日志内容"
                            }
                        ]
                    },
                    "code": "sdk.log({content})\n"
                },
                {
                    "name": "log_number",
                    "disabled": false,
                    "function": {
                        "message0": "输出日志%1",
                        "args0": [
                            {
                                "type": "input_value",
                                "name": "content",
                                "check": "Number",
                                "default": 0,
                                "precision": 0.001
                            }
                        ]
                    },
                    "code": "sdk.log({content})\n"
                }
            ]
        }
    ]
});