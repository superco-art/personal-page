import './App.css';
import {Navbar} from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {Projects} from "./pages/Projects";
import {Welcome} from "./pages/Welcome/Welcome";
import creioane from "./pages/images/creioane.jpg";
import * as React from "react";

export const App = () => {
  return (
    <>
        <Router>
            <Navbar />
            <img className="background-img" src={creioane} alt="imgBackground"/>

            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/home"  component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />

            </Switch>
        </Router>
    </>
  );
}


