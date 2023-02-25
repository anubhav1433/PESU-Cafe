import Navigationbar from './components/navbar';
import './App.css';
import Contact from './components/contact';
import Order from './components/meal';
import Dessert from './components/dessert';
import Beverage from './components/beverage.js';
import Munchies from './components/snacks';
import Home from './components/home';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  

<Router>
<Navigationbar/>
<Routes>
<Route exact path="/" component={Home} element={<Home />}></Route>
<Route path="/munchies" component={Munchies} element={<Munchies />}></Route>
<Route path="/order" component={Order} element={<Order />}></Route>
<Route path="/dessert" component={Dessert} element={<Dessert />}></Route>
<Route path="/beverage" component={Beverage} element={<Beverage />}></Route>
<Route exact path="/contact" component={Contact} element={<Contact />}></Route></Routes>
</Router>



    </div>
  );
}

export default App;






