<script setup>
import ThreadList from "@/components/ComponentThreadList";
import sourceData from "@/data.json";
import { defineProps, computed } from "vue";

const props = defineProps(["id"]);

const threads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id);
});
const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id);
});
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads" />
  </div>
</template>

<style scoped>
</style>