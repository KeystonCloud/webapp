<template>
    <div class="max-w-3xl space-y-8">
        <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
            <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-medium leading-6 text-white">
                            Membres de la team
                        </h3>
                        <p class="mt-2 text-sm text-slate-400">
                            Gérer les roles et les permissions des membres de
                            votre équipe ici.
                        </p>
                    </div>
                    <div>
                        <KCButton class="mt-4" @click="openAddMember"
                            >Ajouter un membre</KCButton
                        >
                    </div>
                </div>
                <div class="my-6 overflow-x-auto">
                    <table class="table-auto w-full text-left text-slate-400">
                        <thead>
                            <tr class="border-b border-slate-600">
                                <th class="p-2">Nom</th>
                                <th class="p-2">Adresse mail</th>
                                <th class="p-2">Role</th>
                                <th class="p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in Array(5)"
                                class="border-b border-slate-600 text-sm group"
                            >
                                <td class="p-2">Gregory House</td>
                                <td class="p-2">ghouse@ppth.com</td>
                                <td class="p-2">member</td>
                                <td class="p-2 w-12">
                                    <MinusCircleIcon
                                        class="size-5 cursor-pointer hidden group-hover:block"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { MinusCircleIcon } from "@heroicons/vue/24/outline";
import KCButton from "@/components/form/KCButton.vue";

const userStore = useUserStore();

function openAddMember() {
    alert("TODO");
}
</script>
