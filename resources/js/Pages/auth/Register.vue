<template>
  <div class="min-h-screen flex bg-base-100">

    <!-- ══════════════════════════════════════
         LEFT PANEL — Brand / Visual
    ══════════════════════════════════════ -->
    <div class="hidden lg:flex lg:w-[46%] xl:w-[44%] relative flex-col overflow-hidden">

      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary"></div>
      <div class="absolute inset-0 opacity-25"
           style="background-image: radial-gradient(circle, oklch(100% 0 0 / 0.3) 1.5px, transparent 1.5px);
                  background-size: 32px 32px;">
      </div>
      <!-- Blobs -->
      <div class="absolute -top-24 -right-16 w-80 h-80 rounded-full blur-3xl"
           style="background: oklch(76% 0.18 128 / 0.25);"></div>
      <div class="absolute bottom-16 -left-16 w-72 h-72 rounded-full blur-3xl"
           style="background: oklch(76% 0.18 128 / 0.18);"></div>

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
              Join the Community
            </p>
            <h1 class="text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
                style="font-family:'Instrument Sans',sans-serif;">
              Become part<br/>of CERIS<br/>today.
            </h1>
            <p class="text-sm text-white/65 leading-relaxed max-w-xs">
              Register your household to access the full Resident Portal — from dues payment to community announcements.
            </p>
          </motion.div>

          <!-- Step indicator -->
          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.35 }"
            class="mt-10"
          >
            <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-white/45 mb-4">
              Registration steps
            </p>
            <ol class="space-y-3">
              <li v-for="(step, i) in steps" :key="step.label"
                  class="flex items-start gap-3">
                <motion.span
                  :initial="{ scale: 0, opacity: 0 }"
                  :animate="{ scale: 1, opacity: 1 }"
                  :transition="{ duration: 0.4, delay: 0.45 + i * 0.09, ease: 'backOut' }"
                  class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5"
                  :style="stepBadgeStyle(i)"
                >
                  <svg v-if="currentStep > i" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span v-else>{{ i + 1 }}</span>
                </motion.span>
                <div>
                  <p class="text-sm font-semibold"
                     :class="currentStep === i ? 'text-white' : 'text-white/55'">
                    {{ step.label }}
                  </p>
                  <p class="text-xs mt-0.5"
                     :class="currentStep === i ? 'text-white/65' : 'text-white/35'">
                    {{ step.desc }}
                  </p>
                </div>
              </li>
            </ol>
          </motion.div>
        </div>

        <motion.p
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.85 }"
          class="text-xs text-white/35 font-medium"
        >
          © {{ year }} CERIS Homeowners Association Inc.
        </motion.p>

      </div>
    </div>

    <!-- ══════════════════════════════════════
         RIGHT PANEL — Registration Form
    ══════════════════════════════════════ -->
    <div class="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 relative overflow-y-auto">

      <div class="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
           style="background: oklch(76% 0.18 128 / 0.06);"></div>

      <!-- Mobile logo -->
      <motion.div
        :initial="{ opacity: 0, y: -16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
        class="flex lg:hidden items-center gap-3 mb-8"
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

      <div class="w-full max-w-lg mx-auto lg:mx-0">

        <!-- Header + progress bar -->
        <motion.div
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
          class="mb-8"
        >
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
            New Resident Registration
          </p>
          <h2 class="text-3xl font-bold text-base-content tracking-tight"
              style="font-family:'Instrument Sans',sans-serif;">
            {{ steps[currentStep].label }}
          </h2>
          <p class="text-sm text-base-content/55 mt-2">
            Step {{ currentStep + 1 }} of {{ steps.length }} — {{ steps[currentStep].desc }}
          </p>

          <!-- Progress bar -->
          <div class="mt-5 flex gap-1.5">
            <div
              v-for="(step, i) in steps" :key="i"
              class="h-1.5 flex-1 rounded-full transition-all duration-500"
              :class="i <= currentStep ? 'bg-primary' : 'bg-base-300'"
            ></div>
          </div>
        </motion.div>

        <!-- ── STEP 1: Personal Info ── -->
        <motion.div
          v-if="currentStep === 0"
          key="step1"
          :initial="{ opacity: 0, x: 24 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.45, ease: 'easeOut' }"
          class="space-y-5"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
                First Name
              </label>
              <input
                v-model="form.first_name"
                type="text"
                placeholder="Juan"
                autocomplete="given-name"
                :class="inputClass(errors.first_name)"
              />
              <FieldError :message="errors.first_name" />
            </div>
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
                Last Name
              </label>
              <input
                v-model="form.last_name"
                type="text"
                placeholder="dela Cruz"
                autocomplete="family-name"
                :class="inputClass(errors.last_name)"
              />
              <FieldError :message="errors.last_name" />
            </div>
          </div>

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
                placeholder="juan@email.com"
                autocomplete="email"
                :class="inputClass(errors.email, 'pl-11')"
              />
            </div>
            <FieldError :message="errors.email" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Mobile Number
            </label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+63 9XX XXX XXXX"
                autocomplete="tel"
                :class="inputClass(errors.phone, 'pl-11')"
              />
            </div>
            <FieldError :message="errors.phone" />
          </div>
        </motion.div>

        <!-- ── STEP 2: Household Info ── -->
        <motion.div
          v-else-if="currentStep === 1"
          key="step2"
          :initial="{ opacity: 0, x: 24 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.45, ease: 'easeOut' }"
          class="space-y-5"
        >
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Block & Lot Number
            </label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <input
                v-model="form.block_lot"
                type="text"
                placeholder="e.g. Block 5, Lot 12"
                :class="inputClass(errors.block_lot, 'pl-11')"
              />
            </div>
            <FieldError :message="errors.block_lot" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Street / Phase
            </label>
            <input
              v-model="form.street"
              type="text"
              placeholder="e.g. Sampaguita Street, Phase 2"
              :class="inputClass(errors.street)"
            />
            <FieldError :message="errors.street" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Household Type
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label
                v-for="type in householdTypes" :key="type.value"
                :for="`type-${type.value}`"
                class="flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all duration-200"
                :class="form.household_type === type.value
                  ? 'border-primary bg-primary/8 shadow-sm'
                  : 'border-base-300/60 hover:border-primary/30 hover:bg-base-200/50'"
              >
                <input
                  :id="`type-${type.value}`"
                  type="radio"
                  :value="type.value"
                  v-model="form.household_type"
                  class="hidden"
                />
                <div class="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0"
                     :class="form.household_type === type.value ? 'bg-primary/15' : 'bg-base-200'">
                  {{ type.icon }}
                </div>
                <span class="text-sm font-semibold text-base-content/75">{{ type.label }}</span>
              </label>
            </div>
            <FieldError :message="errors.household_type" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Number of Occupants
            </label>
            <select
              v-model="form.occupants"
              :class="inputClass(errors.occupants)"
            >
              <option value="" disabled>Select number of occupants</option>
              <option v-for="n in 10" :key="n" :value="n">{{ n }} {{ n === 1 ? 'person' : 'people' }}</option>
              <option value="10+">More than 10</option>
            </select>
            <FieldError :message="errors.occupants" />
          </div>
        </motion.div>

        <!-- ── STEP 3: Account Security ── -->
        <motion.div
          v-else-if="currentStep === 2"
          key="step3"
          :initial="{ opacity: 0, x: 24 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.45, ease: 'easeOut' }"
          class="space-y-5"
        >
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Password
            </label>
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
                placeholder="Create a strong password"
                autocomplete="new-password"
                :class="inputClass(errors.password, 'pl-11 pr-12')"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/35 hover:text-base-content/60 transition-colors"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>

            <!-- Password strength bar -->
            <div v-if="form.password" class="mt-2.5">
              <div class="flex gap-1 mb-1.5">
                <div v-for="i in 4" :key="i"
                     class="h-1 flex-1 rounded-full transition-all duration-400"
                     :class="i <= passwordStrength.score ? passwordStrength.color : 'bg-base-300'">
                </div>
              </div>
              <p class="text-xs font-medium" :class="passwordStrength.textColor">
                {{ passwordStrength.label }}
              </p>
            </div>
            <FieldError :message="errors.password" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
              Confirm Password
            </label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <input
                v-model="form.password_confirmation"
                :type="showConfirm ? 'text' : 'password'"
                placeholder="Re-enter your password"
                autocomplete="new-password"
                :class="inputClass(errors.password_confirmation, 'pl-11 pr-12')"
              />
              <button
                type="button"
                @click="showConfirm = !showConfirm"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/35 hover:text-base-content/60 transition-colors"
              >
                <svg v-if="!showConfirm" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
            <FieldError :message="errors.password_confirmation" />
          </div>

          <!-- Terms -->
          <div class="p-4 bg-base-200/60 border border-base-300/50 rounded-2xl">
            <label class="flex items-start gap-3 cursor-pointer">
              <input
                v-model="form.agreed"
                type="checkbox"
                class="mt-0.5 w-4 h-4 rounded border-base-300 accent-primary cursor-pointer shrink-0"
              />
              <span class="text-sm text-base-content/65 leading-relaxed">
                I agree to the CERIS HOA
                <a href="/terms" class="text-primary font-semibold hover:text-secondary transition-colors">Terms of Use</a>
                and
                <a href="/privacy" class="text-primary font-semibold hover:text-secondary transition-colors">Privacy Policy</a>,
                and I confirm that I am a legitimate resident of CERIS Subdivision.
              </span>
            </label>
          </div>
          <FieldError :message="errors.agreed" />

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
        </motion.div>

        <!-- Navigation buttons -->
        <motion.div
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.25 }"
          class="flex gap-3 mt-8"
        >
          <!-- Back button -->
          <button
            v-if="currentStep > 0"
            type="button"
            @click="prevStep"
            class="flex items-center gap-2 px-5 py-3 border border-base-300 bg-base-100 text-sm
                   font-medium text-base-content/65 rounded-2xl hover:bg-base-200 hover:border-primary/30
                   transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>

          <!-- Next / Submit -->
          <motion.button
            v-if="currentStep < steps.length - 1"
            type="button"
            @click="nextStep"
            :whileHover="{ scale: 1.02 }"
            :whileTap="{ scale: 0.98 }"
            class="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-content
                   font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer"
            style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
          >
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </motion.button>

          <motion.button
            v-else
            type="button"
            @click="handleRegister"
            :disabled="loading"
            :whileHover="{ scale: 1.02 }"
            :whileTap="{ scale: 0.98 }"
            class="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-content
                   font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer
                   disabled:opacity-60 disabled:cursor-not-allowed"
            style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
          >
            <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            {{ loading ? 'Creating account…' : 'Create Account' }}
          </motion.button>
        </motion.div>

        <!-- Login link -->
        <motion.p
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.55 }"
          class="text-sm text-base-content/50 text-center mt-6"
        >
          Already have an account?
          <a href="/login" class="text-primary font-semibold hover:text-secondary transition-colors ml-1">
            Sign in →
          </a>
        </motion.p>

        <!-- Back to home -->
        <motion.div
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.65 }"
          class="mt-4 text-center"
        >
          <a href="/" class="inline-flex items-center gap-1.5 text-xs text-base-content/35 hover:text-primary transition-colors duration-150">
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
import { ref, reactive, computed } from 'vue'
import { motion } from 'motion-v'
import { router } from '@inertiajs/vue3'
import { logoUrl } from '@/constants/branding'

