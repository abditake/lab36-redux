

import Header from './components/header/index'
import Footer from './components/footer/index'
import Category from './components/categories/index'
import CartDetails from './components/cartDetails/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './components/details';


function App(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Header />, <Category />, <Footer />]} />
        <Route path={`/details`} element={[<Header />, <Details/>, <Footer />]} />
        <Route path={`/cart`} element={[<Header />, <CartDetails />, <Footer />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
