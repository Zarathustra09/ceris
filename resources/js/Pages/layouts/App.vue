<script setup>
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-base-100 text-base-content antialiased" data-theme="light">
    <div class="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] min-h-screen">
      <AppHeader />
      <div class="min-w-0 flex flex-col min-h-screen">
        <main class="flex-1">
          <slot />
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
