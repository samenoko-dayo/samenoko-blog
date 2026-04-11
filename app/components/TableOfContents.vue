<script setup lang="ts">
defineProps<{
  links: { id: string; text: string; depth: number }[]
}>()
</script>

<template>
  <nav v-if="links && links.length > 0" class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
    <h2 class="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3">
      <span class="w-1 h-3 bg-slate-900 rounded-full"></span>
      もくじ
    </h2>
    <ul class="space-y-3">
      <li v-for="link in links" :key="link.id" :class="[
        'text-sm transition-all',
        link.depth === 2 ? 'font-bold' : 'font-medium ml-4'
      ]">
        <a :href="`#${link.id}`"
          class="group flex items-center gap-2 text-slate-600 hover:text-slate-950 transition-colors">
          <span class="opacity-0 group-hover:opacity-100 -ml-4 transition-all duration-300 text-slate-900 text-[10px]">
            <Icon name="lucide:arrow-right" />
          </span>
          <span class="underline decoration-transparent hover:decoration-slate-200 underline-offset-4 transition-all">
            {{ link.text }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
