export const updateObject = (object, newValues) => {
  return {
    ...object,
    ...newValues,
  };
};
