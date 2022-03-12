import React from "react"
import axios from "axios"
import Flag from "../Flag/flag";
import "./resultsList.css"
//accepts an amount accepts a current currency 

export default class ResultsList extends React.Component {
    state = {
        amount : this.props.amount,
        currency : "USD",
        table : 0,
    }
    componentDidUpdate() {
        if(this.state.currency !== this.props.currency){
            axios.get(`https://v6.exchangerate-api.com/v6/3170516be655ca20b8f88a07/latest/${this.props.currency}`)
            .then(response => {
                    let temp = response.data.conversion_rates;
                    for(let key in temp){
                        if(temp.hasOwnProperty(key)){
                            temp[key] = temp[key] * this.props.amount;
                        }
                    }
                    this.setState({ 
                        timestamp : response.data.time_last_update_utc,        
                        amount : this.props.amount,
                        currency : this.props.currency,
                        table : temp})
                });
        }
    }


    //multiply amount by conversion, display those conversions, presentation...

    render(){
        let moneyJSX = Object.keys(this.state.table).map(key => {
                return(<div className="result-container">
                    <div><Flag currency={key}/></div> 
                    <div><p>{key}</p></div>
                    <div><p>{this.state.table[key].toFixed(2)}</p></div>
                </div>)
                console.log(key);
            })
        if(moneyJSX.length > 1){
            moneyJSX[0] = (<p className="time">Last Updated: {this.state.timestamp.slice(0,-5)}</p>);
        }
        

        return(
            <>
                {moneyJSX}
            </>
            )
    }

}




