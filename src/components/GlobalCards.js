import React, { Component } from "react";
// import API from "../utils/API";

import { RollBoxLoading } from 'react-loadingg';



export default class GlobalCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          date:'',
          confirmed: '',
          deaths: '',
          query: ''
        };
      }

    componentDidMount() {
        fetch('https://covidapi.info/api/v1/global')

        .then(res => res.json())

        .then(

            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                date: result.date,
                confirmed: result.result.confirmed,
                deaths: result.result.deaths,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }


    render() {
        const { error, isLoaded, date, confirmed, deaths } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div><RollBoxLoading /></div>;
          } else {
        return (
            <>
            <h1>{date}</h1>
            <h1>{confirmed}</h1>

            <h1>{deaths}</h1>
            </>
        )
          }
    }
}