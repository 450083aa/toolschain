<template>
    <div class="common-header">
        <div class="common-header-item">
            <div class="item logo"></div>
            <div class="item menu">
                <el-icon><Grid /></el-icon>
                <div class="dropdown">
                    <div class="dropdown-item" @click="onSettings">
                        <div class="dropdown-item-item">
                            <el-icon><Setting /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>设置</span>
                        </div>
                        <div class="dropdown-item-item"></div>
                    </div>
                    <div class="dropdown-item" @click="onReload">
                        <div class="dropdown-item-item">
                            <el-icon><Refresh /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>重载应用</span>
                        </div>
                        <div class="dropdown-item-item"></div>
                    </div>
                    <div class="dropdown-item">
                        <div class="dropdown-item-item">
                            <el-icon><QuestionFilled /></el-icon>
                        </div>
                        <div class="dropdown-item-item">
                            <span>帮助</span>
                        </div>
                        <div class="dropdown-item-item">
                            <el-icon class="arrow"><ArrowRight /></el-icon>
                        </div>
                        <div class="dropdown-more">
                            <div class="dropdown-item" @click="onOpenSite">
                                <div class="dropdown-item-item">
                                    <el-icon><ChromeFilled /></el-icon>
                                </div>
                                <div class="dropdown-item-item">
                                    <span>官方网站</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                            <div class="dropdown-item line"></div>
                            <div class="dropdown-item" @click="onAbout">
                                <div class="dropdown-item-item"></div>
                                <div class="dropdown-item-item">
                                    <span>关于</span>
                                </div>
                                <div class="dropdown-item-item"></div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-item line"></div>
                    <div class="dropdown-item" @click="onQuit">
                        <div class="dropdown-item-item"></div>
                        <div class="dropdown-item-item">
                            <span>退出</span>
                        </div>
                        <div class="dropdown-item-item"></div>
                    </div>
                </div>
            </div>
            <div class="item select">
                <div class="link" @click="onConnectedDevice">
                    <div class="icon">
                        <el-icon><Link /></el-icon>
                    </div>
                    <span>{{props.app.device.status === "not_connected" ? "连接设备" : props.app.device.ip}}</span>
                </div>
            </div>
        </div>
        <div class="common-header-item"></div>
        <div class="common-header-item">
            <div class="header-tools"></div>
        </div>
    </div>
    <AboutDialog ref="aboutDialog" :app="props.app" v-if="props.app.dialog.type === 'about'" />
    <ConnectDeviceDialog ref="connectDeviceDialog" :app="props.app" v-if="props.app.dialog.type === 'connected_device'" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AboutDialog from "../dialog/about.vue";
import ConnectDeviceDialog from "../dialog/connect_device.vue";
export default defineComponent({
    name: "HeaderCommon",
    computed: {},
    emits: [],
    props: ["app"],
    components: {
        AboutDialog,
        ConnectDeviceDialog
    },
    setup(props, context) {

        function onConnectedDevice(){
            props.app.dialog.config.title = "连接设备";
            props.app.dialog.config.width = "580px";
            props.app.dialog.config.close = true;
            props.app.dialog.type = "connected_device";
            props.app.dialog.form = {
                device_ip: localStorage.getItem("chain:device:ip") ? localStorage.getItem("chain:device:ip") : "",
                device_password: localStorage.getItem("chain:device:password") ? localStorage.getItem("chain:device:password") : ""
            };
            props.app.dialog.status = true;
        }

        function onSettings(){

        }

        function onReload(){
            (window as any).runtime.WindowReload();
        }

        function onOpenSite(){
            (window as any).runtime.BrowserOpenURL("https://www.geekros.com");
        }

        function onAbout(){
            (window as any).go.StartWindows.Api.Ping().then((data: any)=>{
                props.app.dialog.config.title = "关于";
                props.app.dialog.config.width = "380px";
                props.app.dialog.config.close = true;
                props.app.dialog.type = "about";
                props.app.dialog.form = data;
                props.app.dialog.status = true;
            });
        }

        function onQuit(){
            (window as any).runtime.Quit();
        }

        return {
            props,
            onConnectedDevice,
            onSettings,
            onReload,
            onOpenSite,
            onAbout,
            onQuit,
        }
    }
});
</script>

<style scoped>
.common-header{
    width: 100%;
    height: 40px;
    background-color: rgba(43, 45, 48, 1);
    border-top: solid 1px rgba(30, 31, 34, 1);
}
.common-header .common-header-item{
    width: calc(100% - 1100px);
    height: 40px;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item:first-child{
    width: 500px;
}
.common-header .common-header-item:last-child{
    width: 600px;
}
.common-header .common-header-item .item{
    width: auto;
    height: 39px;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.logo{
    width: 40px;
    background: url("../../assets/image/logo.png") no-repeat center center;
    background-size: 46%;
}
.common-header .common-header-item .item.menu{
    width: 40px;
    line-height: 36px;
    text-align: center;
    padding: 6px;
    position: relative;
}
.common-header .common-header-item .item.menu:hover{
    cursor: pointer;
    background-color: rgba(57, 59, 64, .5);
}
.common-header .common-header-item .item.menu .el-icon{
    font-size: 18px;
}
.common-header .common-header-item .item.menu .dropdown{
    width: max-content;
    white-space: nowrap;
    min-width: 120px;
    line-height: normal;
    position: absolute;
    top: 40px;
    left: 0;
    text-align: left;
    background-color: rgba(43, 45, 48, 1);
    border: 1px solid rgba(59, 60, 61, 1);
    z-index: 100;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 4px;
    color: #999999;
    display: none;
}
.common-header .common-header-item .item.menu:hover .dropdown{
    display: block;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item{
    width: 100%;
    height: 30px;
    position: relative;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item:hover{
    color: #ffffff;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item.line{
    height: 1px;
    border-bottom: 1px solid rgba(59, 60, 61, 1);
    margin: 6px 0;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item{
    width: auto;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item:first-child{
    width: 30px;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item span{
    width: auto;
    min-width: 60px;
    height: 30px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item .el-icon{
    width: 30px;
    height: 30px;
    font-size: 14px;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item:last-child .el-icon{
    float: right;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item:not(:hover) .dropdown-item-item .el-icon.arrow{
    font-size: 12px;
    color: #666666;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-item-item i{
    color: #666666;
    padding-right: 5px;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item .dropdown-more{
    width: max-content;
    white-space: nowrap;
    min-width: 140px;
    line-height: normal;
    position: absolute;
    top: 0;
    left: calc(100%);
    text-align: left;
    background-color: rgba(43, 45, 48, 1);
    border: 1px solid rgba(59, 60, 61, 1);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 4px;
    color: #999999;
    display: none;
}
.common-header .common-header-item .item.menu .dropdown .dropdown-item:hover .dropdown-more{
    display: block;
}
.common-header .common-header-item .item.select{
    padding: 0 5px;
    line-height: 34px;
    margin-top: 1px;
}
.common-header .common-header-item .item.select .link{
    width: auto;
    height: 32px;
    line-height: 32px;
    background-color: rgba(30, 31, 34, .3);
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
}
.common-header .common-header-item .item.select .link:hover{
    cursor: pointer;
}
.common-header .common-header-item .item.select .link .icon{
    width: 30px;
    height: 32px;
    line-height: 34px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
}
.common-header .common-header-item .item.select .link span{
    width: auto;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    vertical-align: top;
    padding-right: 15px;
    color: #999999;
}
.common-header .common-header-item .header-tools{
    width: 100%;
    height: 40px;
    text-align: right;
}
</style>
