<template>
  <div>
    <ul>
      <li v-for="(todo, idx) in todoData" :key="`todo-${idx}`"><span :class="{ completed: todo.completed }" @click="toggleTodo(idx)">{{ todo.item }}</span> 
        <i class="fa-solid fa-square-minus removeIcon" @click="removeTodo(idx)"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todoData: Array
  },
  methods: {
    removeTodo(idx) {
      this.$emit('removeTodo', idx)
    },
    toggleTodo(idx) {
      this.$emit('toggleTodo', idx)
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
</style>