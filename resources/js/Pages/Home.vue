<template>
    <App>
    <div class="overflow-x-hidden">

        <!-- ═══════════════════════════════════════
             HERO
        ═══════════════════════════════════════ -->
        <section class="relative min-h-[92vh] flex items-center overflow-hidden">

            <!-- Layered background blobs -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/6 via-base-100 to-secondary/8 pointer-events-none"></div>
            <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl bg-primary/12 pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl bg-secondary/10 pointer-events-none"></div>

            <!-- Floating dot grid -->
            <div class="absolute inset-0 pointer-events-none opacity-40"
                 style="background-image: radial-gradient(circle, oklch(76% 0.18 128 / 0.25) 1.5px, transparent 1.5px); background-size: 36px 36px;"></div>

            <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full py-20 lg:py-28">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <!-- Left: Text -->
                    <div>
                        <!-- Badge -->
                        <motion.div
                            :initial="{ opacity: 0, y: 20 }"
                            :animate="{ opacity: 1, y: 0 }"
                            :transition="{ duration: 0.5, ease: 'easeOut' }"
                            class="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-secondary px-4 py-2 rounded-full text-xs font-semibold mb-7"
                        >
                            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Welcome to CERIS Subdivision
                        </motion.div>

                        <!-- Headline — split text animation -->
                        <div class="mb-6">
                            <motion.h1
                                :initial="{ opacity: 0, y: 40 }"
                                :animate="{ opacity: 1, y: 0 }"
                                :transition="{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
                                class="text-5xl sm:text-6xl font-bold text-base-content leading-[1.1] tracking-tight"
                                style="font-family:'Instrument Sans',sans-serif;"
                            >
                                Your home.<br/>
                                Your
                                <motion.span
                                    :initial="{ opacity: 0, x: -20 }"
                                    :animate="{ opacity: 1, x: 0 }"
                                    :transition="{ duration: 0.6, delay: 0.35, ease: 'easeOut' }"
                                    class="relative text-primary inline-block"
                                >
                                    community.
                                    <!-- Underline squiggle -->
                                    <svg class="absolute -bottom-1 left-0 w-full overflow-visible" viewBox="0 0 240 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                        <motion.path
                                            d="M2 7 C40 3, 80 3, 120 6 C160 9, 200 3, 238 6"
                                            stroke="oklch(76% 0.18 128 / 0.55)"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            fill="none"
                                            :initial="{ pathLength: 0 }"
                                            :animate="{ pathLength: 1 }"
                                            :transition="{ duration: 0.9, delay: 0.7, ease: 'easeInOut' }"
                                        />
                                    </svg>
                                </motion.span>
                            </motion.h1>
                        </div>

                        <!-- Body -->
                        <motion.p
                            :initial="{ opacity: 0, y: 24 }"
                            :animate="{ opacity: 1, y: 0 }"
                            :transition="{ duration: 0.6, delay: 0.3, ease: 'easeOut' }"
                            class="text-base sm:text-lg text-base-content/60 leading-relaxed mb-9 max-w-md"
                        >
                            Stay updated with announcements, access resident resources, and enjoy everything CERIS has to offer — all in one convenient place.
                        </motion.p>

                        <!-- CTAs -->
                        <motion.div
                            :initial="{ opacity: 0, y: 20 }"
                            :animate="{ opacity: 1, y: 0 }"
                            :transition="{ duration: 0.5, delay: 0.45, ease: 'easeOut' }"
                            class="flex flex-wrap gap-3"
                        >
                            <a
                                href="/register"
                                class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content font-semibold rounded-2xl text-sm transition-all duration-200 hover:brightness-105 hover:-translate-y-0.5"
                                style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.45);"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                                Join the Portal
                            </a>
                            <a
                                href="#announcements"
                                class="inline-flex items-center gap-2 px-6 py-3 bg-base-100 border border-base-300 text-base-content/70 font-medium rounded-2xl text-sm hover:bg-base-200 hover:border-primary/30 transition-all duration-200"
                            >
                                View Announcements
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                </svg>
                            </a>
                        </motion.div>

                        <!-- Stats row -->
                        <motion.div
                            :initial="{ opacity: 0 }"
                            :animate="{ opacity: 1 }"
                            :transition="{ duration: 0.6, delay: 0.65 }"
                            class="flex gap-8 mt-12 pt-8 border-t border-base-200"
                        >
                            <motion.div
                                v-for="(stat, i) in heroStats" :key="stat.label"
                                :initial="{ opacity: 0, y: 16 }"
                                :animate="{ opacity: 1, y: 0 }"
                                :transition="{ duration: 0.5, delay: 0.7 + i * 0.1, ease: 'easeOut' }"
                            >
                                <p class="text-2xl font-bold text-base-content" style="font-family:'Instrument Sans',sans-serif;">{{ stat.value }}</p>
                                <p class="text-xs text-base-content/45 font-medium mt-0.5">{{ stat.label }}</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <!-- Right: Floating cards panel -->
                    <div class="hidden lg:flex flex-col gap-4 relative pl-8">
                        <!-- Logo showcase card -->
                        <motion.div
                            :initial="{ opacity: 0, x: 40, y: -20 }"
                            :animate="{ opacity: 1, x: 0, y: 0 }"
                            :transition="{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }"
                            class="bg-base-100 border border-base-200 rounded-3xl p-6 shadow-xl flex items-center gap-5"
                        >
                            <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-md shrink-0 bg-base-100 p-1">
                                <img :src="logoUrl" alt="CERIS" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p class="font-bold text-base-content text-base" style="font-family:'Instrument Sans',sans-serif;">CERIS HOA Inc.</p>
                                <p class="text-xs text-base-content/50 mt-0.5">Canlubang, Calamba City, Laguna</p>
                                <div class="flex items-center gap-1.5 mt-2">
                                    <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    <span class="text-xs text-secondary font-semibold">Established & Active</span>
                                </div>
                            </div>
                        </motion.div>

                        <!-- Next board meeting -->
                        <motion.div
                            :initial="{ opacity: 0, x: 40 }"
                            :animate="{ opacity: 1, x: 0 }"
                            :transition="{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }"
                            class="bg-secondary rounded-3xl p-6 shadow-xl text-secondary-content"
                        >
                            <p class="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70 mb-2">Next Board Meeting</p>
                            <p class="text-4xl font-bold leading-none mb-1.5" style="font-family:'Instrument Sans',sans-serif;">Apr 12</p>
                            <p class="text-sm opacity-75">Clubhouse · 7:00 PM</p>
                            <div class="mt-4 bg-white/15 rounded-xl px-4 py-2 text-xs font-medium">
                                Add to calendar →
                            </div>
                        </motion.div>

                        <!-- Pool status -->
                        <motion.div
                            :initial="{ opacity: 0, x: 40, y: 20 }"
                            :animate="{ opacity: 1, x: 0, y: 0 }"
                            :transition="{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }"
                            class="bg-base-100 border border-base-200 rounded-3xl p-5 shadow-xl"
                        >
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-xl">🏊</div>
                                <div>
                                    <p class="font-semibold text-sm text-base-content">Community Pool</p>
                                    <p class="text-[11px] text-base-content/50">Open Today</p>
                                </div>
                                <div class="ml-auto">
                                    <span class="badge badge-primary badge-sm rounded-full text-[10px] font-bold">Open</span>
                                </div>
                            </div>
                            <div class="text-xs font-medium text-base-content/55 bg-base-200/60 rounded-xl px-3 py-2 text-center">
                                6:00 AM – 9:00 PM
                            </div>
                        </motion.div>

                        <!-- Homes count -->
                        <motion.div
                            :initial="{ opacity: 0, x: 40, y: 30 }"
                            :animate="{ opacity: 1, x: 0, y: 0 }"
                            :transition="{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }"
                            class="bg-primary rounded-3xl p-5 shadow-xl text-primary-content flex items-center gap-4"
                        >
                            <div>
                                <p class="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-0.5">Registered Homes</p>
                                <p class="text-3xl font-bold" style="font-family:'Instrument Sans',sans-serif;">1,240+</p>
                            </div>
                            <div class="ml-auto text-4xl opacity-30">🏡</div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════
             ANNOUNCEMENTS
        ═══════════════════════════════════════ -->
        <section id="announcements" class="py-20 bg-base-100">
            <div class="max-w-7xl mx-auto px-6 sm:px-8">

                <FadeIn class="flex items-end justify-between mb-12">
                    <div>
                        <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Latest Updates</p>
                        <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight" style="font-family:'Instrument Sans',sans-serif;">
                            Announcements
                        </h2>
                    </div>
                    <a href="/announcements" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-base-content/50 hover:text-primary transition-colors">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </a>
                </FadeIn>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">

                    <!-- Featured -->
                    <FadeIn :delay="0.05" class="lg:col-span-3">
                        <div class="h-full bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/15 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-center gap-2 mb-5">
                                <span :class="badgeClass(announcements[0].category)" class="badge badge-sm rounded-full font-semibold">{{ announcements[0].category }}</span>
                                <span class="text-xs text-base-content/35 ml-auto">{{ announcements[0].date }}</span>
                            </div>
                            <div class="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center text-3xl mb-5">{{ announcements[0].icon }}</div>
                            <h3 class="text-xl font-bold text-base-content mb-3 leading-snug" style="font-family:'Instrument Sans',sans-serif;">
                                {{ announcements[0].title }}
                            </h3>
                            <p class="text-sm text-base-content/60 leading-relaxed flex-1">{{ announcements[0].excerpt }}</p>
                            <a href="#" class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                </svg>
                            </a>
                        </div>
                    </FadeIn>

                    <!-- Side cards -->
                    <div class="lg:col-span-2 flex flex-col gap-4">
                        <FadeIn
                            v-for="(item, i) in announcements.slice(1)" :key="item.id"
                            :delay="0.1 + i * 0.1"
                        >
                            <div class="bg-base-100 border border-base-200 rounded-2xl p-5 flex gap-4 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer group">
                                <div class="w-11 h-11 rounded-xl bg-base-200 group-hover:bg-primary/10 flex items-center justify-center text-xl shrink-0 transition-colors">
                                    {{ item.icon }}
                                </div>
                                <div class="min-w-0">
                                    <div class="flex items-center gap-2 mb-1.5">
                                        <span :class="badgeClass(item.category)" class="badge badge-xs rounded-full font-semibold">{{ item.category }}</span>
                                        <span class="text-[10px] text-base-content/35 ml-auto shrink-0">{{ item.date }}</span>
                                    </div>
                                    <p class="text-sm font-semibold text-base-content leading-snug mb-1">{{ item.title }}</p>
                                    <p class="text-xs text-base-content/55 leading-relaxed line-clamp-2">{{ item.excerpt }}</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════
             AMENITIES
        ═══════════════════════════════════════ -->
        <section id="amenities" class="py-20 bg-base-200/50">
            <div class="max-w-7xl mx-auto px-6 sm:px-8">

                <FadeIn class="text-center mb-14">
                    <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Life at CERIS</p>
                    <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight mb-4" style="font-family:'Instrument Sans',sans-serif;">
                        Subdivision Amenities
                    </h2>
                    <p class="text-base text-base-content/55 max-w-sm mx-auto leading-relaxed">
                        Everything you need for a comfortable and fulfilling community life.
                    </p>
                </FadeIn>

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <FadeIn
                        v-for="(amenity, i) in amenities" :key="amenity.name"
                        :delay="i * 0.06"
                    >
                        <div class="bg-base-100 border border-base-200/80 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default group h-full">
                            <div
                                class="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200"
                                :style="{ background: amenity.bg }"
                            >{{ amenity.icon }}</div>
                            <p class="text-sm font-semibold text-base-content mb-0.5">{{ amenity.name }}</p>
                            <p class="text-[11px] text-base-content/45 font-medium">{{ amenity.hours }}</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════
             BOARD & GOVERNANCE
        ═══════════════════════════════════════ -->
        <section id="board" class="py-20 bg-base-100">
            <div class="max-w-7xl mx-auto px-6 sm:px-8">

                <FadeIn class="mb-12">
                    <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Leadership</p>
                    <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight" style="font-family:'Instrument Sans',sans-serif;">
                        Board & Governance
                    </h2>
                </FadeIn>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">

                    <!-- Board members -->
                    <div>
                        <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/30 mb-6">2024–2025 Board of Directors</p>
                        <div class="space-y-3">
                            <FadeIn v-for="(member, i) in boardMembers" :key="member.name" :delay="i * 0.07">
                                <div class="flex items-center gap-4 p-4 rounded-2xl border border-base-200 hover:border-primary/20 hover:bg-base-200/40 transition-all duration-200 group">
                                    <div
                                        class="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm text-primary-content shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                                        :style="{ background: `linear-gradient(135deg, oklch(76% 0.18 128), oklch(50% 0.13 ${148 + i * 5}))` }"
                                    >{{ initials(member.name) }}</div>
                                    <div class="flex-1">
                                        <p class="text-sm font-semibold text-base-content">{{ member.name }}</p>
                                        <p class="text-xs text-base-content/50 mt-0.5">{{ member.role }}</p>
                                    </div>
                                    <span v-if="i === 0" class="badge badge-primary badge-sm rounded-full text-[10px] font-semibold hidden sm:flex">President</span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    <!-- Upcoming meetings -->
                    <div>
                        <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/30 mb-6">Upcoming Meetings</p>
                        <div class="space-y-4 mb-6">
                            <FadeIn v-for="(meeting, i) in meetings" :key="meeting.date" :delay="i * 0.1">
                                <div class="flex items-center gap-4 p-5 bg-base-100 border border-base-200 rounded-2xl hover:border-primary/25 hover:shadow-sm transition-all duration-200">
                                    <div class="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex flex-col items-center justify-center shrink-0">
                                        <span class="text-[9px] font-bold uppercase tracking-widest text-primary/65">{{ meeting.month }}</span>
                                        <span class="text-2xl font-bold text-primary leading-none">{{ meeting.day }}</span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-semibold text-base-content mb-0.5">{{ meeting.title }}</p>
                                        <p class="text-xs text-base-content/50">{{ meeting.time }} · {{ meeting.venue }}</p>
                                    </div>
                                    <a href="/meetings" class="w-8 h-8 rounded-xl hover:bg-primary/10 flex items-center justify-center text-base-content/30 hover:text-primary transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                        </svg>
                                    </a>
                                </div>
                            </FadeIn>
                        </div>
                        <a href="/documents" class="inline-flex items-center gap-2 px-5 py-2.5 border border-base-300 text-sm font-medium text-base-content/60 rounded-xl hover:bg-base-200 hover:border-primary/25 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                            </svg>
                            View Meeting Minutes
                        </a>
                    </div>

                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════
             CONTACT
        ═══════════════════════════════════════ -->
        <section id="contact" class="py-20 bg-base-200/50">
            <div class="max-w-5xl mx-auto px-6 sm:px-8">

                <FadeIn class="text-center mb-14">
                    <p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Reach Out</p>
                    <h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight mb-4" style="font-family:'Instrument Sans',sans-serif;">
                        Contact the HOA
                    </h2>
                    <p class="text-base text-base-content/55 max-w-sm mx-auto">
                        Our office is ready to help with your concerns, inquiries, and service requests.
                    </p>
                </FadeIn>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    <!-- Info cards -->
                    <div class="space-y-4">
                        <FadeIn v-for="(info, i) in contactInfo" :key="info.label" :delay="i * 0.08">
                            <div class="flex items-center gap-4 p-5 bg-base-100 border border-base-200 rounded-2xl hover:border-primary/20 transition-colors">
                                <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-xl shrink-0">{{ info.icon }}</div>
                                <div>
                                    <p class="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-0.5">{{ info.label }}</p>
                                    <component
                                        :is="info.href ? 'a' : 'p'"
                                        :href="info.href || undefined"
                                        class="text-sm font-medium text-base-content/75"
                                        :class="info.href ? 'hover:text-primary transition-colors' : ''"
                                    >{{ info.value }}</component>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <!-- Form -->
                    <FadeIn :delay="0.15">
                        <div class="bg-base-100 border border-base-200 rounded-3xl p-8 shadow-sm">
                            <h3 class="text-base font-bold text-base-content mb-6" style="font-family:'Instrument Sans',sans-serif;">
                                Send us a Message
                            </h3>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">Full Name</label>
                                    <input
                                        v-model="form.name" type="text" placeholder="John Doe"
                                        class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100 transition-all placeholder:text-base-content/25"
                                    />
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">Email Address</label>
                                    <input
                                        v-model="form.email" type="email" placeholder="johndoe@example.com"
                                        class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100 transition-all placeholder:text-base-content/25"
                                    />
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">Message</label>
                                    <textarea
                                        v-model="form.message" rows="4" placeholder="How can we help you?"
                                        class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:bg-base-100 transition-all placeholder:text-base-content/25 resize-none"
                                    ></textarea>
                                </div>
                                <motion.button
                                    @click="submitForm"
                                    :whileHover="{ scale: 1.02 }"
                                    :whileTap="{ scale: 0.98 }"
                                    class="w-full py-3 bg-primary text-primary-content text-sm font-semibold rounded-2xl transition-all duration-200 cursor-pointer"
                                    style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);"
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════
             CTA STRIP
        ═══════════════════════════════════════ -->
        <section class="relative py-16 overflow-hidden">
            <!-- Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary"></div>
            <div class="absolute inset-0 opacity-20"
                 style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 28px 28px;"></div>

            <FadeIn class="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
                <div class="w-16 h-16 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl mx-auto mb-6 bg-white p-1">
                    <img :src="logoUrl" alt="CERIS" class="w-full h-full object-contain" />
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight" style="font-family:'Instrument Sans',sans-serif;">
                    Not yet on the Resident Portal?
                </h2>
                <p class="text-white/70 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
                    Register to pay dues, submit concerns, access documents, and stay connected with your community.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-3">
                    <motion.a
                        href="/register"
                        :whileHover="{ scale: 1.04, y: -2 }"
                        :whileTap="{ scale: 0.97 }"
                        class="px-7 py-3 bg-white text-secondary font-bold rounded-2xl shadow-lg text-sm"
                    >
                        Create an Account
                    </motion.a>
                    <motion.a
                        href="/contact"
                        :whileHover="{ scale: 1.04, y: -2 }"
                        :whileTap="{ scale: 0.97 }"
                        class="px-7 py-3 border-2 border-white/30 text-white font-semibold rounded-2xl text-sm hover:border-white/60 transition-colors"
                    >
                        Contact Us First
                    </motion.a>
                </div>
            </FadeIn>
        </section>

    </div>
    </App>
