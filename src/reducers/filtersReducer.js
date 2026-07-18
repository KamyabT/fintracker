export const initialState = {
  search: "",
  type: "All",
  category: "All",
};

export function filtersReducer(state , action) {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
