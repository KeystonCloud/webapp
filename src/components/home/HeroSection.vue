<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h1
                class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
                Le Cloud. Décentralisé. Simplifié.
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
                Bienvenue sur KeystoneCloud. La plateforme de déploiement
                moderne pour les développeurs. Profitez de la simplicité de
                Vercel avec la résilience du Web3.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link
                    :to="{ name: 'dashboard' }"
                    class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Commencer Gratuitement
                </router-link>
                <router-link
                    :to="{ name: 'documentation' }"
                    class="text-sm font-semibold leading-6 text-white"
                >
                    Voir la documentation
                    <span aria-hidden="true">→</span>
                </router-link>
            </div>
        </div>

        <div class="mt-16 flow-root sm:mt-24">
            <div
                class="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4"
            >
                <img
                    src="https://placehold.co/1200x600/1F2937/FFFFFF?text=Visuel+de+l'interface"
                    alt="Aperçu de l'application"
                    class="rounded-md shadow-2xl ring-1 ring-white/10"
                    onerror="this.src='https://placehold.co/1200x600/1F2937/FFFFFF?text=Visuel+de+l%27interface'"
                />
            </div>
        </div>
    </div>
</template>
