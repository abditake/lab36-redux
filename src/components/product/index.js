import { useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions'
import { useDispatch } from 'react-redux';
import { Button, Typography, Card, Box } from '@mui/material';
import CustomCart from '@mui/icons-material/AddShoppingCartTwoTone';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useEffect } from 'react';
import { getProducts } from '../../store/products';






export default function Product() {
  // expanding business you could also put this in a reducer 
  // const { expanded, setExpanded } = useState(false);

  let activeCategory = useSelector(state => state.activeCategory.payload)

  console.log('using props', activeCategory);

  let dispatch = useDispatch();


  useEffect( () => {
    dispatch(getProducts());
  },[]);


  let product = useSelector(state => state.products)

  // console.log('using props', product);

  let products = product.filter(product => 
    product.category === activeCategory)

  // console.log('selected', selected);


  // console.log(products)

  let selectedProduct = products.map((product,idx) => (
    <Card key={idx} sx={{ maxWidth: 365, border: 1, margin:'auto' }}>
      <CardHeader
        title={product.name}
        subheader={product.price}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => dispatch(addToCart(product))} sx={{ border: 1 , ml:'1em',  }} >
          <CustomCart >
            add to Cart
          </CustomCart>
        </Button>
        <Button onClick={() => dispatch(removeFromCart(product))}sx={{ border: 1 , mr:'1em'}} >
            remove from cart
        </Button>
      </CardActions>
    </Card>
  ))
  // work in progress following lecture
  return (
    <Box>
      {selectedProduct}
    </Box>
  );
}


