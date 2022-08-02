import { connect } from 'react-redux';
import { activeCategory } from '../../store/categories'
import { Button, Typography, Card } from '@mui/material';
import { Product } from '../product/index';

const Category = (props) => {

  const { categories } = props
  console.log(props);

  let listCategory = categories.map((category, idx) => (
    <Button
      key={`category-${idx}`}
      variant="outlined"
      onClick={() => props.activeCategory(category.name)}
    >{category.name}</Button>
  ))

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        All Categories
      </Typography>
      {listCategory}
      <Product/>
    </>
  );
}

const mapStateToProps = ({ categoriesReducer }) => {
  return {
    categories: categoriesReducer.categories,
  }
}
// if we want to use it as apart of our reducer
const mapDispatchToProps = {
  activeCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);