import Navbar from './components/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './components/create.js';
import Home from './components/home.js';
import './App.css';


function App() {
  return (
   <Router>
     <div className="App">
      <Navbar/>
     <div className="content">
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        

        <Route path="/Create">
        <Create/>
        </Route>
      </Switch>
    
      
       
     </div>
    </div>
   </Router>
  );
}

export default App;
