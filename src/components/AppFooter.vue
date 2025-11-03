<template>
    <footer class="bg-gray-950" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div
            class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"
        >
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-4">
                    <Logo />
                    <p class="text-sm leading-6 text-gray-400">
                        Le cloud simple pour un web décentralisé.
                    </p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-500 hover:text-gray-400">
                            <span class="sr-only">GitHub</span>
                            <GithubIcon class="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Services
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Déploiements</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Hosting P2P</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >IPNS</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Ressources
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Documentation</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Guides</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Status</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Entreprise
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >À propos</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Blog</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Nous contacter</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Légal
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Conditions</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-sm leading-6 text-gray-400 hover:text-white"
                                        >Confidentialité</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                <p class="text-xs leading-5 text-gray-500">
                    &copy; 2025 KeystonCloud. Tous droits réservés.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Logo from "@/assets/Logo.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
</script>
