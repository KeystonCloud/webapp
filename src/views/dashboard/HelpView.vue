<template>
    <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div>
            <h1 class="text-base font-semibold leading-7 text-white">
                Aide & Support
            </h1>
        </div>
    </header>

    <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="flex gap-6">
            <div class="flex-2">
                <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Ouvrir un nouveau ticket
                        </h3>
                        <p class="mt-1 text-sm text-gray-400">
                            Notre équipe vous répondra dans les meilleurs
                            délais.
                        </p>

                        <form class="mt-6 space-y-6">
                            <div>
                                <KCInput
                                    label="Sujet"
                                    type="text"
                                    placeholder="Ex: Problème de déploiement sur 'mon-app'"
                                />
                            </div>

                            <div>
                                <KCSelect
                                    label="Type de demande"
                                    :options="[
                                        'Technique',
                                        'Facturation',
                                        'Général',
                                    ]"
                                />
                            </div>

                            <div>
                                <KCTextarea
                                    label="Message"
                                    placeholder="Décrivez votre problème en détail..."
                                />
                            </div>
                        </form>
                    </div>
                    <div class="bg-gray-800/50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            class="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Envoyer le ticket
                        </button>
                    </div>
                </div>

                <div class="mt-10">
                    <h2 class="text-base font-semibold leading-7 text-white">
                        Mes tickets
                    </h2>
                    <div
                        class="mt-4 overflow-hidden rounded-lg bg-gray-800/80 shadow-md ring-1 ring-white/10"
                    >
                        <div role="list" class="divide-y divide-white/10">
                            <TicketCard
                                v-for="ticket in tickets"
                                :key="ticket.uuid"
                                :ticket="ticket"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <div class="space-y-6">
                    <div class="rounded-lg bg-gray-800 p-6 shadow">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Support Pro
                        </h3>
                        <p class="mt-2 text-sm text-gray-400">
                            En tant qu'utilisateur Pro, vous pouvez nous
                            contacter directement par e-mail pour une assistance
                            prioritaire.
                        </p>
                        <a
                            :href="'mailto:' + supportMail"
                            class="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                            {{ supportMail }} &rarr;
                        </a>
                    </div>

                    <div class="rounded-lg bg-gray-800 p-6 shadow">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Documentation
                        </h3>
                        <p class="mt-2 text-sm text-gray-400">
                            La réponse à votre question se trouve peut-être déjà
                            dans nos guides et références API.
                        </p>
                        <a
                            href="/documentation"
                            class="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                            Consulter la documentation &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import KCInput from "@/components/form/KCInput.vue";
import KCSelect from "@/components/form/KCSelect.vue";
import KCTextarea from "@/components/form/KCTextarea.vue";
import TicketCard from "@/components/dashboard/TicketCard.vue";

const supportMail = ref("support+my_user@keyston.cloud");

const tickets = [
    {
        uuid: "926b5ba8-6c6c-42ae-ad1c-af90a85b400c",
        title: 'Problème de déploiement sur "Client-Projet-Alpha"',
        lastMessage: "3 h",
        lastMessageTime: "2025-11-04T16:10:00Z",
    },
    {
        uuid: "6e6a3efd-0f1c-4005-bd42-cba1b7963718",
        title: 'Problème de facturation sur "Portfolio-v3"',
        lastMessage: "1 j",
        lastMessageTime: "2025-11-03T16:10:00Z",
    },
];
</script>
