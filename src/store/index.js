import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import  categoryReducer from './categories'
import productReducer from './products';
import cartReducer from './cart';
import activeCategoryReducer from './active-category'


let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  // add this too
  activeCategory: activeCategoryReducer,
  cart: cartReducer,
},)


export default function store(){
  return createStore(reducers, composeWithDevTools())
}