import React, { Component } from "react";

import GlobalCards from "./GlobalCards";

// import GlobalDateCountChart from "./GlobalDateCountChart";
// import GlobalDateCountTable from "./GlobalDateCountTable";

import MapBox from "./MapBox.js";

export default class Main extends Component {
  render() {
    return (
      <>
        <GlobalCards />
        {/* <GlobalDateCountTable /> */}
        {/* <GlobalDateCountChart /> */}
        <MapBox />


      </>
    );
  }
}
