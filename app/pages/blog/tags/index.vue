<script setup lang="ts">
const { data: posts } = await useAsyncData('all-tags', () => 
  queryCollection('blog').all()
)

// Extract unique tags and count them
const tagsMap = computed(() => {
  const map = new Map<string, number>()
  if (!posts.value) return []
  
  posts.value.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        const count = map.get(tag.name) || 0
        map.set(tag.name, count + 1)
      })
    }
  })
  
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
})

const breadcrumbs = [
  { label: 'ブログ', to: '/blog' },
  { label: 'タグ' }
]

useSeoMeta({
  title: 'タグ一覧 - samenoko-dayo',
  description: 'カテゴリやタグから記事を探す。'
})
</script>

<template>
  <div class="max-w-7xl mx-auto space-y-8">
    <AppBreadcrumbs :items="breadcrumbs" />

    <header class="mb-12">
      <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
        タグ一覧
      </h1>
      <p class="text-slate-600 text-lg">
        トピックから記事を探す。
      </p>
    </header>

    <div v-if="tagsMap.length > 0" class="flex flex-wrap gap-4">
      <NuxtLink 
        v-for="tag in tagsMap" 
        :key="tag.name"
        :to="`/blog/tags/${tag.name}`"
        class="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
      >
        <span class="text-slate-900 font-bold group-hover:text-slate-600 transition-colors">
          #{{ tag.name }}
        </span>
        <span class="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-black rounded-lg group-hover:bg-slate-950 group-hover:text-white transition-all">
          {{ tag.count }}
        </span>
      </NuxtLink>
    </div>

    <div v-else class="py-20 text-center border border-dashed border-slate-200 rounded-2xl bg-white">
      <div class="text-4xl mb-4 text-slate-300">
        <Icon name="lucide:tag" />
      </div>
      <p class="text-slate-500">タグが見つかりませんでした。</p>
    </div>

    <div class="mt-16 text-center">
      <NuxtLink to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 duration-200">
        <Icon name="lucide:arrow-left" />
        ブログ一覧へ戻る
      </NuxtLink>
    </div>
  </div>
</template>
