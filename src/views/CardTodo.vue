<template>
  <div v-for="todo in todos" :key="todo.id" class="card text-bg-light mb-2">
    <div class="card-header d-flex justify-content-between">
      <span>{{ todo.createdAt }}</span>
      <div class="card-group">
        <input @change="todo.isFinish = !todo.isFinish" type="checkbox" class="me-2 form-check-input"
               :checked="todo.isFinish">
        <button @click="$emit('delete-items', todo)" class="btn btn-sm btn-danger">Удалить</button>
      </div>
    </div>
    <div class="card-body" :class="{ finish: todo.isFinish }">
      <h3 class="card-title">{{ todo.title }}</h3>
      <p class="card-text">{{ todo.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTodo",
  props: {
    todos: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.finish {
  text-decoration: line-through;
}
</style>