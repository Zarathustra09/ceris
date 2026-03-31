<script setup>
import { logoUrl } from '@/constants/branding'

const year = new Date().getFullYear()

const systemLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/dues', label: 'Dues & Billing' },
  { href: '/documents', label: 'Documents Center' },
]

const residentLinks = [
  { href: '/service-requests', label: 'Service Requests' },
  { href: '/amenity-bookings', label: 'Amenity Booking' },
  { href: '/visitor-passes', label: 'Visitor Passes' },
  { href: '/community-directory', label: 'Community Directory' },
]

const supportLinks = [
  { href: '/help-center', label: 'Help Center' },
  { href: '/contact-admin', label: 'Contact Administration' },
  { href: '/incident-report', label: 'Submit Incident Report' },
]

const contactDetails = [
  { icon: '📍', label: 'Address', value: 'Canlubang, Calamba City, Laguna', href: null },
  { icon: '✉️', label: 'Email', value: 'admin@cerishoa.com', href: 'mailto:admin@cerishoa.com' },
  { icon: '📞', label: 'Hotline', value: '(046) 123-4567', href: 'tel:+63461234567' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon-Fri | 8:00 AM - 5:00 PM', href: null },
]
</script>

<template>
  <footer class="bg-base-200 border-t border-base-300/50">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div class="md:col-span-4">
          <a href="/dashboard" class="flex items-center gap-3 mb-5 w-fit group">
            <div class="w-12 h-12 rounded-2xl overflow-hidden shadow-md border border-primary/20 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 bg-base-100 p-1">
              <img :src="logoUrl" alt="CERIS" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col leading-none gap-1">
              <span class="text-base font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif; letter-spacing:-0.02em;">CERIS</span>
              <span class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary">Homeowners Association Inc.</span>
            </div>
          </a>

          <p class="text-sm text-base-content/60 leading-relaxed max-w-xs mb-6">
            One resident portal for dues, requests, announcements, and neighborhood coordination.
          </p>

          <div class="flex gap-2">
            <a href="/notifications" class="w-9 h-9 rounded-xl bg-base-300/60 hover:bg-primary/15 hover:text-primary text-base-content/45 flex items-center justify-center transition-all duration-200" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M9 17a3 3 0 0 0 6 0" />
              </svg>
            </a>
            <a href="/help-center" class="w-9 h-9 rounded-xl bg-base-300/60 hover:bg-primary/15 hover:text-primary text-base-content/45 flex items-center justify-center transition-all duration-200" aria-label="Help Center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </a>
            <a href="/profile" class="w-9 h-9 rounded-xl bg-base-300/60 hover:bg-primary/15 hover:text-primary text-base-content/45 flex items-center justify-center transition-all duration-200" aria-label="Profile">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
          </div>
        </div>

        <div class="md:col-span-2">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-5">System</h4>
          <ul class="space-y-3">
            <li v-for="link in systemLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-base-content/60 hover:text-primary transition-all duration-200">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-5">Residents</h4>
          <ul class="space-y-3">
            <li v-for="link in residentLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-base-content/60 hover:text-primary transition-all duration-200">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-5">Support</h4>
          <ul class="space-y-3 mb-5">
            <li v-for="link in supportLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-base-content/60 hover:text-primary transition-all duration-200">{{ link.label }}</a>
            </li>
          </ul>

          <ul class="space-y-3">
            <li v-for="info in contactDetails" :key="info.label" class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-sm">{{ info.icon }}</div>
              <div>
                <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-0.5">{{ info.label }}</p>
                <component
                  :is="info.href ? 'a' : 'span'"
                  :href="info.href || undefined"
                  class="text-sm text-base-content/65"
                  :class="info.href ? 'hover:text-primary transition-all duration-200' : ''"
                >
                  {{ info.value }}
                </component>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-base-300/50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-base-content/35">© {{ year }} CERIS Homeowners Association Inc. All rights reserved.</p>
        <div class="flex gap-5">
          <a href="/privacy" class="text-xs text-base-content/35 hover:text-primary transition-all duration-200">Privacy Policy</a>
          <span class="text-base-content/20 text-xs select-none">·</span>
          <a href="/terms" class="text-xs text-base-content/35 hover:text-primary transition-all duration-200">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
