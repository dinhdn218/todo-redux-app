const addTodo = (payload) => ({
  type: "todoList/addTodo",
  payload,
});

const searchFiltersChange = (payload) => ({
  type: "filters/searchChange",
  payload,
});

const statusFilterChange = (payload) => ({
  type: "filters/statusChange",
  payload,
});

const statusTodoChange = (payload) => ({
  type: "todoList/statusTodoChange",
  payload,
});

export { addTodo, searchFiltersChange, statusFilterChange, statusTodoChange };
