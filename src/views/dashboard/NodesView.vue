<template>
    <div>
        <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 class="text-base font-semibold leading-7 text-white">
                        Mes Nodes
                    </h1>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                        Vue d'ensemble de vos nodes.
                    </p>
                </div>

                <div>
                    <button
                        type="button"
                        class="block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        <PlusIcon
                            class="-ml-1.5 mr-1.5 h-5 w-5 inline-block align-text-bottom"
                            aria-hidden="true"
                        />
                        Nouveau Node
                    </button>
                </div>
            </div>
        </header>

        <main class="p-4 sm:p-6 lg:p-8">
            <div>
                <h2 class="text-base font-semibold leading-7 text-white">
                    Aperçu des Statistiques
                </h2>
                <div
                    class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <StatCard
                        v-for="item in stats"
                        :key="item.name"
                        :item="item"
                    />
                </div>
            </div>

            <div class="mt-10">
                <h2 class="text-base font-semibold leading-7 text-white">
                    Liste des Nodes
                </h2>
                <div
                    class="mt-4 overflow-hidden rounded-lg bg-gray-800/80 shadow-md ring-1 ring-white/10"
                >
                    <div role="list" class="divide-y divide-white/10">
                        <NodeCard
                            v-for="node in nodes"
                            :key="node.uuid"
                            :node="node"
                        />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import {
    ServerIcon,
    PlusIcon,
    CurrencyDollarIcon,
    CpuChipIcon,
    CircleStackIcon,
} from "@heroicons/vue/20/solid";
import StatCard from "@/components/dashboard/StatCard.vue";
import AppCard from "@/components/dashboard/AppCard.vue";
import NodeCard from "@/components/dashboard/NodeCard.vue";

const stats = [
    { name: "Node Actifs", stat: "4", icon: ServerIcon },
    { name: "Resources (CPU)", stat: "16 CPU", icon: CpuChipIcon },
    { name: "Resources (RAM)", stat: "32 Go", icon: ServerIcon },
    { name: "Resources (Disque)", stat: "40 Go", icon: CircleStackIcon },
    { name: "Gain (Mois)", stat: "$ 140", icon: CurrencyDollarIcon },
    { name: "Total Gain", stat: "$ 6,934", icon: CurrencyDollarIcon },
];

const nodes = [
    {
        uuid: "926b5ba8-6c6c-42ae-ad1c-af90a85b400c",
        lastDeploy: "3 h",
        lastDeployTime: "2025-11-04T16:10:00Z",
    },
    {
        uuid: "6e6a3efd-0f1c-4005-bd42-cba1b7963718",
        lastDeploy: "1 j",
        lastDeployTime: "2025-11-03T16:10:00Z",
    },
    {
        uuid: "f7cf8937-18dc-4e62-a2c9-df1653ad17ec",
        lastDeploy: "2 j",
        lastDeployTime: "2025-11-02T16:10:00Z",
    },
    {
        uuid: "ca88c12b-6c8e-4c5e-886b-243fdba590d6",
        lastDeploy: "2 j",
        lastDeployTime: "2025-11-02T16:00:00Z",
    },
];
</script>