// ── Small inline error component ───────────────────
const FieldError = {
  props: ['message'],
  template: `
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0">
      <p v-if="message" class="mt-1.5 text-xs text-error font-medium flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        {{ message }}
      </p>
    </Transition>
  `,
}

// ── Data ────────────────────────────────────────────
const year         = new Date().getFullYear()
const currentStep  = ref(0)
const loading      = ref(false)
const showPassword = ref(false)
const showConfirm  = ref(false)

const steps = [
  { label: 'Personal Information', desc: 'Tell us about yourself'        },
  { label: 'Household Details',    desc: 'Your address & unit info'      },
  { label: 'Account Security',     desc: 'Set up your login credentials' },
]

const householdTypes = [
  { value: 'owner',  label: 'Homeowner', icon: '🏠' },
  { value: 'renter', label: 'Renter',    icon: '🔑' },
]

const form = reactive({
  first_name:            '',
  last_name:             '',
  email:                 '',
  phone:                 '',
  block_lot:             '',
  street:                '',
  household_type:        '',
  occupants:             '',
  password:              '',
  password_confirmation: '',
  agreed:                false,
})

const errors = reactive({
  first_name:            '',
  last_name:             '',
  email:                 '',
  phone:                 '',
  block_lot:             '',
  street:                '',
  household_type:        '',
  occupants:             '',
  password:              '',
  password_confirmation: '',
  agreed:                '',
  general:               '',
})

