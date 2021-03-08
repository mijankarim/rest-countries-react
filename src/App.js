import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/:nameId">
            <CountryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
