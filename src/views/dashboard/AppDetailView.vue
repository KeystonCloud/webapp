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
                        {{ app.name }}
                    </h1>

                    <div class="mt-2 flex items-center gap-x-3">
                        <span
                            class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"
                        >
                            Déployé
                        </span>
                        <a
                            v-if="domains && domains.length > 0"
                            :href="domains[0].url"
                            target="_blank"
                            class="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-x-1"
                        >
                            {{ domains[0].url }}
                            <ArrowTopRightOnSquareIcon
                                class="h-4 w-4"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
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
            <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-base font-semibold leading-6 text-white">
                        Déploiement en Production
                    </h3>
                    <div class="mt-4 space-y-3">
                        <p class="text-sm text-gray-300">
                            Le déploiement actuel servi à vos utilisateurs.
                        </p>
                        <div
                            class="flex items-center gap-x-4 rounded-md border border-gray-700 bg-gray-900/50 p-4"
                        >
                            <CodeBracketIcon
                                class="h-6 w-6 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                            <div class="flex-auto">
                                <div class="font-mono text-sm text-white">
                                    QmXyZ...aBcDeF (CID)
                                </div>
                                <div class="text-xs text-gray-400">
                                    Publié il y a 2 heures via `git push`
                                </div>
                            </div>
                            <a
                                href="#"
                                class="text-sm font-medium text-indigo-400 hover:text-indigo-300"
                                >Détails</a
                            >
                        </div>
                        <div
                            class="flex items-center gap-x-4 rounded-md border border-gray-700 bg-gray-900/50 p-4"
                        >
                            <GlobeAltIcon
                                class="h-6 w-6 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                            <div class="flex-auto">
                                <div class="font-mono text-sm text-white">
                                    {{ ipnsName }} (IPNS)
                                </div>
                                <div class="text-xs text-gray-400">
                                    Adresse IPNS stable
                                </div>
                            </div>
                            <span
                                class="text-sm cursor-pointer font-medium text-indigo-400 hover:text-indigo-300"
                                @click="copyText(app.ipns_name)"
                                >Copier</span
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                <div class="px-4 py-5 sm:p-6">
                    <div class="flex items-center justify-between">
                        <h3
                            class="text-base font-semibold leading-6 text-white"
                        >
                            Domaines
                        </h3>
                        <button
                            type="button"
                            class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Ajouter
                        </button>
                    </div>
                    <div class="mt-4 flow-root">
                        <ul role="list" class="divide-y divide-gray-700">
                            <li
                                v-for="domain in domains"
                                :key="domain.url"
                                class="flex items-center justify-between gap-x-6 py-4 cursor-pointer"
                                @click="openWebsite(domain.url)"
                            >
                                <div class="min-w-0">
                                    <div class="flex items-start gap-x-3">
                                        <p
                                            class="text-sm font-semibold leading-6 text-white"
                                        >
                                            {{ domain.url }}
                                        </p>
                                        <p
                                            class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-400 bg-green-500/10 ring-green-500/20"
                                        >
                                            Production
                                        </p>
                                    </div>
                                    <div
                                        class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400"
                                    >
                                        <p class="whitespace-nowrap">
                                            {{ domain.label }}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex flex-none items-center gap-x-4"
                                >
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

            <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-base font-semibold leading-6 text-white">
                        Déploiements Récents
                    </h3>
                </div>
                <ul
                    role="list"
                    class="divide-y divide-gray-700 border-t border-gray-700"
                >
                    <li
                        v-for="deploy in deployments"
                        :key="deploy.id"
                        class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                    >
                        <div class="min-w-0">
                            <div class="flex items-start gap-x-3">
                                <p
                                    class="text-sm font-semibold leading-6 text-white"
                                >
                                    {{ deploy.commit }}
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
                                <p class="whitespace-nowrap">
                                    Déployé
                                    <time :datetime="deploy.datetime">{{
                                        deploy.timeAgo
                                    }}</time>
                                </p>
                                <svg
                                    viewBox="0 0 2 2"
                                    class="h-0.5 w-0.5 fill-current"
                                >
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <p class="truncate">via {{ deploy.source }}</p>
                            </div>
                        </div>
                        <div class="flex flex-none items-center gap-x-4">
                            <a
                                href="#"
                                class="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                            >
                                Inspecter
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
import { computed } from "vue";
import { useAppStore } from "@/stores/appStore";
import { useRoute } from "vue-router";
import {
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon,
    GlobeAltIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/outline";

const route = useRoute();
const appStore = useAppStore();

const app = computed(() =>
    appStore.apps.find((a) => a.id === route.params.uuid),
);

const ipnsName = computed(() => {
    if (!app) {
        return "";
    }

    const start = app.value.ipns_name.substring(0, 6);
    const end = app.value.ipns_name.substring(app.value.ipns_name.length - 6);
    return `${start}...${end}`;
});

const domains = computed(() => {
    return [
        {
            url: import.meta.env.VITE_KC_WEB_GATEWAY + "/app/" + app.value.name,
            label: "KeystonCloud Web Gateway",
        },
        {
            url:
                import.meta.env.VITE_KC_IPFS_GATEWAY +
                "/ipns/" +
                app.value.ipns_name,
            label: "KeystonCloud Web Gateway",
        },
        {
            url: "https://ipfs.io/ipns/" + app.value.ipns_name,
            label: "IPFS.io Gateway",
        },
    ];
});

const tabs = [
    { name: "Aperçu", href: "#", current: true },
    { name: "Déploiements", href: "#", current: false },
    { name: "Analytics", href: "#", current: false },
    { name: "Logs", href: "#", current: false },
    { name: "Paramètres", href: "#", current: false },
];

const deployments = [
    {
        id: 1,
        commit: "feat: Ajout du nouveau hero",
        branch: "main",
        status: "Production",
        statusClass: "text-green-400 bg-green-500/10 ring-green-500/20",
        source: "git push",
        timeAgo: "2h",
        datetime: "2023-01-23T11:00",
    },
    {
        id: 2,
        commit: "fix: Correction du formulaire de contact",
        branch: "main",
        status: "Annulé",
        statusClass: "text-gray-400 bg-gray-500/10 ring-gray-500/20",
        source: "git push",
        timeAgo: "1j",
        datetime: "2023-01-22T15:00",
    },
    {
        id: 3,
        commit: "style: Mise à jour du footer",
        branch: "preview",
        status: "Preview",
        statusClass: "text-yellow-400 bg-yellow-500/10 ring-yellow-500/20",
        source: "git push",
        timeAgo: "3j",
        datetime: "2023-01-20T10:00",
    },
];

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

function openWebsite(url) {
    window.open(url, "_blank");
}
</script>
