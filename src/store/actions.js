import axios from 'axios'

export const activeCategory = (categories) => {
  return {
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


export const Products = (products) => {
  return {
    type: 'Products',
    payload: products,
  }
}
