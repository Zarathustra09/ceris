<template>
    <App>
  <div class="overflow-x-hidden">

    <!-- Hero -->
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
          <span class="text-base-content/65">Amenities</span>
        </motion.nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <motion.p
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, ease: 'easeOut' }"
              class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3"
            >
              Community Facilities
            </motion.p>

            <motion.h1
              :initial="{ opacity: 0, y: 28 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }"
              class="text-4xl sm:text-5xl font-bold text-base-content tracking-tight leading-[1.1] mb-5"
              style="font-family:'Instrument Sans',sans-serif;"
            >
              Amenities
              <span class="relative inline-block text-primary">
                Directory
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
              Explore all shared spaces and services available in CERIS, including schedules, usage notes, and access details.
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

    <!-- Filter bar -->
    <div class="sticky top-[4.5rem] z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300/50"
         style="box-shadow: 0 2px 16px oklch(76% 0.18 128 / 0.06);">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div class="relative flex-1 max-w-sm">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search amenities..."
              class="w-full pl-11 pr-4 py-2.5 text-sm bg-base-200/60 border border-base-300/60 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40
                     focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/30"
            />
          </div>

          <div class="flex items-center gap-2 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-hide">
            <button
              v-for="cat in categories"
              :key="cat.value"
              @click="activeCategory = cat.value"
              class="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold
                     whitespace-nowrap transition-all duration-200 border shrink-0"
              :class="activeCategory === cat.value
                ? 'bg-primary text-primary-content border-primary shadow-sm'
                : 'bg-base-100 text-base-content/60 border-base-300/60 hover:border-primary/30 hover:text-base-content'"
            >
              <span>{{ cat.icon }}</span>
              {{ cat.label }}
            </button>
          </div>

          <div class="hidden sm:flex items-center gap-2 ml-auto shrink-0">
            <span class="text-xs text-base-content/40 font-medium">Sort:</span>
            <select
              v-model="sortOrder"
              class="text-xs font-medium text-base-content/65 bg-transparent border-none
                     focus:outline-none cursor-pointer pr-4"
            >
              <option value="popular">Most popular</option>
              <option value="name">Name A-Z</option>
              <option value="hours">Longest hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured amenity -->
    <section v-if="featuredAmenity && activeCategory === 'all' && !searchQuery" class="py-10 bg-base-100">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div class="relative bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/20 rounded-3xl p-7 sm:p-9 overflow-hidden">
            <div class="absolute top-5 right-5 flex items-center gap-1.5 bg-base-100 border border-primary/20 rounded-full px-3 py-1.5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>
              </svg>
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Featured</span>
            </div>

            <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                 style="background: oklch(76% 0.18 128 / 0.12);"></div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              <div class="lg:col-span-2">
                <div class="flex items-center gap-2 mb-4 flex-wrap">
                  <span class="badge badge-primary badge-sm rounded-full font-semibold">{{ featuredAmenity.category }}</span>
                  <span :class="statusPill(featuredAmenity.status)" class="badge badge-sm rounded-full font-semibold">
                    {{ featuredAmenity.status }}
                  </span>
                  <span class="text-xs text-base-content/40 font-medium">{{ featuredAmenity.hours }}</span>
                </div>

                <h2 class="text-2xl sm:text-3xl font-bold text-base-content tracking-tight mb-3 leading-snug"
                    style="font-family:'Instrument Sans',sans-serif;">
                  {{ featuredAmenity.name }}
                </h2>

                <p class="text-sm text-base-content/65 leading-relaxed max-w-xl mb-6">
                  {{ featuredAmenity.description }}
                </p>

                <motion.button
                  @click="openModal(featuredAmenity)"
                  :whileHover="{ scale: 1.02 }"
                  :whileTap="{ scale: 0.98 }"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer"
                  style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  View Amenity Details
                </motion.button>
              </div>

              <div class="hidden lg:flex items-center justify-center">
                <div class="w-32 h-32 rounded-3xl bg-primary/15 flex items-center justify-center text-6xl shadow-inner">
                  {{ featuredAmenity.icon }}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- Main content -->
    <section class="py-10 pb-20 bg-base-200/40">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div class="lg:col-span-2 xl:col-span-3">
            <FadeIn>
              <div class="flex items-center justify-between mb-6">
                <p class="text-sm text-base-content/50 font-medium">
                  <span class="text-base-content font-semibold">{{ filteredAmenities.length }}</span>
                  amenit{{ filteredAmenities.length === 1 ? 'y' : 'ies' }}
                  <span v-if="activeCategory !== 'all'">
                    in <span class="text-primary font-semibold">{{ activeCategoryLabel }}</span>
                  </span>
                  <span v-if="searchQuery">
                    for "<span class="text-primary font-semibold">{{ searchQuery }}</span>"
                  </span>
                </p>
                <button
                  v-if="activeCategory !== 'all' || searchQuery"
                  @click="clearFilters"
                  class="text-xs font-semibold text-base-content/45 hover:text-error transition-colors duration-150"
                >
                  Clear filters x
                </button>
              </div>
            </FadeIn>

            <FadeIn v-if="filteredAmenities.length === 0">
              <div class="text-center py-20 bg-base-100 border border-base-200 rounded-3xl">
                <div class="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center text-3xl mx-auto mb-4">
                  🔎
                </div>
                <h3 class="text-base font-semibold text-base-content mb-2" style="font-family:'Instrument Sans',sans-serif;">
                  No amenities found
                </h3>
                <p class="text-sm text-base-content/50 max-w-xs mx-auto">
                  Try adjusting your search or category filter.
                </p>
                <button
                  @click="clearFilters"
                  class="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 border border-base-300 text-sm font-medium text-base-content/60 rounded-xl hover:bg-base-200 hover:border-primary/25 transition-all duration-200"
                >
                  Clear all filters
                </button>
              </div>
            </FadeIn>

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <FadeIn
                v-for="(item, i) in paginatedAmenities"
                :key="item.id"
                :delay="i * 0.06"
              >
                <article
                  @click="openModal(item)"
                  class="bg-base-100 border border-base-200 rounded-2xl p-6 cursor-pointer hover:border-primary/30 hover:shadow-md transition-all duration-200 group flex flex-col h-full"
                >
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div class="w-11 h-11 rounded-xl bg-base-200 group-hover:bg-primary/10 flex items-center justify-center text-xl shrink-0 transition-colors duration-200">
                      {{ item.icon }}
                    </div>
                    <span :class="statusPill(item.status)" class="badge badge-sm rounded-full font-semibold shrink-0 mt-0.5">
                      {{ item.status }}
                    </span>
                  </div>

                  <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-1.5">{{ item.category }}</p>
                  <h3 class="text-sm font-semibold text-base-content leading-snug mb-2 group-hover:text-secondary transition-colors duration-150"
                      style="font-family:'Instrument Sans',sans-serif;">
                    {{ item.name }}
                  </h3>
                  <p class="text-xs text-base-content/55 leading-relaxed flex-1 line-clamp-3">
                    {{ item.description }}
                  </p>

                  <div class="mt-5 pt-4 border-t border-base-200/70 space-y-1.5">
                    <p class="text-[11px] text-base-content/45 font-medium">Hours: {{ item.hours }}</p>
                    <p class="text-[11px] text-base-content/45 font-medium">Location: {{ item.location }}</p>
                  </div>
                </article>
              </FadeIn>
            </div>

            <FadeIn v-if="totalPages > 1" :delay="0.1" class="mt-10">
              <div class="flex items-center justify-center gap-2">
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="w-9 h-9 rounded-xl flex items-center justify-center border border-base-300 text-base-content/55 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>

                <button
                  v-for="page in totalPages"
                  :key="page"
                  @click="currentPage = page"
                  class="w-9 h-9 rounded-xl text-sm font-semibold transition-all duration-200 border"
                  :class="currentPage === page
                    ? 'bg-primary text-primary-content border-primary shadow-sm'
                    : 'bg-base-100 text-base-content/55 border-base-300/60 hover:border-primary/30 hover:text-primary'"
                >
                  {{ page }}
                </button>

                <button
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
                  class="w-9 h-9 rounded-xl flex items-center justify-center border border-base-300 text-base-content/55 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </FadeIn>
          </div>

          <aside class="lg:col-span-1 space-y-6">
            <FadeIn :delay="0.1">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Browse by Category</h3>
                <ul class="space-y-2">
                  <li v-for="cat in categoryCounts" :key="cat.value">
                    <button
                      @click="activeCategory = cat.value"
                      class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group"
                      :class="activeCategory === cat.value
                        ? 'bg-primary/10 text-secondary font-semibold'
                        : 'text-base-content/65 hover:bg-base-200/60 hover:text-base-content'"
                    >
                      <span class="flex items-center gap-2">
                        <span class="text-base">{{ cat.icon }}</span>
                        {{ cat.label }}
                      </span>
                      <span class="text-[11px] font-bold rounded-full px-2 py-0.5 transition-colors"
                            :class="activeCategory === cat.value
                              ? 'bg-primary text-primary-content'
                              : 'bg-base-200 text-base-content/45 group-hover:bg-base-300/60'">
                        {{ cat.count }}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn :delay="0.18">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Amenity Guidelines</h3>
                <ul class="space-y-3">
                  <li v-for="rule in amenityRules" :key="rule" class="text-xs text-base-content/60 leading-relaxed flex items-start gap-2">
                    <span class="text-primary mt-0.5">•</span>
                    <span>{{ rule }}</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn :delay="0.26">
              <div class="relative overflow-hidden bg-gradient-to-br from-secondary to-primary rounded-2xl p-6">
                <div class="absolute inset-0 opacity-20"
                     style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px;"></div>
                <div class="relative z-10">
                  <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4">
                    🗓
                  </div>
                  <h3 class="text-sm font-bold text-white mb-2" style="font-family:'Instrument Sans',sans-serif;">
                    Reserve a Facility
                  </h3>
                  <p class="text-xs text-white/70 leading-relaxed mb-4">
                    Need the clubhouse or function hall? Log in to submit a reservation request.
                  </p>
                  <a
                    href="/login"
                    class="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white text-secondary text-xs font-bold rounded-xl hover:brightness-[1.02] transition-all duration-200 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Request Reservation
                  </a>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </section>

    <!-- Detail modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="modalOpen"
          class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          @click.self="closeModal"
        >
          <div class="absolute inset-0 bg-base-content/40 backdrop-blur-sm"></div>

          <Transition
            enter-active-class="transition-all duration-350 ease-out"
            enter-from-class="opacity-0 translate-y-8 scale-[0.97]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 translate-y-4 scale-[0.98]"
          >
            <div
              v-if="activeAmenity"
              class="relative z-10 w-full sm:max-w-2xl bg-base-100 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div class="sticky top-0 bg-base-100/95 backdrop-blur-md border-b border-base-200/70 px-7 py-5 flex items-start justify-between gap-4 rounded-t-3xl z-10">
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="badge badge-primary badge-sm rounded-full font-semibold">{{ activeAmenity.category }}</span>
                  <span :class="statusPill(activeAmenity.status)" class="badge badge-sm rounded-full font-semibold">
                    {{ activeAmenity.status }}
                  </span>
                </div>
                <button
                  @click="closeModal"
                  class="w-8 h-8 rounded-xl bg-base-200 hover:bg-base-300/70 flex items-center justify-center text-base-content/55 hover:text-base-content transition-all duration-150 shrink-0"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <div class="px-7 pt-6 pb-8">
                <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mb-5">
                  {{ activeAmenity.icon }}
                </div>

                <h2 class="text-2xl font-bold text-base-content tracking-tight leading-snug mb-4"
                    style="font-family:'Instrument Sans',sans-serif;">
                  {{ activeAmenity.name }}
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div class="bg-base-200/60 border border-base-300/60 rounded-2xl p-4">
                    <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-1">Hours</p>
                    <p class="text-sm font-semibold text-base-content/75">{{ activeAmenity.hours }}</p>
                  </div>
                  <div class="bg-base-200/60 border border-base-300/60 rounded-2xl p-4">
                    <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35 mb-1">Location</p>
                    <p class="text-sm font-semibold text-base-content/75">{{ activeAmenity.location }}</p>
                  </div>
                </div>

                <div class="prose prose-sm max-w-none text-base-content/70 leading-relaxed space-y-4">
                  <p>{{ activeAmenity.description }}</p>
                </div>

                <div v-if="activeAmenity.rules?.length" class="mt-6 pt-6 border-t border-base-200/70">
                  <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">Usage Notes</h3>
                  <ul class="space-y-2">
                    <li v-for="rule in activeAmenity.rules" :key="rule" class="text-sm text-base-content/65 leading-relaxed flex items-start gap-2">
                      <span class="text-primary mt-0.5">•</span>
                      <span>{{ rule }}</span>
                    </li>
                  </ul>
                </div>

                <div class="mt-7">
                  <button
                    @click="closeModal"
                    class="w-full flex items-center justify-center gap-2 py-3 border border-base-300 text-sm font-medium text-base-content/60 rounded-2xl hover:bg-base-200 hover:border-primary/25 transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
    </App>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { motion } from 'motion-v'
