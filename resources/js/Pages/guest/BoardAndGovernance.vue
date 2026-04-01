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
          <span class="text-base-content/65">Board and Governance</span>
        </motion.nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <motion.p
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, ease: 'easeOut' }"
              class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3"
            >
              Community Leadership
            </motion.p>

            <motion.h1
              :initial="{ opacity: 0, y: 28 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }"
              class="text-4xl sm:text-5xl font-bold text-base-content tracking-tight leading-[1.1] mb-5"
              style="font-family:'Instrument Sans',sans-serif;"
            >
              Board
              <span class="relative inline-block text-primary">
                and Governance
                <svg class="absolute -bottom-1 left-0 w-full overflow-visible" viewBox="0 0 220 10" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M2 7 C40 2, 120 2, 218 6"
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
              Meet the board officers, committee leads, and governance process that guide CERIS decisions and neighborhood programs.
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
              placeholder="Search member or role..."
              class="w-full pl-11 pr-4 py-2.5 text-sm bg-base-200/60 border border-base-300/60 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40
                     focus:bg-base-100 transition-all duration-200 placeholder:text-base-content/30"
            />
          </div>

          <div class="flex items-center gap-2 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-hide">
            <button
              v-for="group in groups"
              :key="group.value"
              @click="activeGroup = group.value"
              class="px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0"
              :class="activeGroup === group.value
                ? 'bg-primary text-primary-content border-primary shadow-sm'
                : 'bg-base-100 text-base-content/60 border-base-300/60 hover:border-primary/30 hover:text-base-content'"
            >
              {{ group.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <section v-if="featuredMember && activeGroup === 'all' && !searchQuery" class="py-10 bg-base-100">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div class="relative bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/20 rounded-3xl p-7 sm:p-9 overflow-hidden">
            <div class="absolute top-5 right-5 flex items-center gap-1.5 bg-base-100 border border-primary/20 rounded-full px-3 py-1.5 shadow-sm">
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Featured Officer</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              <div class="lg:col-span-2">
                <p class="text-xs text-base-content/45 font-medium mb-2">{{ featuredMember.term }}</p>
                <h2 class="text-2xl sm:text-3xl font-bold text-base-content tracking-tight mb-1"
                    style="font-family:'Instrument Sans',sans-serif;">
                  {{ featuredMember.name }}
                </h2>
                <p class="text-sm font-semibold text-primary mb-4">{{ featuredMember.role }}</p>
                <p class="text-sm text-base-content/65 leading-relaxed max-w-xl mb-6">{{ featuredMember.bio }}</p>

                <motion.button
                  @click="openMemberModal(featuredMember)"
                  :whileHover="{ scale: 1.02 }"
                  :whileTap="{ scale: 0.98 }"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm transition-all duration-200 cursor-pointer"
                  style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
                >
                  View Profile
                </motion.button>
              </div>

              <div class="hidden lg:flex items-center justify-center">
                <div class="w-28 h-28 rounded-2xl bg-base-100 border border-primary/20 shadow-md flex items-center justify-center text-2xl font-bold text-secondary"
                     style="font-family:'Instrument Sans',sans-serif;">
                  {{ initials(featuredMember.name) }}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <section class="py-10 pb-20 bg-base-200/40">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div class="lg:col-span-2 xl:col-span-3">
            <FadeIn>
              <div class="flex items-center justify-between mb-6">
                <p class="text-sm text-base-content/50 font-medium">
                  <span class="text-base-content font-semibold">{{ filteredMembers.length }}</span>
                  member{{ filteredMembers.length === 1 ? '' : 's' }}
                  <span v-if="activeGroup !== 'all'">in <span class="text-primary font-semibold">{{ activeGroupLabel }}</span></span>
                </p>
                <button
                  v-if="activeGroup !== 'all' || searchQuery"
                  @click="clearFilters"
                  class="text-xs font-semibold text-base-content/45 hover:text-error transition-colors duration-150"
                >
                  Clear filters x
                </button>
              </div>
            </FadeIn>

            <FadeIn v-if="filteredMembers.length === 0">
              <div class="text-center py-20 bg-base-100 border border-base-200 rounded-3xl">
                <h3 class="text-base font-semibold text-base-content mb-2" style="font-family:'Instrument Sans',sans-serif;">
                  No member found
                </h3>
                <p class="text-sm text-base-content/50 max-w-xs mx-auto">Try another keyword or group filter.</p>
              </div>
            </FadeIn>

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <FadeIn v-for="(member, i) in filteredMembers" :key="member.id" :delay="i * 0.05">
                <article
                  @click="openMemberModal(member)"
                  class="bg-base-100 border border-base-200 rounded-2xl p-6 cursor-pointer hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  <div class="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-sm font-bold text-secondary mb-4"
                       style="font-family:'Instrument Sans',sans-serif;">
                    {{ initials(member.name) }}
                  </div>
                  <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-1.5">{{ member.group }}</p>
                  <h3 class="text-sm font-semibold text-base-content leading-snug mb-1" style="font-family:'Instrument Sans',sans-serif;">
                    {{ member.name }}
                  </h3>
                  <p class="text-xs text-base-content/55 mb-4">{{ member.role }}</p>
                  <p class="text-xs text-base-content/50 leading-relaxed line-clamp-3">{{ member.bio }}</p>
                </article>
              </FadeIn>
            </div>
          </div>

          <aside class="lg:col-span-1 space-y-6">
            <FadeIn :delay="0.12">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Governance Committees</h3>
                <ul class="space-y-3">
                  <li v-for="item in committees" :key="item.name" class="pb-3 border-b border-base-300/50 last:border-b-0 last:pb-0">
                    <p class="text-sm font-semibold text-base-content/75">{{ item.name }}</p>
                    <p class="text-xs text-base-content/50 mt-1">Lead: {{ item.lead }}</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn :delay="0.18">
              <div class="bg-base-100 border border-base-200 rounded-2xl p-6">
                <h3 class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">Upcoming Meetings</h3>
                <ul class="space-y-3">
                  <li v-for="meeting in meetings" :key="meeting.title" class="rounded-xl bg-base-200/60 border border-base-300/50 p-3">
                    <p class="text-sm font-semibold text-base-content/75">{{ meeting.title }}</p>
                    <p class="text-xs text-base-content/50 mt-1">{{ meeting.date }} at {{ meeting.time }}</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn :delay="0.24">
              <div class="relative overflow-hidden bg-gradient-to-br from-secondary to-primary rounded-2xl p-6">
                <div class="absolute inset-0 opacity-20"
                     style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px;"></div>
                <div class="relative z-10">
                  <h3 class="text-sm font-bold text-white mb-2" style="font-family:'Instrument Sans',sans-serif;">Need Governance Documents?</h3>
                  <p class="text-xs text-white/75 leading-relaxed mb-4">
                    Log in to access board resolutions, meeting minutes, and policy circulars.
                  </p>
                  <a
                    href="/login"
                    class="flex items-center justify-center px-4 py-2.5 bg-white text-secondary text-xs font-bold rounded-xl hover:brightness-[1.02] transition-all duration-200 shadow-md"
                  >
                    Open Resident Portal
                  </a>
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
        <div v-if="memberModalOpen" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6" @click.self="closeMemberModal">
          <div class="absolute inset-0 bg-base-content/40 backdrop-blur-sm"></div>

          <Transition
            enter-active-class="transition-all duration-350 ease-out"
            enter-from-class="opacity-0 translate-y-8 scale-[0.97]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 translate-y-4 scale-[0.98]"
          >
            <div v-if="activeMember" class="relative z-10 w-full sm:max-w-xl bg-base-100 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <div class="sticky top-0 bg-base-100/95 backdrop-blur-md border-b border-base-200/70 px-7 py-5 flex items-start justify-between gap-4 rounded-t-3xl z-10">
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-1">{{ activeMember.group }}</p>
                  <h2 class="text-lg font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">
                    {{ activeMember.name }}
                  </h2>
                </div>
                <button
                  @click="closeMemberModal"
                  class="w-8 h-8 rounded-xl bg-base-200 hover:bg-base-300/70 flex items-center justify-center text-base-content/55 hover:text-base-content transition-all duration-150"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <div class="px-7 pt-6 pb-8">
                <p class="text-sm font-semibold text-secondary mb-3">{{ activeMember.role }}</p>
                <p class="text-xs text-base-content/45 mb-5">{{ activeMember.term }}</p>
                <p class="text-sm text-base-content/65 leading-relaxed">{{ activeMember.bio }}</p>

                <div class="mt-6 pt-6 border-t border-base-200/70 space-y-3">
                  <p class="text-xs text-base-content/55"><span class="font-semibold text-base-content/70">Committee:</span> {{ activeMember.committee }}</p>
                  <p class="text-xs text-base-content/55"><span class="font-semibold text-base-content/70">Email:</span> {{ activeMember.email }}</p>
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
import { computed, onBeforeUnmount, ref } from 'vue'
import { motion } from 'motion-v'
import FadeIn from '@/components/FadeIn.vue'
import App from '@/Pages/layouts/guest/App.vue'

const searchQuery = ref('')
const activeGroup = ref('all')
const memberModalOpen = ref(false)
const activeMember = ref(null)

const groups = [
  { value: 'all', label: 'All Members' },
  { value: 'Officers', label: 'Officers' },
  { value: 'Directors', label: 'Directors' },
  { value: 'Committee Leads', label: 'Committee Leads' },
]

const boardMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'President',
    group: 'Officers',
    term: 'Term: 2026 to 2028',
    committee: 'Executive Council',
    email: 'john.doe@cerishoa.test',
    featured: true,
    bio: 'Leads strategic planning and oversees board priorities focused on neighborhood safety and service quality.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Vice President',
    group: 'Officers',
    term: 'Term: 2026 to 2028',
    committee: 'Community Affairs',
    email: 'jane.doe@cerishoa.test',
    bio: 'Supports policy execution, coordinates inter-committee initiatives, and serves as acting lead when needed.',
  },
  {
    id: 3,
    name: 'Alex Doe',
    role: 'Secretary',
    group: 'Officers',
    term: 'Term: 2026 to 2028',
    committee: 'Governance and Records',
    email: 'alex.doe@cerishoa.test',
    bio: 'Maintains official records, minutes, and board correspondence to ensure transparent communication with residents.',
  },
  {
    id: 4,
    name: 'Sam Doe',
    role: 'Treasurer',
    group: 'Officers',
    term: 'Term: 2026 to 2028',
    committee: 'Finance and Audit',
    email: 'sam.doe@cerishoa.test',
    bio: 'Oversees budgeting, dues utilization, and financial controls to keep HOA operations accountable and sustainable.',
  },
  {
    id: 5,
    name: 'Taylor Doe',
    role: 'Director for Security',
    group: 'Directors',
    term: 'Term: 2026 to 2027',
    committee: 'Security and Compliance',
    email: 'taylor.doe@cerishoa.test',
    bio: 'Coordinates with gate operations and patrol teams while improving incident response and preventive measures.',
  },
  {
    id: 6,
    name: 'Chris Doe',
    role: 'Director for Facilities',
    group: 'Directors',
    term: 'Term: 2026 to 2027',
    committee: 'Facilities Management',
    email: 'chris.doe@cerishoa.test',
    bio: 'Supervises upkeep of amenities, maintenance scheduling, and vendor service quality across common areas.',
  },
  {
    id: 7,
    name: 'Morgan Lee',
    role: 'Lead, Documentation Committee',
    group: 'Committee Leads',
    term: 'Term: 2026 to 2027',
    committee: 'Governance and Records',
    email: 'morgan.lee@cerishoa.test',
    bio: 'Reviews policy drafts and document standards for resident-facing advisories, forms, and resolutions.',
  },
  {
    id: 8,
    name: 'Jordan Cruz',
    role: 'Lead, Community Engagement',
    group: 'Committee Leads',
    term: 'Term: 2026 to 2027',
    committee: 'Community Affairs',
    email: 'jordan.cruz@cerishoa.test',
    bio: 'Runs volunteer programs, resident consultations, and participation channels for community development.',
  },
]

