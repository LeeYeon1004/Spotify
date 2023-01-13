export const addAction = (item: {}) => {
  return {
    type: "todoList/add",
    payload: item,
  };
};
