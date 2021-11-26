import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Nav from './nav/Nav';
import MainPage from "./mainPage/MainPage";
import Visit from './visit/Visit';
import Footer from './footer/Footer';



function App() {
  return (
    <div className="App">



      <Router>
        {/* <Nav /> */}

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/home" exact component={MainPage} />
          <Route path="/visit" exact component={Visit} />
        </Switch>

        <Footer />
      </Router>




    </div>
  );
}

export default App;
