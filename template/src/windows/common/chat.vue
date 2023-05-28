<template>
    <div class="container-chat">
        <div class="chat-main">
            <div class="chat-message-box" v-if="props.app.device.status === 'connected'">
                <div class="message user">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-content">去厨房拿一下我的杯子，黄色的那个。</div>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-content">好的，需要你告诉我杯子拿到哪里？</div>
                        </div>
                    </div>
                </div>
                <div class="message user">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-content">拿到书房你会看到我。</div>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-task">
                                <el-collapse class="studio" accordion>
                                    <el-collapse-item name="1">
                                        <template #title>
                                            <div class="task-header">
                                                <div class="task-header-item">
                                                    <el-icon><SuccessFilled /></el-icon>
                                                </div>
                                                <div class="task-header-item">Finished Task</div>
                                                <div class="task-header-item"></div>
                                            </div>
                                        </template>
                                        <div class="task-item-box">
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Smoking /></el-icon>
                                                </div>
                                                <div class="task-item-item">Breaking down the task...</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">There are<span>2</span>tasks</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Promotion /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling ROS node<span>mipi_cam</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Successfully called ROS node</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Cpu /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling serial port<span>/dev/ttyACM0</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Serial port call successful</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><MapLocation /></el-icon>
                                                </div>
                                                <div class="task-item-item">Robot position<span>{"x": 0.157, "y": 152.00, "z": 52.00}</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Promotion /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling ROS node<span>arm_motion_node</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item warning">
                                                <div class="task-item-item">
                                                    <el-icon><WarnTriangleFilled /></el-icon>
                                                </div>
                                                <div class="task-item-item">Error occurred, retrying</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Successfully called ROS node</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><View /></el-icon>
                                                </div>
                                                <div class="task-item-item">Initiating visual recognition</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><FullScreen /></el-icon>
                                                </div>
                                                <div class="task-item-item">Identified<span>2</span>objects</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Location /></el-icon>
                                                </div>
                                                <div class="task-item-item">Target object found<span>{"x": 0.267, "y": 0.200, "z": 52.00}</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Promotion /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling ROS node<span>arm_motion_node</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Successfully called ROS node</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-content">还有什么事情需要我的帮助吗？</div>
                        </div>
                    </div>
                </div>
                <div class="message user">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-content">没有了。</div>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <div class="item">
                        <div class="icon"></div>
                    </div>
                    <div class="item">
                        <div class="item-message">
                            <div class="message-task">
                                <el-collapse class="studio" accordion>
                                    <el-collapse-item name="1">
                                        <template #title>
                                            <div class="task-header">
                                                <div class="task-header-item">
                                                    <el-icon class="is-loading"><Loading /></el-icon>
                                                </div>
                                                <div class="task-header-item">Executing the task</div>
                                                <div class="task-header-item"></div>
                                            </div>
                                        </template>
                                        <div class="task-item-box">
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Smoking /></el-icon>
                                                </div>
                                                <div class="task-item-item">Breaking down the task...</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">There are<span>2</span>tasks</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Promotion /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling ROS node<span>mipi_cam</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Successfully called ROS node</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Cpu /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling serial port<span>/dev/ttyACM0</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Serial port call successful</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><MapLocation /></el-icon>
                                                </div>
                                                <div class="task-item-item">Robot position<span>{"x": 0.157, "y": 152.00, "z": 52.00}</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Promotion /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling ROS node<span>arm_motion_node</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item warning">
                                                <div class="task-item-item">
                                                    <el-icon><WarnTriangleFilled /></el-icon>
                                                </div>
                                                <div class="task-item-item">Error occurred, retrying</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Successfully called ROS node</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><View /></el-icon>
                                                </div>
                                                <div class="task-item-item">Initiating visual recognition</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><FullScreen /></el-icon>
                                                </div>
                                                <div class="task-item-item">Identified<span>2</span>objects</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Location /></el-icon>
                                                </div>
                                                <div class="task-item-item">Target object found<span>{"x": 0.267, "y": 0.200, "z": 52.00}</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item">
                                                <div class="task-item-item">
                                                    <el-icon><Promotion /></el-icon>
                                                </div>
                                                <div class="task-item-item">Calling ROS node<span>arm_motion_node</span></div>
                                                <div class="task-item-item"></div>
                                            </div>
                                            <div class="task-item success">
                                                <div class="task-item-item">
                                                    <el-icon><Finished /></el-icon>
                                                </div>
                                                <div class="task-item-item">Successfully called ROS node</div>
                                                <div class="task-item-item"></div>
                                            </div>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-empty class="studio" description="description" :image-size="30" v-else/>
        </div>
        <div class="chat-footer">
            <el-input ref="a" class="studio none" v-model="chatData.input.value" placeholder="请输入要发送消息或指令" clearable @keyup.enter.native="onSend">
                <template #append>
                    <el-icon @click="onSend"><Promotion /></el-icon>
                </template>
            </el-input>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import * as icons from "@element-plus/icons";
