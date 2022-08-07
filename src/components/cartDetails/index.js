
import { Box, Card, CardActions, CardContent, Container, Typography,Button } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions';
import CustomCart from '@mui/icons-material/AddShoppingCartTwoTone';
import AddIcon from '@mui/icons-material/Add';

export default function CartDetails() {

  let cartItems = useSelector((state) => state.cart
  )

  let dispatch = useDispatch();

  let items = cartItems.map((product, idx) =>
    cartItems
      ?
      <Container>
        <Card key={idx} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={() => dispatch(addToCart(product))} sx={{ border: 1 , ml:'1em',  }} >
          <AddIcon/>
        </Button>
        {cartItems.length}
        <Button onClick={() => dispatch(removeFromCart(product))}sx={{ border: 1 , mr:'1em'}} >
            remove from cart
        </Button>
          </CardActions>
        </Card>
      </Container>
      :
      "Please Return to homePage and add items to cart"
  )
  console.log('cartdetails', cartItems);

  return (
    <>
      <Typography textAlign={'center'}> Checkout </Typography>
      <Box display={'flex'} justify-Content={'space-between'} href="/cart">
        {items}
      </Box>
    </>

  )
}
