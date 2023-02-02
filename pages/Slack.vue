<template>
  <NuxtLayout>
    <div class="max-w-xl p-4 mx-auto">
      <img src="/assets/svg/slack.svg" alt="slack" class="mx-auto h-60 w-60" />
      <p class="font-bold text-center">
        <span class="text-6xl text-onedark-blue">One Dark Theme</span>
        <br />
        <span class="text-4xl">for Slack</span>
      </p>

      <div class="mt-8">
        <h1 class="text-xl font-bold">Install Manually</h1>
        <ul class="pl-8 space-y-2 list-decimal">
          <li>
            Copy the values below:
            <div class="mt-2 mockup-code">
              <code class="px-8">
                #282C34,#282C34,#282C34,#61AFEF,#C678DD,#FFFFFF,#98C379,#E06C75
              </code>
            </div>
          </li>
          <li>In Slack, go to File > Preferences > Themes.</li>
          <li>Select Dark in Appearance section.</li>
          <li>
            In Colors section, click on Create a custom theme if you never created a custom theme.
          </li>
          <li>Paste the colors you copied from the previous step in the textbox.</li>
          <li>Enjoy One Dark theme in Slack!</li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "One dark theme for Slack",
});
</script>
