<template>
    <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div>
            <h1 class="text-base font-semibold leading-7 text-white">
                Mon profil utilisateur
            </h1>
        </div>
    </header>

    <div
        class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:flex lg:gap-x-16"
    >
        <nav
            class="w-full shrink-0 lg:w-64"
            aria-labelledby="settings-navigation"
        >
            <ul role="list" class="space-y-6">
                <li>
                    <h3
                        class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                    >
                        Personnel
                    </h3>
                    <ul role="list" class="mt-2 space-y-1">
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white"
                                aria-current="page"
                            >
                                <span class="truncate">Profil & Sécurité</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                                <span class="truncate">Notifications</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <main class="mt-12 flex-1 lg:mt-0">
            <div class="max-w-3xl space-y-8">
                <form
                    @submit.prevent="updateProfil"
                    class="overflow-hidden rounded-lg bg-gray-800 shadow"
                >
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Profil
                        </h3>
                        <p class="mt-1 text-sm text-gray-400">
                            Ces informations seront affichées publiquement.
                        </p>

                        <FormResultMessage
                            :showSuccess="updateProfilSucceed"
                            :showError="updateProfilError"
                            successMessage="Votre profil est à jour."
                            errorMessage="Une erreur est survenue lors de la mise à jour de votre profil."
                        />

                        <div class="mt-6 space-y-6">
                            <div>
                                <KCInput
                                    label="Nom complet"
                                    type="text"
                                    placeholder="Gregory House"
                                    v-model="name"
                                />
                            </div>

                            <div>
                                <KCInput
                                    label="Adresse e-mail"
                                    type="email"
                                    placeholder="ghouse@ppth.com"
                                    v-model="email"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-800/50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            class="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Sauvegarder
                        </button>
                    </div>
                </form>

                <form
                    @submit.prevent="updatePassword"
                    class="overflow-hidden rounded-lg bg-gray-800 shadow"
                >
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Changer le mot de passe
                        </h3>
                        <p class="mt-1 text-sm text-gray-400">
                            Mettez à jour votre mot de passe pour sécuriser
                            votre compte.
                        </p>

                        <FormResultMessage
                            :showSuccess="updatePasswordSucceed"
                            :showError="updatePasswordError"
                            successMessage="Votre mot de passe est mis à jour."
                            errorMessage="Une erreur est survenue lors de la mise à jour de votre mot de passe."
                        />

                        <form class="mt-6 space-y-6">
                            <div>
                                <KCInput
                                    label="Mot de passe actuel"
                                    type="password"
                                    v-model="password"
                                />
                            </div>

                            <div>
                                <KCInput
                                    label="Nouveau mot de passe"
                                    type="password"
                                    v-model="newPassword"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="bg-gray-800/50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            class="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Mettre à jour le mot de passe
                        </button>
                    </div>
                </form>

                <div
                    class="overflow-hidden rounded-lg bg-red-900/50 shadow ring-1 ring-red-400/30"
                >
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium leading-6 text-red-300">
                            Zone de Danger
                        </h3>
                        <p class="mt-1 text-sm text-red-200">
                            Ces actions sont irréversibles. Soyez certain.
                        </p>

                        <div class="mt-6">
                            <button
                                @click="openDeleteAccount"
                                type="button"
                                class="rounded-md bg-red-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Supprimer mon compte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import FormResultMessage from "@/components/form/FormResultMessage.vue";
import KCInput from "@/components/form/KCInput.vue";

const userStore = useUserStore();

const updateProfilSucceed = ref(false);
const updateProfilError = ref(false);
const name = ref(userStore.user.name);
const email = ref(userStore.user.email);

const updatePasswordSucceed = ref(false);
const updatePasswordError = ref(false);
const password = ref("");
const newPassword = ref("");

async function updateProfil() {
    const result = await userStore.update({
        name: name.value,
        email: email.value,
    });

    if (result.data) {
        updateProfilError.value = false;
        updateProfilSucceed.value = true;
        setTimeout(() => {
            updateProfilSucceed.value = false;
        }, 3000);
    } else {
        updateProfilSucceed.value = false;
        uodateProfilError.value = true;
        setTimeout(() => {
            uodateProfilError.value = false;
        }, 3000);
    }
}

async function updatePassword() {
    const result = await userStore.update({
        password: password.value,
        new_password: newPassword.value,
    });

    if (result.data) {
        updatePasswordError.value = false;
        updatePasswordSucceed.value = true;
        setTimeout(() => {
            updatePasswordSucceed.value = false;
        }, 3000);
    } else {
        updatePasswordSucceed.value = false;
        uodatePasswordError.value = true;
        setTimeout(() => {
            uodatePasswordError.value = false;
        }, 3000);
    }
}

function openDeleteAccount() {
    alert("Fonctionnalité non implémentée.");
}
</script>
