<script setup lang="ts">
defineProps<{
    title: string,
    description: string
}>();
</script>

<template>
    <div class="w-full h-screen flex flex-col justify-center text-gray-950 p-16 relative"
        style="font-family: 'Inter','Noto Sans JP', sans-serif; background: linear-gradient(90deg,rgba(230, 249, 255, 1) 0%, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 1) 100%);">

        <div>
            <p class="text-6xl font-bold leading-tight line-clamp-3">{{ title }}</p>
            <p class="mt-6 text-2xl font-medium text-gray-600 line-clamp-2">{{ description }}</p>
        </div>

        <div class="absolute bottom-16 left-16">
            <p class="text-2xl font-medium text-gray-800">samenoko-dayo</p>
        </div>
    </div>
</template>