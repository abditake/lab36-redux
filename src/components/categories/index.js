import { connect } from 'react-redux';
import { activeCategory } from '../../store/categories'
import { Button, Typography, Card } from '@mui/material';
import { Product } from '../product/index';

const Category = (props) => {

  const { categories } = props
  console.log(categories);

  let listCategory = categories.map((categories, idx) => (
    <Card
      key={`category-${idx}`}
      variant="outlined"
    >{categories.name}</Card>
  ))

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        Browse our Categories
      </Typography>
      {listCategory}
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