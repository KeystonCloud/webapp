<template>
    <div class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6">
        <div class="min-w-0">
            <div class="flex items-start gap-x-3">
                <p class="text-sm font-semibold leading-6 text-white">
                    {{ node.name }}
                </p>
                <span
                    :class="[
                        statuses[node.status],
                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                    ]"
                >
                    {{ node.status }}
                </span>
            </div>
            <div
                class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400"
            >
                <p class="whitespace-nowrap">
                    Déployé
                    <time :datetime="node.lastDeployTime">{{
                        node.lastDeploy
                    }}</time>
                </p>
            </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
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

const statuses = {
    Online: "text-green-400 bg-green-400/10 ring-green-400/20",
    Offline: "text-red-400 bg-red-400/10 ring-red-400/20",
};
</script>
