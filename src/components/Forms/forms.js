import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Flag from "../Flag/flag";
import "./forms.scss";
import ResultsList from '../ResultsList/resultsList';



export default class Forms extends React.Component{
    state = {
        amount: "",
        currency: "EUR",
    };

    handleChange = (event) => {
        this.setState({currency: event.target.value});
      };

    amountChange = (event) => {
        this.setState({amount: event.target.value});
    }

    render(){
        return (
            <>
                <div className="form-container">
                    <Flag currency={this.state.currency}/>
                    <form className="form-input">
                        
                        
                        <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={this.amountChange}/>
                        <Box>
                            <FormControl size='medium'>
                                
                                

                                <InputLabel id="currency-select-label">Currency</InputLabel>
                                <Select
                                    labelId="currency-select-label"
                                    id="currency-select"
                                    value={this.state.currency}
                                    label="Currency"
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"EUR"}>EUR</MenuItem>
                                    <MenuItem value={"USD"}>USD</MenuItem>
                                    <MenuItem value={"CAD"}>CAD</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </form>
                </div>

                <ResultsList amount={this.state.amount} currency={this.state.currency} />
            </>
        )
    }
}


// https://mui.com/components/selects/

// https://emotion.sh/docs/introduction



    // "result": "success",
    // "documentation": "https://www.exchangerate-api.com/docs",
    // "terms_of_use": "https://www.exchangerate-api.com/terms",
    // "time_last_update_unix": 1647043201,
    // "time_last_update_utc": "Sat, 12 Mar 2022 00:00:01 +0000",
    // "time_next_update_unix": 1647129601,
    // "time_next_update_utc": "Sun, 13 Mar 2022 00:00:01 +0000",
    // "base_code": "EUR",
    // "conversion_rates": {
    //     "EUR": 1,
    //     "AED": 4.0207,
    //     "AFN": 97.1429,