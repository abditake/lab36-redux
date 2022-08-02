import { connect } from 'react-redux';
import { Button, Typography, Card } from '@mui/material';


export const Product = ( props ) => {

  const { products  } = props

  


  console.log(products);
  // work in progress following lecture
  return (
    <>
      <p> hello </p>
    </>
  );
}

const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.products,
  }
}

const mapDispatchToProps = {
  Product,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

