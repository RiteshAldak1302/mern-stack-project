import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import AllUser from './components/AllUser';
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
    <>
    <Navbar/>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/alluser">
          <AllUser/>
          </Route>
          <Route exact path="/adduser">
          <User/>
          </Route>
        </Switch>
      
    </>
    </Router>
  );
}

export default App;
