const initState = {
  search: "",
  status: "All",
  priority: [],
};

const FiltersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchChange":
      return { ...state, search: action.payload };
    case "filters/statusChange":
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export default FiltersReducer;
