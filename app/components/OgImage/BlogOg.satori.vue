<script setup lang="ts">
import { loadDefaultJapaneseParser } from "budoux";
const props = defineProps<{
  title: string;
  description: string;
}>();
const parser = loadDefaultJapaneseParser();

const titleWords = parser.parse(props.title);
const descriptionWords = parser.parse(props.description);
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center text-gray-950 p-16 relative" :style="{
    fontFamily: 'Inter, Noto Sans JP, sans-serif',
    background:
      'linear-gradient(90deg, rgba(230, 249, 255, 1) 0%, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 1) 100%)',
  }">
    <div class="flex flex-col">
      <div class="flex flex-wrap text-6xl font-bold leading-[1.2] overflow-hidden" style="max-height: calc(1.2em * 3)">
        <span v-for="(word, index) in titleWords" :key="index" class="block">{{
          word
        }}</span>
      </div>
      <div class="flex flex-wrap mt-6 text-3xl font-medium text-slate-600 leading-relaxed max-w-[90%] overflow-hidden"
        style="max-height: calc(1.625em * 2)">
        <span v-for="(word, index) in descriptionWords" :key="index" class="block">{{
          word
        }}</span>
      </div>
    </div>

    <div class="absolute bottom-16 left-16">
      <p class="text-2xl font-medium text-gray-800">samenoko-dayo</p>
    </div>
  </div>
</template>
