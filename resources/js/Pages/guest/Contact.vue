<template>
    <App>
  <div class="overflow-x-hidden">
    <section class="relative overflow-hidden bg-base-100 pt-14 pb-16">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/6 via-base-100 to-secondary/8 pointer-events-none"></div>
      <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
           style="background: oklch(76% 0.18 128 / 0.1);"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
           style="background: oklch(50% 0.13 152 / 0.08);"></div>
      <div class="absolute inset-0 pointer-events-none opacity-30"
           style="background-image: radial-gradient(circle, oklch(76% 0.18 128 / 0.25) 1.5px, transparent 1.5px); background-size: 36px 36px;"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.nav
          :initial="{ opacity: 0, y: -12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, ease: 'easeOut' }"
          class="flex items-center gap-2 text-xs text-base-content/45 font-medium mb-8"
          aria-label="Breadcrumb"
        >
          <a href="/" class="hover:text-primary transition-colors duration-150">Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-base-content/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
          <span class="text-base-content/65">Contact</span>
        </motion.nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <motion.p
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, ease: 'easeOut' }"
              class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3"
            >
              Reach the HOA Office
            </motion.p>

            <motion.h1
              :initial="{ opacity: 0, y: 28 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }"
              class="text-4xl sm:text-5xl font-bold text-base-content tracking-tight leading-[1.1] mb-5"
              style="font-family:'Instrument Sans',sans-serif;"
            >
              Contact
              <span class="relative inline-block text-primary">
                CERIS HOA
                <svg class="absolute -bottom-1 left-0 w-full overflow-visible" viewBox="0 0 180 10" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M2 7 C36 3, 90 2, 178 6"
                    stroke="oklch(76% 0.18 128 / 0.5)"
                    stroke-width="3"
                    stroke-linecap="round"
                    fill="none"
                    :initial="{ pathLength: 0 }"
                    :animate="{ pathLength: 1 }"
                    :transition="{ duration: 0.9, delay: 0.65, ease: 'easeInOut' }"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.55, delay: 0.2, ease: 'easeOut' }"
              class="text-base text-base-content/60 leading-relaxed max-w-md"
            >
              Have questions about dues, permits, maintenance, or services? Reach out through any of the channels below.
            </motion.p>
          </div>

          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.55, delay: 0.3, ease: 'easeOut' }"
            class="flex flex-wrap gap-4 lg:justify-end"
          >
            <div v-for="stat in pageStats" :key="stat.label"
                 class="bg-base-100 border border-base-200 rounded-2xl px-5 py-4 text-center shadow-sm min-w-[7rem]">
              <p class="text-2xl font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">
                {{ stat.value }}
              </p>
              <p class="text-[11px] font-medium text-base-content/45 mt-0.5 uppercase tracking-wider">
                {{ stat.label }}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <div class="sticky top-[4.5rem] z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300/50"
         style="box-shadow: 0 2px 16px oklch(76% 0.18 128 / 0.06);">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div class="flex flex-wrap items-center gap-2">
          <a
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.href || '#contacts'"
            class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all duration-200"
            :class="item.href
              ? 'bg-base-100 text-base-content/65 border-base-300/60 hover:border-primary/30 hover:text-base-content'
              : 'bg-base-200/60 text-base-content/55 border-base-300/40 cursor-default'"
          >
            <span class="text-primary">{{ item.short }}</span>
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>

    <section id="contacts" class="py-10 pb-20 bg-base-200/40">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div class="lg:col-span-2 xl:col-span-3">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FadeIn v-for="(item, i) in contactInfo" :key="item.label" :delay="i * 0.05">
                <div class="bg-base-100 border border-base-200 rounded-2xl p-6 h-full">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <component :is="item.icon" class="w-5 h-5" />
                  </div>
                  <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-2">{{ item.label }}</p>
                  <component
                    :is="item.href ? 'a' : 'p'"
                    :href="item.href || undefined"
                    class="text-sm font-semibold text-base-content/75 leading-relaxed"
                    :class="item.href ? 'hover:text-primary transition-colors duration-150' : ''"
                  >
                    {{ item.value }}
                  </component>
                  <p v-if="item.note" class="text-xs text-base-content/45 mt-3">{{ item.note }}</p>
                </div>
              </FadeIn>
            </div>

            <FadeIn :delay="0.12" class="mt-8">
              <form @submit.prevent="submitForm" class="bg-base-100 border border-base-200 rounded-3xl p-6 sm:p-8">
                <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Send a Message</p>
                <h2 class="text-2xl font-bold text-base-content tracking-tight mb-6" style="font-family:'Instrument Sans',sans-serif;">
                  HOA Contact Form
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">Name</label>
                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Your full name"
                      class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60 rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40
                             focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/25"
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">Email</label>
                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="you@email.com"
                      class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60 rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40
                             focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/25"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">Message</label>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    placeholder="Tell us about your concern or question"
                    class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60 rounded-xl resize-y
                           focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40
                           focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/25"
                  ></textarea>
                </div>

                <div class="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                  <motion.button
                    type="submit"
                    :whileHover="{ scale: 1.02 }"
                    :whileTap="{ scale: 0.98 }"
                    class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-content
                           font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer"
                    style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
                  >
                    Submit Inquiry
                  </motion.button>
                  <p class="text-xs text-base-content/45">This demo form uses local state only, consistent with the Home page behavior.</p>
                </div>
              </form>
            </FadeIn>
          </div>

          <aside class="lg:col-span-1 space-y-6">
            <FadeIn :delay="0.1">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Office Hours</h3>
                <ul class="space-y-3">
                  <li v-for="hour in officeHours" :key="hour.day" class="flex items-center justify-between text-sm">
                    <span class="text-base-content/60">{{ hour.day }}</span>
                    <span class="text-base-content/75 font-semibold">{{ hour.time }}</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn :delay="0.16">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Common Concerns</h3>
                <ul class="space-y-3">
                  <li v-for="item in commonConcerns" :key="item" class="text-xs text-base-content/60 leading-relaxed flex items-start gap-2">
                    <span class="text-primary mt-0.5">-</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn :delay="0.22">
              <div class="relative overflow-hidden bg-gradient-to-br from-secondary to-primary rounded-2xl p-6">
                <div class="absolute inset-0 opacity-20"
                     style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px;"></div>
                <div class="relative z-10">
                  <h3 class="text-sm font-bold text-white mb-2" style="font-family:'Instrument Sans',sans-serif;">Need Faster Support?</h3>
                  <p class="text-xs text-white/70 leading-relaxed mb-4">
                    For urgent matters, call the HOA office directly during office hours.
                  </p>
                  <a
                    href="tel:+63461234567"
                    class="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white text-secondary text-xs font-bold rounded-xl hover:brightness-[1.02] transition-all duration-200 shadow-md"
                  >
                    Call (046) 123-4567
                  </a>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </section>
  </div>
    </App>
