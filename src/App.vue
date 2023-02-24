<script setup>
//this is the entry point file.
//the router view basically handles our paging. and since we defined "/" we get send to it automatically
import ComponentHeader from "./components/ComponentHeader.vue";
</script>

<template>
  <div class="container">
    <div>
      <ComponentHeader />
    </div>
    <router-view />
  </div>
</template>


