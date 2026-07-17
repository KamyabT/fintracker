export const initialState = {
  search: "",
  type: "all",
  category: "all",
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
        type: action.type,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.type,
      };
    default:
      return state;
  }
}
