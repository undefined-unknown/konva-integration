<script setup lang="ts">
interface IProps {
  message: string;
}

defineProps<IProps>();
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      {{ message }}
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
      <div class="text-xl font-medium text-black">Hello World</div>
      <p class="text-gray-500">
        You're using Tailwind CSS with Vue 3 and TypeSc2ript.
      </p>
    </div>
  </div>
</template>
