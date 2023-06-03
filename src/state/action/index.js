export const addToCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: "Add_To_Cart",
      masterData: data,
    });
  };
};