</template>

<script setup>
import { reactive } from 'vue'
import { motion } from 'motion-v'
import FadeIn from '@/components/FadeIn.vue'
import App from '@/Pages/layouts/App.vue'
import { logoUrl } from '@/constants/branding'

// ── Data ──────────────────────────────────────────────


const heroStats = [
    { value: '1,240+', label: 'Registered homes' },
    { value: '8',      label: 'Amenities'         },
    { value: '24/7',   label: 'Security'           },
]

const announcements = [
    {
        id: 1, icon: '🚧',
        category: 'Important',
        date: 'Mar 28, 2025',
        title: 'Road Reblocking: Phase 2 Now Underway',
        excerpt: 'Works continue along Sampaguita and Rosal Streets starting April 5. Expect minor traffic delays and plan alternate routes during morning and evening peaks. Estimated completion: end of April.',
    },
    {
        id: 2, icon: '🎉',
        category: 'Events',
        date: 'Mar 24, 2025',
        title: 'Foundation Day Celebration — April 20',
        excerpt: 'Join us at the clubhouse grounds for games, food stalls, and live entertainment for the whole family.',
    },
    {
        id: 3, icon: '📋',
        category: 'Reminder',
        date: 'Mar 18, 2025',
        title: 'Q2 Association Dues: Deadline April 30',
        excerpt: 'Settle your second-quarter dues before April 30 to avoid penalties. Pay online via the Resident Portal.',
    },
]

