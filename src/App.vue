<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list :todo-data="todos" @removeTodo="removeTodo" @toggleTodo="toggleTodo"></todo-list>
    <todo-footer @clearAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: [],
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i += 1) {
        // getItem은 키값으로 아이템을 가져옴
        const todoItem = localStorage.getItem(localStorage.key(i))
        this.todos.push(JSON.parse(todoItem));
      }
    }
  },
  methods: {
    addTodo(item) {
      const todoObj = {
        item,
        completed: false
      }
      this.todos.push(todoObj)
      localStorage.setItem(item, JSON.stringify(todoObj))
    },
    removeTodo(idx) {
      const todo = this.todos[idx]
      localStorage.removeItem(todo.item) // key값으로 삭제
      this.todos.splice(idx, 1)
    },
    clearAll() {
      localStorage.clear()
      this.todos = []
    },
    toggleTodo(idx) {
      const todo = this.todos[idx]
      todo.completed = !todo.completed // local 저장소에는 반영 안 됨
      localStorage.removeItem(todo.item)
      localStorage.setItem(todo.item, JSON.stringify(todo))
    },
  },
}
</script>

<style>

body {
  text-align: center;
  background-color: rgba(248, 248, 248, 0.568);
}

</style>
