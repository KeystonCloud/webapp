<template>
    <div
        class="overflow-hidden rounded-lg bg-gray-800/80 px-4 py-5 shadow-md ring-1 ring-white/10 sm:p-6"
    >
        <dt class="truncate text-sm font-medium text-gray-400">
            {{ item.name }}
        </dt>
        <dd class="mt-1 flex items-baseline justify-between">
            <span class="text-3xl font-semibold tracking-tight text-white">{{
                item.stat
            }}</span>
            <component
                :is="item.icon"
                class="h-6 w-6 text-gray-500"
                aria-hidden="true"
            />
        </dd>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    },
});
</script>
