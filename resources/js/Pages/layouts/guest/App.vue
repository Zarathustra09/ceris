<template>
    <div id="app" class="min-h-screen flex flex-col bg-base-100 text-base-content antialiased" data-theme="light">
        <AppHeader />
        <main class="flex-1">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '@/components/guest/Header.vue'
import AppFooter from '@/components/guest/Footer.vue'
</script>