import FadeIn from '@/components/FadeIn.vue'
import App from '@/Pages/layouts/guest/App.vue'

const modalOpen = ref(false)
const activeAmenity = ref(null)

function openModal(item) {
  activeAmenity.value = item
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modalOpen.value = false
  document.body.style.overflow = ''
}

const searchQuery = ref('')
const activeCategory = ref('all')
const sortOrder = ref('popular')
const currentPage = ref(1)
const perPage = 9

watch([searchQuery, activeCategory, sortOrder], () => {
  currentPage.value = 1
})

const categories = [
  { value: 'all', label: 'All', icon: '📋' },
  { value: 'Recreation', label: 'Recreation', icon: '🎯' },
  { value: 'Wellness', label: 'Wellness', icon: '🌿' },
  { value: 'Community', label: 'Community', icon: '🏛️' },
  { value: 'Services', label: 'Services', icon: '🧰' },
  { value: 'Security', label: 'Security', icon: '🛡️' },
]

const pageStats = [
  { value: '12', label: 'Amenities' },
  { value: '3', label: 'Bookable' },
  { value: '24/7', label: 'Security' },
]

const amenityRules = [
  'Observe operating hours and keep shared spaces clean after use.',
  'Children must be supervised by an adult in all active-use facilities.',
  'Commercial events and loud gatherings require prior HOA approval.',
  'Report damage or safety issues immediately through the resident portal.',
]

