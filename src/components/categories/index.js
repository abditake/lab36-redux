import { connect } from 'react-redux';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { activeCategory } from '../../store/actions.js';
import { getCategories, setCategories } from '../../store/categories'
import { Button, Typography, Card, Box, Container } from '@mui/material';
import  Product  from '../product/index';

const Category = (props) => {

  let dispatch = useDispatch();
  
  let categories = useSelector(state => state.categories);
  
  useEffect(()=>{
    dispatch(getCategories());
  },[])
  

  console.log(categories);

  let listCategory = categories.map((category, idx) => (
    <Button sx={{ margin: 'auto' }}
      key={`category-${idx}`}
      variant="outlined"
      onClick={() => dispatch(activeCategory(category.name))}
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
  activeCategory,
  setCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

