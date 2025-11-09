<template>
    <div>
        <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 class="text-base font-semibold leading-7 text-white">
                        Tableau de bord
                    </h1>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                        Vue d'ensemble de vos apps et de votre utilisation.
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
                        Nouvelle App
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
                    Apps Récentes
                </h2>
                <div
                    class="mt-4 overflow-hidden rounded-lg bg-gray-800/80 shadow-md ring-1 ring-white/10"
                >
                    <div role="list" class="divide-y divide-white/10">
                        <AppCard
                            v-for="app in apps"
                            :key="app.name"
                            :app="app"
                        />
                    </div>
                </div>
            </div>

            <div v-if="nodes && nodes.length > 0" class="mt-10">
                <h2 class="text-base font-semibold leading-7 text-white">
                    Nodes
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
import { ref, watch, inject } from "vue";
import { useNodeStore } from "@/stores/nodeStore";
import { useAppStore } from "@/stores/appStore";
import {
    ArrowUpRightIcon,
    RectangleStackIcon,
    ServerIcon,
    UserGroupIcon,
    PlusIcon,
    CurrencyDollarIcon,
    CpuChipIcon,
    CircleStackIcon,
} from "@heroicons/vue/20/solid";
import StatCard from "@/components/dashboard/StatCard.vue";
import AppCard from "@/components/dashboard/AppCard.vue";
import NodeCard from "@/components/dashboard/NodeCard.vue";

const nodeStore = useNodeStore();
const appStore = useAppStore();
const moment = inject("moment");

const stats = [
    { name: "Apps Total", stat: "6", icon: RectangleStackIcon },
    { name: "Bande Passante (Mois)", stat: "2.5 TB", icon: ArrowUpRightIcon },
    { name: "Visiteurs (Mois)", stat: "23,863", icon: UserGroupIcon },
    { name: "Facturation (Mois)", stat: "$ 49.90", icon: CurrencyDollarIcon },
    { name: "Node Actifs", stat: "4", icon: ServerIcon },
    { name: "Resources (CPU)", stat: "16 CPU", icon: CpuChipIcon },
    { name: "Resources (RAM)", stat: "32 Go", icon: ServerIcon },
    { name: "Resources (Disque)", stat: "40 Go", icon: CircleStackIcon },
    { name: "Gain (Mois)", stat: "$ 140", icon: CurrencyDollarIcon },
    { name: "Total Gain", stat: "$ 6,934", icon: CurrencyDollarIcon },
];

const nodes = ref([]);
const apps = ref([]);

watch(
    () => appStore.apps,
    (newApps) => {
        apps.value = [];

        if (newApps) {
            newApps.forEach((app) => {
                apps.value.push({
                    name: app.name,
                    domain: "http://localhost:8000/app/" + app.name,
                    status: "Deployed",
                    lastDeploy: moment(app.created_at).fromNow(),
                    lastDeployTime: app.created_at,
                });
            });
        }
    },
    { immediate: true },
);

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
</script>