const allAmenities = ref([
  {
    id: 1,
    icon: '🏛️',
    name: 'Main Clubhouse',
    category: 'Community',
    status: 'Open',
    popularity: 98,
    hours: 'Daily - 8:00 AM to 9:00 PM',
    location: 'Central Park Zone',
    featured: true,
    description: 'A multipurpose clubhouse for meetings, small events, and neighborhood activities with air-conditioned indoor space and lounge seating.',
    rules: ['Reservation required for private use.', 'Maximum of 80 guests.', 'Clean-up must be completed within 30 minutes after event end.'],
  },
  {
    id: 2,
    icon: '🏊',
    name: 'Swimming Pool',
    category: 'Wellness',
    status: 'Open',
    popularity: 95,
    hours: 'Daily - 6:00 AM to 9:00 PM',
    location: 'Clubhouse Grounds',
    description: 'Community pool with dedicated lanes for lap swimming in the morning and family swim sessions in the afternoon.',
    rules: ['Proper swimwear is required.', 'No lifeguard after 7:00 PM.', 'Children below 12 must be accompanied.'],
  },
  {
    id: 3,
    icon: '🏀',
    name: 'Basketball Court',
    category: 'Recreation',
    status: 'Open',
    popularity: 90,
    hours: 'Daily - 6:00 AM to 10:00 PM',
    location: 'Sports Block A',
    description: 'Full-size covered court open for pick-up games, youth training, and HOA league schedules.',
    rules: ['Court slots are first-come, first-served unless booked.', 'Use non-marking athletic shoes.', 'Lights off at 10:00 PM.'],
  },
  {
    id: 4,
    icon: '🎾',
    name: 'Tennis Court',
    category: 'Recreation',
    status: 'Limited',
    popularity: 76,
    hours: 'Tue-Sun - 6:00 AM to 8:00 PM',
    location: 'Sports Block B',
    description: 'Single hard court for recreational doubles and skills practice. Advance booking is encouraged during weekends.',
    rules: ['Maximum 60-minute slot during peak hours.', 'Court closes every Monday for maintenance.'],
  },
  {
    id: 5,
    icon: '👟',
    name: 'Jogging Path',
    category: 'Wellness',
    status: 'Open',
    popularity: 88,
    hours: 'Open 24 hours',
    location: 'Perimeter Loop',
    description: 'Tree-lined loop path with distance markers and lighting for early morning and evening use.',
    rules: ['Cyclists should yield to runners and walkers.', 'Keep volume low in residential stretches.'],
  },
  {
    id: 6,
    icon: '🛝',
    name: 'Children Playground',
    category: 'Recreation',
    status: 'Open',
    popularity: 84,
    hours: 'Daily - 6:00 AM to 8:00 PM',
    location: 'Pocket Park East',
    description: 'Play zone with slides, swings, and shaded seating nearby for parents and guardians.',
    rules: ['Recommended for ages 4-12.', 'No food on play structures.'],
  },
  {
    id: 7,
    icon: '🎉',
    name: 'Function Hall',
    category: 'Community',
    status: 'Open',
    popularity: 92,
    hours: 'By reservation',
    location: 'Clubhouse Annex',
    description: 'Indoor hall for birthdays, assemblies, and private gatherings with projector and sound setup.',
    rules: ['Reservation and deposit required.', 'Events must end by 10:00 PM.'],
  },
  {
    id: 8,
    icon: '🧺',
    name: 'Laundry Kiosk',
    category: 'Services',
    status: 'Open',
    popularity: 70,
    hours: 'Daily - 7:00 AM to 8:00 PM',
    location: 'Commercial Strip',
    description: 'Self-service laundry station with coin-operated washers and dryers for quick household loads.',
    rules: ['Do not leave laundry unattended for extended periods.'],
  },
  {
    id: 9,
    icon: '♻️',
    name: 'Waste Segregation Point',
    category: 'Services',
    status: 'Open',
    popularity: 79,
    hours: 'Mon, Wed, Fri - 7:00 AM to 5:00 PM',
    location: 'Utility Zone',
    description: 'Central drop-off area for biodegradable, recyclable, and special waste categories.',
    rules: ['Follow posted segregation labels.', 'Bulk disposal needs HOA coordination.'],
  },
  {
    id: 10,
    icon: '🧑‍💻',
    name: 'Co-Work Nook',
    category: 'Community',
    status: 'Limited',
    popularity: 73,
    hours: 'Mon-Fri - 8:00 AM to 6:00 PM',
    location: 'Clubhouse 2F',
    description: 'Quiet mini work hub with shared desks, Wi-Fi, and charging points for remote workers.',
    rules: ['Seats are first-come, first-served.', 'Calls should be kept in meeting pod area.'],
  },
  {
    id: 11,
    icon: '🚓',
    name: 'Security Post',
    category: 'Security',
    status: 'Open',
    popularity: 100,
    hours: 'Open 24 hours',
    location: 'Main Gate and Rear Gate',
    description: 'Round-the-clock security assistance, visitor verification, and emergency dispatch coordination.',
    rules: ['Always register visitors in advance when possible.'],
  },
  {
    id: 12,
    icon: '🚧',
    name: 'Maintenance Desk',
    category: 'Services',
    status: 'Maintenance',
    popularity: 65,
    hours: 'Mon-Fri - 8:00 AM to 5:00 PM',
    location: 'Admin Office',
    description: 'Front desk for reporting repair requests, utility concerns, and infrastructure issues.',
    rules: ['Submit urgent concerns through hotline after office hours.'],
  },
])

