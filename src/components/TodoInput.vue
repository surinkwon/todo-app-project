<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span @click="addTodo"><i class="fa-solid fa-plus"></i></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem) {
        this.$store.commit('ADD_TODO', this.newTodoItem)
        this.clearInput()
      }
    },
    clearInput() {
      this.newTodoItem = ''
    },
  },
}
</script>

<style scoped>
  
  input:focus {
    outline: none;
  }

  input {
    border-style: none;
    margin-right: 10px;
    width: 40rem;
    height: 25px;
  }

  i {
    cursor: pointer;
  }

  .shadow {
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.03);
  }

  .inputBox {
    height: 50px;
    border-radius: 5px;
    line-height: 50px;
  }
</style>