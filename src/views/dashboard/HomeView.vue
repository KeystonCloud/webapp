<template>
    <div>
        <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 class="text-base font-semibold leading-7 text-white">
                        Tableau de bord
                    </h1>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                        Vue d'ensemble de vos projets et de votre utilisation.
                    </p>
                </div>

                <div>
                    <button
                        type="button"
                        class="block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        <PlusIcon
                            class="-ml-1.5 mr-1.5 h-5 w-5 inline-block align-text-bottom"
                            aria-hidden="true"
                        />
                        Nouveau Projet
                    </button>
                </div>
            </div>
        </header>

        <main class="p-4 sm:p-6 lg:p-8">
            <div>
                <h2 class="text-base font-semibold leading-7 text-white">
                    Statistiques du mois
                </h2>
                <dl
                    class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <div
                        v-for="item in stats"
                        :key="item.name"
                        class="overflow-hidden rounded-lg bg-gray-800/80 px-4 py-5 shadow-md ring-1 ring-white/10 sm:p-6"
                    >
                        <dt class="truncate text-sm font-medium text-gray-400">
                            {{ item.name }}
                        </dt>
                        <dd class="mt-1 flex items-baseline justify-between">
                            <span
                                class="text-3xl font-semibold tracking-tight text-white"
                                >{{ item.stat }}</span
                            >
                            <component
                                :is="item.icon"
                                class="h-6 w-6 text-gray-500"
                                aria-hidden="true"
                            />
                        </dd>
                    </div>
                </dl>
            </div>

            <div class="mt-10">
                <h2 class="text-base font-semibold leading-7 text-white">
                    Projets Récents
                </h2>
                <div
                    class="mt-4 overflow-hidden rounded-lg bg-gray-800/80 shadow-md ring-1 ring-white/10"
                >
                    <ul role="list" class="divide-y divide-white/10">
                        <li
                            v-for="project in projects"
                            :key="project.id"
                            class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                        >
                            <div class="min-w-0">
                                <div class="flex items-start gap-x-3">
                                    <p
                                        class="text-sm font-semibold leading-6 text-white"
                                    >
                                        {{ project.name }}
                                    </p>
                                    <span
                                        :class="[
                                            statuses[project.status],
                                            'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                                        ]"
                                    >
                                        {{ project.status }}
                                    </span>
                                </div>
                                <div
                                    class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400"
                                >
                                    <p class="whitespace-nowrap">
                                        Déployé il y a
                                        <time
                                            :datetime="project.lastDeployTime"
                                            >{{ project.lastDeploy }}</time
                                        >
                                    </p>
                                    <svg
                                        viewBox="0 0 2 2"
                                        class="h-0.5 w-0.5 fill-current"
                                    >
                                        <circle cx="1" cy="1" r="1" />
                                    </svg>
                                    <p class="truncate">{{ project.domain }}</p>
                                </div>
                            </div>
                            <div class="flex flex-none items-center gap-x-4">
                                <button
                                    type="button"
                                    class="hidden rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 sm:block"
                                >
                                    Visiter<span class="sr-only"
                                        >, {{ project.name }}</span
                                    >
                                </button>
                                <ChevronRightIcon
                                    class="h-5 w-5 flex-none text-gray-500"
                                    aria-hidden="true"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import {
    ArrowDownLeftIcon,
    ArrowUpRightIcon,
    RectangleStackIcon,
    ServerIcon,
    PlusIcon,
    ChevronRightIcon,
} from "@heroicons/vue/20/solid";

const stats = [
    { name: "Projets Total", stat: "12", icon: RectangleStackIcon },
    { name: "Bande Passante (Mois)", stat: "2.5 TB", icon: ArrowUpRightIcon },
    { name: "Nœuds Actifs", stat: "42", icon: ServerIcon },
    { name: "Facturation (Mois)", stat: "$ 49.90", icon: ArrowDownLeftIcon },
];

const projects = [
    {
        id: 1,
        name: "Portfolio-v3",
        domain: "portfolio.keystone.cloud",
        status: "Déployé",
        lastDeploy: "2 h",
        lastDeployTime: "2025-11-03T16:10:00Z",
    },
    {
        id: 2,
        name: "Client-Projet-Alpha",
        domain: "alpha.client.com",
        status: "Erreur",
        lastDeploy: "1 j",
        lastDeployTime: "2025-11-02T14:30:00Z",
    },
];

// Map pour les couleurs de statut (Tailwind)
const statuses = {
    Déployé: "text-green-400 bg-green-400/10 ring-green-400/20",
    Erreur: "text-red-400 bg-red-400/10 ring-red-400/20",
    En_cours: "text-yellow-400 bg-yellow-400/10 ring-yellow-400/20",
};
</script>
