<template>
    <div class="bg-gray-900">
        <div
            class="relative isolate overflow-hidden pt-14 sm:pt-24 pb-24 sm:pb-32"
        >
            <div
                class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#8085ff] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    style="
                        clip-path: polygon(
                            74.1% 44.1%,
                            100% 61.6%,
                            97.5% 26.9%,
                            85.5% 0.1%,
                            80.7% 2%,
                            72.5% 32.5%,
                            60.2% 62.4%,
                            52.4% 68.1%,
                            47.5% 58.3%,
                            45.2% 34.5%,
                            27.5% 76.7%,
                            0.1% 64.9%,
                            17.9% 100%,
                            27.6% 76.8%,
                            76.1% 97.7%,
                            74.1% 44.1%
                        );
                    "
                />
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h1
                        class="text-3xl font-bold tracking-tight text-white sm:text-5xl"
                    >
                        Documentation
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-300">
                        Trouvez tout ce dont vous avez besoin pour déployer
                        votre première application sur KeystonCloud.
                    </p>

                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <div class="relative w-full max-w-lg">
                            <label for="search" class="sr-only"
                                >Rechercher</label
                            >
                            <div class="relative">
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <MagnifyingGlassIcon
                                        class="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    class="block w-full rounded-md border-0 bg-white/5 py-2.5 pl-10 pr-3 text-white shadow-sm ring-1 ring-inset ring-white/10 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Rechercher dans la documentation..."
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
            <h2 class="text-center text-lg font-semibold leading-8 text-white">
                Parcourir les catégories
            </h2>
            <div class="mt-10">
                <dl
                    class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <div
                        v-for="category in categories"
                        :key="category.name"
                        class="flex flex-col rounded-2xl bg-gray-800 p-8 transition-colors hover:bg-gray-700/80"
                    >
                        <dt>
                            <div
                                class="inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-3"
                            >
                                <component
                                    :is="category.icon"
                                    class="h-6 w-6 text-indigo-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <p class="mt-4 text-lg font-semibold text-white">
                                {{ category.name }}
                            </p>
                        </dt>
                        <dd
                            class="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-300"
                        >
                            <p class="flex-auto">{{ category.description }}</p>
                            <p class="mt-4">
                                <a
                                    :href="category.href"
                                    class="text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                                    >Lire le guide
                                    <span aria-hidden="true">&rarr;</span></a
                                >
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import {
    RocketLaunchIcon,
    CommandLineIcon,
    CodeBracketIcon,
    CloudIcon,
    BookOpenIcon,
    LifebuoyIcon,
} from "@heroicons/vue/24/outline";

const categories = [
    {
        name: "Prise en main",
        description:
            "Apprenez à déployer votre premier site statique ou votre première app en quelques minutes.",
        href: "#",
        icon: RocketLaunchIcon,
    },
    {
        name: "Référence CLI",
        description:
            "Documentation complète pour notre Interface en Ligne de Commande (CLI).",
        href: "#",
        icon: CommandLineIcon,
    },
    {
        name: "Référence API",
        description:
            "Explorez nos endpoints API pour automatiser vos déploiements et gérer vos apps.",
        href: "#",
        icon: CodeBracketIcon,
    },
    {
        name: "Réseau P2P",
        description:
            "Comprenez le fonctionnement de notre infrastructure IPFS/IPNS et comment l'exploiter.",
        href: "#",
        icon: CloudIcon,
    },
    {
        name: "Guides",
        description:
            "Tutoriels approfondis pour des cas d'usage spécifiques (ex: Vue, React, CI/CD).",
        href: "#",
        icon: BookOpenIcon,
    },
    {
        name: "Support",
        description:
            "Vous êtes bloqué ? Trouvez des réponses ou contactez notre équipe.",
        href: "#",
        icon: LifebuoyIcon,
    },
];
</script>