// ── Password strength ────────────────────────────────
const passwordStrength = computed(() => {
  const p = form.password
  if (!p) return { score: 0, label: '', color: '', textColor: '' }

  let score = 0
  if (p.length >= 8)           score++
  if (/[A-Z]/.test(p))         score++
  if (/[0-9]/.test(p))         score++
  if (/[^A-Za-z0-9]/.test(p)) score++

  const levels = [
    { label: 'Too weak',  color: 'bg-error',   textColor: 'text-error'   },
    { label: 'Weak',      color: 'bg-warning',  textColor: 'text-warning' },
    { label: 'Good',      color: 'bg-accent',   textColor: 'text-accent'  },
    { label: 'Strong',    color: 'bg-primary',  textColor: 'text-primary' },
  ]

  return { score, ...levels[score - 1] || levels[0] }
})

// ── Input class helper ───────────────────────────────
function inputClass(error, extra = '') {
  return [
    `w-full px-4 py-3 text-sm bg-base-200/50 border rounded-xl`,
    `focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100`,
    `transition-all duration-200 placeholder:text-base-content/25`,
    extra,
    error ? 'border-error/60 bg-error/5' : 'border-base-300/60',
  ].filter(Boolean).join(' ')
}

function stepBadgeStyle(index) {
  if (currentStep.value > index) {
    return {
      background: 'oklch(76% 0.18 128)',
      color: 'white',
    }
  }

  if (currentStep.value === index) {
    return {
      background: 'white',
      color: 'oklch(50% 0.13 152)',
    }
  }

  return {
    background: 'oklch(100% 0 0 / 0.15)',
    color: 'oklch(100% 0 0 / 0.5)',
  }
}

