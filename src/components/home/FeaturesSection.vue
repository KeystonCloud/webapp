<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">
                Déployez plus vite
            </h2>
            <p
                class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
                Tout ce qu'il faut pour le web moderne.
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
                Nous combinons les meilleurs outils pour vous offrir une
                expérience de développement sans friction.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl
                class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
            >
                <div class="flex flex-col">
                    <dt
                        class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white"
                    >
                        <GitIcon class="h-6 w-6 text-indigo-400" />
                        Déploiement Git instantané
                    </dt>
                    <dd
                        class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400"
                    >
                        <p class="flex-auto">
                            Connectez votre dépôt GitHub, GitLab ou Bitbucket.
                            Poussez votre code et nous nous occupons du build,
                            du déploiement et de la mise en cache.
                        </p>
                    </dd>
                </div>

                <div class="flex flex-col">
                    <dt
                        class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white"
                    >
                        <P2PIcon class="h-6 w-6 text-indigo-400" />
                        Réseau P2P Décentralisé
                    </dt>
                    <dd
                        class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400"
                    >
                        <p class="flex-auto">
                            Votre site n'est pas sur un seul serveur. Il est
                            servi par un réseau P2P mondial (IPFS) qui garantit
                            une résilience et un uptime imbattables.
                        </p>
                    </dd>
                </div>

                <div class="flex flex-col">
                    <dt
                        class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white"
                    >
                        <DomainIcon class="h-6 w-6 text-indigo-400" />
                        Adresses Stables (IPNS)
                    </dt>
                    <dd
                        class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400"
                    >
                        <p class="flex-auto">
                            Chaque déploiement est atomique. Nous lions votre
                            application à une adresse IPNS stable qui pointe
                            toujours vers la dernière version, sans aucun temps
                            d'arrêt.
                        </p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup>
import GitIcon from "@/assets/icons/GitIcon.vue";
import P2PIcon from "@/assets/icons/P2PIcon.vue";
import DomainIcon from "@/assets/icons/DomainIcon.vue";
</script>
