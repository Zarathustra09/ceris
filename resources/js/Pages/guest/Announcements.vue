<template>
    <App>
  <div class="overflow-x-hidden">
    <section class="relative overflow-hidden bg-base-100 py-20 lg:py-28">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/6 via-base-100 to-secondary/8 pointer-events-none"></div>
      <div
        class="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style="background: oklch(76% 0.18 128 / 0.1);"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style="background: oklch(50% 0.13 152 / 0.08);"
      ></div>
      <div
        class="absolute inset-0 pointer-events-none opacity-30"
        style="background-image: radial-gradient(circle, oklch(76% 0.18 128 / 0.25) 1.5px, transparent 1.5px); background-size: 36px 36px;"
      ></div>

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
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span class="text-base-content/65">Announcements</span>
        </motion.nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.p
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, ease: 'easeOut' }"
              class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3"
            >
              Community Journal
            </motion.p>

            <!-- Headline -->
            <motion.h1
              :initial="{ opacity: 0, y: 28 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }"
              class="text-4xl sm:text-5xl font-bold text-base-content tracking-tight leading-[1.1] mb-5"
              style="font-family:'Instrument Sans',sans-serif;"
            >
              HOA Blog
              <span class="relative inline-block text-primary">
                & Calendar
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
              class="text-base leading-relaxed text-base-content/60 max-w-xl"
            >
              Read the latest community updates in blog-post format and browse schedules through the monthly calendar for easier planning.
            </motion.p>
          </div>

          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.55, delay: 0.3, ease: 'easeOut' }"
            class="stats stats-vertical sm:stats-horizontal bg-base-100 border border-base-200 rounded-2xl shadow-sm w-full lg:w-auto"
          >
            <div class="stat px-5 py-4">
              <div class="stat-title text-[11px] uppercase tracking-wider text-base-content/45">Posts</div>
              <div class="stat-value text-2xl text-base-content" style="font-family:'Instrument Sans',sans-serif;">{{ allAnnouncements.length }}</div>
            </div>
            <div class="stat px-5 py-4">
              <div class="stat-title text-[11px] uppercase tracking-wider text-base-content/45">This Month</div>
              <div class="stat-value text-2xl text-base-content" style="font-family:'Instrument Sans',sans-serif;">{{ thisMonthCount }}</div>
            </div>
            <div class="stat px-5 py-4">
              <div class="stat-title text-[11px] uppercase tracking-wider text-base-content/45">Categories</div>
              <div class="stat-value text-2xl text-base-content" style="font-family:'Instrument Sans',sans-serif;">{{ categories.length - 1 }}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <div
      class="sticky top-[4.5rem] z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300/50"
      style="box-shadow: 0 2px 16px oklch(76% 0.18 128 / 0.06);"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <label class="input input-sm md:input-md bg-base-200/50 border-base-300/60 md:col-span-5 rounded-xl flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-base-content/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input v-model="searchQuery" type="search" class="grow text-sm" placeholder="Search announcements" />
          </label>

          <select
            v-model="activeCategory"
            class="select select-sm md:select-md bg-base-100 border-base-300/60 rounded-xl md:col-span-3"
          >
            <option v-for="category in categories" :key="category.value" :value="category.value">
              {{ category.label }}
            </option>
          </select>

          <select
            v-model="sortOrder"
            class="select select-sm md:select-md bg-base-100 border-base-300/60 rounded-xl md:col-span-2"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>

          <button
            class="btn btn-sm md:btn-md rounded-xl border-base-300 bg-base-100 text-base-content/65 md:col-span-2"
            @click="clearFilters"
          >
            Reset filters
          </button>
        </div>
      </div>
    </div>

    <section class="py-20 bg-base-200/40">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div class="xl:col-span-3">
            <FadeIn v-if="featuredAnnouncement">
              <article class="card bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/20 rounded-3xl overflow-hidden">
                <picture class="block aspect-[16/9] sm:aspect-[16/8] overflow-hidden">
                  <source type="image/avif" :srcset="featuredAnnouncement.image.avif" sizes="(min-width: 1280px) 60vw, 100vw" />
                  <source type="image/webp" :srcset="featuredAnnouncement.image.webp" sizes="(min-width: 1280px) 60vw, 100vw" />
                  <img
                    :src="featuredAnnouncement.image.fallback"
                    :alt="featuredAnnouncement.alt"
                    loading="lazy"
                    class="w-full h-full object-cover"
                  />
                </picture>

                <div class="card-body p-7 sm:p-8">
                  <div class="flex flex-wrap items-center gap-2 mb-3">
                    <span class="badge badge-sm rounded-full font-semibold" :class="badgeClass(featuredAnnouncement.category)">
                      {{ featuredAnnouncement.category }}
                    </span>
                    <span class="text-xs text-base-content/40">{{ formatDate(featuredAnnouncement.isoDate) }}</span>
                    <span class="text-xs text-base-content/35">-</span>
                    <span class="text-xs text-base-content/40">{{ featuredAnnouncement.readMinutes }} min read</span>
                  </div>

                  <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-base-content mb-3" style="font-family:'Instrument Sans',sans-serif;">
                    {{ featuredAnnouncement.title }}
                  </h2>

                  <p class="text-sm leading-relaxed text-base-content/65 mb-5 max-w-3xl">
                    {{ featuredAnnouncement.excerpt }}
                  </p>

                  <div class="flex flex-wrap items-center justify-between gap-4">
                    <p class="text-xs text-base-content/50">
                      Posted by <span class="font-semibold text-base-content/70">{{ featuredAnnouncement.author }}</span>
                      - {{ featuredAnnouncement.authorRole }}
                    </p>

                    <motion.button
                      @click="openModal(featuredAnnouncement)"
                      :whileHover="{ scale: 1.02 }"
                      :whileTap="{ scale: 0.98 }"
                      class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm transition-all duration-200"
                      style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
                    >
                      Read full post
                    </motion.button>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn class="mt-8">
              <div class="flex items-center justify-between mb-5">
                <p class="text-sm text-base-content/50 font-medium">
                  <span class="text-base-content font-semibold">{{ filteredAnnouncements.length }}</span>
                  blog post{{ filteredAnnouncements.length !== 1 ? 's' : '' }}
                </p>
                <p v-if="selectedDateKey" class="text-xs text-base-content/45">
                  Filtered by date: <span class="text-primary font-semibold">{{ formatDayLabel(selectedDateKey) }}</span>
                </p>
              </div>
            </FadeIn>

            <div v-if="paginatedAnnouncements.length" class="space-y-5">
              <FadeIn v-for="(post, index) in paginatedAnnouncements" :key="post.id" :delay="index * 0.06">
                <article
                  class="card bg-base-100 border border-base-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  <div class="grid grid-cols-1 md:grid-cols-[14rem_minmax(0,1fr)] gap-0">
                    <picture class="block aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-base-200/60">
                      <source type="image/avif" :srcset="post.image.avif" sizes="(min-width: 1280px) 18vw, (min-width: 768px) 28vw, 100vw" />
                      <source type="image/webp" :srcset="post.image.webp" sizes="(min-width: 1280px) 18vw, (min-width: 768px) 28vw, 100vw" />
                      <img :src="post.image.fallback" :alt="post.alt" loading="lazy" class="w-full h-full object-cover" />
                    </picture>

                    <div class="card-body p-6">
                    <div class="flex flex-wrap items-center gap-2 mb-2">
                      <span class="badge badge-sm rounded-full font-semibold" :class="badgeClass(post.category)">{{ post.category }}</span>
                      <span class="text-[11px] text-base-content/40">{{ formatDate(post.isoDate) }}</span>
                      <span class="text-[11px] text-base-content/35">-</span>
                      <span class="text-[11px] text-base-content/40">{{ post.readMinutes }} min read</span>
                    </div>

                    <h3 class="text-xl font-bold leading-snug text-base-content tracking-tight mb-2" style="font-family:'Instrument Sans',sans-serif;">
                      {{ post.title }}
                    </h3>

                    <p class="text-sm text-base-content/60 leading-relaxed mb-4">
                      {{ post.excerpt }}
                    </p>

                    <div class="divider my-0"></div>

                    <div class="flex items-center justify-between pt-4">
                      <p class="text-xs text-base-content/45">{{ post.author }} - {{ post.authorRole }}</p>
                      <button class="btn btn-ghost btn-sm rounded-xl text-primary" @click="openModal(post)">Open post</button>
                    </div>
                  </div>
                  </div>
                </article>
              </FadeIn>
            </div>

            <FadeIn v-else>
              <div class="card bg-base-100 border border-base-200 rounded-3xl">
                <div class="card-body text-center py-14">
                  <h3 class="text-lg font-bold text-base-content mb-2" style="font-family:'Instrument Sans',sans-serif;">No posts found</h3>
                  <p class="text-sm text-base-content/50 max-w-sm mx-auto">
                    Try changing your category, search term, or calendar selection.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn v-if="totalPages > 1" class="mt-8">
              <div class="join grid grid-cols-2 sm:flex sm:justify-center gap-2">
                <button class="btn join-item rounded-xl" :disabled="currentPage === 1" @click="currentPage--">Previous</button>
                <button
                  v-for="page in totalPages"
                  :key="page"
                  class="btn join-item rounded-xl"
                  :class="currentPage === page ? 'btn-primary text-primary-content' : 'btn-ghost'"
                  @click="currentPage = page"
                >
                  {{ page }}
                </button>
                <button class="btn join-item rounded-xl" :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
              </div>
            </FadeIn>
          </div>

          <aside class="xl:col-span-1 space-y-6">
            <FadeIn :delay="0.1">
              <div class="card bg-base-100 border border-base-200 rounded-2xl">
                <div class="card-body p-5">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary">Calendar</h3>
                    <div class="flex items-center gap-1">
                      <button class="btn btn-ghost btn-xs rounded-lg" @click="moveMonth(-1)">Prev</button>
                      <button class="btn btn-ghost btn-xs rounded-lg" @click="moveMonth(1)">Next</button>
                    </div>
                  </div>

                  <p class="text-sm font-semibold text-base-content mb-3" style="font-family:'Instrument Sans',sans-serif;">{{ monthLabel }}</p>

                  <div class="grid grid-cols-7 gap-1 text-[10px] uppercase tracking-wider text-base-content/40 mb-1">
                    <span v-for="day in weekdays" :key="day" class="text-center py-1">{{ day }}</span>
                  </div>

                  <div class="grid grid-cols-7 gap-1">
                    <button
                      v-for="cell in calendarCells"
                      :key="cell.key"
                      class="relative h-9 rounded-lg text-xs font-medium transition-all duration-200"
                      :class="calendarCellClass(cell)"
                      :disabled="!cell.inMonth"
                      @click="selectDay(cell)"
                    >
                      {{ cell.date.getDate() }}
                      <span
                        v-if="cell.hasPosts"
                        class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                      ></span>
                    </button>
                  </div>

                  <button
                    v-if="selectedDateKey"
                    class="btn btn-ghost btn-sm rounded-xl mt-4 text-base-content/55"
                    @click="selectedDateKey = ''"
                  >
                    Clear date filter
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn :delay="0.16">
              <div class="card bg-base-100 border border-base-200 rounded-2xl">
                <div class="card-body p-5">
                  <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Upcoming Dates</h3>
                  <ul class="space-y-3">
                    <li v-for="post in upcomingPosts" :key="post.id" class="rounded-xl border border-base-200 p-3">
                      <div class="flex items-start gap-3">
                        <picture class="block w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-base-200/60">
                          <source type="image/avif" :srcset="post.image.avif" sizes="64px" />
                          <source type="image/webp" :srcset="post.image.webp" sizes="64px" />
                          <img :src="post.image.fallback" :alt="post.alt" loading="lazy" class="w-full h-full object-cover" />
                        </picture>
                        <div>
                          <p class="text-[11px] text-base-content/40 mb-1">{{ formatDate(post.isoDate) }}</p>
                          <p class="text-xs font-semibold text-base-content leading-relaxed">{{ post.title }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn :delay="0.22">
              <div class="card bg-base-100 border border-base-200 rounded-2xl">
                <div class="card-body p-5">
                  <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Posts by Day</h3>
                  <ul v-if="selectedDayPosts.length" class="space-y-3">
                    <li v-for="post in selectedDayPosts" :key="post.id">
                      <button
                        class="w-full text-left rounded-xl border border-base-200 p-3 hover:border-primary/30 transition-all duration-200"
                        @click="openModal(post)"
                      >
                        <div class="flex items-start gap-3">
                          <picture class="block w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-base-200/60">
                            <source type="image/avif" :srcset="post.image.avif" sizes="56px" />
                            <source type="image/webp" :srcset="post.image.webp" sizes="56px" />
                            <img :src="post.image.fallback" :alt="post.alt" loading="lazy" class="w-full h-full object-cover" />
                          </picture>
                          <div>
                            <p class="text-[10px] text-base-content/40 mb-1">{{ post.category }}</p>
                            <p class="text-xs font-semibold text-base-content leading-relaxed">{{ post.title }}</p>
                          </div>
                        </div>
                      </button>
                    </li>
                  </ul>
                  <p v-else class="text-xs text-base-content/50 leading-relaxed">
                    Select a day with a dot in the calendar to preview posts scheduled for that date.
                  </p>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="modalOpen" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6" @click.self="closeModal">
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
              v-if="activeAnnouncement"
              class="relative z-10 w-full sm:max-w-2xl bg-base-100 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div class="sticky top-0 bg-base-100/95 backdrop-blur-md border-b border-base-200/70 px-7 py-5 flex items-start justify-between gap-4 rounded-t-3xl z-10">
                <div class="flex items-center gap-3 flex-wrap">
                  <span :class="badgeClass(activeAnnouncement.category)" class="badge badge-sm rounded-full font-semibold">
                    {{ activeAnnouncement.category }}
                  </span>
                  <time class="text-xs text-base-content/40 font-medium">{{ formatDate(activeAnnouncement.isoDate) }}</time>
                </div>
                <button
                  class="btn btn-ghost btn-sm rounded-xl"
                  aria-label="Close"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>

              <div class="px-7 pt-6 pb-8">
                <picture class="block rounded-3xl overflow-hidden mb-6 aspect-[16/9] bg-base-200/60">
                  <source type="image/avif" :srcset="activeAnnouncement.image.avif" sizes="(min-width: 640px) 70vw, 100vw" />
                  <source type="image/webp" :srcset="activeAnnouncement.image.webp" sizes="(min-width: 640px) 70vw, 100vw" />
                  <img :src="activeAnnouncement.image.fallback" :alt="activeAnnouncement.alt" loading="lazy" class="w-full h-full object-cover" />
                </picture>

                <h2 class="text-2xl font-bold text-base-content tracking-tight leading-snug mb-3" style="font-family:'Instrument Sans',sans-serif;">
                  {{ activeAnnouncement.title }}
                </h2>

                <p class="text-xs text-base-content/45 mb-5">
                  By {{ activeAnnouncement.author }} - {{ activeAnnouncement.authorRole }}
                </p>

                <div class="prose prose-sm max-w-none text-base-content/70 leading-relaxed space-y-4">
                  <p v-for="(paragraph, index) in activeAnnouncement.body" :key="index">{{ paragraph }}</p>
                </div>

                <div class="mt-6 pt-6 border-t border-base-200/70 flex flex-wrap gap-2">
                  <span
                    v-for="tag in activeAnnouncement.tags"
                    :key="tag"
                    class="badge badge-outline rounded-full text-xs"
                  >
                    #{{ tag }}
                  </span>
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
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { motion } from 'motion-v'
import FadeIn from '@/components/Fadein.vue'
import App from '@/Pages/layouts/guest/App.vue'

const modalOpen = ref(false)
const activeAnnouncement = ref(null)

const searchQuery = ref('')
const activeCategory = ref('all')
const sortOrder = ref('newest')
const currentPage = ref(1)
const perPage = 5

const viewedMonth = ref(new Date(2026, 2, 1))
const selectedDateKey = ref('')

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const buildAnnouncementImage = id => ({
  avif: [480, 768, 1200]
    .map(width => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80&fm=avif ${width}w`)
    .join(','),
  webp: [480, 768, 1200]
    .map(width => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80&fm=webp ${width}w`)
    .join(','),
  fallback: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`,
})

const categories = [
  { value: 'all', label: 'All categories' },
  { value: 'Important', label: 'Important' },
  { value: 'Events', label: 'Events' },
  { value: 'Reminder', label: 'Reminder' },
  { value: 'Maintenance', label: 'Maintenance' },
  { value: 'Safety', label: 'Safety' },
]

const allAnnouncements = ref([
  {
    id: 1,
    category: 'Important',
    isoDate: '2026-03-28',
    readMinutes: 5,
    author: 'Maria Santos',
    authorRole: 'HOA President',
    pinned: true,
    title: 'Road Reblocking Phase 2 Starts April 5',
    alt: 'Subdivision roadworks underway with lane barriers and construction equipment',
    excerpt: 'Work shifts to Sampaguita and Rosal Streets. Residents should expect lane narrowing during peak hours and use alternate access when possible.',
    image: buildAnnouncementImage('photo-1504307651254-35680f356dfd'),
    body: [
      'Phase 2 of the subdivision road reblocking will begin on April 5 and is expected to run through the end of the month.',
      'Traffic marshals will be stationed at the affected intersections from 7:00 AM to 9:00 AM and from 5:00 PM to 7:00 PM.',
      'For urgent access support, contact the HOA office hotline so our team can coordinate with the contractor.',
    ],
    tags: ['road', 'traffic', 'phase2'],
  },
  {
    id: 2,
    category: 'Events',
    isoDate: '2026-03-24',
    readMinutes: 4,
    author: 'Roberto Reyes',
    authorRole: 'Vice President',
    pinned: false,
    title: 'Foundation Day Program and Booth Schedule',
    alt: 'Festive community event setup with booths, lights, and residents gathering outdoors',
    excerpt: 'The community celebration program is now final, including family games, food stalls, and evening performances at the clubhouse grounds.',
    image: buildAnnouncementImage('photo-1511578314322-379afb476865'),
    body: [
      'The Foundation Day opening ceremony starts at 3:00 PM with household roll call and parade staging.',
      'Food and activity booths will operate from 2:00 PM to 8:00 PM with staggered discounts by block schedule.',
      'Residents who volunteered as booth assistants can collect briefing kits at the HOA office beginning Friday.',
    ],
    tags: ['events', 'community'],
  },
  {
    id: 3,
    category: 'Reminder',
    isoDate: '2026-03-18',
    readMinutes: 3,
    author: 'Ana Lim',
    authorRole: 'Secretary',
    pinned: false,
    title: 'Q2 Dues Deadline and Payment Channels',
    alt: 'Resident reviewing billing documents and digital payment options on a desk',
    excerpt: 'Settle your second-quarter association dues by April 30 to avoid monthly surcharge and keep amenity privileges active.',
    image: buildAnnouncementImage('photo-1554224155-8d04cb21cd6c'),
    body: [
      'Residents may settle Q2 dues through the resident portal, bank transfer, or over-the-counter payment at the HOA office.',
      'Please submit your payment reference within 24 hours to help the accounting team validate balances faster.',
      'Late payments will incur the standard 2% monthly surcharge based on current HOA policy.',
    ],
    tags: ['dues', 'billing'],
  },
  {
    id: 4,
    category: 'Maintenance',
    isoDate: '2026-03-15',
    readMinutes: 2,
    author: 'Jose Cruz',
    authorRole: 'Treasurer',
    pinned: false,
    title: 'Pool Closure for Cleaning and Water Treatment',
    alt: 'Community swimming pool closed for cleaning and maintenance',
    excerpt: 'The community pool is closed from March 17 to March 19 for routine maintenance and sanitation checks.',
    image: buildAnnouncementImage('photo-1519046904884-53103b34b206'),
    body: [
      'Routine maintenance includes deep cleaning, pump checks, and water quality balancing in compliance with health standards.',
      'The pool is scheduled to reopen on March 20 at 6:00 AM, subject to final sanitation clearance.',
    ],
    tags: ['pool', 'maintenance'],
  },
  {
    id: 5,
    category: 'Safety',
    isoDate: '2026-03-10',
    readMinutes: 4,
    author: 'Carmen Flores',
    authorRole: 'Auditor',
    pinned: false,
    title: 'Updated Gate Entry Protocol for Visitors',
    alt: 'Subdivision gate with security personnel checking entry access',
    excerpt: 'All visitors must present valid identification and complete digital registration before entering the subdivision.',
    image: buildAnnouncementImage('photo-1486406146926-c627a92ad1ab'),
    body: [
      'The guardhouse now requires ID presentation and host confirmation before issuing temporary visitor passes.',
      'Frequent visitors may pre-register through the resident portal to reduce waiting time during rush periods.',
      'Residents remain accountable for visitor behavior while inside common areas and amenity facilities.',
    ],
    tags: ['security', 'policy'],
  },
  {
    id: 6,
    category: 'Events',
    isoDate: '2026-03-06',
    readMinutes: 3,
    author: 'Maria Santos',
    authorRole: 'HOA President',
    pinned: false,
    title: 'Summer Sports Fest Team Registration Open',
    alt: 'Sports event atmosphere with courts and active participants ready for a tournament',
    excerpt: 'Weekend tournaments will run throughout April. Household teams may register online or at the HOA office desk.',
    image: buildAnnouncementImage('photo-1547347298-4074fc3086f0'),
    body: [
      'The Sports Fest includes basketball, badminton, table tennis, and relay events for junior and adult brackets.',
      'Slots are limited per block to keep match schedules balanced across weekends.',
      'Registration closes on April 1 or once all slots are filled, whichever comes first.',
    ],
    tags: ['sports', 'registration'],
  },
  {
    id: 7,
    category: 'Reminder',
    isoDate: '2026-02-28',
    readMinutes: 3,
    author: 'Ana Lim',
    authorRole: 'Secretary',
    pinned: false,
    title: 'Waste Segregation and Collection Window',
    alt: 'Recycling and waste segregation bins arranged in an organized collection area',
    excerpt: 'Please follow biodegradable and non-biodegradable collection schedules to avoid missed pickup and penalties.',
    image: buildAnnouncementImage('photo-1532996122724-e3c354a0b15b'),
    body: [
      'Biodegradable waste is collected every Monday and Thursday while non-biodegradable waste is collected Tuesday and Friday.',
      'Special and bulky waste pickup requires prior scheduling at least three days before your preferred date.',
      'Proper segregation helps keep disposal costs down and supports our clean community program.',
    ],
    tags: ['waste', 'cleanliness'],
  },
  {
    id: 8,
    category: 'Safety',
    isoDate: '2026-02-14',
    readMinutes: 3,
    author: 'Carmen Flores',
    authorRole: 'Auditor',
    pinned: false,
    title: 'Fire Safety Drill Procedure for Households',
    alt: 'Residents participating in a community emergency or safety drill',
    excerpt: 'The annual drill is scheduled at the clubhouse. Assembly rules and evacuation routes are now posted per block.',
    image: buildAnnouncementImage('photo-1517048676732-d65bc937f952'),
    body: [
      'Alarm testing begins at 8:45 AM, followed by a full evacuation simulation at 9:00 AM.',
      'Residents should proceed to assigned assembly points and wait for block marshals before returning home.',
      'A short safety seminar follows the drill for residents who want refresher guidance on extinguisher handling.',
    ],
    tags: ['fire', 'drill'],
  },
  {
    id: 9,
    category: 'Reminder',
    isoDate: '2026-02-07',
    readMinutes: 3,
    author: 'Ana Lim',
    authorRole: 'Secretary',
    pinned: false,
    title: 'Annual General Assembly Invitation',
    alt: 'Community assembly or meeting hall arranged for a formal homeowners gathering',
    excerpt: 'Join us on February 15 for the Annual General Assembly. Important updates and elections will be held.',
    image: buildAnnouncementImage('photo-1517502884422-41eaead166d4'),
    body: [
      'The Annual General Assembly (AGA) of the CERIS Homeowners Association is scheduled for February 15, 2026, at 4:00 PM.',
      'Venue: CERIS Clubhouse Function Hall.',
      'All homeowners are encouraged to attend. Your participation is vital for community decision-making.',
    ],
    tags: ['assembly', 'governance'],
  },
  {
    id: 10,
    category: 'Events',
    isoDate: '2026-01-28',
    readMinutes: 3,
    author: 'Roberto Reyes',
    authorRole: 'Vice President',
    pinned: false,
    title: "Valentine's Day Special: Couple's Cook-off",
    alt: 'Cooking event with plated food and a festive communal atmosphere',
    excerpt: 'Celebrate love and culinary skills! Join the cook-off on February 14. Prizes await the winning couple.',
    image: buildAnnouncementImage('photo-1556910103-1c02745aae4d'),
    body: [
      'The CERIS HOA is hosting a Valentine\'s Day Couple\'s Cook-off on February 14, 2026, at the Clubhouse.',
      'Registration fee: ₱250 per couple. Inclusive of ingredients and a special gift pack.',
      'Sign up at the HOA office or through the Resident Portal by February 10. Limited slots available!',
    ],
    tags: ['valentines', 'cooking', 'events'],
  },
  {
    id: 11,
    category: 'Maintenance',
    isoDate: '2026-01-15',
    readMinutes: 3,
    author: 'Jose Cruz',
    authorRole: 'Treasurer',
    pinned: false,
    title: 'Water Service Interruption: January 18',
    alt: 'Close-up of water service and plumbing infrastructure used for repair work',
    excerpt: 'MAYNILAD will conduct emergency repairs on January 18, affecting water supply from 8 AM to 5 PM.',
    image: buildAnnouncementImage('photo-1585704032915-c3400ca199e7'),
    body: [
      'Please be informed that there will be a water service interruption on January 18, 2026, from 8:00 AM to 5:00 PM.',
      'This is to facilitate emergency repairs by MAYNILAD Water Services. We apologize for the inconvenience.',
      'For emergency water needs, please contact the HOA office or MAYNILAD hotline at 1626.',
    ],
    tags: ['water', 'maintenance', 'maynilad'],
  },
])

const sortedAnnouncements = computed(() => {
  const list = [...allAnnouncements.value]
  list.sort((a, b) => {
    const aTime = new Date(a.isoDate).getTime()
    const bTime = new Date(b.isoDate).getTime()
    return sortOrder.value === 'newest' ? bTime - aTime : aTime - bTime
  })
  return list
})

const featuredAnnouncement = computed(() =>
  sortedAnnouncements.value.find(item => item.pinned) || sortedAnnouncements.value[0] || null
)

const filteredAnnouncements = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return sortedAnnouncements.value.filter(item => {
    if (activeCategory.value !== 'all' && item.category !== activeCategory.value) {
      return false
    }

    if (selectedDateKey.value && item.isoDate !== selectedDateKey.value) {
      return false
    }

    if (!query) {
      return true
    }

    return (
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredAnnouncements.value.length / perPage)))

const paginatedAnnouncements = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredAnnouncements.value.slice(start, start + perPage)
})

const thisMonthCount = computed(() => {
  const key = monthKey(viewedMonth.value)
  return allAnnouncements.value.filter(item => item.isoDate.startsWith(key)).length
})

const monthLabel = computed(() =>
  viewedMonth.value.toLocaleString('en-US', { month: 'long', year: 'numeric' })
)

const calendarCells = computed(() => {
  const firstDay = new Date(viewedMonth.value.getFullYear(), viewedMonth.value.getMonth(), 1)
  const startOffset = firstDay.getDay()
  const startDate = new Date(firstDay)
  startDate.setDate(firstDay.getDate() - startOffset)

  const postDays = new Set(
    allAnnouncements.value
      .filter(item => item.isoDate.startsWith(monthKey(viewedMonth.value)))
      .map(item => item.isoDate)
  )

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + index)
    const key = toISODate(date)

    return {
      key,
      date,
      inMonth: date.getMonth() === viewedMonth.value.getMonth(),
      hasPosts: postDays.has(key),
    }
  })
})

const selectedDayPosts = computed(() =>
  selectedDateKey.value ? allAnnouncements.value.filter(item => item.isoDate === selectedDateKey.value) : []
)

const upcomingPosts = computed(() =>
  [...allAnnouncements.value]
    .sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime())
    .slice(0, 3)
)

watch([searchQuery, activeCategory, sortOrder, selectedDateKey], () => {
  currentPage.value = 1
})

watch(totalPages, pages => {
  if (currentPage.value > pages) {
    currentPage.value = pages
  }
})

function moveMonth(step) {
  const next = new Date(viewedMonth.value)
  next.setMonth(next.getMonth() + step)
  viewedMonth.value = new Date(next.getFullYear(), next.getMonth(), 1)
}

function selectDay(cell) {
  if (!cell.inMonth) {
    return
  }
  selectedDateKey.value = selectedDateKey.value === cell.key ? '' : cell.key
}

function calendarCellClass(cell) {
  if (!cell.inMonth) {
    return 'text-base-content/25 cursor-default'
  }

  if (selectedDateKey.value === cell.key) {
    return 'bg-primary text-primary-content'
  }

  if (cell.hasPosts) {
    return 'bg-primary/10 text-secondary hover:bg-primary/15'
  }

  return 'bg-base-100 text-base-content/60 hover:bg-base-200'
}

function openModal(post) {
  activeAnnouncement.value = post
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modalOpen.value = false
  document.body.style.overflow = ''
}

function clearFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
  sortOrder.value = 'newest'
  selectedDateKey.value = ''
  currentPage.value = 1
}

function badgeClass(category) {
  return {
    Important: 'badge-error',
    Events: 'badge-primary',
    Reminder: 'badge-warning',
    Maintenance: 'badge-info',
    Safety: 'badge-secondary',
  }[category] || 'badge-ghost'
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatDayLabel(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

function toISODate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>
