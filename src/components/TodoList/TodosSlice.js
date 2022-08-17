const initState = [
  { id: 1, name: 'Learn Mern', completed: true, priority: 'Medium' },
  { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
]

const TodosReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload]
    case 'todoList/statusTodoChange':
      const newTodoList = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return newTodoList

    default:
      return state
  }
}

export default TodosReducer
