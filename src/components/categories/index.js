import { connect } from 'react-redux';
import { activeCategory } from '../../store/categories'
import { Button, Typography, Card } from '@mui/material';
import {Product} from '../product/index';

const Category = ( props ) => {

  const { categories   } = props
  console.log(categories);

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        Browse our Categories
      </Typography>
      {categories.map((categories, idx) => (
        <Button
          key={`category-${idx}`}
          variant="outlined"
        >{categories.name}</Button>
      ))}
    </>
  );
}

const mapStateToProps = ({ categoriesReducer }) => {
  return {
    categories: categoriesReducer.categories,
  }
}

const mapDispatchToProps = {
  activeCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);