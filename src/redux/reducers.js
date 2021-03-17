import { SHOW_LISTS, ADD_ONE, DELETE_LIST,DELETE_LISTS } from './actions';
const initialState = {
  selects: [
    "Volvo",
    "Saab",
    "Mercedes",
    "Audi"
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LISTS:
      return {
        selects: [...state.selects]
      };
    case ADD_ONE:
      return {
        selects: [...state.selects, action.payload],

      };
    case DELETE_LIST:
      return {
        selects: [...state.selects].filter(data => {
          return data != action.payload
        })
      };
    case DELETE_LISTS:
      return {
        selects: []
      };

    default:
      return state;
  }
}
export default reducer;