const committees = [
  { name: 'Finance and Audit Committee', lead: 'Sam Doe' },
  { name: 'Security and Compliance Committee', lead: 'Taylor Doe' },
  { name: 'Facilities Management Committee', lead: 'Chris Doe' },
  { name: 'Community Affairs Committee', lead: 'Jordan Cruz' },
]

const meetings = [
  { title: 'Board Monthly Session', date: 'Apr 12, 2026', time: '7:00 PM' },
  { title: 'Governance Committee Review', date: 'Apr 20, 2026', time: '6:30 PM' },
  { title: 'Townhall and Open Forum', date: 'Apr 27, 2026', time: '4:00 PM' },
]

const pageStats = computed(() => [
  { value: boardMembers.length, label: 'Active Members' },
  { value: committees.length, label: 'Committees' },
  { value: meetings.length, label: 'Upcoming Meetings' },
])

const featuredMember = computed(() => boardMembers.find(item => item.featured))

const filteredMembers = computed(() => {
  let list = [...boardMembers]

  if (activeGroup.value !== 'all') {
    list = list.filter(item => item.group === activeGroup.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.role.toLowerCase().includes(q) ||
      item.committee.toLowerCase().includes(q)
    )
  }

  return list
})

const activeGroupLabel = computed(() =>
  groups.find(item => item.value === activeGroup.value)?.label ?? ''
)

function clearFilters() {
  searchQuery.value = ''
  activeGroup.value = 'all'
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(item => item[0])
    .join('')
}

function openMemberModal(member) {
  activeMember.value = member
  memberModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMemberModal() {
  memberModalOpen.value = false
  activeMember.value = null
  document.body.style.overflow = ''
}

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

