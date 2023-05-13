<template>
    <div class="simulation-view" :class="props.page.nav.select">simulation</div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
export default defineComponent({
    name: "SimulationContainer",
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
.simulation-view{
    width: 100%;
    height: 100%;
    display: none;
}
.simulation-view.simulation{
    display: block;
}
</style>
