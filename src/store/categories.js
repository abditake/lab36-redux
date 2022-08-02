
// add displayName 

const initialState = {
  categories: [
    {name: 'Comics',
    description: 'All things comics!! DC, Marvel, Dark Horse, Image Comics',
    },
    { name: 'Cards',
      description:'Topps, Dapper-Labs , Upper-Deck, Panini, In-The-Game, Magic-The-Gathering, Pokemon, Yugioh'
    },

    {name: 'Clothing',
    description: 'Shirts, Hoodies, Hats, and limited edition pants for our 304th Anniversary',}
  ],
  activeCategory: null,
}


export default function categoryReducer(state=initialState, action){
  // won't need to do action.type or action.payload
  let { type, payload } = action;
  switch(type){
    case 'Active':
      return{
        ...state, activeCategory: payload
        // categories: state.categories.map( category => category.name === payload.name ?{ name: payload.name, description: payload.description}: category),
        // activeCategory: payload.name
      }
      default:
        return state
  }
}

export const activeCategory = (categories) =>{
  console.log('store-categories',categories);
  return{
    type: 'Active',
    payload: categories.name,
  }
}

