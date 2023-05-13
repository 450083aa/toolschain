/// <reference types="vite/client" />

declare module "*.vue" {
    import type {DefineComponent} from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module "crypto-js/enc-base64.js";
declare module "crypto-js/enc-utf8.js";