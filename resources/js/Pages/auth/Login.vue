<template>
  <div class="min-h-screen flex bg-base-100">

    <!-- ══════════════════════════════════════
         LEFT PANEL — Brand / Visual
    ══════════════════════════════════════ -->
    <div class="hidden lg:flex lg:w-[46%] xl:w-[44%] relative flex-col overflow-hidden">

      <!-- Background layers -->
      <div class="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary"></div>
      <div class="absolute inset-0 opacity-25"
           style="background-image: radial-gradient(circle, oklch(100% 0 0 / 0.3) 1.5px, transparent 1.5px);
                  background-size: 32px 32px;">
      </div>
      <!-- Blobs -->
      <div class="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl"
           style="background: oklch(76% 0.18 128 / 0.25);"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
           style="background: oklch(76% 0.18 128 / 0.15);"></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col h-full px-12 py-10">

        <!-- Logo -->
        <motion.a
          href="/"
          :initial="{ opacity: 0, y: -16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, ease: 'easeOut' }"
          class="flex items-center gap-3 w-fit group"
        >
          <div class="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg
                      group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
            <img :src="logoUrl" alt="CERIS HOA" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col leading-none gap-1">
            <span class="text-base font-bold text-white tracking-tight"
                  style="font-family:'Instrument Sans',sans-serif;">CERIS</span>
            <span class="text-[9px] font-bold tracking-[0.18em] uppercase text-white/60">
              Homeowners Association Inc.
            </span>
          </div>
        </motion.a>

        <!-- Center content -->
        <div class="flex-1 flex flex-col justify-center">
          <motion.div
            :initial="{ opacity: 0, y: 32 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }"
          >
            <p class="text-xs font-bold uppercase tracking-[0.15em] text-white/60 mb-3">
              Resident Portal
            </p>
            <h1 class="text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
                style="font-family:'Instrument Sans',sans-serif;">
              Welcome<br/>back,<br/>neighbor.
            </h1>
            <p class="text-sm text-white/65 leading-relaxed max-w-xs">
              Log in to access your account, pay dues, view announcements, and stay connected with your community.
            </p>
          </motion.div>

          <!-- Feature list -->
          <motion.ul
            :initial="{ opacity: 0, y: 24 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.35, ease: 'easeOut' }"
            class="mt-10 space-y-3"
          >
            <li v-for="(feat, i) in features" :key="feat"
                class="flex items-center gap-3">
              <motion.span
                :initial="{ scale: 0, opacity: 0 }"
                :animate="{ scale: 1, opacity: 1 }"
                :transition="{ duration: 0.4, delay: 0.45 + i * 0.08, ease: 'backOut' }"
                class="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style="background: oklch(76% 0.18 128 / 0.3);"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </motion.span>
              <span class="text-sm text-white/75 font-medium">{{ feat }}</span>
            </li>
          </motion.ul>
        </div>

        <!-- Bottom tagline -->
        <motion.p
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.8 }"
          class="text-xs text-white/35 font-medium"
        >
          © {{ year }} CERIS Homeowners Association Inc.
        </motion.p>

      </div>
    </div>

    <!-- ══════════════════════════════════════
         RIGHT PANEL — Login Form
    ══════════════════════════════════════ -->
    <div class="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 relative overflow-hidden">

      <!-- Subtle bg blob -->
      <div class="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
           style="background: oklch(76% 0.18 128 / 0.06);"></div>

      <!-- Mobile logo (shown only on small screens) -->
      <motion.div
        :initial="{ opacity: 0, y: -16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
        class="flex lg:hidden items-center gap-3 mb-10"
      >
        <div class="w-10 h-10 rounded-2xl overflow-hidden border border-primary/20 shadow-md">
          <img :src="logoUrl" alt="CERIS HOA" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col leading-none gap-0.5">
          <span class="text-[15px] font-bold text-base-content tracking-tight"
                style="font-family:'Instrument Sans',sans-serif;">CERIS</span>
          <span class="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary">
            Homeowners Association Inc.
          </span>
        </div>
      </motion.div>

      <!-- Form container -->
      <div class="w-full max-w-md mx-auto lg:mx-0">

        <!-- Heading -->
        <motion.div
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
          class="mb-8"
        >
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
            Resident Login
          </p>
          <h2 class="text-3xl font-bold text-base-content tracking-tight"
              style="font-family:'Instrument Sans',sans-serif;">
            Sign in to your account
          </h2>
          <p class="text-sm text-base-content/55 mt-2 leading-relaxed">
            Welcome back! Enter your credentials to access the portal.
          </p>
        </motion.div>

        <!-- Form -->
        <motion.form
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2, ease: 'easeOut' }"
          @submit.prevent="handleLogin"
          class="space-y-5"
        >

          <!-- Email -->
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Email Address
            </label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@email.com"
                autocomplete="email"
                :class="[
                  'w-full pl-11 pr-4 py-3 text-sm bg-base-200/50 border rounded-xl',
                  'focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100',
                  'transition-all duration-200 placeholder:text-base-content/25',
                  errors.email ? 'border-error/60 bg-error/5' : 'border-base-300/60'
                ]"
              />
            </div>
            <p v-if="errors.email" class="mt-1.5 text-xs text-error font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ errors.email }}
            </p>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40">
                Password
              </label>
              <a href="/forgot-password"
                 class="text-xs font-semibold text-primary hover:text-secondary transition-colors duration-150">
                Forgot password?
              </a>
            </div>
            <div class="relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                autocomplete="current-password"
                :class="[
                  'w-full pl-11 pr-12 py-3 text-sm bg-base-200/50 border rounded-xl',
                  'focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100',
                  'transition-all duration-200 placeholder:text-base-content/25',
                  errors.password ? 'border-error/60 bg-error/5' : 'border-base-300/60'
                ]"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/35 hover:text-base-content/60 transition-colors"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
            <p v-if="errors.password" class="mt-1.5 text-xs text-error font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ errors.password }}
            </p>
          </div>

          <!-- Remember me -->
          <div class="flex items-center gap-3">
            <input
              id="remember"
              v-model="form.remember"
              type="checkbox"
              class="w-4 h-4 rounded border-base-300 text-primary focus:ring-primary/25 accent-primary cursor-pointer"
            />
            <label for="remember" class="text-sm text-base-content/60 cursor-pointer select-none">
              Keep me signed in
            </label>
          </div>

          <!-- Global error -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-if="errors.general"
                 class="flex items-start gap-3 p-4 bg-error/8 border border-error/20 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-error shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p class="text-sm text-error font-medium">{{ errors.general }}</p>
            </div>
          </Transition>

          <!-- Submit -->
          <motion.button
            type="submit"
            :whileHover="{ scale: 1.02 }"
            :whileTap="{ scale: 0.98 }"
            :disabled="loading"
            class="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-content
                   font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer
                   disabled:opacity-60 disabled:cursor-not-allowed"
            style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
          >
            <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
            </svg>
            {{ loading ? 'Signing in…' : 'Sign In' }}
          </motion.button>

        </motion.form>

        <!-- Divider -->
        <motion.div
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.45 }"
          class="flex items-center gap-4 my-7"
        >
          <div class="flex-1 h-px bg-base-300/60"></div>
          <span class="text-xs text-base-content/35 font-medium">or</span>
          <div class="flex-1 h-px bg-base-300/60"></div>
        </motion.div>

        <!-- Register CTA -->
        <motion.div
          :initial="{ opacity: 0, y: 12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.5 }"
          class="text-center"
        >
          <p class="text-sm text-base-content/55">
            Not yet a registered resident?
          </p>
          <a
            href="/register"
            class="inline-flex items-center gap-1.5 mt-3 px-6 py-3 border border-base-300 bg-base-100
                   text-sm font-semibold text-base-content/75 rounded-2xl w-full justify-center
                   hover:bg-base-200 hover:border-primary/30 hover:text-base-content transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            Create an Account
          </a>
        </motion.div>

        <!-- Back to home -->
        <motion.div
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.6 }"
          class="mt-6 text-center"
        >
          <a href="/" class="inline-flex items-center gap-1.5 text-xs text-base-content/40 hover:text-primary transition-colors duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to CERIS HOA home
          </a>
        </motion.div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { motion } from 'motion-v'
import { router } from '@inertiajs/vue3'
import { logoUrl } from '@/constants/branding'

const year = new Date().getFullYear()

const showPassword = ref(false)
const loading      = ref(false)

const form = reactive({
  email:    '',
  password: '',
  remember: false,
})

const errors = reactive({
  email:    '',
  password: '',
  general:  '',
})

const features = [
  'View and pay your association dues',
  'Read announcements & meeting minutes',
  'Submit concerns and service requests',
  'Access documents and community forms',
]

function clearErrors() {
  errors.email    = ''
  errors.password = ''
  errors.general  = ''
}

function validate() {
  clearErrors()
  let valid = true

  if (!form.email) {
    errors.email = 'Email address is required.'
    valid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required.'
    valid = false
  }

  return valid
}

async function handleLogin() {
  if (!validate()) return
  loading.value = true

  router.post('/login', form, {
    onError: (err) => {
      if (err.email)    errors.email    = err.email
      if (err.password) errors.password = err.password
      errors.general = err.message || 'Invalid credentials. Please try again.'
    },
    onFinish: () => {
      loading.value = false
    },
  })
}
</script>
