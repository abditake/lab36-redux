import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import  categoryReducer from './categories'
import productReducer from './products';


let reducers = combineReducers({
  categoriesReducer: categoryReducer,
  productsReducer: productReducer,
},)


export default function store(){
  return createStore(reducers, composeWithDevTools())
}