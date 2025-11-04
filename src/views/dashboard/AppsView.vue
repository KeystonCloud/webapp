<template>
    <div>
        <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 class="text-base font-semibold leading-7 text-white">
                        Mes Applications
                    </h1>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                        Vue d'ensemble de vos apps.
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
                    Liste d'applications
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
        </main>
    </div>
</template>

<script setup>
import {
    ArrowUpRightIcon,
    RectangleStackIcon,
    UserGroupIcon,
    PlusIcon,
    CurrencyDollarIcon,
} from "@heroicons/vue/20/solid";
import StatCard from "@/components/dashboard/StatCard.vue";
import AppCard from "@/components/dashboard/AppCard.vue";

const stats = [
    { name: "Apps Total", stat: "6", icon: RectangleStackIcon },
    { name: "Bande Passante (Mois)", stat: "2.5 TB", icon: ArrowUpRightIcon },
    { name: "Visiteurs (Mois)", stat: "23,863", icon: UserGroupIcon },
    { name: "Facturation (Mois)", stat: "$ 49.90", icon: CurrencyDollarIcon },
];

const apps = [
    {
        name: "KeystonCloud Status",
        domain: "status.keyston.app",
        status: "En_cours",
        lastDeploy: "1 min",
        lastDeployTime: "2025-11-04T16:10:00Z",
    },
    {
        name: "Portfolio-v3",
        domain: "portfolio.keyston.app",
        status: "Déployé",
        lastDeploy: "2 h",
        lastDeployTime: "2025-11-04T16:10:00Z",
    },
    {
        name: "Client-Projet-Alpha",
        domain: "alpha.client.com",
        status: "Erreur",
        lastDeploy: "1 j",
        lastDeployTime: "2025-11-03T14:30:00Z",
    },
    {
        name: "Lorem-Ipsum-App",
        domain: "lorem.keyston.app",
        status: "Déployé",
        lastDeploy: "2 j",
        lastDeployTime: "2025-11-02T14:30:00Z",
    },
    {
        name: "Hello-World-App",
        domain: "hello.keyston.app",
        status: "Déployé",
        lastDeploy: "3 j",
        lastDeployTime: "2025-11-01T14:30:00Z",
    },
    {
        name: "Example",
        domain: "example.keyston.app",
        status: "Déployé",
        lastDeploy: "3 j",
        lastDeployTime: "2025-11-01T14:00:00Z",
    },
];
</script>
