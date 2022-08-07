import axios from 'axios';
import { addToCart } from './actions';
// add displayName 

const initialState = [
  {
    name: 'Comics',
    description: 'All things comics!! DC, Marvel, Dark Horse, Image Comics',
  },
  {
    name: 'Cards',
    description: 'Topps, Dapper-Labs , Upper-Deck, Panini, In-The-Game, Magic-The-Gathering, Pokemon, Yugioh'
  },

  {
    name: 'Clothing',
    description: 'Shirts, Hoodies, Hats, and limited edition pants for our 304th Anniversary',
  }
]





export default function categoryReducer(state = initialState, action) {
  // won't need to do action.type or action.payload
  let { type, payload } = action;
  console.log('main', payload)
  switch (type) {
    case 'Api-Categories':
    return payload.results
    default:
      return state
  }
}


export const getCategories = () => async(dispatch , getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');


  dispatch(setCategories(response.data));
}


export const setCategories = (data) => {
  console.log(data);
return {
  type: 'Api-Categories',
  payload: data
}
}

