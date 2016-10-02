export const updateObject = (object, newValues) => ({
  ...object,
  ...newValues,
});

export const updateObjectInArray = (array, id, updateObjCallback) => {
  const updatedArray = array.map((item) => {
    if (item.id !== id) {
      return item;
    }

    return updateObjCallback(item);
  });

  return updatedArray;
};

export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
};