// ── Validation ───────────────────────────────────────
function clearErrors() {
  Object.keys(errors).forEach(k => errors[k] = '')
}

function validateStep(step) {
  clearErrors()
  let valid = true

  if (step === 0) {
    if (!form.first_name.trim()) { errors.first_name = 'First name is required.'; valid = false }
    if (!form.last_name.trim())  { errors.last_name  = 'Last name is required.';  valid = false }
    if (!form.email.trim()) {
      errors.email = 'Email address is required.'; valid = false
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Please enter a valid email address.'; valid = false
    }
    if (!form.phone.trim()) { errors.phone = 'Mobile number is required.'; valid = false }
  }

  if (step === 1) {
    if (!form.block_lot.trim())    { errors.block_lot     = 'Block & lot number is required.'; valid = false }
    if (!form.street.trim())       { errors.street        = 'Street / phase is required.';     valid = false }
    if (!form.household_type)      { errors.household_type = 'Please select a household type.'; valid = false }
    if (!form.occupants)           { errors.occupants     = 'Please select number of occupants.'; valid = false }
  }

  if (step === 2) {
    if (!form.password) {
      errors.password = 'Password is required.'; valid = false
    } else if (form.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.'; valid = false
    }
    if (!form.password_confirmation) {
      errors.password_confirmation = 'Please confirm your password.'; valid = false
    } else if (form.password !== form.password_confirmation) {
      errors.password_confirmation = 'Passwords do not match.'; valid = false
    }
    if (!form.agreed) {
      errors.agreed = 'You must agree to the terms and conditions.'; valid = false
    }
  }

  return valid
}

// ── Step navigation ──────────────────────────────────
function nextStep() {
  if (validateStep(currentStep.value)) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    clearErrors()
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// ── Submit ───────────────────────────────────────────
async function handleRegister() {
  if (!validateStep(2)) return
  loading.value = true

  router.post('/register', form, {
    onError: (err) => {
      Object.keys(err).forEach(k => {
        if (k in errors) errors[k] = Array.isArray(err[k]) ? err[k][0] : err[k]
      })
      errors.general = err.message || 'Registration failed. Please check your details.'
    },
    onFinish: () => {
      loading.value = false
    },
  })
}
</script>
