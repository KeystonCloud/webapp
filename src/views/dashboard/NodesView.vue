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
                            class="cursor-pointer"
                            @click="openNodeDetail(node)"
                        />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useNodeStore } from "@/stores/nodeStore";
import {
    ServerIcon,
    PlusIcon,
    CurrencyDollarIcon,
    CpuChipIcon,
    CircleStackIcon,
} from "@heroicons/vue/20/solid";
import StatCard from "@/components/dashboard/StatCard.vue";
import NodeCard from "@/components/dashboard/NodeCard.vue";

const router = useRouter();
const nodeStore = useNodeStore();
const moment = inject("moment");

const stats = [
    { name: "Node Actifs", stat: "4", icon: ServerIcon },
    { name: "Resources (CPU)", stat: "16 CPU", icon: CpuChipIcon },
    { name: "Resources (RAM)", stat: "32 Go", icon: ServerIcon },
    { name: "Resources (Disque)", stat: "40 Go", icon: CircleStackIcon },
    { name: "Gain (Mois)", stat: "$ 140", icon: CurrencyDollarIcon },
    { name: "Total Gain", stat: "$ 6,934", icon: CurrencyDollarIcon },
];

const nodes = ref([]);

watch(
    () => nodeStore.nodes,
    (newNodes) => {
        nodes.value = [];

        if (newNodes) {
            newNodes.forEach((node) => {
                nodes.value.push({
                    uuid: node.id,
                    name: node.name,
                    lastDeploy: moment(node.created_at).fromNow(),
                    lastDeployTime: node.created_at,
                });
            });
        }
    },
    { immediate: true },
);

function openNodeDetail(node) {
    router.push({
        name: "dashboard.node.detail",
        params: { uuid: node.uuid },
    });
}
</script>
