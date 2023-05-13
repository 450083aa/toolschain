<template>
    <div class="debug-tools" :class="props.page.tools.select">

    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted} from "vue";
export default defineComponent({
    name: "DebugTools",
    emits: [],
    props: ["app", "page"],
    components: {},
    setup(props, context) {

        // 页面渲染完成后需要执行的业务
        onMounted(() => {

        });

        // 离开页面之前需要执行的业务
        onBeforeUnmount(() => {

        });

        return {
            props
        }
    }
});
</script>

<style scoped>
.debug-tools{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(30, 31, 34, 1);
}
.debug-tools.debug{
    z-index: 5;
}
</style>
