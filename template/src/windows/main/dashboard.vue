<template>
    <div class="dashboard-view">
        <div class="dashboard-header">
            <div class="title">🤖🔗 欢迎使用<span>GEEKROS</span> 机器人开发平台</div>
        </div>
        <div class="dashboard-banner">
            <div class="title">✨ 机器人连接人工智能的新体验</div>
            <div class="box">
                <div class="box-item left">
                    <div class="box-view">
                        <div class="info">
                            <div class="info-title">通用人工智能</div>
                            <div class="info-describe">多模态技术融合 更贴近人类的交互方式</div>
                        </div>
                    </div>
                </div>
                <div class="box-item right">
                    <div class="box-view">
                        <div class="info">
                            <div class="info-title">通用机器人</div>
                            <div class="info-describe">连接机器人软硬件生态 让机器人更有温度</div>
                        </div>
                    </div>
                </div>
                <div class="link"><el-icon><Link /></el-icon></div>
            </div>
        </div>
        <div class="dashboard-ai">
            <div class="title">🔗 人工智能工具链</div>
            <div class="layout">
                <el-row :gutter="15">
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #6743f1">
                                    <el-icon><ChatDotRound /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">人机对话</div>
                                <div class="describe-text">更贴近人类语言的表达方式</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #0878ec">
                                    <el-icon><Opportunity /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">特征记忆</div>
                                <div class="describe-text">多特性记忆存储单元</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #8500ff">
                                    <el-icon><Coordinate /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">意图理解</div>
                                <div class="describe-text">人类语言到机器人语言的转译</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #E6A23C">
                                    <el-icon><Coordinate /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">知识库</div>
                                <div class="describe-text">建立私有自定义知识数据库</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #F56C6C">
                                    <el-icon><View /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">多模态</div>
                                <div class="describe-text">更贴近人类的意识和感知</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #fc5531">
                                    <el-icon><PieChart /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">任务处理</div>
                                <div class="describe-text">任务的理解、拆分、执行模块</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="dashboard-robot">
            <div class="title">🤖 机器人软硬件生态</div>
            <div class="layout">
                <el-row :gutter="15">
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #67C23A">
                                    <el-icon><Cpu /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">MCU芯片支持库</div>
                                <div class="describe-text">主流MCU芯片快速集成</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #409EFF">
                                    <el-icon><Files /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">通用软件库</div>
                                <div class="describe-text">主流MCU芯片快速集成</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #6743f1">
                                    <el-icon><Grid /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">外设硬件模块</div>
                                <div class="describe-text">兼容适配主流硬件外设</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="item">
                                <div class="icon" style="background-color: #8500ff">
                                    <el-icon><Connection /></el-icon>
                                </div>
                            </div>
                            <div class="item">
                                <div class="title-text">生态融合</div>
                                <div class="describe-text">主流机器人开发生态融合</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
export default defineComponent({
    name: "DashboardMain",
    emits: [],
    props: ["app"],
    components: {},
    setup(props, context) {

        function dialogClose(close: any){
            if(close){
                close();
            }
            props.app.dialog.status = false;
            setTimeout(()=>{
                props.app.dialog.type = "";
                props.app.dialog.form = false;
            }, 200);
        }

        onMounted(() => {});

        onBeforeUnmount(() => {});

        return {
            props,
            dialogClose
        }
    }
});
</script>

