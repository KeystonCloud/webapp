<template>
    <div class="flex h-screen">
        <VerticalNavbar />
        <div class="flex-1 overflow-auto">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import VerticalNavbar from "@/components/dashboard/VerticalNavbar.vue";
</script>
