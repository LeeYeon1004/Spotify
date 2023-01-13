const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [{}],
};

const rootReducer = (state = initState, action: { type: any }) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todoList: [...state.todoList, {}],
      };

    default:
      return state;
  }
};

export default rootReducer;
