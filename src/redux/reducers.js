import { SHOW_LISTS, ADD_ONE } from './actions';
const initialState = {
    selects : [
        "Volvo",
        "Saab",
        "Mercedes",
        "Audi"
    ],
    input:""
};
function reducer(state = initialState, action) {
switch(action.type) {
  case SHOW_LISTS:
    return {
        lists: state
    };
  default:
    return state;
  }
}
export default reducer;