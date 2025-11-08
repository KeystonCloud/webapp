<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2
                class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white"
            >
                Connectez-vous à votre compte
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="space-y-6">
                <div>
                    <button
                        type="button"
                        class="cursor-pointer flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        <GithubIcon class="h-5 w-5" />
                        <span class="ml-3">Continuer avec GitHub</span>
                    </button>
                </div>

                <div class="relative">
                    <div
                        class="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div class="w-full border-t border-gray-700" />
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="bg-gray-900 px-2 text-gray-400">ou</span>
                    </div>
                </div>

                <form class="space-y-6" @submit.prevent="handleSubmit">
                    <div>
                        <KCInput
                            v-model="email"
                            label="Adresse e-mail"
                            type="email"
                        />
                    </div>

                    <div>
                        <KCInput
                            v-model="password"
                            label="Mot de passe"
                            type="password"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>

            <p class="mt-10 text-center text-sm text-gray-400">
                Pas encore de compte ?
                <router-link
                    :to="{ name: 'signup' }"
                    class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                >
                    S'inscrire
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import KCInput from "@/components/form/KCInput.vue";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
    try {
        await userStore.login(email.value, password.value);
    } catch (error) {
        console.error("Authentication error:", error);
        alert("Authentication error");
    }
};
</script>
