<script setup lang="ts"></script>

<template>
  <div
    class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm lg:mt-6"
  >
    <h2
      class="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3"
    >
      <span class="w-1 h-3 bg-slate-900 rounded-full"></span>
      管理人
    </h2>
    <div class="flex flex-row items-center gap-4">
      <NuxtImg
        src="/images/icon.jpg"
        alt="アイコン"
        class="w-16 h-16 rounded-full border-4 border-slate-200 self-start"
      />
      <div class="flex flex-col">
        <span class="font-bold">samenoko-dayo</span>
        <span class="text-sm text-slate-600 font-medium mt-1"
          >18歳の無職です。<br />Pythonとフロントエンドを少しだけ書きます。</span
        >
      </div>
    </div>
  </div>
</template>
