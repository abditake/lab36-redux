
const initialState = [];

export default function cartReducer(state = initialState, action) {
  // won't need to do action.type or action.payload
  let { type, payload } = action;
  switch (type) {
    case 'Add-Cart':
      console.log('state in cart',state)
      return [...state, payload]
    case 'Remove-Cart':
      return state.filter(product => product.name !== action.payload.name)
    default:
      return state
  }
}



// SPENT SO LONG NOT REALIZING THAT I WAS ONLY SENDING THE NAME AS PAYLOAD SO IT WOULDN'T SHOW ANYTHING ELSE
