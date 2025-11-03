<template>
    <div class="bg-slate-800 m-2 rounded-md">
        <nav
            class="relative z-0 flex flex-col items-center text-gray-300 p-2 space-y-2"
        >
            <div class="nav-item">
                <HomeIcon
                    class="z-2 size-10 p-2 hover:text-white cursor-pointer"
                    title="Accueil"
                />
            </div>
            <div class="nav-item">
                <RectangleStackIcon
                    class="z-2 size-10 p-2 hover:text-white cursor-pointer"
                    title="Projets"
                />
            </div>
            <div class="nav-item">
                <ServerIcon
                    class="z-2 size-10 p-2 hover:text-white cursor-pointer"
                    title="Nœuds"
                />
            </div>
            <div class="nav-item">
                <CurrencyDollarIcon
                    class="z-2 size-10 p-2 hover:text-white cursor-pointer"
                    title="Facturation"
                />
            </div>
            <div class="nav-item">
                <Cog6ToothIcon
                    class="z-2 size-10 p-2 hover:text-white cursor-pointer"
                    title="Paramètres"
                />
            </div>
            <div class="nav-item">
                <QuestionMarkCircleIcon
                    class="z-2 size-10 p-2 hover:text-white cursor-pointer"
                    title="Aide"
                />
            </div>
        </nav>
    </div>
</template>

<script setup>
import {
    HomeIcon,
    RectangleStackIcon,
    ServerIcon,
    CurrencyDollarIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";
</script>

<style scoped>
.nav-item {
    z-index: 10;
}

.nav-item:last-child::before {
    content: "";
    position: absolute;
    opacity: 0;
    top: calc(var(--spacing) * 2);
    left: calc(var(--spacing) * 2);
    width: calc(var(--spacing) * 10);
    height: calc(var(--spacing) * 10);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.375rem;
    z-index: 1;
    transition: all 0.3s ease;
}

.nav-item:hover ~ .nav-item:last-child::before {
    opacity: 1;
}

.nav-item:nth-child(1):hover ~ .nav-item:last-child::before {
    top: calc(var(--spacing) * 2);
}

.nav-item:nth-child(2):hover ~ .nav-item:last-child::before {
    top: calc(var(--spacing) * 14);
}

.nav-item:nth-child(3):hover ~ .nav-item:last-child::before {
    top: calc(var(--spacing) * 26);
}

.nav-item:nth-child(4):hover ~ .nav-item:last-child::before {
    top: calc(var(--spacing) * 38);
}

.nav-item:nth-child(5):hover ~ .nav-item:last-child::before {
    top: calc(var(--spacing) * 50);
}

.nav-item:nth-child(6):hover ~ .nav-item:last-child::before {
    top: calc(var(--spacing) * 62);
}
</style>
