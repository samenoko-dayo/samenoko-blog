<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, async () => {
  const posts = await queryCollection('blog')
    .order('date', 'DESC')
    .select('path', 'title')
    .all()
  const index = posts.findIndex(p => p.path === route.path)
  return {
    next: index > 0 ? posts[index - 1] : null, // Newer
    prev: index < posts.length - 1 ? posts[index + 1] : null // Older
  }
})

useSeoMeta({
  title: post.value?.title ? `${post.value.title} - samenoko-dayo` : 'samenoko-dayo',
  description: post.value?.description,
  // ogImage: `https://ogen.samenoko.work/og?t=${post.value?.title}&d=${post.value?.description}`
})

defineOgImage("BlogOg.satori", {
  title: post.value?.title,
  description: post.value?.description,
}, {
  emojis: 'twemoji',
  fonts: ["Inter", "Noto Sans JP"]
})

const breadcrumbs = [
  { label: 'ブログ', to: '/blog' },
  { label: post.value?.title || '記事' }
]
</script>

<template>
  <article v-if="post" class="max-w-7xl mx-auto">
    <AppBreadcrumbs :items="breadcrumbs" />

    <header class="mb-12 text-center">
      <div v-if="post.date"
        class="text-slate-500 font-medium mb-4 tracking-wide uppercase text-sm flex items-center justify-center gap-2">
        <Icon name="lucide:calendar" />
        {{ new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }) }}
      </div>

      <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
        {{ post.title }}
      </h1>

      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap justify-center gap-2 mb-8">
        <NuxtLink v-for="tag in post.tags" :key="tag.name" :to="`/blog/tags/${tag.name}`"
          class="text-xs font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-lg border border-slate-200 hover:bg-slate-950 hover:text-white transition-all hover:scale-105 active:scale-95">
          #{{ tag.name }}
        </NuxtLink>
      </div>

      <p v-if="post.description" class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ post.description }}
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <!-- Main Content -->
      <div class="lg:col-span-8">
        <div
          class="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative [&>*:first-child]:mt-0! [&>div:first-child>*:first-child]:mt-0! prose-code:before:content-none prose-code:after:content-none">
          <ContentRenderer :value="post" />
        </div>
      </div>

      <!-- Sidebar TOC -->
      <aside class="hidden lg:block lg:col-span-4">
        <div class="sticky top-24">
          <TableOfContents v-if="post.body?.toc?.links" :links="post.body.toc.links" />
        </div>
      </aside>

      <!-- Mobile TOC (shown above content on small screens) -->
      <div class="lg:hidden order-first mb-8">
        <TableOfContents v-if="post.body?.toc?.links" :links="post.body.toc.links" />
      </div>
    </div>

    <!-- Pagination -->
    <nav v-if="surround && (surround.next || surround.prev)" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
      aria-label="Pagination">
      <NuxtLink v-if="surround.next" :to="surround.next.path"
        class="group flex flex-col items-start p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-md transition-all duration-300">
        <span
          class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2 group-hover:text-slate-600">
          <Icon name="lucide:arrow-left-circle" class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          次の記事
        </span>
        <span class="text-base font-extrabold text-slate-800 leading-snug group-hover:text-slate-950">{{
          surround.next.title }}</span>
      </NuxtLink>
      <div v-else class="hidden sm:block"></div>

      <NuxtLink v-if="surround.prev" :to="surround.prev.path"
        class="group flex flex-col items-end text-right p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-md transition-all duration-300 ml-auto w-full">
        <span
          class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2 group-hover:text-slate-600">
          前の記事
          <Icon name="lucide:arrow-right-circle" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
        <span class="text-base font-extrabold text-slate-800 leading-snug group-hover:text-slate-950">{{
          surround.prev.title }}</span>
      </NuxtLink>
    </nav>

    <div class="mt-16 text-center">
      <NuxtLink to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 duration-200">
        <Icon name="lucide:arrow-left" />
        ブログ一覧へ戻る
      </NuxtLink>
    </div>
  </article>
</template>
