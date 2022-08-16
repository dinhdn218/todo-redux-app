import { createSelector } from "reselect";

// const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state)

//   const todoRemaining = state.todoList.filter((todo) =>
//     todo.name.includes(searchText)
//   )
//   return todoRemaining
// }
// const searchTextSelector = (state) => state.filter.search

const todoListSelector = (state) => state.todoList;
const searchTextSelector = (state) => state.filters.search;
const statusFilterSelector = (state) => state.filters.status;

const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  (todoList, searchText, status) => {
    const todoRemaining = todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
    return todoRemaining;
  }
);

export { todoListSelector, searchTextSelector, todosRemainingSelector };
