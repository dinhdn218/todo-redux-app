const addTodo = (payload) => ({
  type: 'todoList/addTodo',
  payload,
})

const searchFiltersChange = (payload) => ({
  type: 'filters/searchChange',
  payload,
})

export { addTodo, searchFiltersChange }