export default defineComponent({
    name: "ChatCommon",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

        const chatData: any = ref({
            input: {
                value: ""
            }
        });

        function onSend(){

        }

        return {
            props,
            icons,
            chatData,
            onSend
        }
    }
});
</script>

<style scoped>
.container-chat{
    width: 100%;
    height: 100%;
    background-color: rgba(43, 45, 48, 1);
    border-right: solid 1px rgba(30, 31, 34, .8);
}
.container-chat .chat-main{
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: auto;
}
.container-chat .chat-main .chat-message-box{
    width: 100%;
    min-height: 100px;
    padding: 10px;
}
.container-chat .chat-main .chat-message-box .message{
    width: 100%;
    margin-bottom: 15px;
}
.container-chat .chat-main .chat-message-box .message .item{
    width: calc(100% - 29px);
    min-height: 24px;
    display: inline-block;
    vertical-align: top;
}
.container-chat .chat-main .chat-message-box .message .item:first-child{
    width: 24px;
    height: 24px;
    margin-right: 5px;
}
.container-chat .chat-main .chat-message-box .message .item .icon{
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-image: linear-gradient(24deg, #0ab3fe, #4f61ff 35%, #7407fb);
}
.container-chat .chat-main .chat-message-box .message.user{
    text-align: right;
    color: #999999;
}
.container-chat .chat-main .chat-message-box .message.user .item:first-child{
    display: none;
}
.container-chat .chat-main .chat-message-box .message.user .item:last-child{
    width: auto;
    text-align: left;
}
.container-chat .chat-main .chat-message-box .message .item .item-message{
    width: 100%;
    min-height: 24px;
    background-color: rgba(30, 31, 34, .3);
    border-radius: 4px;
    padding: 10px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task{
    width: 100%;
    min-height: 30px;
    color: #999999;
    background-color: rgba(30, 31, 34, 1);
    border-radius: 4px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-header{
    width: 100%;
    height: 32px;
    line-height: 32px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-header .task-header-item{
    width: auto;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    vertical-align: top;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-header .task-header-item .el-icon{
    width: 20px;
    height: 32px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box{
    width: 100%;
    background-color: rgba(30, 31, 34, .8);
    padding: 10px 0;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item{
    width: 100%;
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
    color: #666666;
    font-size: 12px;
    margin-bottom: 10px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item.success{
    color: rgba(103, 194, 58, .5);
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item.warning{
    color: rgba(230, 162, 60, .5);
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item:last-child{
    margin-bottom: 0;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item .task-item-item{
    width: auto;
    height: 24px;
    display: inline-flex;
    vertical-align: top;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item .task-item-item .el-icon{
    width: 20px;
    height: 24px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item .task-item-item span{
    margin: 0 5px;
    max-width: 120px;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    background-color: rgba(43, 45, 48, 1);
    display: inline;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-radius: 4px;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-task .task-item-box .task-item .task-item-item span:hover{
    cursor: pointer;
    color: #999999;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-content{
    width: 100%;
    line-height: 22px;
    word-break:break-all;
    user-select: text;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-content *{
    user-select: text;
}
.container-chat .chat-main .chat-message-box .message .item .item-message .message-content:deep(*){
    user-select: text;
}
.container-chat .chat-footer{
    width: 100%;
    height: 40px;
    border-top: solid 1px rgba(30, 31, 34, .5);
}
</style>