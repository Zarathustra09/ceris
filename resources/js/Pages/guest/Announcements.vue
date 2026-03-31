<template>
  <div class="overflow-x-hidden">

    <!-- ═══════════════════════════════════════════
         PAGE HERO
    ═══════════════════════════════════════════ -->
    <section class="relative overflow-hidden bg-base-100 pt-14 pb-16">

      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/6 via-base-100 to-secondary/8 pointer-events-none"></div>
      <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
           style="background: oklch(76% 0.18 128 / 0.1);"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
           style="background: oklch(50% 0.13 152 / 0.08);"></div>
      <div class="absolute inset-0 pointer-events-none opacity-30"
           style="background-image: radial-gradient(circle, oklch(76% 0.18 128 / 0.25) 1.5px, transparent 1.5px);
                  background-size: 36px 36px;"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        <!-- Breadcrumb -->
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
          <span class="text-base-content/65">Announcements</span>
        </motion.nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <!-- Eyebrow -->
            <motion.p
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, ease: 'easeOut' }"
              class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3"
            >
              Community Updates
            </motion.p>

            <!-- Headline -->
            <motion.h1
              :initial="{ opacity: 0, y: 28 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }"
              class="text-4xl sm:text-5xl font-bold text-base-content tracking-tight leading-[1.1] mb-5"
              style="font-family:'Instrument Sans',sans-serif;"
            >
              Announcements
              <span class="relative inline-block text-primary">
                &amp; News
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
              Stay up to date with the latest news, notices, events, and reminders from the CERIS Homeowners Association.
            </motion.p>
          </div>

          <!-- Stats row -->
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

    <!-- ═══════════════════════════════════════════
         FILTER / SEARCH BAR
    ═══════════════════════════════════════════ -->
    <div class="sticky top-[4.5rem] z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300/50"
         style="box-shadow: 0 2px 16px oklch(76% 0.18 128 / 0.06);">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">

          <!-- Search input -->
          <div class="relative flex-1 max-w-sm">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/35 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search announcements…"
              class="w-full pl-11 pr-4 py-2.5 text-sm bg-base-200/60 border border-base-300/60 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40
                     focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/30"
            />
          </div>

          <!-- Category filter pills -->
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

          <!-- Sort -->
          <div class="hidden sm:flex items-center gap-2 ml-auto shrink-0">
            <span class="text-xs text-base-content/40 font-medium">Sort:</span>
            <select
              v-model="sortOrder"
              class="text-xs font-medium text-base-content/65 bg-transparent border-none
                     focus:outline-none cursor-pointer pr-4"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>

        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         PINNED / FEATURED ANNOUNCEMENT
    ═══════════════════════════════════════════ -->
    <section v-if="pinnedAnnouncement && activeCategory === 'all' && !searchQuery" class="py-10 bg-base-100">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">

        <FadeIn>
          <div class="relative bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/20
                      rounded-3xl p-7 sm:p-9 overflow-hidden">

            <!-- Pinned badge -->
            <div class="absolute top-5 right-5 flex items-center gap-1.5 bg-base-100 border border-primary/20
                        rounded-full px-3 py-1.5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4v8l2 2v2h-6v6l-1 1-1-1v-6H4v-2l2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"/>
              </svg>
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Pinned</span>
            </div>

            <!-- Decorative blob -->
            <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                 style="background: oklch(76% 0.18 128 / 0.12);"></div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              <div class="lg:col-span-2">
                <div class="flex items-center gap-2 mb-4 flex-wrap">
                  <span :class="badgeClass(pinnedAnnouncement.category)"
                        class="badge badge-sm rounded-full font-semibold">
                    {{ pinnedAnnouncement.category }}
                  </span>
                  <span class="text-xs text-base-content/40 font-medium">
                    {{ pinnedAnnouncement.date }}
                  </span>
                  <span class="text-xs text-base-content/35">·</span>
                  <span class="text-xs text-base-content/40 font-medium">
                    by {{ pinnedAnnouncement.author }}
                  </span>
                </div>

                <h2 class="text-2xl sm:text-3xl font-bold text-base-content tracking-tight mb-3 leading-snug"
                    style="font-family:'Instrument Sans',sans-serif;">
                  {{ pinnedAnnouncement.title }}
                </h2>

                <p class="text-sm text-base-content/65 leading-relaxed max-w-xl mb-6">
                  {{ pinnedAnnouncement.excerpt }}
                </p>

                <motion.button
                  @click="openModal(pinnedAnnouncement)"
                  :whileHover="{ scale: 1.02 }"
                  :whileTap="{ scale: 0.98 }"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content
                         font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer"
                  style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  Read Full Announcement
                </motion.button>
              </div>

              <!-- Icon / visual side -->
              <div class="hidden lg:flex items-center justify-center">
                <div class="w-32 h-32 rounded-3xl bg-primary/15 flex items-center justify-center text-6xl shadow-inner">
                  {{ pinnedAnnouncement.icon }}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         MAIN CONTENT: GRID + SIDEBAR
    ═══════════════════════════════════════════ -->
    <section class="py-10 pb-20 bg-base-200/40">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          <!-- ── Announcement cards grid ── -->
          <div class="lg:col-span-2 xl:col-span-3">

            <!-- Results count -->
            <FadeIn>
              <div class="flex items-center justify-between mb-6">
                <p class="text-sm text-base-content/50 font-medium">
                  <span class="text-base-content font-semibold">{{ filteredAnnouncements.length }}</span>
                  announcement{{ filteredAnnouncements.length !== 1 ? 's' : '' }}
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
                  Clear filters ×
                </button>
              </div>
            </FadeIn>

            <!-- Empty state -->
            <FadeIn v-if="filteredAnnouncements.length === 0">
              <div class="text-center py-20 bg-base-100 border border-base-200 rounded-3xl">
                <div class="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center text-3xl mx-auto mb-4">
                  🔍
                </div>
                <h3 class="text-base font-semibold text-base-content mb-2"
                    style="font-family:'Instrument Sans',sans-serif;">
                  No announcements found
                </h3>
                <p class="text-sm text-base-content/50 max-w-xs mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  @click="clearFilters"
                  class="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 border border-base-300
                         text-sm font-medium text-base-content/60 rounded-xl hover:bg-base-200
                         hover:border-primary/25 transition-all duration-200"
                >
                  Clear all filters
                </button>
              </div>
            </FadeIn>

            <!-- Card grid -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <FadeIn
                v-for="(item, i) in paginatedAnnouncements"
                :key="item.id"
                :delay="i * 0.06"
              >
                <article
                  @click="openModal(item)"
                  class="bg-base-100 border border-base-200 rounded-2xl p-6 cursor-pointer
                         hover:border-primary/30 hover:shadow-md transition-all duration-200 group
                         flex flex-col h-full"
                >
                  <!-- Card top -->
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div class="w-11 h-11 rounded-xl bg-base-200 group-hover:bg-primary/10
                                flex items-center justify-center text-xl shrink-0 transition-colors duration-200">
                      {{ item.icon }}
                    </div>
                    <span :class="badgeClass(item.category)"
                          class="badge badge-sm rounded-full font-semibold shrink-0 mt-0.5">
                      {{ item.category }}
                    </span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-sm font-semibold text-base-content leading-snug mb-2 group-hover:text-secondary
                             transition-colors duration-150"
                      style="font-family:'Instrument Sans',sans-serif;">
                    {{ item.title }}
                  </h3>

                  <!-- Excerpt -->
                  <p class="text-xs text-base-content/55 leading-relaxed flex-1 line-clamp-3">
                    {{ item.excerpt }}
                  </p>

                  <!-- Card footer -->
                  <div class="flex items-center justify-between mt-5 pt-4 border-t border-base-200/70">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold
                                  text-primary-content shrink-0"
                           style="background: linear-gradient(135deg, oklch(76% 0.18 128), oklch(50% 0.13 152));">
                        {{ item.author.split(' ').map(n => n[0]).slice(0,2).join('') }}
                      </div>
                      <span class="text-[11px] text-base-content/45 font-medium">{{ item.author }}</span>
                    </div>
                    <time class="text-[11px] text-base-content/40 font-medium">{{ item.date }}</time>
                  </div>
                </article>
              </FadeIn>
            </div>

            <!-- Pagination -->
            <FadeIn v-if="totalPages > 1" :delay="0.1" class="mt-10">
              <div class="flex items-center justify-center gap-2">
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="w-9 h-9 rounded-xl flex items-center justify-center border border-base-300
                         text-base-content/55 hover:border-primary/30 hover:text-primary
                         disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
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
                  class="w-9 h-9 rounded-xl flex items-center justify-center border border-base-300
                         text-base-content/55 hover:border-primary/30 hover:text-primary
                         disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </FadeIn>

          </div>

          <!-- ── Sidebar ── -->
          <aside class="lg:col-span-1 space-y-6">

            <!-- Categories breakdown -->
            <FadeIn :delay="0.1">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
                  Browse by Category
                </h3>
                <ul class="space-y-2">
                  <li v-for="cat in categoryCounts" :key="cat.value">
                    <button
                      @click="activeCategory = cat.value"
                      class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl
                             text-sm transition-all duration-200 group"
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

            <!-- Recent announcements -->
            <FadeIn :delay="0.18">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
                  Recent Updates
                </h3>
                <ul class="space-y-4">
                  <li
                    v-for="item in recentAnnouncements"
                    :key="item.id"
                    @click="openModal(item)"
                    class="flex items-start gap-3 cursor-pointer group"
                  >
                    <div class="w-9 h-9 rounded-xl bg-base-200 group-hover:bg-primary/10 flex items-center
                                justify-center text-base shrink-0 transition-colors duration-200 mt-0.5">
                      {{ item.icon }}
                    </div>
                    <div class="min-w-0">
                      <p class="text-xs font-semibold text-base-content leading-snug mb-0.5
                                group-hover:text-secondary transition-colors duration-150 line-clamp-2">
                        {{ item.title }}
                      </p>
                      <time class="text-[10px] text-base-content/40 font-medium">{{ item.date }}</time>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <!-- Subscribe card -->
            <FadeIn :delay="0.26">
              <div class="relative overflow-hidden bg-gradient-to-br from-secondary to-primary rounded-2xl p-6">
                <div class="absolute inset-0 opacity-20"
                     style="background-image: radial-gradient(circle, white 1px, transparent 1px);
                            background-size: 24px 24px;"></div>
                <div class="relative z-10">
                  <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4">
                    🔔
                  </div>
                  <h3 class="text-sm font-bold text-white mb-2"
                      style="font-family:'Instrument Sans',sans-serif;">
                    Get Notified
                  </h3>
                  <p class="text-xs text-white/70 leading-relaxed mb-4">
                    Receive email alerts whenever a new announcement is posted.
                  </p>
                  <a
                    href="/login"
                    class="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white text-secondary
                           text-xs font-bold rounded-xl hover:brightness-[1.02] transition-all duration-200
                           shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    Enable Notifications
                  </a>
                </div>
              </div>
            </FadeIn>

          </aside>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         ANNOUNCEMENT DETAIL MODAL
    ═══════════════════════════════════════════ -->
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
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-base-content/40 backdrop-blur-sm"></div>

          <!-- Panel -->
          <Transition
            enter-active-class="transition-all duration-350 ease-out"
            enter-from-class="opacity-0 translate-y-8 scale-[0.97]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 translate-y-4 scale-[0.98]"
          >
            <div
              v-if="activeAnnouncement"
              class="relative z-10 w-full sm:max-w-2xl bg-base-100 rounded-t-3xl sm:rounded-3xl
                     shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <!-- Modal header -->
              <div class="sticky top-0 bg-base-100/95 backdrop-blur-md border-b border-base-200/70
                          px-7 py-5 flex items-start justify-between gap-4 rounded-t-3xl z-10">
                <div class="flex items-center gap-3 flex-wrap">
                  <span :class="badgeClass(activeAnnouncement.category)"
                        class="badge badge-sm rounded-full font-semibold">
                    {{ activeAnnouncement.category }}
                  </span>
                  <time class="text-xs text-base-content/40 font-medium">{{ activeAnnouncement.date }}</time>
                </div>
                <button
                  @click="closeModal"
                  class="w-8 h-8 rounded-xl bg-base-200 hover:bg-base-300/70 flex items-center justify-center
                         text-base-content/55 hover:text-base-content transition-all duration-150 shrink-0"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <!-- Modal body -->
              <div class="px-7 pt-6 pb-8">
                <!-- Icon -->
                <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mb-5">
                  {{ activeAnnouncement.icon }}
                </div>

                <!-- Title -->
                <h2 class="text-2xl font-bold text-base-content tracking-tight leading-snug mb-4"
                    style="font-family:'Instrument Sans',sans-serif;">
                  {{ activeAnnouncement.title }}
                </h2>

                <!-- Meta row -->
                <div class="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-base-200/70">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold
                                text-primary-content shrink-0"
                         style="background: linear-gradient(135deg, oklch(76% 0.18 128), oklch(50% 0.13 152));">
                      {{ activeAnnouncement.author.split(' ').map(n => n[0]).slice(0,2).join('') }}
                    </div>
                    <div>
                      <p class="text-xs font-semibold text-base-content">{{ activeAnnouncement.author }}</p>
                      <p class="text-[10px] text-base-content/40">{{ activeAnnouncement.authorRole }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5 text-xs text-base-content/45">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {{ activeAnnouncement.date }}
                  </div>
                </div>

                <!-- Body text -->
                <div class="prose prose-sm max-w-none text-base-content/70 leading-relaxed space-y-4">
                  <p v-for="(para, i) in activeAnnouncement.body" :key="i">{{ para }}</p>
                </div>

                <!-- Tags -->
                <div v-if="activeAnnouncement.tags?.length" class="flex flex-wrap gap-2 mt-6 pt-6 border-t border-base-200/70">
                  <span
                    v-for="tag in activeAnnouncement.tags" :key="tag"
                    class="px-3 py-1 text-xs font-medium bg-base-200/70 text-base-content/55
                           rounded-full border border-base-300/50"
                  >
                    #{{ tag }}
                  </span>
                </div>

                <!-- Close button -->
                <div class="mt-7">
                  <button
                    @click="closeModal"
                    class="w-full flex items-center justify-center gap-2 py-3 border border-base-300
                           text-sm font-medium text-base-content/60 rounded-2xl hover:bg-base-200
                           hover:border-primary/25 transition-all duration-200"
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
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { motion } from 'motion-v'
import FadeIn from '@/components/FadeIn.vue'

// ── Modal state ──────────────────────────────────────
const modalOpen          = ref(false)
const activeAnnouncement = ref(null)

function openModal(item) {
  activeAnnouncement.value = item
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modalOpen.value = false
  document.body.style.overflow = ''
}

// ── Filter / search state ────────────────────────────
const searchQuery    = ref('')
const activeCategory = ref('all')
const sortOrder      = ref('newest')
const currentPage    = ref(1)
const perPage        = 9

// Reset page on filter change
watch([searchQuery, activeCategory, sortOrder], () => { currentPage.value = 1 })

// ── Categories ───────────────────────────────────────
const categories = [
  { value: 'all',       label: 'All',       icon: '📋' },
  { value: 'Important', label: 'Important', icon: '🚨' },
  { value: 'Events',    label: 'Events',    icon: '🎉' },
  { value: 'Reminder',  label: 'Reminder',  icon: '🔔' },
  { value: 'Maintenance', label: 'Maintenance', icon: '🔧' },
  { value: 'Safety',    label: 'Safety',    icon: '🛡️' },
]

// ── Page stats ───────────────────────────────────────
const pageStats = [
  { value: '24',  label: 'This Year' },
  { value: '3',   label: 'This Month' },
  { value: '1',   label: 'Pinned' },
]

// ── Announcements data ───────────────────────────────
const allAnnouncements = ref([
  {
    id: 1,
    icon: '🚧',
    category: 'Important',
    date: 'Mar 28, 2025',
    author: 'Maria Santos',
    authorRole: 'HOA President',
    pinned: true,
    title: 'Road Reblocking: Phase 2 Now Underway',
    excerpt: 'Works will continue along Sampaguita and Rosal Streets starting April 5. Please expect minor traffic delays and plan alternate routes during morning and evening peaks.',
    body: [
      'We are pleased to inform all residents that Phase 2 of the road reblocking project is now officially underway. Works will commence along Sampaguita Street and Rosal Street beginning April 5, 2025.',
      'Residents are advised to expect minor traffic delays during peak hours (7:00–9:00 AM and 5:00–7:00 PM). We recommend using the alternate route via Camia Street and the rear gate during this period.',
      'The project is estimated to be completed by the end of April 2025. We appreciate your patience and cooperation throughout this improvement project.',
      'For concerns or inquiries, please contact the HOA office at (046) 123-4567 or email admin@cerishoa.com.',
    ],
    tags: ['road', 'maintenance', 'traffic', 'phase2'],
  },
  {
    id: 2,
    icon: '🎉',
    category: 'Events',
    date: 'Mar 24, 2025',
    author: 'Roberto Reyes',
    authorRole: 'Vice President',
    pinned: false,
    title: 'Foundation Day Celebration — April 20',
    excerpt: 'Join us at the clubhouse grounds for games, food stalls, and live entertainment for the whole family.',
    body: [
      'The CERIS Homeowners Association invites all residents and their families to our annual Foundation Day Celebration on April 20, 2025, at the Clubhouse Grounds.',
      'Activities will include fun games for kids and adults, food stalls, raffle draws, and live entertainment starting at 3:00 PM. The evening program will begin at 6:00 PM with a special presentation from the board.',
      'Raffle prizes include grocery baskets, appliances, and exclusive CERIS merchandise. Each household is entitled to one (1) raffle ticket. Additional tickets may be purchased at the gate.',
    ],
    tags: ['events', 'celebration', 'community', 'foundation-day'],
  },
  {
    id: 3,
    icon: '📋',
    category: 'Reminder',
    date: 'Mar 18, 2025',
    author: 'Ana Lim',
    authorRole: 'Secretary',
    pinned: false,
    title: 'Q2 Association Dues: Deadline April 30',
    excerpt: 'Settle your second-quarter dues on or before April 30 to avoid a 2% monthly surcharge on outstanding balances.',
    body: [
      'This is a reminder that Q2 (April–June 2025) Association Dues are now due. The deadline for payment is April 30, 2025.',
      'Residents who fail to settle by the deadline will incur a 2% monthly surcharge on their outstanding balance.',
      'Payment may be made through the Resident Portal, via bank transfer to our BDO account (Account No. 1234-5678-90), or in person at the HOA office during office hours (Monday–Friday, 8:00 AM–5:00 PM).',
    ],
    tags: ['dues', 'payment', 'finance', 'reminder'],
  },
  {
    id: 4,
    icon: '🔧',
    category: 'Maintenance',
    date: 'Mar 15, 2025',
    author: 'Jose Cruz',
    authorRole: 'Treasurer',
    pinned: false,
    title: 'Swimming Pool Closure: March 17–19',
    excerpt: 'The community pool will be temporarily closed for routine maintenance and water treatment from March 17 to 19.',
    body: [
      'Please be advised that the CERIS Community Swimming Pool will be closed from March 17 to 19, 2025 for routine maintenance, cleaning, and water treatment.',
      'The pool is expected to reopen on March 20, 2025 at 6:00 AM. We apologize for the inconvenience and thank you for your understanding.',
    ],
    tags: ['pool', 'maintenance', 'closure'],
  },
  {
    id: 5,
    icon: '🛡️',
    category: 'Safety',
    date: 'Mar 10, 2025',
    author: 'Carmen Flores',
    authorRole: 'Auditor',
    pinned: false,
    title: 'Security Advisory: Gate Entry Protocol Update',
    excerpt: 'Effective March 15, all visitors must present a valid ID and register at the guardhouse before entry.',
    body: [
      'In line with our commitment to keeping CERIS Subdivision safe, the HOA Board has approved an updated gate entry protocol effective March 15, 2025.',
      'All visitors must: (1) present a valid government-issued ID, (2) state the name and block/lot of the resident they are visiting, and (3) register in the visitor logbook at the guardhouse.',
      'Residents are reminded that they are responsible for the behavior of their guests inside the subdivision. Please inform your frequent visitors of this new policy in advance.',
    ],
    tags: ['security', 'gate', 'safety', 'policy'],
  },
  {
    id: 6,
    icon: '🎉',
    category: 'Events',
    date: 'Mar 5, 2025',
    author: 'Maria Santos',
    authorRole: 'HOA President',
    pinned: false,
    title: 'Summer Sports Fest Registration Now Open',
    excerpt: 'Sign up your household team for the CERIS Summer Sports Fest happening every weekend in April.',
    body: [
      'Registration for the CERIS Summer Sports Fest 2025 is now open! The event will be held every Saturday and Sunday throughout April at the Basketball Court and Multi-Purpose Area.',
      'Sports available include 3-on-3 basketball, badminton, table tennis, and swimming. Teams must consist of at least 3 members from the same household or neighboring households.',
      'Registration fee is ₱150 per team. Slots are limited — register at the HOA office or via the Resident Portal by April 1.',
    ],
    tags: ['sports', 'events', 'summer', 'registration'],
  },
  {
    id: 7,
    icon: '🔔',
    category: 'Reminder',
    date: 'Feb 28, 2025',
    author: 'Ana Lim',
    authorRole: 'Secretary',
    pinned: false,
    title: 'Proper Waste Segregation Reminder',
    excerpt: 'Biodegradable waste on Mondays & Thursdays, non-biodegradable on Tuesdays & Fridays. Bulky items by request.',
    body: [
      'We would like to remind all residents to observe proper waste segregation as mandated by local ordinance.',
      'Collection schedule: Biodegradable (Monday & Thursday), Non-biodegradable (Tuesday & Friday), Residual/Special waste (Wednesday). Bulky waste collection must be arranged with the HOA office at least 3 days in advance.',
      'Failure to segregate waste properly may result in uncollected garbage and fines as per subdivision rules. Let us keep CERIS clean and green!',
    ],
    tags: ['waste', 'environment', 'reminder', 'clean'],
  },
  {
    id: 8,
    icon: '🚧',
    category: 'Maintenance',
    date: 'Feb 20, 2025',
    author: 'Roberto Reyes',
    authorRole: 'Vice President',
    pinned: false,
    title: 'Street Light Replacement: Phase 1 Complete',
    excerpt: 'All 42 LED street lights along the main road and Phase 1 blocks have been successfully replaced.',
    body: [
      'We are happy to announce the successful completion of Phase 1 of the street light replacement project. All 42 LED lights along the main road and Phase 1 residential blocks are now fully operational.',
      'The new LED lights are energy-efficient, brighter, and longer-lasting than the previous fluorescent fixtures. This upgrade is expected to reduce the subdivision\'s electricity costs by approximately 35%.',
      'Phase 2 (Phases 2–4 blocks) will commence in April 2025. Thank you for your patience during the installation period.',
    ],
    tags: ['infrastructure', 'lighting', 'maintenance', 'led'],
  },
  {
    id: 9,
    icon: '🛡️',
    category: 'Safety',
    date: 'Feb 14, 2025',
    author: 'Carmen Flores',
    authorRole: 'Auditor',
    pinned: false,
    title: 'Fire Safety Drill — February 22, 2025',
    excerpt: 'Mandatory fire safety drill for all households on February 22 at 9:00 AM. Please cooperate with the BFP team.',
    body: [
      'In coordination with the Bureau of Fire Protection (BFP), the CERIS HOA will be conducting a mandatory fire safety drill on February 22, 2025, starting at 9:00 AM.',
      'All residents are encouraged to participate. The drill will simulate an emergency evacuation scenario. Please proceed to the designated assembly area (Clubhouse Grounds) when the alarm sounds.',
      'Fire extinguisher demonstration and basic fire safety seminar will follow the drill. Attendance is voluntary for the seminar but strongly encouraged.',
    ],
    tags: ['fire', 'safety', 'drill', 'emergency'],
  },
  {
    id: 10,
    icon: '📋',
    category: 'Reminder',
    date: 'Feb 7, 2025',
    author: 'Ana Lim',
    authorRole: 'Secretary',
    pinned: false,
    title: 'Annual General Assembly: February 15',
    excerpt: 'All homeowners are invited to attend the Annual General Assembly on February 15 at the Function Hall.',
    body: [
      'The CERIS HOA Annual General Assembly (AGA) is scheduled on February 15, 2025, at 4:00 PM at the Function Hall.',
      'Agenda items include: presentation of the 2024 financial report, approval of the 2025 budget, election of new board members (if applicable), and open forum.',
      'All registered homeowners are entitled to one vote per household. Proxy forms are available at the HOA office. Please bring your CERIS Resident ID.',
    ],
    tags: ['assembly', 'governance', 'meeting', 'budget'],
  },
  {
    id: 11,
    icon: '🎉',
    category: 'Events',
    date: 'Jan 28, 2025',
    author: 'Roberto Reyes',
    authorRole: 'Vice President',
    pinned: false,
    title: "Valentine's Couple Cook-off Contest",
    excerpt: 'Calling all CERIS couples! Join our cook-off contest on February 14 at the Clubhouse for a chance to win exciting prizes.',
    body: [
      "Celebrate love at the CERIS Valentine's Couple Cook-off Contest on February 14, 2025! Show off your culinary skills with your partner and compete for exciting prizes.",
      'The contest will be held at the Clubhouse from 2:00 PM to 5:00 PM. Each team must prepare one main dish and one dessert. All ingredients will be provided.',
      'Registration fee: ₱200 per couple. Limited to the first 10 pairs. Register at the HOA office or via the Resident Portal by February 10.',
    ],
    tags: ['valentines', 'events', 'cooking', 'couples'],
  },
  {
    id: 12,
    icon: '🔧',
    category: 'Maintenance',
    date: 'Jan 15, 2025',
    author: 'Jose Cruz',
    authorRole: 'Treasurer',
    pinned: false,
    title: 'Water Interruption Notice: January 18',
    excerpt: 'MAYNILAD will conduct emergency pipe repairs on January 18, affecting water supply from 8 AM to 5 PM.',
    body: [
      'Please be informed that MAYNILAD Water Services will be conducting emergency pipe repairs in our area on January 18, 2025.',
      'Water supply will be interrupted from 8:00 AM to 5:00 PM. Please store sufficient water for your household needs prior to the interruption.',
      'The HOA will station water tankers at the entrance gate for emergency supply during the interruption. For concerns, contact MAYNILAD at their 24/7 hotline (1626) or the HOA office.',
    ],
    tags: ['water', 'maintenance', 'maynilad', 'interruption'],
  },
])

// ── Computed ─────────────────────────────────────────

const pinnedAnnouncement = computed(() =>
  allAnnouncements.value.find(a => a.pinned)
)

const filteredAnnouncements = computed(() => {
  let list = allAnnouncements.value.filter(a => !a.pinned || activeCategory.value !== 'all' || searchQuery.value)

  if (activeCategory.value !== 'all') {
    list = list.filter(a => a.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags?.some(t => t.includes(q))
    )
  }

  if (sortOrder.value === 'oldest') {
    return [...list].reverse()
  }

  return list
})

const totalPages = computed(() => Math.ceil(filteredAnnouncements.value.length / perPage))

const paginatedAnnouncements = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredAnnouncements.value.slice(start, start + perPage)
})

const recentAnnouncements = computed(() =>
  allAnnouncements.value.slice(0, 4)
)

const categoryCounts = computed(() =>
  categories.map(cat => ({
    ...cat,
    count: cat.value === 'all'
      ? allAnnouncements.value.length
      : allAnnouncements.value.filter(a => a.category === cat.value).length,
  }))
)

const activeCategoryLabel = computed(() =>
  categories.find(c => c.value === activeCategory.value)?.label ?? ''
)

// ── Helpers ──────────────────────────────────────────

function badgeClass(cat) {
  return {
    'Important':   'badge-error',
    'Events':      'badge-primary',
    'Reminder':    'badge-warning',
    'Maintenance': 'badge-info',
    'Safety':      'badge-secondary',
  }[cat] ?? 'badge-ghost'
}

function clearFilters() {
  searchQuery.value    = ''
  activeCategory.value = 'all'
  currentPage.value    = 1
}
</script>