const amenities = [
    { name: 'Swimming Pool',    icon: '🏊', hours: 'Daily · 6 AM – 9 PM',    bg: 'oklch(93% 0.04 215)' },
    { name: 'Basketball Court', icon: '🏀', hours: 'Daily · 6 AM – 10 PM',   bg: 'oklch(94% 0.05 60)'  },
    { name: 'Clubhouse',        icon: '🏛️', hours: 'By reservation',          bg: 'oklch(93% 0.04 128)' },
    { name: 'Playground',       icon: '🛝', hours: 'Daily · 6 AM – 8 PM',    bg: 'oklch(94% 0.05 85)'  },
    { name: 'Jogging Path',     icon: '🏃', hours: 'Open 24 hours',           bg: 'oklch(93% 0.04 148)' },
    { name: 'Function Hall',    icon: '🎉', hours: 'By reservation',          bg: 'oklch(94% 0.04 310)' },
    { name: 'Security Post',    icon: '🛡️', hours: 'Open 24 hours',           bg: 'oklch(93% 0.03 240)' },
    { name: 'Waste Station',    icon: '♻️', hours: 'Mon, Wed & Fri',          bg: 'oklch(93% 0.05 160)' },
]

const boardMembers = [
    { name: 'John Doe',   role: 'President'      },
    { name: 'Jane Doe',   role: 'Vice President' },
    { name: 'Alex Doe',   role: 'Secretary'      },
    { name: 'Sam Doe',    role: 'Treasurer'      },
    { name: 'Taylor Doe', role: 'Auditor'        },
]

