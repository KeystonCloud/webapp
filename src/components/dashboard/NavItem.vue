<template>
    <div
        v-if="item"
        class="relative size-10 group hover:bg-slate-600 hover:text-slate-300 cursor-pointer rounded-md ease-in transition-all"
    >
        <span
            class="absolute top-1 left-[150%] bg-slate-800 rounded-md p-2 font-bold text-xs text-nowrap -translate-x-full opacity-0 group-hover:bg-slate-600 group-hover:text-slate-300 group-hover:opacity-100 group-hover:translate-x-0 ease-in transition-all"
            >{{ item.name }}</span
        >
        <component
            v-if="item.icon"
            :is="item.icon"
            class="size-full p-2"
            :title="item.name"
        />
        <div
            v-else-if="item.label"
            class="flex items-center justify-center rounded-md bg-slate-700 size-full"
        >
            {{ item.label }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
    },
});
</script>
