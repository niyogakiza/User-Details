import React, { Component } from 'react';

import { Alert, Fade } from 'reactstrap';

import { CustomerService } from "../CustomerService";
import { CustomerHome } from "../CustomerHome";
import { CustomerInSessionService } from "../CustomerInSessionService";
import { ProgressBar } from "../../common/ProgressBar"

export class CustomersHomeContainer extends Component {
    _customerService;

    get customerService() {
        if(!this._customerService) {
            this._customerService = new CustomerService();
        }
        return this._customerService;
    }

    set customerService(value) {
        this._customerService = value;
    }
    constructor(props){
        super(props);
        this.state = {
            loadingState: null,
            customers: []
        }
    }

    componentDidMount() {
        const { allLoaded } = CustomerInSessionService;
        if(allLoaded){
            const { customers } = CustomerInSessionService;
            this.setState({
                loadingState: 'loaded',
                customers
            });
            return;
        }
        this.setState({ loadingState: 'loading' });
        this.customerService
            .getAllWithDetails()
            .then(customers => {
                this.setState({
                    loadingState: 'loaded',
                    customers
                });
                CustomerInSessionService.customers = customers;
                CustomerInSessionService.allLoaded = true;
            })
            .catch(() => this.setState(
                { loadingState: 'error' }
            ));

    }
    render() {
        const loadingState = this.state.loadingState;
        switch (loadingState){
            case 'loading':
                return(
                    <span>
                        Loading customers ...<ProgressBar />
                    </span>
                );
            case 'loaded':
                return(
                    <Fade>
                        <CustomerHome customers={this.state.customers}/>
                    </Fade>
                );
            case 'error':
                return(
                    <Fade>
                        <Alert color="danger">
                            An error occured. Please refresh to try again.
                        </Alert>
                    </Fade>
                );
            default:
                return null;
        }
    }
}