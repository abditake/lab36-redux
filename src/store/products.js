const initialState = [
  {
    category: 'Comics',
    name: 'Wolverine: Old Man Logan',
    description: 'Nobody knows what happened on the night the heroes fell. All we know is that they disappeared and evil triumphed and the bad guys have been calling the shots ever since. What happened to Wolverine is the biggest mystery of all. For 50 years, no one has heard hide nor hair from him...and in his place stands an old man called Logan. A man concerned only about his family. A man pushed to the brink by the HULK GANG. A man forced to help an old friend--the blind archer, HAWKEYE--drive three thousand miles to secure his family\'s safety. Get ready for the ride of your life, Logan.',
    price: '$15',
    inventoryCount: 20,
  },
  {
    category: 'Cards',
    name: 'LeBron\'s 2003 Exquisite rookie card',
    price: 'Starting: $1.5M',
    description: 'Limited edition Rookie card of four time NBA Champion and Finals Mvp Lebron James. He was also Awarded League MVP four times.',
    inventoryCount: 1,
  },
  {
    category: 'Clothing',
    name: 'MisFit: Hoodie',
    description: 'MisFit has been a long time partner and investor at our Emporium. This new design was signed by every employee in our company.',
    price: '$80',
    inventoryCount: 200,
  }
]



export default function productReducer(state = initialState, action) {
  
  let { type, payload } = action;
  console.log(payload);
  switch (type) {
    case 'Add-Cart':
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventoryCount = product.inventoryCount - 1;
        }
        return product
      })
    case 'Remove-Cart':
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventoryCount = product.inventoryCount + 1;
        }
        return product
      })
    default:
      return state
  }
}


export const Products = (products) => {
  return {
    type: 'Products',
    payload: products,
  }
}



