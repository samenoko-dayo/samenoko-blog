<template>
  <div class="min-h-screen flex flex-col font-sans bg-white text-black">
    <AppHeader />

    <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
