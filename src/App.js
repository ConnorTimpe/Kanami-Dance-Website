import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

//Page imports
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import TeachingExperience from "./pages/TeachingExperience";
import Performance from "./pages/Performance";
import Choreography from "./pages/Choreography";
import CommercialWorks from "./pages/CommercialWorks";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/teaching-experience">
          <TeachingExperience />
        </Route>
        <Route path="/performance">
          <Performance />
        </Route>
        <Route path="/choreography">
          <Choreography />
        </Route>
        <Route path="/commercial-works">
          <CommercialWorks />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
