<template>
    <div class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6">
        <div class="min-w-0">
            <div class="flex items-start gap-x-3">
                <p class="text-sm font-semibold leading-6 text-white">
                    {{ node.uuid }}
                </p>
            </div>
            <div
                class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400"
            >
                <p class="whitespace-nowrap">
                    Déployé il y a
                    <time :datetime="node.lastDeployTime">{{
                        node.lastDeploy
                    }}</time>
                </p>
            </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
            <button
                type="button"
                class="hidden rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-white/20 sm:block"
            >
                Détails
            </button>
            <ChevronRightIcon
                class="h-5 w-5 flex-none text-gray-500"
                aria-hidden="true"
            />
        </div>
    </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

defineProps({
    node: {
        type: Object,
        required: true,
    },
});
</script>
