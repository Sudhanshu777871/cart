const initialState={
  cardData:[]
}
const cartOperations = (state = [], action) => {
  if (action.type === "Add_To_Cart") {
    return [...state,{cardData:action.masterData}];
  } 
  else if (action.type === "Remove_To_Cart") {
    if (state === 0) {
      return 0;
    } else {
      return state - 1;
    }
  } 
  else {
    return state;
  }
};

export default cartOperations;
