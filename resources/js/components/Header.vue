<script setup>
import { computed, ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { motion } from 'motion-v'
import { logoUrl } from '@/constants/branding'

const open = ref(false)
const page = usePage()

const userName = computed(() => page.props?.auth?.user?.name || 'Resident User')
const currentPath = computed(() => page.url?.split('?')[0] || '')
const initials = computed(() =>
  userName.value
    .split(' ')
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('')
)

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: 'M3 13h8V3H3v10z M13 21h8v-8h-8v8z M13 3v6h8V3h-8z M3 21h8v-6H3v6z' },
  { href: '/announcements', label: 'Announcements', icon: 'M4 5h16v14H4z M8 9h8 M8 13h6' },
  { href: '/dues', label: 'Dues & Billing', icon: 'M2 6h20v12H2z M2 10h20' },
  { href: '/documents', label: 'Documents', icon: 'M6 2h9l5 5v15H6z M15 2v5h5' },
  { href: '/service-requests', label: 'Service Requests', icon: 'M12 6v12 M6 12h12' },
  { href: '/amenity-bookings', label: 'Amenity Booking', icon: 'M3 8h18v13H3z M7 3v5 M17 3v5' },
  { href: '/visitor-passes', label: 'Visitor Passes', icon: 'M12 7a4 4 0 1 0 0.01 0 M4 21a8 8 0 0 1 16 0' },
]

function isActive(href) {
  if (href === '/dashboard') {
    return currentPath.value === '/dashboard' || currentPath.value === '/home'
  }

  return currentPath.value === href || currentPath.value.startsWith(`${href}/`)
}
</script>

<template>
  <header class="lg:h-screen lg:sticky lg:top-0 lg:border-r lg:border-base-300/50 lg:bg-base-100 lg:w-72 lg:shrink-0">
    <motion.div
      :initial="{ opacity: 0, y: -16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.45, ease: 'easeOut' }"
      class="h-[4.5rem] border-b border-base-300/50 bg-base-100/96 backdrop-blur-md px-5 sm:px-8 lg:hidden flex items-center justify-between"
      style="box-shadow: 0 1px 16px 0 oklch(76% 0.18 128 / 0.07);"
    >
      <Link href="/dashboard" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-2xl overflow-hidden shadow-md border border-primary/20 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 bg-base-100 p-1">
          <img :src="logoUrl" alt="CERIS HOA" class="w-full h-full object-contain" />
        </div>
        <div class="leading-none">
          <p class="text-[14px] font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif; letter-spacing: -0.02em;">CERIS</p>
          <p class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary">Portal</p>
        </div>
      </Link>

      <button
        @click="open = !open"
        class="w-10 h-10 flex items-center justify-center rounded-xl text-base-content/70 hover:bg-base-200 transition-all duration-200"
        aria-label="Toggle sidebar"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </motion.div>

    <aside class="hidden lg:flex flex-col h-screen p-5 sm:p-6">
      <Link href="/dashboard" class="flex items-center gap-3 w-fit group mb-6">
        <div class="w-11 h-11 rounded-2xl overflow-hidden shadow-md border border-primary/20 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 bg-base-100 p-1">
          <img :src="logoUrl" alt="CERIS HOA" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col leading-none gap-1">
          <span class="text-[15px] font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif; letter-spacing: -0.02em;">CERIS</span>
          <span class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary">Resident Portal</span>
        </div>
      </Link>

      <div class="rounded-2xl border border-base-300/50 bg-base-200/60 p-3 mb-4">
        <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-2">Logged in as</p>
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-[11px] text-primary-content shadow-sm"
            style="background: linear-gradient(135deg, oklch(76% 0.18 128), oklch(50% 0.13 152));"
          >
            {{ initials }}
          </div>
          <p class="text-xs font-semibold text-base-content/70 truncate">{{ userName }}</p>
        </div>
      </div>

      <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-2 px-2">Navigation</p>
      <nav class="space-y-1.5">
        <Link
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="group flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200"
          :class="isActive(link.href)
            ? 'bg-primary/12 text-secondary border border-primary/20'
            : 'text-base-content/65 hover:text-secondary hover:bg-base-200 border border-transparent'"
        >
          <span class="w-8 h-8 rounded-xl flex items-center justify-center" :class="isActive(link.href) ? 'bg-primary/15' : 'bg-base-200 group-hover:bg-primary/10'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path :d="link.icon" />
            </svg>
          </span>
          <span>{{ link.label }}</span>
        </Link>
      </nav>

      <div class="mt-auto pt-5 border-t border-base-300/50 space-y-2">
        <Link href="/dues" class="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm hover:brightness-105 transition-all duration-200" style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);">
          Pay Dues
        </Link>
        <Link href="/profile" class="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-base-100 border border-base-300 text-base-content/70 font-medium rounded-2xl text-sm hover:bg-base-200 hover:border-primary/30 transition-all duration-200">
          My Profile
        </Link>
      </div>
    </aside>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="lg:hidden fixed inset-0 z-[70]" @click.self="open = false">
        <div class="absolute inset-0 bg-base-content/35 backdrop-blur-sm"></div>
        <aside class="relative z-10 w-[18rem] h-full bg-base-100 border-r border-base-300/50 p-5">
          <div class="flex items-center justify-between mb-5">
            <Link href="/dashboard" class="flex items-center gap-3 group" @click="open = false">
              <div class="w-10 h-10 rounded-2xl overflow-hidden shadow-md border border-primary/20 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 bg-base-100 p-1">
                <img :src="logoUrl" alt="CERIS HOA" class="w-full h-full object-contain" />
              </div>
              <div class="leading-none">
                <p class="text-[14px] font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif; letter-spacing: -0.02em;">CERIS</p>
                <p class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary">Resident Portal</p>
              </div>
            </Link>
            <button @click="open = false" class="w-9 h-9 rounded-xl hover:bg-base-200 text-base-content/60 transition-all duration-200" aria-label="Close sidebar">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-2 px-2">Navigation</p>
          <nav class="space-y-1.5 mb-5">
            <Link
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="open = false"
              class="group flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200"
              :class="isActive(link.href)
                ? 'bg-primary/12 text-secondary border border-primary/20'
                : 'text-base-content/65 hover:text-secondary hover:bg-base-200 border border-transparent'"
            >
              <span class="w-8 h-8 rounded-xl flex items-center justify-center" :class="isActive(link.href) ? 'bg-primary/15' : 'bg-base-200 group-hover:bg-primary/10'">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path :d="link.icon" />
                </svg>
              </span>
              <span>{{ link.label }}</span>
            </Link>
          </nav>

          <div class="border-t border-base-300/50 pt-4 space-y-2">
            <Link href="/dues" @click="open = false" class="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm hover:brightness-105 transition-all duration-200">
              Pay Dues
            </Link>
            <Link href="/profile" @click="open = false" class="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-base-100 border border-base-300 text-base-content/70 font-medium rounded-2xl text-sm hover:bg-base-200 hover:border-primary/30 transition-all duration-200">
              My Profile
            </Link>
          </div>
        </aside>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
</style>
