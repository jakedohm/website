<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 p-6">
    <a
      :href="url"
      target="_blank"
      class="relative flex flex-col justify-between rounded-md bg-white shadow-mid hover:shadow-xl transition-shadow duration-300"
    >
      <div class="relative" style="padding-top: 56.25%">
        <img
          class="absolute inset-0 h-full w-full object-cover rounded-t-md"
          :src="image"
          :alt="`${title} ${type} cover image`"
        />
      </div>
      <div class="py-4 px-6">
        <div class="font-semibold">
          {{ title }}
        </div>
        <div
          class="mt-2 flex justify-between uppercase tracking-wide font-medium text-gray-500 text-sm"
        >
          <div v-if="type">{{ type }}</div>
          <div v-if="stat">{{ stat }}</div>
        </div>
      </div>

      <div
        v-if="highlight"
        class="highlight uppercase tracking-wide font-bold text-gray-500 text-sm bg-white text-blue-700 px-4 py-2 rounded whitespace-no-wrap shadow"
      >
        {{ highlight }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    image: String,
    type: String,
    stat: String,
    highlight: String
  }
}
</script>

<style scoped>
.highlight {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
