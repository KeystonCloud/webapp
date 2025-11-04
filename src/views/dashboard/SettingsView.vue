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
                        Compte
                    </h3>
                    <ul role="list" class="mt-2 space-y-1">
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Équipes</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Membres</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Facturation</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3
                        class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                    >
                        Application
                    </h3>
                    <ul role="list" class="mt-2 space-y-1">
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate"
                                    >Variables d'environnement</span
                                >
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3
                        class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                    >
                        Node
                    </h3>
                    <ul role="list" class="mt-2 space-y-1">
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Auto-Config</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <main class="mt-12 flex-1 lg:mt-0">
            <div class="max-w-3xl space-y-8">
                <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            TODO
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import KCInput from "@/components/form/KCInput.vue";
</script>
