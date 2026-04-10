<script setup lang="ts">
const props = defineProps<{
  post: {
    id?: string;
    path: string;
    title?: string;
    description?: string;
    date?: string | Date;
    tags?: { name: string }[];
    [key: string]: any;
  }
}>()

const router = useRouter()
const goToTag = (tagName: string) => {
  router.push(`/blog/tags/${tagName}`)
}
</script>

<template>
  <NuxtLink :to="post.path"
    class="group bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-400 transition-all duration-300 flex flex-col h-full">
    
    <div v-if="post.date" class="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
      <Icon name="lucide:calendar" class="w-4 h-4" />
      {{ new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.') }}
    </div>

    <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors line-clamp-2">
      {{ post.title }}
    </h3>

    <p v-if="post.description" class="text-slate-600 text-sm line-clamp-2 mb-6 leading-relaxed">
      {{ post.description }}
    </p>

    <div v-if="post.tags && post.tags.length > 0" class="mt-auto pt-4 flex flex-wrap gap-2 border-t border-slate-100">
      <span v-for="tag in post.tags" :key="tag.name"
        @click.stop.prevent="goToTag(tag.name)"
        class="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md hover:bg-slate-950 hover:text-white transition-all cursor-pointer">
        #{{ tag.name }}
      </span>
    </div>
  </NuxtLink>
</template>
