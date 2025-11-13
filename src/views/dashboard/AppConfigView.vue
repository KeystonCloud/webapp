<template>
    <div>
        <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex gap-4">
                <component
                    :is="gitIcon"
                    class="flex-none size-16 text-slate-600"
                />
                <div
                    class="flex-1 flex flex-wrap items-center justify-between gap-4"
                >
                    <div>
                        <h1
                            class="text-base font-semibold leading-7 text-white"
                        >
                            Configurer et Déployer
                        </h1>
                        <p class="mt-1 text-sm leading-6 text-gray-400">
                            Importation du dépôt
                            <span class="font-medium text-indigo-400">{{
                                selectedRepo
                            }}</span>
                        </p>
                    </div>
                </div>
                <div class="flex-none flex items-center">
                    <button
                        class="inline-flex justify-center cursor-pointer rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        @click="handleDeploy"
                    >
                        Déployer
                    </button>
                </div>
            </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8 space-y-8">
            <div class="overflow-hidden rounded-lg bg-gray-800 shadow">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-base font-semibold leading-6 text-white">
                        Paramètres du Projet
                    </h3>
                    <div
                        class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
                    >
                        <div>
                            <KCInput
                                label="Nom du Projet"
                                placeholder="mon-super-projet"
                                v-model="projectName"
                                required
                            />
                            <div
                                class="flex items-center text-green-500 text-sm gap-1 mt-2"
                            >
                                <CheckCircleIcon
                                    class="flex-none size-5"
                                    aria-hidden="true"
                                />
                                <span>Nom d'application disponible</span>
                            </div>
                        </div>
                        <KCSelect
                            label="Framework"
                            :options="frameworks"
                            v-model="selectedFramework"
                        />
                    </div>
                </div>
            </div>

            <Disclosure
                as="div"
                class="overflow-hidden rounded-lg bg-gray-800 shadow"
                v-slot="{ open }"
            >
                <DisclosureButton
                    class="cursor-pointer flex w-full items-center justify-between px-4 py-5 sm:px-6"
                >
                    <h3 class="text-base font-semibold leading-6 text-white">
                        Paramètres de Build & Sortie
                    </h3>
                    <ChevronUpIcon
                        :class="[
                            open ? '' : 'rotate-180 transform',
                            'h-5 w-5 text-gray-400',
                        ]"
                    />
                </DisclosureButton>
                <DisclosurePanel
                    class="border-t border-white/10 px-4 py-5 sm:p-6"
                >
                    <div
                        class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
                    >
                        <KCInput
                            label="Commande de Build"
                            placeholder="yarn build"
                            v-model="buildCommand"
                            required
                        />
                        <KCInput
                            label="Répertoire de Sortie"
                            placeholder="dist"
                            v-model="outputDir"
                            required
                        />
                    </div>
                </DisclosurePanel>
            </Disclosure>

            <Disclosure
                as="div"
                class="overflow-hidden rounded-lg bg-gray-800 shadow"
                v-slot="{ open }"
            >
                <DisclosureButton
                    class="cursor-pointer flex w-full items-center justify-between px-4 py-5 sm:px-6"
                >
                    <div class="text-left">
                        <h3
                            class="text-base font-semibold leading-6 text-white"
                        >
                            Variables d'Environnement
                        </h3>
                        <p class="mt-2 text-sm text-gray-400">
                            Ajoutez les variables d'environnement requises par
                            votre build ou votre application.
                        </p>
                    </div>
                    <ChevronUpIcon
                        :class="[
                            open ? '' : 'rotate-180 transform',
                            'h-5 w-5 text-gray-400',
                        ]"
                    />
                </DisclosureButton>
                <DisclosurePanel
                    class="border-t border-white/10 px-4 pt-0 pb-5 sm:px-6"
                >
                    <div class="mt-6 space-y-4">
                        <div
                            v-for="(env, index) in envVars"
                            :key="env.id"
                            class="flex items-center gap-x-4"
                        >
                            <KCInput
                                v-model="env.key"
                                placeholder="MA_CLE_API"
                                class="flex-1"
                            />
                            <KCInput
                                v-model="env.value"
                                placeholder="s3cr3t_v4lu3"
                                class="flex-1"
                            />
                            <button
                                type="button"
                                @click="removeEnvVar(index)"
                                class="cursor-pointer flex-none text-gray-500 hover:text-red-400"
                            >
                                <XMarkIcon class="h-5 w-5" />
                            </button>
                        </div>
                        <button
                            type="button"
                            @click="addEnvVar"
                            class="cursor-pointer inline-flex items-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                        >
                            <PlusIcon class="-ml-0.5 h-5 w-5" />
                            Ajouter
                        </button>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/vue";
import {
    CheckIcon,
    ChevronUpDownIcon,
    ChevronUpIcon,
    CheckCircleIcon,
    XMarkIcon,
    PlusIcon,
} from "@heroicons/vue/20/solid";
import { useRouter, useRoute } from "vue-router";
import KCInput from "@/components/form/KCInput.vue";
import KCSelect from "@/components/form/KCSelect.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import GitlabIcon from "@/assets/icons/GitlabIcon.vue";
import BitbucketIcon from "@/assets/icons/BitbucketIcon.vue";

const router = useRouter();

const gitMethodSelected = ref("github");
const gitIcon = ref(null);
watch(
    () => gitMethodSelected.value,
    (newVal) => {
        if (newVal === "github") {
            gitIcon.value = GithubIcon;
        } else if (newVal === "gitlab") {
            gitIcon.value = GitlabIcon;
        } else if (newVal === "bitbucket") {
            gitIcon.value = BitbucketIcon;
        }
    },
    { immediate: true },
);

const selectedRepo = ref("keyston-cloud/exemple-app");

const projectName = ref(selectedRepo.value.split("/")[1] || "nouveau-projet");

const frameworks = [
    { id: "nextjs", name: "Next.js", build: "yarn build", dir: ".next" },
    { id: "vite", name: "Vite", build: "yarn build", dir: "dist" },
    { id: "nuxt", name: "Nuxt 3", build: "yarn build", dir: ".output" },
    { id: "sveltekit", name: "SvelteKit", build: "yarn build", dir: "build" },
    { id: "astro", name: "Astro", build: "yarn build", dir: "dist" },
    { id: "other", name: "Autre / Manuel", build: "", dir: "" },
];

const selectedFramework = ref(frameworks[1]);
const buildCommand = ref(selectedFramework.value.build);
const outputDir = ref(selectedFramework.value.dir);

watch(selectedFramework, (newFramework) => {
    buildCommand.value = newFramework.build;
    outputDir.value = newFramework.dir;
});

const envVars = ref([]);

const addEnvVar = () => {
    envVars.value.push({ id: Date.now(), key: "", value: "" });
};

const removeEnvVar = (index) => {
    envVars.value.splice(index, 1);
};

const handleDeploy = () => {
    console.log("Déploiement en cours...");
    const config = {
        repo: selectedRepo.value,
        project: projectName.value,
        framework: selectedFramework.value.id,
        build: buildCommand.value,
        output: outputDir.value,
        env: envVars.value.filter((e) => e.key),
    };
    console.log("Configuration du déploiement:", config);
};
</script>
