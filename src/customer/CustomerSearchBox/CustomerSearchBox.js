import React, { Component } from 'react';

import {Input, Row} from "react-materialize";

export class CustomerSearchBox extends Component {

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    };

    render(){
        return(
            <Row>
                <Input
                    s={12}
                    placeholder="Search By Name"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </Row>
        );
    }
}
