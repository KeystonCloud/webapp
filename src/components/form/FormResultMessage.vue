<template>
    <ErrorMessage :show="showError" :message="errorMessage" />
    <SuccessMessage :show="showSuccess" :message="successMessage" />
</template>

<script setup>
import ErrorMessage from "./ErrorMessage.vue";
import SuccessMessage from "./SuccessMessage.vue";

defineProps({
    showError: {
        type: Boolean,
        default: null,
    },
    showSuccess: {
        type: Boolean,
        default: null,
    },
    successMessage: {
        type: String,
        default: "Opération réussie.",
    },
    errorMessage: {
        type: String,
        default: "Opération échouée.",
    },
});
</script>
