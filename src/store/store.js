import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 전역으로 vuex 등록


// 데이터베이스에서 데이터를 들고와서 반환하는 함수가 들어있는 객체
// created()로 만들어 줬던 것과 같은 역할
const storage = {
  fetch() {
    const todos = []
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i += 1) {
        // getItem은 키값으로 아이템을 가져옴
        const todoItem = localStorage.getItem(localStorage.key(i))
        todos.push(JSON.parse(todoItem));
      }
    }
    return todos
  }
}

// 현재 문서에 객체가 하나만 있으면 export default 해도 되는데 위에 객체가 하나 더 있으므로
// 변수를 지정해줘야 함
export const store = new Vuex.Store({ // export는 다른 컴포넌트에서 해당 객체에 접근할 수 있게 해줌
  state: {
    headerText: 'My Todo List',
    todos: storage.fetch(),
  },
  getters: {

  },
  mutations: {
    ADD_TODO(state, item) {
      const todoObj = {
        item,
        completed: false
      }
      state.todos.push(todoObj)
      localStorage.setItem(item, JSON.stringify(todoObj))
    },
    REMOVE_TODO(state, payload) {
      localStorage.removeItem(payload.todoItem) // key값으로 삭제
      state.todos.splice(payload.idx, 1)
    },
    TOGGLE_TODO(state, idx) {
      const todo = state.todos[idx]
      todo.completed = !todo.completed // local 저장소에는 반영 안 됨
      localStorage.removeItem(todo.item)
      localStorage.setItem(todo.item, JSON.stringify(todo))
    },
    CLEAR_ALL(state) {
      localStorage.clear()
      state.todos = []
    },
    TOGGLE_CHECK_ALL(state) {
      if (state.todos[0].completed) {
        state.todos.forEach(todo => {
          todo.completed = false
          localStorage.removeItem(todo.item)
          localStorage.setItem(todo.item, JSON.stringify(todo))
        })
      }
      else {
        state.todos.forEach(todo => {
          todo.completed = true
          localStorage.removeItem(todo.item)
          localStorage.setItem(todo.item, JSON.stringify(todo))
        })
      }
    },
  },
  actions: {
    toggleCheckAll({ commit }) {
      commit('TOGGLE_CHECK_ALL')
    },
  },
})