

export const activeCategory = (categories) =>{
  return{
    type: 'Active',
    payload: categories,
  }
}

export const addToCart = (product) => {
  return {
    type: 'Add-Cart',
    payload: product,
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'Remove-Cart',
    payload: product,
  }
}
