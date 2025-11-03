<template>
    <header class="sticky top-0 z-10 bg-gray-900/95">
        <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
            <div class="flex items-center justify-between py-6">
                <div class="flex lg:flex-1">
                    <router-link :to="{ name: 'home' }" class="-m-1.5 p-1.5">
                        <span class="sr-only">KeystonCloud</span>
                        <Logo />
                    </router-link>
                </div>

                <div class="flex lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer text-gray-400 hover:text-gray-300"
                        @click="mobileMenuOpen = true"
                    >
                        <span class="sr-only">Ouvrir le menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div class="hidden lg:flex lg:gap-x-12">
                    <router-link
                        v-for="item in navigation"
                        :key="item.name"
                        :to="{ name: item.to }"
                        class="text-sm font-semibold leading-6 text-gray-300 hover:text-white"
                    >
                        {{ item.name }}
                    </router-link>
                </div>

                <div
                    class="hidden items-center lg:flex lg:flex-1 lg:justify-end lg:gap-x-6"
                >
                    <router-link
                        :to="{ name: 'login' }"
                        class="text-sm font-semibold leading-6 text-gray-300 hover:text-white"
                    >
                        Connexion
                    </router-link>
                    <router-link
                        :to="{ name: 'dashboard' }"
                        class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        S'inscrire
                    </router-link>
                </div>
            </div>
        </nav>

        <Dialog
            as="div"
            class="lg:hidden"
            @close="mobileMenuOpen = false"
            :open="mobileMenuOpen"
        >
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            >
                <div class="flex items-center justify-between">
                    <router-link
                        :to="{ name: 'home' }"
                        class="-m-1.5 p-1.5"
                        @click="mobileMenuOpen = false"
                    >
                        <span class="sr-only">KeystonCloud</span>
                        <span class="text-xl font-bold text-white"
                            >KeystonCloud</span
                        >
                    </router-link>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 cursor-pointer text-gray-400 hover:text-gray-300"
                        @click="mobileMenuOpen = false"
                    >
                        <span class="sr-only">Fermer le menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/25">
                        <div class="space-y-2 py-6">
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.to }"
                                @click="mobileMenuOpen = false"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                        <div class="py-6">
                            <router-link
                                :to="{ name: 'login' }"
                                @click="mobileMenuOpen = false"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                            >
                                Connexion
                            </router-link>
                            <router-link
                                :to="{ name: 'dashboard' }"
                                @click="mobileMenuOpen = false"
                                class="-mx-3 mt-2 block rounded-lg bg-indigo-500 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-400"
                            >
                                S'inscrire
                            </router-link>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "@/assets/Logo.vue";

const navigation = [
    { name: "Accueil", to: "home" },
    { name: "Tarifs", to: "pricing" },
    { name: "Documentation", to: "documentation" },
];

const mobileMenuOpen = ref(false);
</script>
