const initialState = '';

export default function activeCategoryReducer(state=initialState, action){
  // won't need to do action.type or action.payload
  let { type, payload } = action;
  switch(type){
    case 'Active':
      return{
        payload
      }
      default:
        return state
  }
}