<template>
    <div class="max-w-3xl space-y-8">
        <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
            <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium leading-6 text-white">
                    Facturation de la team
                </h3>
                <p class="mt-2 text-sm text-slate-400">
                    Gérez les informations de facturation de votre équipe ici.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
</script>
