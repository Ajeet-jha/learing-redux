import { SHOW_LISTS, ADD_ONE } from './actions';
const initialState = {
    selects : [
        "Volvo",
        "Saab",
        "Mercedes",
        "Audi"
    ]
};
function reducer(state = initialState, action) {
switch(action.type) {
  case SHOW_LISTS:
    return {
      selects: [...state.selects]
    };
  case ADD_ONE:
    return {
      selects:  [...state.selects, action.payload],
      
    };
  default:
    return state;
  }
}
export default reducer;