<template>
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à construire l'avenir du web ?
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-300">
            Rejoignez-nous et déployez votre première application décentralisée
            en moins de 3 minutes.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
            <router-link
                to="/dashboard"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                Commencer Gratuitement
            </router-link>
            <router-link
                to="/pricing"
                class="text-sm font-semibold leading-6 text-white"
            >
                Voir nos tarifs <span aria-hidden="true">→</span>
            </router-link>
        </div>
    </div>
</template>
