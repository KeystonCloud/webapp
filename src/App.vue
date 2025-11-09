<template>
    <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

onMounted(() => {
    userStore.load();
});
</script>
