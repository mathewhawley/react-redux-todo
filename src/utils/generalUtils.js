export const updateObject = (object, newValues) => {
  return {
    ...object,
    ...newValues,
  };
};

export const updateObjectInArray = (array, id, updateObjCallback) => {
  const updatedArray = array.map((item) => {
    if (item.id !== id) {
      return item;
    }

    return updateObjCallback(item);
  });

  return updatedArray;
};
