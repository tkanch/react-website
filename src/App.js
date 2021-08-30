

import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <HashRouter basename='/'>
     <Navbar/>
     <Switch>
       <Route  exact path="/" component={Home}/>
       <Route   path="/about" component={About}/>
       <Route   path="/services" component={Services}/>
       <Route   path="/contact" component={Contact}/>
       <Redirect to ="/" />
     </Switch>
     <Footer/>
    </HashRouter>
    
  );
}

export default App;
