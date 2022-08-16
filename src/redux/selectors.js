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

const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    const todoRemaining = todoList.filter((todo) =>
      todo.name.includes(searchText)
    )
    return todoRemaining
  }
)

export { todoListSelector, searchTextSelector, todosRemainingSelector }
