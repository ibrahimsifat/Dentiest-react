import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Navigation from "../src/component/Shared/Navigation";
import Home from './component/Home/Home';
import AboutUs from "../src/component/AboutUs/AboutUs";
import Login from './component/Login/Login';
import SignUp from "../src/component/SignUp/SignUp";
import ServiceDetails from './component/Home/Services/ServiceDetails';
import DisplayServiceDetails from './component/Home/Services/DisplayServiceDetails';
function App() {
  return (
   
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
  <Route path='/servicedetails/:serviceId'>
    <ServiceDetails></ServiceDetails>
  </Route>
  <Route path='/servicedetail'>
    <ServiceDetails></ServiceDetails>
  </Route>
  <Route path='/servicedetalil'>
    <DisplayServiceDetails></DisplayServiceDetails>
  </Route>
</Switch>
</BrowserRouter>







  );
}

export default App;
