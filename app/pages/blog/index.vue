<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog").order("date", "DESC").all(),
);

const breadcrumbs = [{ label: "ブログ" }];
</script>

<template>
  <div class="space-y-8 max-w-7xl mx-auto">
    <AppBreadcrumbs :items="breadcrumbs" />

    <section>
      <h2
        class="text-2xl font-bold tracking-tight text-slate-900 mb-8 flex items-center gap-3"
      >
        <span class="w-1.5 h-6 bg-slate-900 rounded-full"></span>
        アーカイブ
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />

        <!-- Empty state -->
        <div
          v-if="!posts || posts.length === 0"
          class="col-span-full py-24 text-center text-slate-400 border border-dashed border-slate-200 rounded-[2rem] bg-white"
        >
          <div class="text-5xl mb-6 text-slate-200">
            <Icon name="lucide:text-search" />
          </div>
          <p class="font-medium text-lg">記事が見つかりませんでした。</p>
        </div>
      </div>
    </section>
  </div>
</template>
