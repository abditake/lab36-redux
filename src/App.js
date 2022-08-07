

import Header from './components/header/index'
import Footer from './components/footer/index'
import Category from './components/categories/index'
import CartDetails from './components/cartDetails/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App(props) {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={
      <>
      <Header/>
      <Category />
      <Footer/>
      </>
    }>
    </Route>
          <Route path="/cart" element={
            <>
            <CartDetails/>
            </>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
