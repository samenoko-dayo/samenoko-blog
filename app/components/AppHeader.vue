<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()

// Close menu when route changes
watch(() => route.path, () => {
  isOpen.value = false
})

// Close menu on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Prevent body scroll when menu is open
watch(isOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})
</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 transition-colors">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <NuxtLink to="/"
        class="text-lg font-bold tracking-tight text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center gap-2">
        samenoko-dayo
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
        <NuxtLink to="/" class="hover:text-slate-900 transition-all active:scale-95"
          active-class="text-slate-900">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-slate-900 transition-all active:scale-95"
          active-class="text-slate-900">About</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-slate-900 transition-all active:scale-95"
          active-class="text-slate-900">Blog</NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen"
        class="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-950 transition-all active:scale-90 z-[60]"
        aria-label="Menu"
      >
        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Popup Menu -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div v-if="isOpen" class="fixed inset-0 z-[55] flex items-center justify-center p-6">
          <!-- Backdrop -->
          <div @click="isOpen = false" class="absolute inset-0 bg-slate-950/60 backdrop-blur-md"></div>
          
          <!-- Content -->
          <div class="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-8 overflow-hidden">
            <div class="mb-8 text-center">
              <div class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Menu</div>
              <div class="h-1 w-8 bg-slate-900 mx-auto rounded-full"></div>
            </div>

            <nav class="flex flex-col gap-3">
              <NuxtLink 
                to="/" 
                class="flex items-center gap-4 p-4 rounded-2xl text-lg font-bold text-slate-900 hover:bg-slate-50 transition-all active:scale-95"
                active-class="bg-slate-50 !text-slate-950 ring-1 ring-slate-200"
              >
                <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-active:bg-slate-200 transition-colors">
                  <Icon name="lucide:house" class="w-5 h-5 text-slate-600" />
                </div>
                Home
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class="flex items-center gap-4 p-4 rounded-2xl text-lg font-bold text-slate-900 hover:bg-slate-50 transition-all active:scale-95"
                active-class="bg-slate-50 !text-slate-950 ring-1 ring-slate-200"
              >
                <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon name="lucide:user" class="w-5 h-5 text-slate-600" />
                </div>
                About
              </NuxtLink>
              <NuxtLink 
                to="/blog" 
                class="flex items-center gap-4 p-4 rounded-2xl text-lg font-bold text-slate-900 hover:bg-slate-50 transition-all active:scale-95"
                active-class="bg-slate-50 !text-slate-950 ring-1 ring-slate-200"
              >
                <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon name="lucide:book-open" class="w-5 h-5 text-slate-600" />
                </div>
                Blog
              </NuxtLink>
            </nav>

            <div class="mt-10">
              <button 
                @click="isOpen = false"
                class="w-full py-4 bg-slate-950 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
