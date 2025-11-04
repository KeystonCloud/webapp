<template>
    <div class="bg-slate-800 m-2 rounded-md">
        <div
            class="flex flex-col items-center h-full justify-between text-slate-400 p-2"
        >
            <nav class="flex flex-col space-y-2">
                <div
                    v-for="item in menus"
                    :key="item.name"
                    class="relative group hover:bg-slate-600 hover:text-slate-300 cursor-pointer rounded-md ease-in transition-all"
                    @click="item.onClick"
                >
                    <span
                        class="absolute top-1 left-[150%] bg-slate-800 rounded-md p-2 font-bold text-xs text-nowrap -translate-x-full opacity-0 group-hover:bg-slate-600 group-hover:text-slate-300 group-hover:opacity-100 group-hover:translate-x-0 ease-in transition-all"
                        >{{ item.name }}</span
                    >
                    <component
                        :is="item.icon"
                        class="size-10 p-2"
                        :title="item.name"
                    />
                </div>
            </nav>
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton class="cursor-pointer">
                        <img
                            class="size-8 rounded-full"
                            src="https://i.pravatar.cc/100"
                        />
                    </MenuButton>
                </div>
                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute left-full bottom-0 ml-5 -mb-2 w-56 bg-slate-800 rounded-md overflow-hidden focus:outline-none"
                    >
                        <MenuItem
                            v-for="item in userMenus"
                            :key="item.name"
                            v-slot="{ active }"
                            @click="item.onClick"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-slate-600 text-slate-300'
                                        : 'text-slate-400',
                                    'flex w-full items-center px-2 py-2 text-sm font-bold cursor-pointer transition-all ease-in',
                                ]"
                            >
                                <component
                                    :is="item.icon"
                                    class="mr-2 size-5"
                                />
                                {{ item.name }}
                            </button>
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {
    HomeIcon,
    RectangleStackIcon,
    ServerIcon,
    CurrencyDollarIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
    UserCircleIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/vue/24/outline";

const router = useRouter();

const menus = [
    {
        name: "Tableau de bord",
        icon: HomeIcon,
        onClick: () => routeTo("dashboard"),
    },
    {
        name: "Apps",
        icon: RectangleStackIcon,
        onClick: () => routeTo("dashboard.apps"),
    },
    {
        name: "Nodes",
        icon: ServerIcon,
        onClick: () => routeTo("dashboard.nodes"),
    },
    {
        name: "Facturation",
        icon: CurrencyDollarIcon,
        onClick: () => routeTo("dashboard.billing"),
    },
    {
        name: "Paramètres",
        icon: Cog6ToothIcon,
        onClick: () => routeTo("dashboard.settings"),
    },
    {
        name: "Aide",
        icon: QuestionMarkCircleIcon,
        onClick: () => routeTo("dashboard.help"),
    },
];

const userMenus = [
    {
        name: "Profil",
        icon: UserCircleIcon,
        onClick: () => routeTo("dashboard.profil"),
    },
    {
        name: "Déconnexion",
        icon: ArrowLeftStartOnRectangleIcon,
        onClick: nothing,
    },
];

function nothing() {
    alert("TODO");
}

function routeTo(name) {
    router.push({ name });
}
</script>
