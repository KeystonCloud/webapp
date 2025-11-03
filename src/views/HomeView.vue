<template>
    <div class="">
        <div
            class="relative isolate overflow-hidden bg-linear-to-b from-indigo-900/20 pt-14 py-24 sm:py-32"
        >
            <HeroSection />
        </div>

        <div class="mb-24 sm:mb-32">
            <FeaturesSection />
        </div>

        <div class="bg-gray-950">
            <CTAFallbackSection />
        </div>
    </div>
</template>

<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import CTAFallbackSection from "@/components/home/CTAFallbackSection.vue";
</script>
