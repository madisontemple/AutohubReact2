import React, { Component, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Search from "../icon/search-solid.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import "../index.css";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import {
  Buy,
  Sell,
  Managed,
  AboutAutohub,
  CCenter,
  Join,
  Login,
} from "../pages";
import { SearchResult, Hyundai, Kia, Benz, Bmw, Genesis } from "../pages";
import { Floor } from "../pages/";

import { C4F, C3F } from "../pages";
import { Shop1, Shop2, Shop3, Shop4 } from "../pages";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/Buy" component={Buy} />
        <Route path="/Sell" component={Sell} />
        <Route path="/Managed" component={Managed} />
        <Route path="/AboutAutohub" component={AboutAutohub} />
        <Route path="/CCenter" component={CCenter} />
        <Route path="/Join" component={Join} />
        <Route path="/Login" component={Login} />

        <Route path="/SearchResult" component={SearchResult} />
        <Route path="/Hyundai" component={Hyundai} />
        <Route path="/Kia" component={Kia} />
        <Route path="/Benz" component={Benz} />
        <Route path="/Bmw" component={Bmw} />
        <Route path="/Genesis" component={Genesis} />

        <Route path="/Shop1" component={Shop1} />
        <Route path="/Shop2" component={Shop2} />
        <Route path="/Shop3" component={Shop3} />
        <Route path="/Shop4" component={Shop4} />

        <Route path="/IntroAutohub/Floor" component={Floor} />

        <Route path="/C4F" component={C4F} />
        <Route path="/C3F" component={C3F} />
      </Switch>
    </Router>
  );
}

export default App;
