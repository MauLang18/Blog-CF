import React from "react";
import { Footer } from "./components/footer/Footer.jsx";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Empleo } from "./pages/empleo/Empleo.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { DetailsPages2 } from "./pages/details/DetailsPages2";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailsPages} />
          <Route exact path="/empleo" component={Empleo} />
          <Route exact path="/empleo/details/:id" component={DetailsPages2} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
