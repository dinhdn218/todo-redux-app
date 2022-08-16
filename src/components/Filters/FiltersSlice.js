const initState = {
  search: '',
  status: 'all',
  priority: [],
}

const FiltersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'filters/searchChange':
      return { ...state, search: action.payload }

    default:
      return state
  }
}

export default FiltersReducer