const featuredAmenity = computed(() =>
  allAmenities.value.find(a => a.featured)
)

const filteredAmenities = computed(() => {
  let list = allAmenities.value.filter(a => !a.featured || activeCategory.value !== 'all' || searchQuery.value)

  if (activeCategory.value !== 'all') {
    list = list.filter(a => a.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.location.toLowerCase().includes(q)
    )
  }

  if (sortOrder.value === 'name') {
    return [...list].sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortOrder.value === 'hours') {
    return [...list].sort((a, b) => b.hours.length - a.hours.length)
  }

  return [...list].sort((a, b) => b.popularity - a.popularity)
})

const totalPages = computed(() => Math.ceil(filteredAmenities.value.length / perPage))

const paginatedAmenities = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredAmenities.value.slice(start, start + perPage)
})

const categoryCounts = computed(() =>
  categories.map(cat => ({
    ...cat,
    count: cat.value === 'all'
      ? allAmenities.value.length
      : allAmenities.value.filter(a => a.category === cat.value).length,
  }))
)

const activeCategoryLabel = computed(() =>
  categories.find(c => c.value === activeCategory.value)?.label ?? ''
)

function statusPill(status) {
  return {
    Open: 'badge-success',
    Limited: 'badge-warning',
    Maintenance: 'badge-error',
  }[status] ?? 'badge-ghost'
}

function clearFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
  currentPage.value = 1
}
</script>

