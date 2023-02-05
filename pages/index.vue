<template>
  <NuxtLayout name="default">
    <div class="flex flex-col items-center justify-center min-h-screen p-4">
      <img src="/assets/img/wallpaper.png" class="max-w-md" alt="hero" />
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
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-[#21252B] rounded-xl"></div>
          <kbd class="kbd kbd-sm">#21252B</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-black rounded-xl"></div>
          <kbd class="kbd kbd-sm">#282C34</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-[#323842] rounded-xl"></div>
          <kbd class="kbd kbd-sm">#323842</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-red rounded-xl"></div>
          <kbd class="kbd kbd-sm">#E06C75</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-green rounded-xl"></div>
          <kbd class="kbd kbd-sm">#98C379</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-yellow rounded-xl"></div>
          <kbd class="kbd kbd-sm">#E5C07B</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-blue rounded-xl"></div>
          <kbd class="kbd kbd-sm">#61AFEF</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-purple rounded-xl"></div>
          <kbd class="kbd kbd-sm">#C678DD</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-fountainblue rounded-xl"></div>
          <kbd class="kbd kbd-sm">#56B6C2</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-onedark-gray rounded-xl"></div>
          <kbd class="kbd kbd-sm">#ABB2BF</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-[#D4D8DF] rounded-xl"></div>
          <kbd class="kbd kbd-sm">#D4D8DF</kbd>
        </div>
        <div
          class="flex flex-col items-center gap-1 duration-300 hover:transform hover:-translate-y-2"
        >
          <div class="w-20 h-20 bg-[#F6F7F9] rounded-xl"></div>
          <kbd class="kbd kbd-sm">#F6F7F9</kbd>
        </div>
      </div>
    </div>

    <section class="max-w-5xl min-h-screen p-4 mx-auto">
      <div class="mx-auto text-3xl font-bold w-fit">Ports</div>
      <div class="flex flex-col items-center gap-4 mx-auto mt-2 md:flex-row w-fit">
        <div class="text-lg whitespace-nowrap w-fit">Showing {{ ports.length }} app(s)</div>
        <input v-model="search" type="text" placeholder="Search..." class="input input-bordered" />
      </div>
      <div v-auto-animate class="grid gap-4 mt-12 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        <a
          v-for="(el, i) in ports"
          :key="i"
          :href="el.link"
          target="_blank"
          class="duration-200 group hover:transform hover:-translate-x-2 hover:-translate-y-2 hover:scale-x-105"
        >
          <img :src="el.image" class="w-48 h-48 mx-auto rounded-full" :alt="el.name" />
          <div
            class="text-4xl font-bold text-center duration-200 group-odd:group-hover:text-onedark-red group-even:group-hover:text-onedark-green"
          >
            {{ el.name }}
          </div>
        </a>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import _ports from "@/assets/data/ports";

const search = ref("");

const ports = computed(() => {
  return _ports.filter(
    (el) =>
      el.keywords.some((xy) => xy.toLowerCase().includes(search.value.toLowerCase())) ||
      el.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>
