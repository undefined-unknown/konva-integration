<script setup lang="ts">
import { ref, onMounted } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import { createEditor } from "@packages/editor";
// import { createEditor as createEditor2 } from "@packages/editor2";

const rootRef = ref<HTMLElement | null>(null);
onMounted(async () => {
  createEditor("root");
  // const editor2 = await createEditor2({ root: rootRef.value! });
  // console.log("editor2", editor2);
  // await editor2.init(true);
  // editor2.runDemo();
});
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div id="root"></div>
  <div ref="rootRef"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
