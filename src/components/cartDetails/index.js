
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function CartDetails() {

  let cartItems = useSelector(state =>state.cart
  )


  console.log('cartdetails',cartItems);

  return (
    <div href="/cart">This is the start of my Cart details</div>
  )
}