const meetings = [
    { month: 'Apr', day: '12', title: 'Regular Board Meeting', time: '7:00 PM', venue: 'Clubhouse'    },
    { month: 'May', day: '10', title: 'Regular Board Meeting', time: '7:00 PM', venue: 'Clubhouse'    },
    { month: 'Jun', day: '28', title: 'General Assembly',      time: '4:00 PM', venue: 'Function Hall' },
]

const contactInfo = [
    { icon: '📍', label: 'Address',      value: 'Canlubang, Calamba City, Laguna', href: null },
    { icon: '✉️',  label: 'Email',        value: 'admin@cerishoa.com',  href: 'mailto:admin@cerishoa.com' },
    { icon: '📞', label: 'Phone',        value: '(046) 123-4567',      href: 'tel:+63461234567' },
    { icon: '🕐', label: 'Office Hours', value: 'Mon – Fri · 8:00 AM – 5:00 PM', href: null },
]

const form = reactive({ name: '', email: '', message: '' })

// ── Helpers ──────────────────────────────────────────

function badgeClass(cat) {
    return { Important: 'badge-error', Events: 'badge-primary', Reminder: 'badge-warning' }[cat] ?? 'badge-ghost'
}

function initials(name) {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('')
}

function submitForm() {
    console.log('Submitted:', { ...form })
}
</script>
