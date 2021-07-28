import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomeRoute from "./components/HomeRoute";
import ShoutOutToRoute from "./components/ShoutOutToRoute";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeRoute />
        </Route>
        <Route path="/user/:name">
          <ShoutOutToRoute />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
