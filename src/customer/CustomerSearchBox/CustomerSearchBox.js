import React, { Component } from 'react';

import { FormGroup, Input, Label } from 'reactstrap';


export class CustomerSearchBox extends Component {

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    };

    render(){
        return(
            <FormGroup>
                <Label>Search by name</Label>
                <Input
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </FormGroup>
        )
    }
}