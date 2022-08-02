import { connect, useSelector } from 'react-redux';
import { activeCategory } from '../../store/categories'
import { Button, Typography, Card, Box } from '@mui/material';

// import { useState } from 'react'

// try to setup the images, and expand thing 
// import { styled } from '@mui/material/styles';
// import CardMedia from '@mui/material/CardMedia';
// import Collapse from '@mui/material/Collapse';
// import { red } from '@mui/material/colors';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';




export const Product = (props) => {
  
  // expanding business you could also put this in a reducer 
  // const { expanded, setExpanded } = useState(false);


  

  let activeCategory = useSelector(state => state.categoriesReducer.activeCategory);

  let products = useSelector(state => state.productsReducer.products)



  console.log(activeCategory);
  console.log('state product in productjs', products);

  let selectedProduct = products.filter(product => product.category === activeCategory)



  let selectedProductMap = selectedProduct.map(product => (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        subheader={product.price}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  ))




  console.log('q', selectedProductMap);





  // work in progress following lecture
  return (
    <Box>
      {selectedProductMap}
    </Box>
  );
}

const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.products,
  }
}

const mapDispatchToProps = {
  activeCategory,

}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