</template>

<script setup>
import { reactive } from 'vue'
import { motion } from 'motion-v'
import FadeIn from '@/components/FadeIn.vue'
import App from '@/Pages/layouts/guest/App.vue'


const pageStats = [
  { value: '4', label: 'Contact Channels' },
  { value: '5', label: 'Weekday Support' },
  { value: '1', label: 'Main Office' },
]

const contactInfo = [
  {
    label: 'Address',
    short: 'ADR',
    value: 'Canlubang, Calamba City, Laguna',
    href: null,
    icon: {
      template: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
    },
    note: 'Main HOA Office Location',
  },
  {
    label: 'Email',
    short: 'EML',
    value: 'admin@cerishoa.com',
    href: 'mailto:admin@cerishoa.com',
    icon: {
      template: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,7 12,13 21,7"/></svg>'
    },
    note: 'General inquiries and support',
  },
  {
    label: 'Phone',
    short: 'TEL',
    value: '(046) 123-4567',
    href: 'tel:+63461234567',
    icon: {
      template: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.23-1.23a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92z"/></svg>'
    },
    note: 'Hotline during office schedule',
  },
  {
    label: 'Office Hours',
    short: 'HRS',
    value: 'Mon - Fri · 8:00 AM - 5:00 PM',
    href: null,
    icon: {
      template: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>'
    },
    note: 'Closed on weekends and holidays',
  },
]

const officeHours = [
  { day: 'Monday', time: '8:00 AM - 5:00 PM' },
  { day: 'Tuesday', time: '8:00 AM - 5:00 PM' },
  { day: 'Wednesday', time: '8:00 AM - 5:00 PM' },
  { day: 'Thursday', time: '8:00 AM - 5:00 PM' },
  { day: 'Friday', time: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

const commonConcerns = [
  'Association dues and payment verification',
  'Amenity booking and clubhouse use',
  'Incident and security reporting',
  'Waste collection and maintenance requests',
]

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function submitForm() {
  // Matches existing Home page behavior until backend endpoint is added.
  console.log('Submitted:', { ...form })
}
</script>

