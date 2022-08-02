import { connect } from 'react-redux';
import { Products } from '../../store/products'
import { Button, Typography, Card } from '@mui/material';


const Product = ( props ) => {

  const { products  } = props

  
  let listProd = products.map((categories, idx) => (
    <Card
      key={`category-${idx}`}
      variant="outlined"
    >{categories.name}</Card>
  ))

  return (
    <>
      {listProd}
    </>
  );
}

const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.products,
  }
}

const mapDispatchToProps = {
  Products,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);