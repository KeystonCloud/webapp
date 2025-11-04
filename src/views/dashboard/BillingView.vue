<template>
    <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div>
            <h1 class="text-base font-semibold leading-7 text-white">
                Facturation & Utilisation
            </h1>
        </div>
    </header>

    <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div class="space-y-8 lg:col-span-2">
                <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <h3
                                class="text-lg font-medium leading-6 text-white"
                            >
                                Plan Actuel
                            </h3>
                            <span
                                class="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-0.5 text-sm font-medium text-indigo-400"
                            >
                                Pro
                            </span>
                        </div>
                        <p class="mt-2 text-sm text-gray-300">
                            Votre équipe est sur le plan Pro, facturé 20,00 $
                            par mois.
                        </p>
                        <div class="mt-6">
                            <button
                                type="button"
                                class="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Changer de Plan
                            </button>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Mode de Paiement
                        </h3>
                        <div
                            class="mt-4 flex items-center justify-between rounded-md border border-gray-700 p-4"
                        >
                            <div class="flex items-center">
                                <svg
                                    class="h-8 w-auto text-white"
                                    viewBox="0 0 38 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0ZM34.4 18.1H28.9L24.8 5.9H30.4L34.4 18.1ZM23.6 5.9L19.5 18.1H13.9L9.8 5.9H15.4L17.7 12.8L19.9 5.9H23.6ZM9.2 18.1L5.1 5.9H8.6L11.8 18.1H9.2Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-white">
                                        Visa se terminant par 4242
                                    </div>
                                    <div class="text-sm text-gray-400">
                                        Expire le 12/26
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                            >
                                Mettre à jour
                            </button>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Historique de Facturation
                        </h3>
                        <p class="mt-1 text-sm text-gray-400">
                            Vos factures et reçus récents.
                        </p>
                    </div>
                    <div class="border-t border-gray-700">
                        <table class="min-w-full divide-y divide-gray-700">
                            <thead class="bg-gray-800/50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                    >
                                        Montant
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                    >
                                        Statut
                                    </th>
                                    <th
                                        scope="col"
                                        class="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                    >
                                        <span class="sr-only">Télécharger</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-700 bg-gray-800">
                                <tr>
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6"
                                    >
                                        2 Nov. 2025
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                                    >
                                        20,00 $
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                                    >
                                        <span
                                            class="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400"
                                        >
                                            Payé
                                        </span>
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                    >
                                        <a
                                            href="#"
                                            class="text-indigo-400 hover:text-indigo-300"
                                        >
                                            PDF
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6"
                                    >
                                        2 Oct. 2025
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                                    >
                                        20,00 $
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                                    >
                                        <span
                                            class="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400"
                                        >
                                            Payé
                                        </span>
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                    >
                                        <a
                                            href="#"
                                            class="text-indigo-400 hover:text-indigo-300"
                                        >
                                            PDF
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-1">
                <div class="rounded-lg bg-gray-800 p-6 shadow">
                    <h3 class="text-lg font-medium leading-6 text-white">
                        Utilisation (Cycle Actuel)
                    </h3>
                    <p class="mt-1 text-sm text-gray-400">
                        Utilisation pour le cycle du 2 Nov. au 2 Déc. 2025.
                    </p>
                    <div class="mt-8 space-y-6">
                        <div>
                            <div class="mb-1 flex justify-between text-sm">
                                <span class="font-medium text-white"
                                    >Déploiements</span
                                >
                                <span class="text-gray-400">42 / Illimité</span>
                            </div>
                            <div
                                class="h-2 w-full overflow-hidden rounded-full bg-gray-700"
                            >
                                <div
                                    class="h-full rounded-full bg-gray-500"
                                    style="width: 100%"
                                />
                            </div>
                        </div>

                        <div>
                            <div class="mb-1 flex justify-between text-sm">
                                <span class="font-medium text-white"
                                    >Applications</span
                                >
                                <span class="text-gray-400">6 / Illimité</span>
                            </div>
                            <div
                                class="h-2 w-full overflow-hidden rounded-full bg-gray-700"
                            >
                                <div
                                    class="h-full rounded-full bg-gray-500"
                                    style="width: 100%"
                                />
                            </div>
                        </div>

                        <div>
                            <div class="mb-1 flex justify-between text-sm">
                                <span class="font-medium text-white"
                                    >Bande Passante</span
                                >
                                <span class="text-gray-400"
                                    >12 Go / Illimité</span
                                >
                            </div>
                            <div
                                class="h-2 w-full overflow-hidden rounded-full bg-gray-700"
                            >
                                <div
                                    class="h-full rounded-full bg-gray-500"
                                    style="width: 100%"
                                />
                            </div>
                        </div>

                        <div>
                            <div class="mb-1 flex justify-between text-sm">
                                <span class="font-medium text-white"
                                    >Stockage</span
                                >
                                <span class="text-gray-400"
                                    >8 Go / Illimité</span
                                >
                            </div>
                            <div
                                class="h-2 w-full overflow-hidden rounded-full bg-gray-700"
                            >
                                <div
                                    class="h-full rounded-full bg-gray-500"
                                    style="width: 100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
