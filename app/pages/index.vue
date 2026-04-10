<script setup lang="ts">
useSeoMeta({
  title: "samenoko-dayo",
  description: "ブログメインなポートフォリオ擬き",
  ogImage: `https://ogen.samenoko.work/og?t=samenoko-dayo&d=ブログメインなポートフォリオ擬き`
});

const { data: posts } = await useAsyncData("home-posts", () =>
  queryCollection("blog").order("date", "DESC").limit(6).all(),
);
</script>

<template>
  <div class="space-y-12">
    <section
      class="text-center py-20 md:py-32 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
    >
      <!-- Decorative background element -->
      <div
        class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl"
      ></div>

      <div class="relative z-10 px-6">
        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 mb-8"
        >
          <span class="text-slate-400">samenoko-dayo</span>
        </h1>
        <p
          class="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          ブログメインなポートフォリオ擬き
        </p>
        <div class="mt-12 flex justify-center">
          <NuxtLink
            to="/portfolio"
            class="group px-8 py-4 bg-slate-950 text-white rounded-2xl font-bold transition-all hover:bg-slate-800 active:scale-95 shadow-xl shadow-slate-200 flex items-center gap-3"
          >
            ポートフォリオを見る
            <Icon
              name="lucide:arrow-right"
              class="group-hover:translate-x-1 transition-transform"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section>
      <div class="flex items-center justify-between mb-10">
        <h2
          class="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-4"
        >
          <span class="w-1.5 h-6 bg-slate-950 rounded-full"></span>
          最新の記事
        </h2>
        <NuxtLink
          to="/blog"
          class="group text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-all active:scale-95 flex items-center gap-2"
        >
          すべての記事
          <Icon
            name="lucide:arrow-right"
            class="group-hover:translate-x-1 transition-transform"
          />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />

        <!-- Empty state -->
        <div
          v-if="!posts || posts.length === 0"
          class="col-span-full py-24 text-center text-slate-400 border border-dashed border-slate-200 rounded-[2rem] bg-white"
        >
          <div class="text-5xl mb-6 text-slate-200">
            <Icon name="lucide:search" />
          </div>
          <p class="font-medium text-lg">記事が見つかりませんでした。</p>
        </div>
      </div>
    </section>
  </div>
</template>
