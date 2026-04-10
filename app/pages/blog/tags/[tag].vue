<script setup lang="ts">
const route = useRoute()
const tagParam = computed(() => route.params.tag as string)

const { data: posts } = await useAsyncData(`posts-tag-${tagParam.value}`, () => {
  // Use a simple query and filter in JavaScript since complex nested path queries can be tricky
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  return posts.value.filter(post => 
    post.tags?.some((t: any) => t.name === tagParam.value)
  )
})

const breadcrumbs = [
  { label: 'ブログ', to: '/blog' },
  { label: 'タグ', to: '/blog/tags' },
  { label: `#${tagParam.value}` }
]

useSeoMeta({
  title: `#${tagParam.value} - タグ - samenoko-dayo`,
  description: `#${tagParam.value} が付いたすべての記事を表示しています。`
})
</script>

<template>
  <div class="max-w-7xl mx-auto space-y-8">
    <AppBreadcrumbs :items="breadcrumbs" />

    <header class="mb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold uppercase tracking-widest mb-4 border border-slate-200">
        <Icon name="lucide:tag" class="text-xs" />
        タグアーカイブ
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 flex items-center gap-4">
        #{{ tagParam }}
        <span v-if="filteredPosts.length" class="text-xl font-medium text-slate-400">
          ({{ filteredPosts.length }} 件の記事)
        </span>
      </h1>
      <p class="text-slate-600 text-lg max-w-2xl">
        <span class="font-bold text-slate-900">{{ tagParam }}</span> に関連するすべての記事を表示しています。
      </p>
    </header>

    <section>
      <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>

      <div v-else class="py-20 text-center border border-dashed border-slate-200 rounded-2xl bg-white">
        <div class="text-4xl mb-4 text-slate-300">
          <Icon name="lucide:search-x" />
        </div>
        <p class="text-slate-500">このタグが付いた記事は見つかりませんでした。</p>
        <NuxtLink to="/blog/tags" class="mt-6 inline-block text-slate-900 font-bold underline underline-offset-4 decoration-slate-200 hover:decoration-slate-900 transition-all">
          すべてのタグを見る
        </NuxtLink>
      </div>
    </section>

    <div class="mt-16 text-center">
      <NuxtLink to="/blog/tags"
        class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 duration-200">
        <Icon name="lucide:tag" />
        すべてのトピックを探索する
      </NuxtLink>
    </div>
  </div>
</template>
