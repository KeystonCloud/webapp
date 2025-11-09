<template>
    <div class="flex h-screen">
        <VerticalNavbar />
        <div class="flex-1 overflow-auto">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useNodeStore } from "@/stores/nodeStore";
import { useAppStore } from "@/stores/appStore";
import VerticalNavbar from "@/components/dashboard/VerticalNavbar.vue";

const nodeStore = useNodeStore();
const appStore = useAppStore();

onMounted(() => {
    appStore.load();
    nodeStore.load();
});
</script>
