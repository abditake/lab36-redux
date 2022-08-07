'use strict';

import { useSelector } from 'react-redux';

import { Box, List, Drawer, Card, Typography, CardContent, Container } from '@mui/material';

import { useNavigate } from 'react-router';


const SimpleCart = () => {


  let history = useNavigate();

    function handleClick() {
      history.push("/cart");
    }



  const cart = useSelector(state => state.cart);

  // console.log(cart);

  let cartMap = cart.map((product, idx) =>

    <Box key={idx}>

      <Box
        display='flex'
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={"space-between"}
      >   
        <Box display='flex' flexDirection={"column"} word-wrap='break-word' >
          <Typography variant='h6'>{product.name}</Typography>
        </Box>
        <Typography variant='body1' justifyContent={"end"}>{product.price} </Typography>
      </Box>

    </Box>


  )
  return (
    <>
    <Typography textAlign={'center'} onClick={handleClick}> My Cart</Typography>
    {cartMap}
    </>
  )
}

export default SimpleCart;
