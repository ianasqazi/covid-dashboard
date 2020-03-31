import React, { Component } from "react";
import GlobalCards from "./GlobalCards";
import Dashboard from './Dashboard';
import CountryTotalTable from './CountryTotalTable';
import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <>
        <GlobalCards />
        {/* <Dashboard /> */}
        <CountryTotalTable />

      </>
    );
  }
}
