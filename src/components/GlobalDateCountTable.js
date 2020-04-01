import React, { Component } from "react";
import { RollBoxLoading } from 'react-loadingg';

import { JsonToTable } from "react-json-to-table";


export default class GlobalDateCountTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          count:'',
          dates: [{}],
          
        };
      }
  
    componentDidMount() {
        fetch('https://covidapi.info/api/v1/global/count')

        .then(res => res.json())
        .then(

        (result) => {
            console.log(result);
            this.setState({
                isLoaded:true,
                count:result.count,
                dates:result.result
            })

        }
        )
        
    }
  
    render() {
        const { error, isLoaded, dates} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div><RollBoxLoading /></div>;
          } else {
        return (
        <>
                <JsonToTable json={this.state.dates} />

        </>
      )
        }
    }
  }