



const initialState = {
  candidates:[
    {name: 'Peter', votes: 0},
    {name: 'Paul', votes: 0},
    {name: 'Mary', votes: 0}
  ],
  totalVotes:0,
};


function votesReducer(state = initialState, action){
  switch(action.type){
    default:
      return {
        ...state,
        candidates: state.map( candidate => {
          if(candidate.name === action.name){
            return {
              name: candidate.name,
              votes: candidate.votes + 1
            }
          }
          return candidate
        })
      }
  }
}

export const incrementCount = (candidate) =>{
  // creators return action {type, payload}

  return {
    type: 'INCREMENT',
    payload: candidate
  }
};

export const decrementCount = (candidate) =>{
  // creators return action {type, payload}

  return {
    type: 'DECREMENT',
    payload: candidate
  }
};

export const reset = () => {
  return { type: 'RESET'}
}

export default votesReducer;

