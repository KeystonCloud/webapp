<template>
    <div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2
                    class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    Un tarif simple, quelle que soit l'échelle
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    Commencez gratuitement pour vos projets personnels. Payez
                    uniquement ce dont vous avez besoin lorsque vous passez à
                    l'échelle supérieure.
                </p>
            </div>

            <div
                class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                <div
                    class="flex flex-col justify-between rounded-3xl bg-gray-950 p-8 ring-1 ring-white/10 lg:mt-8 xl:p-10"
                >
                    <div>
                        <div class="flex items-center justify-between gap-x-4">
                            <h3
                                class="text-lg font-semibold leading-8 text-white"
                            >
                                Hobby
                            </h3>
                            <p
                                class="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-400"
                            >
                                Gratuit
                            </p>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-300">
                            Parfait pour les projets personnels, open-source et
                            les tests.
                        </p>
                        <p class="mt-6 flex items-baseline gap-x-1">
                            <span
                                class="text-4xl font-bold tracking-tight text-white"
                                >$0</span
                            >
                            <span
                                class="text-sm font-semibold leading-6 text-gray-300"
                                >/mois</span
                            >
                        </p>
                        <ul
                            role="list"
                            class="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                        >
                            <li
                                v-for="feature in hobbyFeatures"
                                :key="feature"
                                class="flex gap-x-3"
                            >
                                <CheckIcon
                                    class="h-6 w-5 flex-none text-indigo-400"
                                    aria-hidden="true"
                                />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                    <router-link
                        to="/dashboard"
                        class="mt-8 block rounded-md bg-white/10 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Commencer
                    </router-link>
                </div>

                <div
                    class="relative flex flex-col justify-between rounded-3xl bg-gray-950 p-8 ring-2 ring-indigo-500 xl:p-10"
                >
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span
                            class="inline-flex items-center rounded-full bg-indigo-500 px-4 py-1 text-sm font-medium text-white"
                        >
                            Le plus populaire
                        </span>
                    </div>
                    <div>
                        <div class="flex items-center justify-between gap-x-4">
                            <h3
                                class="text-lg font-semibold leading-8 text-white"
                            >
                                Pro
                            </h3>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-300">
                            Pour les applications professionnelles et les
                            équipes qui ont besoin de plus de puissance.
                        </p>
                        <p class="mt-6 flex items-baseline gap-x-1">
                            <span
                                class="text-4xl font-bold tracking-tight text-white"
                                >$20</span
                            >
                            <span
                                class="text-sm font-semibold leading-6 text-gray-300"
                                >/utilisateur/mois</span
                            >
                        </p>
                        <ul
                            role="list"
                            class="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                        >
                            <li
                                v-for="feature in proFeatures"
                                :key="feature"
                                class="flex gap-x-3"
                            >
                                <CheckIcon
                                    class="h-6 w-5 flex-none text-indigo-400"
                                    aria-hidden="true"
                                />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                    <router-link
                        to="/dashboard"
                        class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Passer Pro
                    </router-link>
                </div>

                <div
                    class="flex flex-col justify-between rounded-3xl bg-gray-950 p-8 ring-1 ring-white/10 lg:mt-8 xl:p-10"
                >
                    <div>
                        <div class="flex items-center justify-between gap-x-4">
                            <h3
                                class="text-lg font-semibold leading-8 text-white"
                            >
                                Enterprise
                            </h3>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-300">
                            Pour les applications à grande échelle nécessitant
                            une sécurité et un support sur mesure.
                        </p>
                        <p class="mt-6 flex items-baseline gap-x-1">
                            <span
                                class="text-4xl font-bold tracking-tight text-white"
                                >Sur mesure</span
                            >
                        </p>
                        <ul
                            role="list"
                            class="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                        >
                            <li
                                v-for="feature in enterpriseFeatures"
                                :key="feature"
                                class="flex gap-x-3"
                            >
                                <CheckIcon
                                    class="h-6 w-5 flex-none text-indigo-400"
                                    aria-hidden="true"
                                />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                    <a
                        href="#"
                        class="mt-8 block rounded-md bg-white/10 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Contactez-nous
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const hobbyFeatures = [
    "5 Déploiements",
    "Réseau Keyston P2P",
    "Bande passante limitée",
    "Support communautaire",
];
const proFeatures = [
    "Déploiements illimités",
    "Bande passante illimitée",
    "Membres d'équipe",
    "Analytiques",
    "Support par email",
];
const enterpriseFeatures = [
    "Tout du plan Pro",
    "Bande passante illimitée",
    "SSO & Sécurité avancée",
    "Réseau privé dédié (optionnel)",
    "Support prioritaire 24/7",
];
</script>
