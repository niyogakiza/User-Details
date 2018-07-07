import React, { Component } from 'react';

import { CustomerListView } from "../CustomerListView";
import { CustomerSearchBox } from "../CustomerSearchBox";


export class CustomerHome extends Component {
    constructor(props){
        super(props);
        this.state = { searchText: ''};

    }

    handleSearch = (searchText) =>{
        this.setState({ searchText });
    };

    render() {
        const { searchText } = this.state;
        const { customers } = this.props;
        const filteredCustomers = !searchText ? customers : customers.filter(h =>
        h.name.toLowerCase().includes(searchText.toLowerCase()));
        return (
            <div>
                <CustomerSearchBox
                    value={searchText}
                    onChange={this.handleSearch}
                />
                <div>
                    <CustomerListView customers={filteredCustomers}/>
                </div>

            </div>
        )
    }

}
