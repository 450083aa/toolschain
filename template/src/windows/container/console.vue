<template>
    <div class="console-view" :class="props.page.nav.select">console</div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
export default defineComponent({
    name: "ConsoleContainer",
    emits: ["onEventCallback"],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 定义数据结构
        const pageData: any = ref({

        });

        return {
            props,
            pageData
        }
    }
});
</script>

<style scoped>
.console-view{
    width: 100%;
    height: 100%;
    display: none;
}
.console-view.console{
    display: block;
}
</style>
