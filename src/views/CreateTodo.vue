<template>
  <div class="row g-3 mt-5">
    <div class="col-md-4">
      <div class="form-group">
        <div @keydown.enter="$emit('add-todo')">
          <input v-model="title" type="text" class="form-control mb-3" placeholder="Название...">
          <textarea v-model="content" type="text" class="form-control mb-3"
                    placeholder="Содержание..." rows=12>
                  </textarea>
        </div>
        <div class="btn-group d-flex">
          <button @click="addTodo" class="btn btn-primary">Добавить заметку</button>
          <button @click="deleteItems" class="btn btn-outline-danger">Удалить заметки</button>
          <button @click="markAll" class="btn btn-outline-secondary">Выполнить все</button>
        </div>
      </div>
    </div>
    <div v-if="todos.length > 0" class="col-md-4">
<!--      <Card @delete-items="deleteItems" :todos=todos></Card>-->
    </div>
  </div>
</template>
<script>
// import Card from "./CardTodo.vue";

export default {
  'name': 'CreateTodo',
  // components: {Card},
  data() {
    return {
      todos: [],
      counter: 0,
      title: '',
      content: '',
    }
  },
  // mounted() {
  //   this.fetchTodo()
  // },

  methods: {
    addTodo() {
      let date = new Date()
      date = `${(date.getUTCHours() + 3)}:${date.getUTCMinutes() < 10 ?
          '0' + date.getUTCMinutes() : date.getUTCMinutes()}`;

      this.title && this.content ? this.todos.unshift({
        'id': Date.now(),
        'title': this.title,
        'content': this.content,
        'isFinish': false,
        'createdAt': `Time: ${date}`,
      }) : ''

      this.title = ''
      this.content = ''
    },
    deleteItems() {
      this.todos = this.todos.filter(item => !item.isFinish)
    },
    markAll() {
      this.todos.forEach(item => item.isFinish = true)
    },
    async fetchTodo() {
      let res = await fetch('https://jsonplaceholder.typicode.com/todos')
      let data = await res.json()

      data.forEach(item => this.todos.unshift({
        'title': item.title,
        'isFinish': item.completed,
      }))

    }
  }
}
</script>