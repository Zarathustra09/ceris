<template>
    <motion.div
        :initial="{ opacity: 0, y: distance }"
        :animate="inView ? { opacity: 1, y: 0 } : {}"
        :transition="{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }"
        :class="className"
        ref="elRef"
    >
        <slot />
    </motion.div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { motion } from 'motion-v'

const props = defineProps({
    delay:    { type: Number, default: 0 },
    distance: { type: Number, default: 32 },
    className:{ type: String, default: '' },
    once:     { type: Boolean, default: true },
})

const inView = ref(false)
const elRef  = ref(null)

let observer

onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                inView.value = true
                if (props.once) observer.disconnect()
            } else if (!props.once) {
                inView.value = false
            }
        },
        { threshold: 0.15 }
    )
    if (elRef.value?.$el) observer.observe(elRef.value.$el)
})

onUnmounted(() => observer?.disconnect())
</script>
