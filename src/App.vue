<script setup>
</script>
<template>
  <header>
    <div class="container">
      <router-link to="/">Add</router-link> |
      <router-link to="/list-todo">List</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </header>
  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
