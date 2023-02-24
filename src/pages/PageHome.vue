<script setup>
import ForumList from "@/components/ComponentForumList";
import sourceData from "@/data.json";
import { ref } from "vue";

const forums = ref(sourceData.forums);
</script>

<template>
  <div class="col-full push-top">
    <h1>Welcome to the Forum</h1>
  </div>
  <ForumList :forums="forums" :title="`Forums`" />
</template>

