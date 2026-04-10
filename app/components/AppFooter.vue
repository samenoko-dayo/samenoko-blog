<template>
  <footer class="border-t border-slate-200 mt-auto bg-white">
    <div class="max-w-4xl mx-auto px-6 py-10 text-center">
      <div class="text-sm font-medium text-slate-500">
        &copy; {{ new Date().getFullYear() }} samenoko-dayo.
      </div>
      <div class="mt-4 flex justify-center gap-6">
        <a href="https://github.com/samenoko-dayo/samenoko-blog" target="_blank" class="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub Repository">
          <Icon name="lucide:github" class="w-5 h-5" />
        </a>
      </div>
      <div class="mt-4 text-xs text-slate-400">
        Powered by 
        <a href="https://nuxt.com/" target="_blank" class="hover:text-slate-900 underline decoration-slate-200 underline-offset-4 transition-colors">Nuxt</a> 
        & 
        <a href="https://pages-cms.vercel.app/" target="_blank" class="hover:text-slate-900 underline decoration-slate-200 underline-offset-4 transition-colors">Pages CMS</a>.
      </div>
    </div>
  </footer>
</template>
