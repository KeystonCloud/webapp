<template>
    <div>
        <header class="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 class="text-base font-semibold leading-7 text-white">
                        Créer une nouvelle application
                    </h1>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                        Commencez par choisir votre méthode de déploiement.
                    </p>
                </div>
            </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8">
            <div
                class="isolate flex items-stretch rounded-md bg-gray-800 shadow-sm border border-gray-700"
            >
                <div
                    v-for="(method, methodIdx) in deploymentMethods"
                    :key="method.id"
                    @click="selectedMethod = method.id"
                    :class="[
                        methodIdx === 0 ? 'rounded-l-md' : '',
                        methodIdx === deploymentMethods.length - 1
                            ? 'rounded-r-md'
                            : '',
                        'relative flex-1 flex cursor-pointer p-4 focus:outline-none transition-colors hover:bg-gray-700/50',
                    ]"
                >
                    <div class="flex flex-1 items-center justify-between">
                        <div class="flex items-center">
                            <component
                                :is="method.icon"
                                class="h-6 w-6 text-indigo-400"
                                aria-hidden="true"
                            />
                            <div class="ml-3 flex flex-col">
                                <span
                                    class="block text-sm font-medium text-white"
                                    >{{ method.title }}</span
                                >
                                <span class="block text-sm text-gray-400">{{
                                    method.description
                                }}</span>
                            </div>
                        </div>
                        <CheckCircleIcon
                            v-if="selectedMethod === method.id"
                            class="h-5 w-5 text-indigo-400"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <div
                    v-if="selectedMethod === 'git'"
                    class="overflow-hidden rounded-lg bg-gray-800 shadow"
                >
                    <div class="px-4 py-5 sm:p-6">
                        <h3
                            class="text-base font-semibold leading-6 text-white"
                        >
                            Importer un dépôt Git
                        </h3>
                        <p class="mt-2 max-w-xl text-sm text-gray-400">
                            Connectez-vous à votre fournisseur Git pour lister
                            vos dépôts.
                        </p>
                        <div class="mt-5 flex flex-col gap-3 sm:flex-row">
                            <button
                                v-for="gitMethod in gitMethods"
                                :key="gitMethod.name"
                                type="button"
                                class="cursor-pointer inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 sm:w-auto"
                                @click="gitMethodSelected = gitMethod.name"
                            >
                                <component
                                    :is="gitMethod.icon"
                                    class="size-5"
                                />
                                {{ gitMethod.label }}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    v-if="selectedMethod === 'static'"
                    class="overflow-hidden rounded-lg bg-gray-800 shadow"
                >
                    <form>
                        <div class="px-4 py-5 sm:p-6">
                            <h3
                                class="text-base font-semibold leading-6 text-white"
                            >
                                Déployer du contenu statique
                            </h3>
                            <p class="mt-2 max-w-xl text-sm text-gray-400">
                                Idéal pour les tests rapides. Collez votre
                                `index.html` ci-dessous.
                            </p>

                            <div class="mt-5 grid grid-cols-1 gap-y-6">
                                <KCTextarea
                                    v-model="staticContent"
                                    placeholder="<h1>Hello, KeystonCloud!</h1>"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div v-if="selectedMethod === 'template'">
                    <h3 class="text-base font-semibold leading-6 text-white">
                        Commencer avec un template
                    </h3>
                    <p class="mt-2 text-sm text-gray-400">
                        Démarrez un nouveau projet avec un de nos modèles
                        optimisés.
                    </p>

                    <ul
                        role="list"
                        class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <li
                            v-for="template in templates"
                            :key="template.name"
                            class="col-span-1 divide-y divide-gray-700 rounded-lg bg-gray-800 shadow-md transition-all hover:ring-2 hover:ring-indigo-500"
                        >
                            <div
                                class="flex w-full items-center justify-between space-x-6 p-6"
                            >
                                <div class="flex-1 truncate">
                                    <div class="flex items-center space-x-3">
                                        <h3
                                            class="truncate text-sm font-medium text-white"
                                        >
                                            {{ template.name }}
                                        </h3>
                                    </div>
                                    <p
                                        class="mt-1 truncate text-sm text-gray-400"
                                    >
                                        {{ template.description }}
                                    </p>
                                </div>
                                <component
                                    :is="template.icon"
                                    class="h-10 w-10 shrink-0"
                                    aria-hidden="true"
                                />
                            </div>
                            <div>
                                <div
                                    class="-mt-px flex divide-x divide-gray-700"
                                >
                                    <div class="flex w-0 flex-1">
                                        <a
                                            href="#"
                                            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-white hover:bg-gray-700"
                                        >
                                            <PlusIcon
                                                class="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            Déployer
                                        </a>
                                    </div>
                                    <div class="-ml-px flex w-0 flex-1">
                                        <a
                                            href="#"
                                            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white hover:bg-gray-700"
                                        >
                                            <ArrowTopRightOnSquareIcon
                                                class="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import {
    PlusIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    CodeBracketIcon,
} from "@heroicons/vue/20/solid";
import GitIcon from "@/assets/icons/GitIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import GitlabIcon from "@/assets/icons/GitlabIcon.vue";
import BitbucketIcon from "@/assets/icons/BitbucketIcon.vue";
import KCTextarea from "@/components/form/KCTextarea.vue";
import ViteIcon from "@/assets/icons/ViteIcon.vue";
import ReactIcon from "@/assets/icons/ReactIcon.vue";
import SvelteIcon from "@/assets/icons/SvelteIcon.vue";

const router = useRouter();

const selectedMethod = ref(null);
const deploymentMethods = [
    {
        id: "git",
        title: "Importer un dépôt Git",
        description: "Déployer depuis GitHub, GitLab, ou Bitbucket.",
        icon: GitIcon,
    },
    {
        id: "static",
        title: "Déployer du contenu statique",
        description: "Coller votre code ou glisser-déposer un dossier.",
        icon: CodeBracketIcon,
    },
    {
        id: "template",
        title: "Commencer avec un template",
        description: "Utiliser un de nos modèles de démarrage rapide.",
        icon: PlusIcon,
    },
];

const gitMethodSelected = ref(null);
const gitMethods = [
    {
        name: "github",
        label: "Continuer avec Github",
        icon: GithubIcon,
    },
    {
        name: "gitlab",
        label: "Continuer avec Gitlab",
        icon: GitlabIcon,
    },
    {
        name: "bitbucket",
        label: "Continuer avec Bitbucket",
        icon: BitbucketIcon,
    },
];

const staticContent = ref("");

const templates = [
    {
        name: "Vue.js",
        description: "Template Vie.js pré-configuré.",
        icon: ViteIcon,
    },
    {
        name: "React.js",
        description: "Template Next.js avec Tailwind CSS.",
        icon: ReactIcon,
    },
    {
        name: "Svelte",
        description: "Template SvelteKit minimaliste.",
        icon: SvelteIcon,
    },
];

watch(
    () => gitMethodSelected.value,
    (newMethod) => {
        router.push({ name: "dashboard.app.config" });
    },
);
</script>
