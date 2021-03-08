import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
      <div className="App">
        
          <h1><Link to="/">Rest Countries</Link></h1>
        
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route  path="/:nameId">
            <CountryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
