<template>
    <div
        v-if="show"
        class="mt-4 overflow-hidden rounded-lg bg-green-900/50 shadow ring-1 ring-green-400/30"
    >
        <div class="p-4">
            <p class="text-sm text-green-200">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    show: {
        type: Boolean,
        default: true,
    },
    message: {
        type: String,
        default: "Opération réussie.",
    },
});
</script>
