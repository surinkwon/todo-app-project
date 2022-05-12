<template>
  <div>
    <ul>
      <li v-for="(todo, idx) in $store.state.todos" :key="`todo-${idx}`">
        <i class="fa-regular fa-square-check checkBox" v-if="todo.completed" @click="toggleTodo(idx)"></i>
        <i class="fa-regular fa-square checkBox" v-else @click="toggleTodo(idx)"></i>
        <span @click="toggleTodo(idx)">{{ todo.item }}</span> 
        <i class="fa-solid fa-square-minus removeIcon" @click="removeTodo(todo, idx)"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todo, idx) {
      const obj = {
        todoItem: todo.item,
        idx: idx,
      }
      this.$store.commit('REMOVE_TODO', obj)
    },
    toggleTodo(idx) {
      this.$store.commit('TOGGLE_TODO', idx)
    },
  },
}
</script>

<style scoped>
li {
  display: flex;
  height: 30px;
}

.removeIcon {
  margin-left: auto;
  line-height: 24px;
  color: rgb(241, 80, 80);
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

span {
  cursor: pointer;
}

.checkBox {
  margin-right: 10px;
  line-height: 24px;
  cursor: pointer;
  color: rgb(182, 105, 233);
}
</style>