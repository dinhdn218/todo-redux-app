import FiltersReducer from "../components/Filters/FiltersSlice";
import TodosReducer from "../components/TodoList/TodosSlice";
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: FiltersReducer(state.filters, action),
//     todoList: TodosReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoList: TodosReducer,
});

export default rootReducer;
