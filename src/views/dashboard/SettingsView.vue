<template>
    <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div>
            <h1 class="text-base font-semibold leading-7 text-white">
                Paramètres
            </h1>
        </div>
    </header>

    <div
        class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:flex lg:gap-x-16"
    >
        <nav
            class="w-full shrink-0 lg:w-64"
            aria-labelledby="settings-navigation"
        >
            <ul role="list" class="space-y-6">
                <li>
                    <h3
                        class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                    >
                        Équipe
                    </h3>
                    <ul role="list" class="mt-2 space-y-1">
                        <li>
                            <div
                                @click="
                                    openView('dashboard.settings.team.config')
                                "
                                class="cursor-pointer group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Configuration</span>
                            </div>
                        </li>
                        <li>
                            <div
                                @click="
                                    openView('dashboard.settings.team.members')
                                "
                                class="cursor-pointer group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Membres</span>
                            </div>
                        </li>
                        <li>
                            <div
                                @click="
                                    openView('dashboard.settings.team.billing')
                                "
                                class="cursor-pointer group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Facturation</span>
                            </div>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3
                        class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                    >
                        Applications
                    </h3>
                    <ul role="list" class="mt-2 space-y-1">
                        <li>
                            <div
                                @click="openView('dashboard.settings.apps.env')"
                                class="cursor-pointer group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate"
                                    >Variables d'environnement</span
                                >
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <main class="mt-12 flex-1 lg:mt-0">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function openView(name) {
    router.push({ name });
}
</script>
