<template>
  <li class="flex items-start py-2">
    <div class="border p-1 rounded-full" style="margin-top: 2px">
      <svg
        class="h-3 w-3"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </div>
    <div class="ml-3"><slot /></div>
  </li>
</template>
