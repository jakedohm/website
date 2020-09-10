<template>
  <component
    :is="href ? 'a' : 'nuxt-link'"
    :to="to"
    :href="href"
    :class="[
      highlight
        ? 'text-indigo-600 hover:text-indigo-900 focus:text-indigo-700'
        : 'text-gray-500 hover:text-gray-900 focus:text-gray-900'
    ]"
    class="px-4 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    highlight: {
      default: false,
      type: Boolean
    },
    to: null,
    href: String
  }
}
</script>
