<template>
    <header>
        <!-- Announcement strip -->
        <motion.div
            :initial="{ opacity: 0, y: -24 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="bg-secondary text-secondary-content text-center text-xs py-2.5 px-4 font-medium hidden sm:block"
            style="letter-spacing: 0.015em;"
        >
            🌿&nbsp; Q2 Association Dues deadline:&nbsp;<strong>April 30, 2025</strong>
            <a href="/dues" class="ml-2 underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity">
                Pay via Resident Portal →
            </a>
        </motion.div>

        <!-- Navbar -->
        <motion.nav
            :initial="{ opacity: 0, y: -16 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1, ease: 'easeOut' }"
            class="sticky top-0 z-50 bg-base-100/96 backdrop-blur-md border-b border-base-300/50"
            style="box-shadow: 0 1px 16px 0 oklch(76% 0.18 128 / 0.07);"
        >
            <div class="max-w-7xl mx-auto px-5 sm:px-8 h-[4.5rem] flex items-center justify-between gap-6">

                <!-- Logo -->
                <a href="/" class="flex items-center gap-3 shrink-0 group">
                    <div class="w-11 h-11 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-200 border border-primary/20 bg-base-100 p-1">
                        <img :src="logoUrl" alt="CERIS HOA" class="w-full h-full object-contain" />
                    </div>
                    <div class="flex flex-col leading-none gap-1">
            <span
                class="text-[15px] font-bold text-base-content"
                style="font-family:'Instrument Sans',sans-serif; letter-spacing: -0.02em;"
            >CERIS</span>
                        <span class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary hidden sm:block">
              Homeowners Association Inc.
            </span>
                    </div>
                </a>

                <!-- Desktop nav -->
                <ul class="hidden lg:flex items-center gap-0.5">
                    <li v-for="link in navLinks" :key="link.href">
                        <a
                            :href="link.href"
                            class="relative px-4 py-2.5 text-sm font-medium text-base-content/65 hover:text-secondary rounded-xl transition-colors duration-200 group block"
                        >
                            {{ link.label }}
                            <span class="absolute bottom-1 left-4 right-4 h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                </ul>

                <!-- Right CTA -->
                <div class="flex items-center gap-2 shrink-0">
                    <a
                        href="/login"
                        class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-base-content/65 hover:text-secondary rounded-xl hover:bg-base-200 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
                        </svg>
                        Log In
                    </a>
                    <a
                        href="/register"
                        class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-primary-content rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-105"
                        style="box-shadow: 0 4px 14px -2px oklch(76% 0.18 128 / 0.4);"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        Resident Portal
                    </a>

                    <!-- Hamburger -->
                    <button
                        @click="open = !open"
                        class="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-base-content/70 hover:bg-base-200 transition-colors"
                        aria-label="Toggle navigation"
                    >
                        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-3"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0 -translate-y-2"
            >
                <div v-if="open" class="lg:hidden border-t border-base-200 bg-base-100 px-5 pt-3 pb-6">
                    <ul class="space-y-0.5 mb-5">
                        <li v-for="link in navLinks" :key="link.href">
                            <a
                                :href="link.href"
                                @click="open = false"
                                class="block px-4 py-3 text-sm font-medium text-base-content/70 hover:text-secondary hover:bg-base-200 rounded-xl transition-colors"
                            >
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                    <div class="flex flex-col gap-2 border-t border-base-200 pt-4">
                        <a href="/login"    class="btn btn-ghost btn-sm rounded-xl justify-start">Log In</a>
                        <a href="/register" class="btn btn-primary btn-sm rounded-2xl gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            </svg>
                            Resident Portal
                        </a>
                    </div>
                </div>
            </Transition>
        </motion.nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from 'motion-v'

const open = ref(false)
const logoUrl = '/images/ceris-logo.jpg'
const navLinks = [
    { href: '#announcements', label: 'Announcements'    },
    { href: '#amenities',     label: 'Amenities'        },
    { href: '#board',         label: 'Board & Governance' },
    { href: '#contact',       label: 'Contact'          },
]
</script>
