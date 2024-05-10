<script setup lang="ts"></script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="xpix-editor-header flex-none navbar border-b border-slate-700">
      <div class="flex-none">
        <button type="button" class="btn mr-2">Save as template</button>
        <button type="button" class="btn btn-primary">Export</button>
      </div>
    </div>
    <div class="flex-shrink-0">
      <!-- Icon from Heroicons.com -->
      <svg
        class="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <div>
      <div class="text-xl font-medium text-black">Hello World2</div>
      <p class="text-gray-500">
        You're using Tailwind CSS with Vue 3 and TypeScript.
      </p>
    </div>
  </div>
</template>
