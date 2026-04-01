<!--
  CERIS design tokens used from `CERIS-DESIGN-SYSTEM.md`
  - Colors: primary, secondary, accent, base-100, base-200, base-300, base-content
  - Typography: Instrument Sans for H1/H2/H3, eyebrow label pattern, text opacity hierarchy
  - Spacing/Layout: max-w-7xl mx-auto px-6 sm:px-8, hero rhythm, alternating section backgrounds
  - Motion: page entrance (0.5), hero headline easing [0.22, 1, 0.36, 1], underline timing, primary CTA hover/tap behavior
-->
<template>
  <App>
    <div class="overflow-x-hidden">
      <section class="relative overflow-hidden bg-base-100 pt-14 pb-16" aria-labelledby="amenities-hero-heading">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/6 via-base-100 to-secondary/8 pointer-events-none"></div>
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none" :style="cerisStyles.heroPrimaryGlow"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" :style="cerisStyles.heroSecondaryGlow"></div>
        <div class="absolute inset-0 pointer-events-none opacity-30" :style="cerisStyles.dotGrid" aria-hidden="true"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <nav class="flex items-center gap-2 text-xs text-base-content/45 font-medium mb-8 transition-all will-change-transform" :style="heroMotion(0, 12, cerisMotion.pageEnter.duration, 'ease-out')" aria-label="Breadcrumb">
            <a href="/" class="hover:text-primary transition-colors duration-150">Home</a>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-base-content/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            <span class="text-base-content/65" aria-current="page">Amenities</span>
          </nav>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 transition-all will-change-transform" :style="heroMotion(0.05, 16, cerisMotion.pageEnter.duration, 'ease-out')">
                Community Facilities
              </p>

              <h1 id="amenities-hero-heading" class="text-4xl sm:text-5xl font-bold text-base-content tracking-tight leading-[1.1] mb-5 transition-all will-change-transform" :style="{ ...heroMotion(cerisMotion.heroHeading.delay, 28, cerisMotion.heroHeading.duration, 'cubic-bezier(0.22, 1, 0.36, 1)'), fontFamily: 'Instrument Sans, sans-serif' }">
                Amenities
                <span class="relative inline-block text-primary">
                  Directory
                  <svg class="absolute -bottom-1 left-0 w-full overflow-visible" viewBox="0 0 180 10" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path
                      d="M2 7 C36 3, 90 2, 178 6"
                      :stroke="cerisStyles.underlineStroke"
                      stroke-width="3"
                      stroke-linecap="round"
                      fill="none"
                      :style="underlineMotion"
                    />
                  </svg>
                </span>
              </h1>

              <p class="text-base text-base-content/60 leading-relaxed max-w-md mb-7 transition-all will-change-transform" :style="heroMotion(0.2, 20, 0.55, 'ease-out')">
                Explore all shared spaces and services available in CERIS, including schedules, usage notes, and access details designed around a warm, elevated community experience.
              </p>

              <div class="flex flex-wrap gap-4 transition-all will-change-transform" :style="heroMotion(0.3, 20, cerisMotion.heroCard.duration, 'ease-out')">
                <div v-for="stat in pageStats" :key="stat.label" class="bg-base-100 border border-base-200 rounded-2xl px-5 py-4 text-center shadow-sm min-w-[7rem]">
                  <p class="text-2xl font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">
                    {{ stat.value }}
                  </p>
                  <p class="text-[11px] font-medium text-base-content/45 mt-0.5 uppercase tracking-wider">
                    {{ stat.label }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative rounded-3xl overflow-hidden shadow-xl min-h-[22rem] transition-all will-change-transform" :style="heroMotion(0.24, 24, 0.8, 'cubic-bezier(0.22, 1, 0.36, 1)')">
              <picture class="block h-full">
                <source type="image/avif" :srcset="heroImage.avif" sizes="(min-width: 1024px) 50vw, 100vw" />
                <source type="image/webp" :srcset="heroImage.webp" sizes="(min-width: 1024px) 50vw, 100vw" />
                <img :src="heroImage.fallback" alt="Scenic residential amenities in CERIS with landscaped spaces and community facilities" class="w-full h-full object-cover" />
              </picture>
              <div class="absolute inset-0 bg-gradient-to-t from-base-content/60 via-base-content/10 to-transparent pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div class="inline-flex items-center gap-2 bg-white/12 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-white text-xs font-semibold mb-3">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  Image-first amenities experience
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2" style="font-family:'Instrument Sans',sans-serif;">
                  Spaces designed for everyday living
                </h2>
                <p class="text-sm text-white/75 leading-relaxed max-w-md">
                  From wellness and recreation to services and security, CERIS facilities are presented with richer visuals, clearer details, and smoother navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="sticky top-[4.5rem] z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300/50" :style="cerisStyles.stickyShadow">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div class="relative flex-1 max-w-sm">
              <label for="amenity-search" class="sr-only">Search amenities</label>
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <input
                id="amenity-search"
                v-model="searchQuery"
                type="search"
                placeholder="Search amenities..."
                class="w-full pl-11 pr-4 py-2.5 text-sm bg-base-200/60 border border-base-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/30"
              />
            </div>

            <div class="flex items-center gap-2 overflow-x-auto pb-0.5 sm:pb-0" role="group" aria-label="Filter amenities by category">
              <button
                v-for="cat in categories"
                :key="cat.value"
                type="button"
                @click="activeCategory = cat.value"
                :aria-pressed="activeCategory === cat.value"
                class="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0"
                :class="activeCategory === cat.value
                  ? 'bg-primary text-primary-content border-primary shadow-sm'
                  : 'bg-base-100 text-base-content/60 border-base-300/60 hover:border-primary/30 hover:text-base-content'"
              >
                <span aria-hidden="true">{{ cat.icon }}</span>
                {{ cat.label }}
              </button>
            </div>

            <div class="hidden sm:flex items-center gap-2 ml-auto shrink-0">
              <label for="amenity-sort" class="text-xs text-base-content/40 font-medium">Sort:</label>
              <select id="amenity-sort" v-model="sortOrder" class="text-xs font-medium text-base-content/65 bg-transparent border-none focus:outline-none cursor-pointer pr-4">
                <option value="popular">Most popular</option>
                <option value="name">Name A–Z</option>
                <option value="hours">Longest hours</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <section v-if="featuredAmenity && activeCategory === 'all' && !searchQuery" class="py-10 bg-base-100" aria-labelledby="featured-amenity-title">
        <div class="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div class="relative bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/20 rounded-3xl overflow-hidden">
              <div class="absolute top-5 right-5 flex items-center gap-1.5 bg-base-100 border border-primary/20 rounded-full px-3 py-1.5 shadow-sm z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>
                </svg>
                <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Featured</span>
              </div>

              <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none" :style="cerisStyles.featureGlow"></div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch relative z-10">
                <div class="p-7 sm:p-9 flex flex-col justify-center order-2 lg:order-1">
                  <div class="flex items-center gap-2 mb-4 flex-wrap">
                    <span class="badge badge-primary badge-sm rounded-full font-semibold">{{ featuredAmenity.category }}</span>
                    <span :class="statusPill(featuredAmenity.status)" class="badge badge-sm rounded-full font-semibold">
                      {{ featuredAmenity.status }}
                    </span>
                    <span class="text-xs text-base-content/40 font-medium">{{ featuredAmenity.hours }}</span>
                  </div>

                  <h2 id="featured-amenity-title" class="text-2xl sm:text-3xl font-bold text-base-content tracking-tight mb-3 leading-snug" style="font-family:'Instrument Sans',sans-serif;">
                    {{ featuredAmenity.name }}
                  </h2>

                  <p class="text-sm text-base-content/65 leading-relaxed max-w-xl mb-6">
                    {{ featuredAmenity.description }}
                  </p>

                  <button
                    type="button"
                    @click="openModal(featuredAmenity)"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-fit"
                    :style="cerisStyles.buttonShadow"
                    :aria-label="`View details for ${featuredAmenity.name}`"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    View Amenity Details
                  </button>
                </div>

                <div class="relative min-h-[18rem] lg:min-h-full order-1 lg:order-2">
                  <picture class="block h-full">
                    <source type="image/avif" :srcset="featuredAmenity.image.avif" sizes="(min-width: 1024px) 40vw, 100vw" />
                    <source type="image/webp" :srcset="featuredAmenity.image.webp" sizes="(min-width: 1024px) 40vw, 100vw" />
                    <img :src="featuredAmenity.image.fallback" :alt="featuredAmenity.alt" loading="lazy" class="w-full h-full object-cover" />
                  </picture>
                  <div class="absolute inset-0 bg-gradient-to-r from-base-content/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <main>
        <section class="py-10 pb-20 bg-base-200/40" aria-labelledby="amenities-grid-heading">
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
                    <button v-if="activeCategory !== 'all' || searchQuery" type="button" @click="clearFilters" class="text-xs font-semibold text-base-content/45 hover:text-error transition-colors duration-150">
                      Clear filters ×
                    </button>
                  </div>
                </FadeIn>

                <FadeIn v-if="filteredAmenities.length === 0">
                  <div class="text-center py-20 bg-base-100 border border-base-200 rounded-3xl">
                    <div class="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center text-3xl mx-auto mb-4" aria-hidden="true">
                      🔎
                    </div>
                    <h3 class="text-base font-semibold text-base-content mb-2" style="font-family:'Instrument Sans',sans-serif;">
                      No amenities found
                    </h3>
                    <p class="text-sm text-base-content/50 max-w-xs mx-auto">
                      Try adjusting your search or category filter.
                    </p>
                    <button type="button" @click="clearFilters" class="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 border border-base-300 text-sm font-medium text-base-content/60 rounded-xl hover:bg-base-200 hover:border-primary/25 transition-all duration-200">
                      Clear all filters
                    </button>
                  </div>
                </FadeIn>

                <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  <FadeIn v-for="(item, i) in paginatedAmenities" :key="item.id" :delay="i * 0.06">
                    <article class="bg-base-100 border border-base-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 h-full">
                      <button
                        type="button"
                        @click="openModal(item)"
                        class="w-full text-left group flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-inset"
                        :aria-labelledby="`amenity-title-${item.id}`"
                        :aria-describedby="`amenity-meta-${item.id}`"
                      >
                        <div class="relative h-48 overflow-hidden bg-base-200/60">
                          <picture class="block h-full">
                            <source type="image/avif" :srcset="item.image.avif" sizes="(min-width: 1280px) 24vw, (min-width: 640px) 40vw, 100vw" />
                            <source type="image/webp" :srcset="item.image.webp" sizes="(min-width: 1280px) 24vw, (min-width: 640px) 40vw, 100vw" />
                            <img :src="item.image.fallback" :alt="item.alt" loading="lazy" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </picture>
                          <div class="absolute inset-0 bg-gradient-to-t from-base-content/30 via-transparent to-transparent pointer-events-none"></div>
                          <span :class="statusPill(item.status)" class="badge badge-sm rounded-full font-semibold absolute top-3 right-3">
                            {{ item.status }}
                          </span>
                        </div>

                        <div class="p-6 flex flex-col flex-1">
                          <div class="flex items-start justify-between gap-3 mb-4">
                            <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-colors duration-200" :class="accentClass(item.accentToken)">
                              {{ item.icon }}
                            </div>
                            <span class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mt-2">{{ item.category }}</span>
                          </div>

                          <h3 :id="`amenity-title-${item.id}`" class="text-sm font-semibold text-base-content leading-snug mb-2 group-hover:text-secondary transition-colors duration-150" style="font-family:'Instrument Sans',sans-serif;">
                            {{ item.name }}
                          </h3>

                          <p class="text-sm text-base-content/60 leading-relaxed flex-1 line-clamp-3">
                            {{ item.description }}
                          </p>

                          <div :id="`amenity-meta-${item.id}`" class="mt-5 pt-4 border-t border-base-200/70 space-y-1.5">
                            <p class="text-[11px] text-base-content/45 font-medium">Hours: {{ item.hours }}</p>
                            <p class="text-[11px] text-base-content/45 font-medium">Location: {{ item.location }}</p>
                          </div>
                        </div>
                      </button>
                    </article>
                  </FadeIn>
                </div>

                <FadeIn v-if="totalPages > 1" :delay="0.1" class="mt-10">
                  <nav class="flex items-center justify-center gap-2" aria-label="Amenities pagination">
                    <button type="button" @click="currentPage--" :disabled="currentPage === 1" aria-label="Previous page" class="w-9 h-9 rounded-xl flex items-center justify-center border border-base-300 text-base-content/55 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                    </button>

                    <button
                      v-for="page in totalPages"
                      :key="page"
                      type="button"
                      @click="currentPage = page"
                      :aria-current="currentPage === page ? 'page' : undefined"
                      :aria-label="`Page ${page}`"
                      class="w-9 h-9 rounded-xl text-sm font-semibold transition-all duration-200 border"
                      :class="currentPage === page
                        ? 'bg-primary text-primary-content border-primary shadow-sm'
                        : 'bg-base-100 text-base-content/55 border-base-300/60 hover:border-primary/30 hover:text-primary'"
                    >
                      {{ page }}
                    </button>

                    <button type="button" @click="currentPage++" :disabled="currentPage === totalPages" aria-label="Next page" class="w-9 h-9 rounded-xl flex items-center justify-center border border-base-300 text-base-content/55 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                  </nav>
                </FadeIn>
              </div>

              <aside class="lg:col-span-1 space-y-6" aria-label="Amenities sidebar">
                <FadeIn :delay="0.1">
                  <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                    <h2 id="amenities-grid-heading" class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
                      Browse by Category
                    </h2>
                    <ul class="space-y-2">
                      <li v-for="cat in categoryCounts" :key="cat.value">
                        <button
                          type="button"
                          @click="activeCategory = cat.value"
                          :aria-pressed="activeCategory === cat.value"
                          class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group"
                          :class="activeCategory === cat.value
                            ? 'bg-primary/10 text-secondary font-semibold'
                            : 'text-base-content/65 hover:bg-base-200/60 hover:text-base-content'"
                        >
                          <span class="flex items-center gap-2">
                            <span class="text-base" aria-hidden="true">{{ cat.icon }}</span>
                            {{ cat.label }}
                          </span>
                          <span class="text-[11px] font-bold rounded-full px-2 py-0.5 transition-colors" :class="activeCategory === cat.value
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
                    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px;" aria-hidden="true"></div>
                    <div class="relative z-10">
                      <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4" aria-hidden="true">
                        🗓
                      </div>
                      <h3 class="text-sm font-bold text-white mb-2" style="font-family:'Instrument Sans',sans-serif;">
                        Reserve a Facility
                      </h3>
                      <p class="text-xs text-white/70 leading-relaxed mb-4">
                        Need the clubhouse or function hall? Log in to submit a reservation request.
                      </p>
                      <a href="/login" class="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white text-secondary text-xs font-bold rounded-xl hover:brightness-[1.02] transition-all duration-200 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
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
      </main>

      <Teleport to="body">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="modalOpen" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6" @click.self="closeModal" role="dialog" aria-modal="true" :aria-labelledby="activeAmenity ? `amenity-modal-title-${activeAmenity.id}` : undefined">
            <div class="absolute inset-0 bg-base-content/40 backdrop-blur-sm"></div>

            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-8 scale-[0.97]"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 translate-y-4 scale-[0.98]"
            >
              <div v-if="activeAmenity && activeGalleryImage" class="relative z-10 w-full sm:max-w-3xl bg-base-100 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
                <div class="relative h-60 sm:h-72 overflow-hidden">
                  <picture class="block h-full">
                    <source type="image/avif" :srcset="activeGalleryImage.image.avif" sizes="(min-width: 640px) 60vw, 100vw" />
                    <source type="image/webp" :srcset="activeGalleryImage.image.webp" sizes="(min-width: 640px) 60vw, 100vw" />
                    <img :src="activeGalleryImage.image.fallback" :alt="activeGalleryImage.alt" loading="lazy" class="w-full h-full object-cover" />
                  </picture>
                  <div class="absolute inset-0 bg-gradient-to-t from-base-content/65 via-base-content/10 to-transparent pointer-events-none"></div>
                  <div v-if="activeGallery.length > 1" class="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                    <button type="button" @click="previousGalleryImage" class="pointer-events-auto w-10 h-10 rounded-full bg-base-100/20 backdrop-blur-sm hover:bg-base-100/35 flex items-center justify-center text-white transition-all duration-150" aria-label="Previous gallery image">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                    </button>
                    <button type="button" @click="nextGalleryImage" class="pointer-events-auto w-10 h-10 rounded-full bg-base-100/20 backdrop-blur-sm hover:bg-base-100/35 flex items-center justify-center text-white transition-all duration-150" aria-label="Next gallery image">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                  </div>
                  <button ref="closeButtonRef" type="button" @click="closeModal" class="absolute top-4 right-4 w-9 h-9 rounded-xl bg-base-100/20 backdrop-blur-sm hover:bg-base-100/35 flex items-center justify-center text-white transition-all duration-150" aria-label="Close amenity dialog">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                  <div class="absolute left-6 right-6 bottom-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <div class="flex flex-wrap items-center gap-2 mb-3">
                        <span class="badge badge-primary badge-sm rounded-full font-semibold">{{ activeAmenity.category }}</span>
                        <span :class="statusPill(activeAmenity.status)" class="badge badge-sm rounded-full font-semibold">{{ activeAmenity.status }}</span>
                      </div>
                      <h2 :id="`amenity-modal-title-${activeAmenity.id}`" class="text-2xl sm:text-3xl font-bold text-white tracking-tight" style="font-family:'Instrument Sans',sans-serif;">
                        {{ activeAmenity.name }}
                      </h2>
                    </div>
                    <div class="hidden sm:flex w-14 h-14 rounded-2xl items-center justify-center text-2xl bg-white/15 backdrop-blur-sm text-white">
                      {{ activeAmenity.icon }}
                    </div>
                  </div>
                </div>

                <div class="px-7 pt-6 pb-8">
                  <div v-if="activeGallery.length > 1" class="mb-6">
                    <div class="flex items-center justify-between gap-3 mb-3">
                      <div>
                        <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-1">Photo Gallery</p>
                        <p class="text-xs text-base-content/45">
                          Image {{ activeGalleryIndex + 1 }} of {{ activeGallery.length }} · {{ activeGalleryImage.label }}
                        </p>
                      </div>
                      <p class="text-[11px] text-base-content/40 hidden sm:block">Use ← and → keys to browse</p>
                    </div>

                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      <button
                        v-for="(galleryItem, index) in activeGallery"
                        :key="`${activeAmenity.id}-${galleryItem.id}-${index}`"
                        type="button"
                        @click="selectGalleryImage(index)"
                        :aria-pressed="activeGalleryIndex === index"
                        :aria-label="`View ${galleryItem.label}`"
                        class="relative rounded-2xl overflow-hidden border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/25"
                        :class="activeGalleryIndex === index
                          ? 'border-primary shadow-md ring-2 ring-primary/20'
                          : 'border-base-200 hover:border-primary/30'"
                      >
                        <picture class="block aspect-[4/3]">
                          <source type="image/avif" :srcset="galleryItem.image.avif" sizes="20vw" />
                          <source type="image/webp" :srcset="galleryItem.image.webp" sizes="20vw" />
                          <img :src="galleryItem.image.fallback" :alt="galleryItem.alt" loading="lazy" class="w-full h-full object-cover" />
                        </picture>
                        <div class="absolute inset-x-0 bottom-0 px-2 py-1.5 bg-gradient-to-t from-base-content/70 to-transparent text-left">
                          <span class="text-[10px] font-semibold text-white line-clamp-1">{{ galleryItem.label }}</span>
                        </div>
                      </button>
                    </div>
                  </div>

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

                  <p class="text-sm text-base-content/70 leading-relaxed">
                    {{ activeAmenity.description }}
                  </p>

                  <p v-if="activeGalleryImage.caption" class="mt-4 text-sm text-base-content/55 leading-relaxed bg-base-200/45 border border-base-300/50 rounded-2xl px-4 py-3">
                    {{ activeGalleryImage.caption }}
                  </p>

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
                    <button type="button" @click="closeModal" class="w-full flex items-center justify-center gap-2 py-3 border border-base-300 text-sm font-medium text-base-content/60 rounded-2xl hover:bg-base-200 hover:border-primary/25 transition-all duration-200">
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import FadeIn from '@/components/Fadein.vue'
import App from '@/Pages/layouts/guest/App.vue'
import amenities, { amenityRules, categories, pageStats } from '@/data/amenities'
import { amenityAccentClassMap, cerisMotion, cerisStyles } from '@/constants/designTokens'

const allAmenities = ref(amenities)
const modalOpen = ref(false)
const activeAmenity = ref(null)
const activeGalleryIndex = ref(0)
const closeButtonRef = ref(null)
const searchQuery = ref('')
const activeCategory = ref('all')
const sortOrder = ref('popular')
const currentPage = ref(1)
const perPage = 9
const heroVisible = ref(false)
const underlineVisible = ref(false)

const heroImage = {
  avif: [640, 960, 1400]
    .map(width => `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=${width}&q=80&fm=avif ${width}w`)
    .join(', '),
  webp: [640, 960, 1400]
    .map(width => `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=${width}&q=80&fm=webp ${width}w`)
    .join(', '),
  fallback: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
}

const featuredAmenity = computed(() => allAmenities.value.find(item => item.featured))

const activeGallery = computed(() => {
  if (!activeAmenity.value) {
    return []
  }

  if (activeAmenity.value.gallery?.length) {
    return activeAmenity.value.gallery
  }

  return [{
    id: `${activeAmenity.value.id}-default`,
    label: activeAmenity.value.name,
    caption: activeAmenity.value.description,
    alt: activeAmenity.value.alt,
    image: activeAmenity.value.image,
  }]
})

const activeGalleryImage = computed(() => activeGallery.value[activeGalleryIndex.value] ?? null)

const filteredAmenities = computed(() => {
  let list = allAmenities.value.filter(item => !item.featured || activeCategory.value !== 'all' || searchQuery.value)

  if (activeCategory.value !== 'all') {
    list = list.filter(item => item.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.trim().toLowerCase()
    list = list.filter(item =>
      item.name.toLowerCase().includes(query)
      || item.category.toLowerCase().includes(query)
      || item.description.toLowerCase().includes(query)
      || item.location.toLowerCase().includes(query)
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
  categories.map(category => ({
    ...category,
    count: category.value === 'all'
      ? allAmenities.value.length
      : allAmenities.value.filter(item => item.category === category.value).length,
  })),
)

const activeCategoryLabel = computed(() =>
  categories.find(category => category.value === activeCategory.value)?.label ?? '',
)

watch([searchQuery, activeCategory, sortOrder], () => {
  currentPage.value = 1
})

watch(modalOpen, async value => {
  document.body.style.overflow = value ? 'hidden' : ''

  if (value) {
    await nextTick()
    closeButtonRef.value?.focus()
  }
})

function heroMotion(delay, distance, duration, easing) {
  return {
    opacity: heroVisible.value ? 1 : 0,
    transform: heroVisible.value ? 'translateY(0)' : `translateY(${distance}px)`,
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
    transitionTimingFunction: easing,
  }
}

const underlineMotion = computed(() => ({
  strokeDasharray: 220,
  strokeDashoffset: underlineVisible.value ? 0 : 220,
  transition: `stroke-dashoffset ${cerisMotion.heroUnderline.duration}s ${cerisMotion.heroUnderline.ease} ${cerisMotion.heroUnderline.delay}s`,
}))

function accentClass(token) {
  return amenityAccentClassMap[token] ?? 'bg-primary/10 text-primary'
}

function openModal(item) {
  activeAmenity.value = item
  activeGalleryIndex.value = 0
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

function selectGalleryImage(index) {
  activeGalleryIndex.value = index
}

function previousGalleryImage() {
  if (!activeGallery.value.length) {
    return
  }

  activeGalleryIndex.value = (activeGalleryIndex.value - 1 + activeGallery.value.length) % activeGallery.value.length
}

function nextGalleryImage() {
  if (!activeGallery.value.length) {
    return
  }

  activeGalleryIndex.value = (activeGalleryIndex.value + 1) % activeGallery.value.length
}

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

function handleKeydown(event) {
  if (event.key === 'Escape' && modalOpen.value) {
    closeModal()
    return
  }

  if (!modalOpen.value || activeGallery.value.length <= 1) {
    return
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    previousGalleryImage()
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextGalleryImage()
  }
}

onMounted(() => {
  requestAnimationFrame(() => {
    heroVisible.value = true
    underlineVisible.value = true
  })

  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

