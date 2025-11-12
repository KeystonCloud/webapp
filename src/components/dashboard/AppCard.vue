<template>
    <div class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6">
        <div class="min-w-0">
            <div class="flex items-start gap-x-3">
                <p class="text-sm font-semibold leading-6 text-white">
                    {{ app.name }}
                </p>
                <span
                    :class="[
                        statuses[app.status],
                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                    ]"
                >
                    {{ app.status }}
                </span>
            </div>
            <div
                class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400"
            >
                <p class="whitespace-nowrap">
                    Déployé
                    <time :datetime="app.lastDeployTime">{{
                        app.lastDeploy
                    }}</time>
                </p>
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="truncate">{{ app.domain }}</p>
            </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
            <a
                v-if="app.domain"
                :href="app.domain"
                target="_blank"
                class="hidden rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-white/20 sm:block"
            >
                Visiter
            </a>
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
    app: {
        type: Object,
        required: true,
    },
});

const statuses = {
    Deployed: "text-green-400 bg-green-400/10 ring-green-400/20",
    Error: "text-red-400 bg-red-400/10 ring-red-400/20",
    InProgress: "text-yellow-400 bg-yellow-400/10 ring-yellow-400/20",
};
</script>
