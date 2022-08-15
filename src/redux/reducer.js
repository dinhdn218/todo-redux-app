const initState = {
  filter: {
    search: "",
    status: "all",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Mern", completed: true, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: false, priority: "High" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return { ...state, todoList: [...state.todoList, action.payload] };

    default:
      return state;
  }
};

export default rootReducer;
