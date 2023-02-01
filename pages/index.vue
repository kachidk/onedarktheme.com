<template>
  <NuxtLayout name="default">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <img src="/assets/img/wallpaper.png" class="max-w-md -mt-10" alt="hero" />
      <div>
        <div class="text-5xl font-bold text-center">Eliminate the cost of context switching</div>
        <div class="mt-2 text-center">
          A collection of ports inspired by the excellent
          <a
            href="https://github.com/atom/atom/tree/master/packages/one-dark-syntax"
            class="underline"
          >
            One Dark syntax theme
          </a>
          for the Atom text editor.
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mt-14">
        <div class="flex flex-col items-center gap-1">
          <div class="w-20 h-20 bg-onedark-blue rounded-xl"></div>
          <kbd class="kbd kbd-sm">#gsgsgg</kbd>
        </div>
        <div class="flex flex-col items-center gap-1">
          <div class="w-20 h-20 bg-onedark-blue rounded-xl"></div>
          <kbd class="kbd kbd-sm">#gsgsgg</kbd>
        </div>
      </div>
    </div>
    <div class="max-w-3xl p-4 mx-auto">
      <section class="min-h-screen">
        <div class="mx-auto text-3xl font-bold w-fit">Ports</div>
        <div class="flex flex-col items-center gap-4 mx-auto mt-2 md:flex-row w-fit">
          <div class="text-lg whitespace-nowrap w-fit">Showing {{ ports.length }} app(s)</div>
          <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="input input-bordered"
          />
        </div>
        <div v-auto-animate class="grid gap-4 mt-12 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="(el, i) in ports" :key="i" class="">
            <img :src="el.image" class="w-48 h-48 mx-auto rounded-full" :alt="el.name" />
            <div class="text-center">{{ el.name }}</div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import _ports from "@/assets/data/ports";

const search = ref("");
const ports = ref(_ports);

watch([search], () => {
  if (search.value.length > 0) {
    ports.value = ports.value.filter((el) => el.keywords.some((xy) => xy.includes(search.value)));
  } else {
    ports.value = _ports;
  }
});
</script>
