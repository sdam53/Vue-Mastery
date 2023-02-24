<script setup>
import ComponentPostList from "@/components/ComponentPostList.vue";
import ComponentPostEditor from "@/components/ComponentPostEditor.vue";

import sourceData from "@/data.json";
import { ref, computed, defineProps } from "vue";

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);
const users = ref(sourceData.users);
const props = defineProps(["id"]);
const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.id);
});
const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === props.id);
});

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  posts.value.push(post);
  thread.value.posts.push(post.id);
};
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <ComponentPostList :posts="threadPosts" />
    <ComponentPostEditor @savePost="addPost" />
  </div>
</template>