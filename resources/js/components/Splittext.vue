<template>
    <p :class="className" aria-label="text" role="heading">
    <span
        v-for="(wordObj, wIdx) in words"
        :key="wIdx"
        class="inline-block whitespace-nowrap"
    >
      <motion.span
          v-for="(char, cIdx) in wordObj.chars"
          :key="cIdx"
          tag="span"
          class="inline-block"
          :initial="{ opacity: 0, y: 40, filter: 'blur(8px)' }"
          :animate="inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}"
          :transition="{
          duration: 0.5,
          delay: (wIdx * wordObj.chars.length + cIdx) * delay,
          ease: [0.25, 0.1, 0.25, 1],
        }"
      >{{ char }}</motion.span>
      <span class="inline-block">&nbsp;</span>
    </span>
    </p>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { motion } from 'motion-v'

const props = defineProps({
    text:      { type: String,  default: '' },
    className: { type: String,  default: '' },
    delay:     { type: Number,  default: 0.03 },
})

const inView = ref(false)
const el = ref(null)

const words = computed(() =>
    props.text.split(' ').map(word => ({
        chars: word.split(''),
    }))
)

onMounted(() => {
    // Trigger as soon as component mounts (page-load animation)
    requestAnimationFrame(() => { inView.value = true })
})
</script>
