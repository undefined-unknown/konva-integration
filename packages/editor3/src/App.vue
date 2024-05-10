<script setup lang="ts">
import { EditorProvider, ImageEditor } from "@xpix-editor/presets";
const editorConfig = {
  title: "XPix-ImageEditor",
};
</script>

<template>
  <div class="flex flex-col h-full">
    <EditorProvider>
      <ImageEditor :config="editorConfig"></ImageEditor>
    </EditorProvider>
  </div>
</template>

<style scoped></style>
