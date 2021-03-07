import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NotMatch from './components/notMatch/NotMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country">
            <Country />
          </Route>
          <Route path="/country/:countryname">
            <CountryDetails />
          </Route>
          <Router path="*">
            <NotMatch />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
