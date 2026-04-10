<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <nav class="flex mb-8 overflow-x-auto whitespace-nowrap pb-2 sm:pb-0" aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
      <li class="flex items-center">
        <NuxtLink to="/" class="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1">
          <Icon name="lucide:house" class="text-sm" />
          ホーム
        </NuxtLink>
      </li>

      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <Icon name="lucide:chevron-right" class="text-slate-300 text-sm" />
        <NuxtLink v-if="item.to" :to="item.to" class="text-slate-400 hover:text-slate-900 transition-colors">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-slate-900 truncate max-w-[200px] sm:max-w-md">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>