import './App.css';
import {Navbar} from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {Projects} from "./pages/Projects"

export const App = () => {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />

            </Switch>
        </Router>
    </>
  );
}


