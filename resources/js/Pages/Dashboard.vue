<template>
  <App>
    <div class="overflow-x-hidden">
      <section class="bg-base-100 py-20">
        <div class="max-w-7xl mx-auto px-6 sm:px-8">
          <div class="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Control Center</p>
              <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-base-content mb-4" style="font-family:'Instrument Sans',sans-serif;">
                {{ isAdminView ? 'Admin System Dashboard' : 'Resident Dashboard' }}
              </h1>
              <p class="text-base leading-relaxed text-base-content/60 max-w-2xl">
                {{
                  isAdminView
                    ? 'Monitor subdivision operations, financial status, service tickets, and module health from one administrative workspace.'
                    : 'Track your dues, requests, and upcoming community activities in one resident view.'
                }}
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <div class="join bg-base-200 rounded-2xl p-1 border border-base-300/50">
                <button
                  class="btn btn-sm join-item rounded-xl"
                  :class="isAdminView ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content/65'"
                  @click="isAdminView = true"
                >
                  Admin view
                </button>
                <button
                  class="btn btn-sm join-item rounded-xl"
                  :class="!isAdminView ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content/65'"
                  @click="isAdminView = false"
                >
                  User view
                </button>
              </div>

              <a
                :href="isAdminView ? '/reports/export' : '/announcements'"
                class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200"
                style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                {{ isAdminView ? 'Generate report' : 'Open announcements' }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <template v-if="isAdminView">
        <section class="bg-base-100 pb-20">
          <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <FadeIn>
              <div class="stats stats-vertical lg:stats-horizontal bg-base-100 border border-base-200 rounded-2xl shadow-sm w-full">
                <div class="stat">
                  <div class="stat-title text-base-content/45">Collections this month</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">PHP 1.24M</div>
                  <div class="stat-desc text-success">+8.6% vs last month</div>
                </div>
                <div class="stat">
                  <div class="stat-title text-base-content/45">Open service tickets</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">37</div>
                  <div class="stat-desc text-warning">14 require assignment</div>
                </div>
                <div class="stat">
                  <div class="stat-title text-base-content/45">Pending approvals</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">19</div>
                  <div class="stat-desc text-info">Visitor and booking requests</div>
                </div>
                <div class="stat">
                  <div class="stat-title text-base-content/45">System uptime</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">99.94%</div>
                  <div class="stat-desc text-success">No outage reported</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section class="py-20 bg-base-200/50">
          <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <FadeIn>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Operations</p>
              <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight mb-10" style="font-family:'Instrument Sans',sans-serif;">
                Admin Workflow
              </h2>
            </FadeIn>

            <div class="grid grid-cols-1 xl:grid-cols-5 gap-5">
              <div class="xl:col-span-3 space-y-5">
                <FadeIn :delay="0.06">
                  <div class="card bg-base-100 border border-base-200 rounded-2xl">
                    <div class="card-body p-5 sm:p-6">
                      <div class="flex items-center justify-between mb-4">
                        <h3 class="text-base font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">Ticket Queue</h3>
                        <a href="/service-requests" class="btn btn-ghost btn-sm rounded-xl">View all</a>
                      </div>

                      <div class="overflow-x-auto">
                        <table class="table table-zebra table-sm">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Concern</th>
                              <th>Block</th>
                              <th>Status</th>
                              <th>Age</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="ticket in adminTickets" :key="ticket.id">
                              <td class="font-semibold text-base-content/70">{{ ticket.id }}</td>
                              <td>{{ ticket.concern }}</td>
                              <td>{{ ticket.block }}</td>
                              <td>
                                <span class="badge badge-sm rounded-full font-semibold" :class="ticket.statusClass">{{ ticket.status }}</span>
                              </td>
                              <td>{{ ticket.age }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn :delay="0.12">
                  <div class="card bg-base-100 border border-base-200 rounded-2xl">
                    <div class="card-body p-5 sm:p-6">
                      <div class="flex items-center justify-between mb-4">
                        <h3 class="text-base font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">Collection Summary</h3>
                        <span class="badge badge-success badge-sm rounded-full font-semibold">Updated 5 min ago</span>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div class="rounded-xl border border-base-200 p-4">
                          <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-1">Collected</p>
                          <p class="text-xl font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">PHP 1,240,000</p>
                        </div>
                        <div class="rounded-xl border border-base-200 p-4">
                          <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-1">Outstanding</p>
                          <p class="text-xl font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">PHP 182,400</p>
                        </div>
                        <div class="rounded-xl border border-base-200 p-4">
                          <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-1">Paid Households</p>
                          <p class="text-xl font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">81%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div class="xl:col-span-2 space-y-5">
                <FadeIn :delay="0.08">
                  <div class="card bg-base-100 border border-base-200 rounded-2xl">
                    <div class="card-body p-5">
                      <h3 class="text-sm font-bold text-base-content mb-4" style="font-family:'Instrument Sans',sans-serif;">Pending Approvals</h3>
                      <ul class="space-y-3">
                        <li v-for="item in pendingApprovals" :key="item.label" class="flex items-center justify-between gap-3 rounded-xl border border-base-200 p-3">
                          <div>
                            <p class="text-sm font-semibold text-base-content">{{ item.label }}</p>
                            <p class="text-xs text-base-content/50">{{ item.note }}</p>
                          </div>
                          <span class="badge badge-primary badge-sm rounded-full font-semibold">{{ item.count }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn :delay="0.14">
                  <div class="card bg-base-100 border border-base-200 rounded-2xl">
                    <div class="card-body p-5">
                      <h3 class="text-sm font-bold text-base-content mb-4" style="font-family:'Instrument Sans',sans-serif;">System Health</h3>
                      <div class="space-y-4">
                        <div v-for="module in systemHealth" :key="module.name">
                          <div class="flex items-center justify-between text-xs text-base-content/60 mb-1">
                            <span>{{ module.name }}</span>
                            <span class="font-semibold">{{ module.value }}%</span>
                          </div>
                          <progress class="progress progress-primary w-full" :value="module.value" max="100"></progress>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section class="py-20 bg-base-100">
          <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <FadeIn>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Admin Modules</p>
              <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight mb-10" style="font-family:'Instrument Sans',sans-serif;">
                System Management
              </h2>
            </FadeIn>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FadeIn v-for="(module, index) in adminModules" :key="module.title" :delay="index * 0.06">
                <a
                  :href="module.href"
                  class="card bg-base-100 border border-base-200 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  <div class="card-body p-5">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path :d="module.icon" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-semibold text-base-content mb-1">{{ module.title }}</h3>
                    <p class="text-sm text-base-content/60 leading-relaxed">{{ module.description }}</p>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </template>

      <template v-else>
        <section class="bg-base-100 pb-20">
          <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <FadeIn>
              <div class="stats stats-vertical lg:stats-horizontal bg-base-100 border border-base-200 rounded-2xl shadow-sm w-full">
                <div class="stat">
                  <div class="stat-title text-base-content/45">Outstanding dues</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">PHP 2,400</div>
                  <div class="stat-desc text-warning">Due April 30</div>
                </div>
                <div class="stat">
                  <div class="stat-title text-base-content/45">Active requests</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">3</div>
                  <div class="stat-desc text-info">1 in progress</div>
                </div>
                <div class="stat">
                  <div class="stat-title text-base-content/45">Unread notices</div>
                  <div class="stat-value text-base-content" style="font-family:'Instrument Sans',sans-serif;">5</div>
                  <div class="stat-desc text-primary">Latest board updates</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section class="py-20 bg-base-200/50">
          <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <FadeIn>
              <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Resident Shortcuts</p>
              <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight mb-10" style="font-family:'Instrument Sans',sans-serif;">
                Quick Actions
              </h2>
            </FadeIn>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <FadeIn v-for="(card, index) in residentCards" :key="card.title" :delay="index * 0.08">
                <div class="card bg-base-100 border border-base-200 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div class="card-body p-6">
                    <div class="flex items-center justify-between mb-3">
                      <h3 class="text-lg font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">{{ card.title }}</h3>
                      <span class="badge badge-sm rounded-full font-semibold" :class="card.badgeClass">{{ card.badge }}</span>
                    </div>
                    <p class="text-sm text-base-content/60 leading-relaxed mb-4">{{ card.description }}</p>
                    <a :href="card.href" class="btn btn-ghost btn-sm rounded-xl justify-start px-0 text-primary">Open module</a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </template>
    </div>
  </App>
</template>

<script setup>
import { ref } from 'vue'
import App from '@/Pages/layouts/App.vue'
import FadeIn from '@/components/Fadein.vue'

const isAdminView = ref(true)

const adminTickets = [
  { id: 'SR-2407', concern: 'Streetlight outage', block: 'B7-L12', status: 'Pending', statusClass: 'badge-warning', age: '2d' },
  { id: 'SR-2401', concern: 'Drainage overflow', block: 'B2-L5', status: 'In Review', statusClass: 'badge-info', age: '5d' },
  { id: 'SR-2398', concern: 'Visitor gate complaint', block: 'B10-L4', status: 'Queued', statusClass: 'badge-primary', age: '1d' },
  { id: 'SR-2389', concern: 'Clubhouse AC maintenance', block: 'Admin', status: 'Assigned', statusClass: 'badge-success', age: '3d' },
]

const pendingApprovals = [
  { label: 'Visitor passes', note: 'Same-day entry requests', count: 11 },
  { label: 'Amenity bookings', note: 'Clubhouse and court reservations', count: 6 },
  { label: 'Document requests', note: 'Clearances and certifications', count: 2 },
]

const systemHealth = [
  { name: 'Resident Portal API', value: 99 },
  { name: 'Payment Gateway', value: 96 },
  { name: 'Notification Queue', value: 93 },
  { name: 'Document Storage', value: 98 },
]

const adminModules = [
  { title: 'Financial Management', description: 'Track collections, delinquencies, and audit logs.', href: '/admin/finance', icon: 'M2 6h20v12H2z M2 10h20' },
  { title: 'Service Desk', description: 'Assign, monitor, and close resident concerns.', href: '/admin/service-desk', icon: 'M12 6v12 M6 12h12' },
  { title: 'Resident Directory', description: 'Manage household accounts and verification.', href: '/admin/residents', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8' },
  { title: 'Governance', description: 'Publish circulars, board files, and meeting notes.', href: '/admin/governance', icon: 'M4 5h16v14H4z M8 9h8 M8 13h8' },
  { title: 'Amenity Operations', description: 'Approve schedules and monitor usage limits.', href: '/admin/amenities', icon: 'M3 8h18v13H3z M7 3v5 M17 3v5' },
  { title: 'Visitor Security', description: 'Review visitor logs and gate incidents.', href: '/admin/security', icon: 'M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z' },
  { title: 'Content Manager', description: 'Manage announcements and resident alerts.', href: '/admin/content', icon: 'M4 5h16v14H4z M8 9h8 M8 13h6' },
  { title: 'System Settings', description: 'Control modules, permissions, and integrations.', href: '/admin/settings', icon: 'M12 8a4 4 0 1 0 0.01 0 M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1z' },
]

const residentCards = [
  {
    title: 'Dues & Billing',
    badge: 'Due Soon',
    badgeClass: 'badge-warning',
    description: 'View your balance, payment options, and transaction history.',
    href: '/dues',
  },
  {
    title: 'Service Requests',
    badge: '3 Active',
    badgeClass: 'badge-info',
    description: 'Check ongoing concerns and submit a new request.',
    href: '/service-requests',
  },
  {
    title: 'Announcements',
    badge: '5 New',
    badgeClass: 'badge-primary',
    description: 'Read HOA notices, policy updates, and event reminders.',
    href: '/announcements',
  },
]
</script>

