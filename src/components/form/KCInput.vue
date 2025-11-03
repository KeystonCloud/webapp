<template>
    <div>
        <label class="block text-sm font-medium leading-6 text-white">
            <div>{{ label }}</div>
            <input
                class="block w-full rounded-md border-0 bg-white/5 px-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 outline-0 text-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                :type="type"
                v-model="model"
            />
        </label>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    type: {
        type: String,
        validator(value, props) {
            return ["text", "email", "password"].includes(value);
        },
    },
});

const model = defineModel();
</script>
