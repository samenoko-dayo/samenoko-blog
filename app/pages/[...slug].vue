<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection("pages").path(route.path).first();
});

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

useSeoMeta({
  title: post.value?.title
    ? `${post.value.title} - samenoko-dayo`
    : "samenoko-dayo",
  description: post.value?.description,
});

const breadcrumbs = [{ label: post.value?.title || "Page" }];
</script>

<template>
  <article v-if="post" class="max-w-7xl mx-auto">
    <AppBreadcrumbs :items="breadcrumbs" />

    <header class="mb-16 text-center">
      <h1
        class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight"
      >
        {{ post.title }}
      </h1>
      <p
        v-if="post.description"
        class="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium"
      >
        {{ post.description }}
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-8">
        <div
          class="prose prose-slate max-w-none bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 relative [&>*:first-child]:mt-0! [&>div:first-child>*:first-child]:mt-0!"
        >
          <ContentRenderer :value="post" />
        </div>
      </div>

      <!-- Sidebar TOC -->
      <aside class="hidden lg:block lg:col-span-4">
        <div class="sticky top-28">
          <TableOfContents
            v-if="post.body?.toc?.links"
            :links="post.body.toc.links"
          />
        </div>
      </aside>

      <!-- Mobile TOC (shown above content on small screens) -->
      <div class="lg:hidden order-first mb-12">
        <TableOfContents
          v-if="post.body?.toc?.links"
          :links="post.body.toc.links"
        />
      </div>
    </div>

    <div class="mt-20 text-center">
      <NuxtLink
        to="/"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200"
      >
        <Icon
          name="lucide:arrow-left"
          class="group-hover:-translate-x-1 transition-transform"
        />
        トップへ戻る
      </NuxtLink>
    </div>
  </article>
</template>
