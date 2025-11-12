<template>
    <div class="p-6 lg:p-8">
        <header class="mb-8">
            <div
                class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
            >
                <div>
                    <h1
                        class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight"
                    >
                        serveur-maison-01
                    </h1>

                    <div class="mt-2 flex items-center gap-x-3">
                        <span
                            class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"
                        >
                            En ligne
                        </span>
                        <span class="text-sm text-gray-400"
                            >192.168.1.10:5000</span
                        >
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        class="block rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                    >
                        Modifier
                    </button>
                </div>
            </div>
        </header>

        <div class="mb-8">
            <div class="border-b border-gray-700">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                        v-for="tab in tabs"
                        :key="tab.name"
                        :href="tab.href"
                        :class="[
                            tab.current
                                ? 'border-indigo-400 text-indigo-400'
                                : 'border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200',
                            'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                        ]"
                        :aria-current="tab.current ? 'page' : undefined"
                    >
                        {{ tab.name }}
                    </a>
                </nav>
            </div>
        </div>

        <div class="space-y-8">
            <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="item in stats"
                    :key="item.name"
                    class="overflow-hidden rounded-lg bg-gray-800 px-4 py-5 shadow-md ring-1 ring-white/10 sm:p-6"
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

            <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-base font-semibold leading-6 text-white">
                        Déploiements Pinnés (12)
                    </h3>
                    <p class="mt-1 text-sm text-gray-400">
                        Liste des applications et des CIDs actuellement stockés
                        par ce nœud.
                    </p>
                </div>
                <ul
                    role="list"
                    class="divide-y divide-gray-700 border-t border-gray-700"
                >
                    <li
                        v-for="deploy in pinnedDeployments"
                        :key="deploy.id"
                        class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                    >
                        <div class="min-w-0">
                            <div class="flex items-start gap-x-3">
                                <p
                                    class="text-sm font-semibold leading-6 text-white"
                                >
                                    {{ deploy.appName }}
                                </p>
                                <p
                                    :class="[
                                        deploy.statusClass,
                                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                                    ]"
                                >
                                    {{ deploy.status }}
                                </p>
                            </div>
                            <div
                                class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400"
                            >
                                <p
                                    class="font-mono truncate"
                                    :title="deploy.cid"
                                >
                                    CID: {{ deploy.cid.substring(0, 20) }}...
                                </p>
                                <svg
                                    viewBox="0 0 2 2"
                                    class="h-0.5 w-0.5 fill-current"
                                >
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <p class="whitespace-nowrap">
                                    Taille: {{ deploy.size }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-none items-center gap-x-4">
                            <a
                                href="#"
                                class="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                            >
                                Aller à l'App
                            </a>
                            <ChevronRightIcon
                                class="h-5 w-5 flex-none text-gray-500"
                                aria-hidden="true"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    ArrowUpRightIcon,
    ChevronRightIcon,
    CircleStackIcon,
    CloudArrowUpIcon,
    ShieldCheckIcon,
} from "@heroicons/vue/24/outline";

// Données fictives pour les onglets
const tabs = [
    { name: "Aperçu", href: "#", current: true },
    { name: "Performance", href: "#", current: false },
    { name: "Déploiements Pinnés", href: "#", current: false },
    { name: "Logs", href: "#", current: false },
    { name: "Paramètres", href: "#", current: false },
];

// Données fictives pour les statistiques
const stats = [
    {
        name: "Stockage Utilisé",
        stat: "45.2 Go / 100 Go",
        icon: CircleStackIcon,
    },
    { name: "Bande Passante (30j)", stat: "1.2 To", icon: CloudArrowUpIcon },
    { name: "Uptime", stat: "99.98%", icon: ShieldCheckIcon },
    { name: "Déploiements", stat: "12", icon: ArrowUpRightIcon },
];

// Données fictives pour les déploiements pinnés
const pinnedDeployments = [
    {
        id: 1,
        appName: "KeystoneCloud-API",
        cid: "QmXyZaBcDeF...1234567890abcdef",
        status: "Pinned",
        statusClass: "text-green-400 bg-green-500/10 ring-green-500/20",
        size: "1.2 Go",
    },
    {
        id: 2,
        appName: "Portfolio-v3",
        cid: "QmAnotherCid...1234567890abcdef",
        status: "Pinned",
        statusClass: "text-green-400 bg-green-500/10 ring-green-500/20",
        size: "128 Mo",
    },
    {
        id: 3,
        appName: "Client-Projet-Alpha",
        cid: "QmThirdCid...1234567890abcdef",
        status: "Pinning",
        statusClass: "text-yellow-400 bg-yellow-500/10 ring-yellow-500/20",
        size: "N/A",
    },
];
</script>
