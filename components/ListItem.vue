<template>
  <li class="flex items-start py-2">
    <div class="p-1 bg-blue-700 rounded-full">
      <svg
        class="h-4 w-4 text-white"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <div class="ml-4"><slot /></div>
  </li>
</template>
