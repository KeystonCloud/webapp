<template>
    <div class="max-w-3xl space-y-8">
        <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
            <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium leading-6 text-white">
                    Configuration de la team
                </h3>
                <p class="mt-2 text-sm text-slate-400">
                    Gérez les paramètres et les informations de votre équipe
                    ici.
                </p>
                <form @submit.prevent="handleSubmit" class="mt-6">
                    <FormResultMessage
                        :showSuccess="updateSucceed"
                        :showError="updateError"
                        successMessage="La team a été mise à jour."
                        errorMessage="Une erreur est survenue lors de la mise à jour de la team."
                    />
                    <KCInput
                        v-model="name"
                        label="Nom de la team"
                        :placeholder="userStore.user.name + '\'s Team'"
                        class="mt-6"
                    />
                    <div class="mt-6 text-right">
                        <KCButton type="submit">Sauvegarder</KCButton>
                    </div>
                </form>
            </div>
        </div>
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
                        @click="openDeleteTeam"
                        type="button"
                        class="rounded-md bg-red-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Supprimer la team
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import FormResultMessage from "@/components/form/FormResultMessage.vue";
import KCInput from "@/components/form/KCInput.vue";
import KCButton from "@/components/form/KCButton.vue";

const userStore = useUserStore();

const name = ref(userStore.team.name);
const updateSucceed = ref(false);
const updateError = ref(false);

async function handleSubmit() {
    updateSucceed.value = false;
    updateError.value = false;

    try {
        await userStore.updateTeam({
            name: name.value,
        });
        updateSucceed.value = true;
    } catch (error) {
        updateError.value = true;
    }
}

function openDeleteTeam() {
    alert("TODO");
}
</script>
