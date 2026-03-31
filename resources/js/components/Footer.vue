<template>
    <footer class="bg-base-200 border-t border-base-300/50">

        <!-- Main body -->
        <div class="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-10">

                <!-- Brand -->
                <div class="md:col-span-4">
                    <a href="/" class="flex items-center gap-3 mb-5 w-fit group">
                        <div class="w-12 h-12 rounded-2xl overflow-hidden shadow-md border border-primary/20 group-hover:shadow-lg transition-shadow bg-base-100 p-1">
                            <img :src="logoUrl" alt="CERIS" class="w-full h-full object-contain" />
                        </div>
                        <div class="flex flex-col leading-none gap-1">
                            <span class="text-base font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif; letter-spacing:-0.02em;">CERIS</span>
                            <span class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary">Homeowners Association Inc.</span>
                        </div>
                    </a>

                    <p class="text-sm text-base-content/60 leading-relaxed max-w-xs mb-6">
                        Building a safe, vibrant, and closely-knit neighborhood — where every home is part of something bigger.
                    </p>

                    <div class="flex gap-2">
                        <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label"
                           class="w-9 h-9 rounded-xl bg-base-300/60 hover:bg-primary/15 hover:text-primary text-base-content/45 flex items-center justify-center transition-all duration-200"
                           v-html="social.icon">
                        </a>
                    </div>
                </div>

                <!-- Navigate -->
                <div class="md:col-span-2">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-5">Navigate</h4>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.href">
                            <a :href="link.href" class="text-sm text-base-content/60 hover:text-primary transition-colors duration-150">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Residents -->
                <div class="md:col-span-2">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-5">Residents</h4>
                    <ul class="space-y-3">
                        <li v-for="link in residentLinks" :key="link.href">
                            <a :href="link.href" class="text-sm text-base-content/60 hover:text-primary transition-colors duration-150">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="md:col-span-4">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-5">Get in Touch</h4>
                    <ul class="space-y-4">
                        <li v-for="info in contactDetails" :key="info.label" class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">
                                {{ info.icon }}
                            </div>
                            <div>
                                <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-0.5">{{ info.label }}</p>
                                <component
                                    :is="info.href ? 'a' : 'span'"
                                    :href="info.href || undefined"
                                    class="text-sm text-base-content/65"
                                    :class="info.href ? 'hover:text-primary transition-colors' : ''"
                                >{{ info.value }}</component>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-base-300/50">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p class="text-xs text-base-content/35">
                    © {{ year }} CERIS Homeowners Association Inc. All rights reserved.
                </p>
                <div class="flex gap-5">
                    <a href="/privacy" class="text-xs text-base-content/35 hover:text-primary transition-colors">Privacy Policy</a>
                    <span class="text-base-content/20 text-xs select-none">·</span>
                    <a href="/terms"   class="text-xs text-base-content/35 hover:text-primary transition-colors">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { logoUrl } from '@/constants/branding'

const year = new Date().getFullYear()

const socials = [
    {
        label: 'Facebook',
        href: '#',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
    },
    {
        label: 'Email Newsletter',
        href: '#',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    },
    {
        label: 'Community',
        href: '#',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
]

const quickLinks = [
    { href: '#announcements', label: 'Announcements'    },
    { href: '#amenities',     label: 'Amenities'        },
    { href: '/board-and-governance', label: 'Board & Governance' },
    { href: '/contact',       label: 'Contact Us'       },
]

const residentLinks = [
    { href: '/login',     label: 'Resident Portal' },
    { href: '/dues',      label: 'Pay Dues'         },
    { href: '/documents', label: 'Documents & Forms' },
    { href: '/reports',   label: 'Submit a Concern'  },
    { href: '/directory', label: 'Community Directory' },
]

const contactDetails = [
    { icon: '📍', label: 'Address',      value: 'Canlubang, Calamba City, Laguna', href: null },
    { icon: '✉️',  label: 'Email',        value: 'admin@cerishoa.com',  href: 'mailto:admin@cerishoa.com' },
    { icon: '📞', label: 'Phone',        value: '(046) 123-4567',      href: 'tel:+63461234567' },
    { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri · 8:00 AM – 5:00 PM', href: null },
]
</script>
