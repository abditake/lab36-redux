import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { activeCategory } from '../../store/actions.js'
import { Button, Typography, Card, Box, Container } from '@mui/material';
import  Product  from '../product/index';

const Category = (props) => {
  
  let categories = useSelector(state => state.categories);
  
  console.log('catergories', categories);


  let listCategory = categories.map((category, idx) => (
    <Button sx={{ margin: 'auto' }}
      key={`category-${idx}`}
      variant="outlined"
      onClick={() => props.activeCategory(category.name)}
    >{category.name}</Button>
  ))

  return (
    <>
      <Container >
        <Typography sx={{ display: 'flex',justifyContent: 'center'}} variant="h4" component="div" gutterBottom >
          All Categories
        </Typography>
      </Container>
      <Box sx={{ display: 'flex', margin: 10 }}>
        {listCategory}
      </Box>
      <Product />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}
// if we want to use it as apart of our reducer
const mapDispatchToProps = {
  activeCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

