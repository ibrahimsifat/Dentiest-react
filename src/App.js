import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Navigation from "../src/component/Shared/Navigation";
import Home from './component/Home/Home';
import AboutUs from "../src/component/AboutUs/AboutUs";
import Login from './component/Login/Login';
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
</Switch>
</BrowserRouter>







  );
}

export default App;
