import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Navigation from "../src/component/Shared/Navigation";
import Home from './component/Home/Home';
import AboutUs from "../src/component/AboutUs/AboutUs";
import Login from './component/Login/Login';
import SignUp from "../src/component/SignUp/SignUp";
import ServiceDetails from './component/Home/Services/ServiceDetails';
import DisplayServiceDetails from './component/Home/Services/DisplayServiceDetails';
import AllProduct from './component/AllProducts/AllProducts';

import Footer from '../src/component/Shared/Footer'
import AllProductsDetails from './component/AllProducts/AllProductsDetails';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import NotFound from './component/NotFound/NotFound';
import BookAppointment from './component/BookAppointment/BookAppointment';
import Payment from './component/Payment/Payment';
import Congratulations from './component/Congratulations/Congratulations';
function App() {
  return (
 <AuthProvider>
     
<BrowserRouter>
<Navigation></Navigation>
<Switch>
  <Route exact path='/'>
    <Home></Home>
  </Route>
  <Route path='/home'>
    <Home></Home>
  </Route>
  <Route path='/aboutus'>
    <AboutUs></AboutUs>
  </Route>
  <Route path='/login'>
    <Login></Login>
  </Route>
  <Route path='/signup'>
    <SignUp></SignUp>
  </Route>

  <PrivateRoute path='/servicedetails/:serviceId'>
    <ServiceDetails></ServiceDetails>
  </PrivateRoute>

  <PrivateRoute path='/allproductDetails/:productId'>
    <AllProductsDetails></AllProductsDetails>
  </PrivateRoute>

  <PrivateRoute path='/booking'>
    <BookAppointment></BookAppointment>
  </PrivateRoute>

  <PrivateRoute path='/payment'>
    <Payment></Payment>
  </PrivateRoute>
  <PrivateRoute path='/Congratulations'>
    <Congratulations></Congratulations>
  </PrivateRoute>
  
  <Route path='/servicedetail'>
    <ServiceDetails></ServiceDetails>
  </Route>
  <Route path='/servicedetalil'>
    <DisplayServiceDetails></DisplayServiceDetails>
  </Route>
  <Route path='/products'>
    <AllProduct></AllProduct>
  </Route>
  <Route path='*'>
    <NotFound></NotFound>
  </Route>
</Switch>
<Footer></Footer>
</BrowserRouter>

 </AuthProvider>






  );
}

export default App;
