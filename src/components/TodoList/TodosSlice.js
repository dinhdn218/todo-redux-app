const initState = [
  { id: 1, name: 'Learn Mern', completed: true, priority: 'Medium' },
  { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
]

const TodosReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload]

    default:
      return state
  }
}

export default TodosReducer
