import React from "react";
import { MainLayout, LayoutRoute } from "./components/Layout";
import { BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Contact from "./components/pages/Contact/Contact";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute exact 
        path="/" 
        layout={MainLayout} 
        component={HomePage}
        />
        <LayoutRoute
          exact
          path="/contact"
          layout={MainLayout}
          component={Contact}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