<style scoped>
.dashboard-view{
    width: 100%;
    max-width: 880px;
    height: 100%;
    margin: 0 auto;
}
.dashboard-view .dashboard-header{
    width: 100%;
    margin-bottom: 30px;
}
.dashboard-view .dashboard-header .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
}
.dashboard-view .dashboard-header .title span{
    background: linear-gradient(45deg, #0878ec 30%, #6743f1 60%, #8500ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    margin: 0 5px;
}
.dashboard-view .dashboard-banner{
    width: 100%;
    margin-bottom: 30px;
}
.dashboard-view .dashboard-banner .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.dashboard-view .dashboard-banner .box{
    width: 100%;
    height: 180px;
    position: relative;
}
.dashboard-view .dashboard-banner .box .link{
    width: 80px;
    height: 80px;
    line-height: 88px;
    text-align: center;
    border-radius: 40px;
    position: absolute;
    background-color: rgba(31, 38, 41, 1);
    margin: 0 auto;
    top: 50px;
    left: 0;
    right: 0;
    z-index: 10;
}
.dashboard-view .dashboard-banner .box .link .el-icon{
    font-size: 18px;
}
.dashboard-view .dashboard-banner .box .box-item{
    width: 50%;
    height: 180px;
    display: inline-block;
    vertical-align: top;
    padding: 10px;
}
.dashboard-view .dashboard-banner .box .box-item.left{
    padding-left: 0;
}
.dashboard-view .dashboard-banner .box .box-item.right{
    padding-right: 0;
}
.dashboard-view .dashboard-banner .box .box-item.left .box-view{
    width: 100%;
    height: 160px;
    border-radius: 6px;
    background: linear-gradient(45deg, rgba(8, 120, 236, .6) 30%, rgba(103, 67, 241, .6) 60%, rgba(133, 0, 255, .6) 100%);
}
.dashboard-view .dashboard-banner .box .box-item.right .box-view{
    width: 100%;
    height: 160px;
    border-radius: 6px;
    background: linear-gradient(45deg, rgba(255, 76, 81, 0.6) 30%, rgba(254, 114, 159, .6) 60%, rgba(250, 154, 95, .6) 100%);
}
.dashboard-view .dashboard-banner .box .box-item.left .box-view .info{
    width: 100%;
    padding: 50px 50px 50px 40px;
    text-align: right;
}
.dashboard-view .dashboard-banner .box .box-item.left .box-view .info .info-title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 600;
}
.dashboard-view .dashboard-banner .box .box-item.left .box-view .info .info-describe{
    width: 100%;
    height: 24px;
    line-height: 24px;
}
.dashboard-view .dashboard-banner .box .box-item.right .box-view .info{
    width: 100%;
    padding: 50px 40px 50px 50px;
    text-align: left;
}
.dashboard-view .dashboard-banner .box .box-item.right .box-view .info .info-title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 600;
}
.dashboard-view .dashboard-banner .box .box-item.right .box-view .info .info-describe{
    width: 100%;
    height: 24px;
    line-height: 24px;
}
.dashboard-view .dashboard-ai{
    width: 100%;
    margin-bottom: 15px;
}
.dashboard-view .dashboard-ai .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.dashboard-view .dashboard-ai .layout{
    width: 100%;
    padding: 10px 0;
}
.dashboard-view .dashboard-ai .layout .grid-content{
    width: 100%;
    height: 60px;
    background-color: rgba(30, 31, 34, .5);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 15px;
}
.dashboard-view .dashboard-ai .layout .grid-content .item{
    width: calc(100% - 40px);
    height: 40px;
    display: inline-block;
    vertical-align: top;
}
.dashboard-view .dashboard-ai .layout .grid-content .item:first-child{
    width: 40px;
}
.dashboard-view .dashboard-ai .layout .grid-content .item:last-child{
    padding-left: 10px;
}
.dashboard-view .dashboard-ai .layout .grid-content .item .icon{
    width: 40px;
    height: 40px;
    line-height: 44px;
    text-align: center;
    background-color: rgba(30, 31, 34, .5);
    font-size: 16px;
    border-radius: 4px;
}
.dashboard-view .dashboard-ai .layout .grid-content .item .title-text{
    width: 100%;
    height: 20px;
    line-height: 20px;
}
.dashboard-view .dashboard-ai .layout .grid-content .item .describe-text{
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: #666666;
}
.dashboard-view .dashboard-robot{
    width: 100%;
    margin-bottom: 30px;
}
.dashboard-view .dashboard-robot .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.dashboard-view .dashboard-robot .layout{
    width: 100%;
    padding: 10px 0;
}
.dashboard-view .dashboard-robot .layout .grid-content{
    width: 100%;
    height: 60px;
    background-color: rgba(30, 31, 34, .5);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 15px;
}
.dashboard-view .dashboard-robot .layout .grid-content .item{
    width: calc(100% - 40px);
    height: 40px;
    display: inline-block;
    vertical-align: top;
}
.dashboard-view .dashboard-robot .layout .grid-content .item:first-child{
    width: 40px;
}
.dashboard-view .dashboard-robot .layout .grid-content .item:last-child{
    padding-left: 10px;
}
.dashboard-view .dashboard-robot .layout .grid-content .item .icon{
    width: 40px;
    height: 40px;
    line-height: 44px;
    text-align: center;
    background-color: rgba(30, 31, 34, .5);
    font-size: 16px;
    border-radius: 4px;
}
.dashboard-view .dashboard-robot .layout .grid-content .item .title-text{
    width: 100%;
    height: 20px;
    line-height: 20px;
}
.dashboard-view .dashboard-robot .layout .grid-content .item .describe-text{
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: #666666;
}
</style>