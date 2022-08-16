import FiltersReducer from '../components/Filters/FiltersSlice'
import TodosReducer from '../components/TodoList/TodosSlice'

const rootReducer = (state = {}, action) => {
  return {
    filters: FiltersReducer(state.filters, action),
    todoList: TodosReducer(state.todoList, action),
  }
}

export default rootReducer
