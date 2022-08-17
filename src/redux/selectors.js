import { createSelector } from 'reselect'

// const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state)

//   const todoRemaining = state.todoList.filter((todo) =>
//     todo.name.includes(searchText)
//   )
//   return todoRemaining
// }
// const searchTextSelector = (state) => state.filter.search

const todoListSelector = (state) => state.todoList
const searchTextSelector = (state) => state.filters.search
const statusFilterSelector = (state) => state.filters.status
const priorityFilterSelector = (state) => state.filters.priority

const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, status, priorities) => {
    const todoRemaining = todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length <= 0
          ? todo.name.includes(searchText)
          : todo.name.includes(searchText) && priorities.includes(todo.priority)
      }

      return (
        (priorities.length <= 0
          ? todo.name.includes(searchText)
          : todo.name.includes(searchText) &&
            priorities.includes(todo.priority)) &&
        (status === 'Completed' ? todo.completed : !todo.completed)
      )
    })
    return todoRemaining
  }
)

export { todoListSelector, searchTextSelector, todosRemainingSelector }
