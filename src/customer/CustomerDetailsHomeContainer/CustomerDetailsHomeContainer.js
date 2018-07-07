import React, {Component} from 'react';
import { Alert, Fade } from 'reactstrap';
import { Link } from 'react-router-dom';


import { CustomerDetailsHome } from "../CustomerDetailsHome";
import { CustomerService } from "../CustomerService";
import { CustomerInSessionService } from "../CustomerInSessionService";
import { ProgressBar } from "../../common/ProgressBar";

export class CustomerDetailsHomeContainer extends Component {
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
            customer: null
        }
    }

    componentDidMount() {
        const customers = CustomerInSessionService.customers;
        const { customerId } = this.props;
        if(customers) {
            const customer = customers.find(h => h.id === customerId);
            if(customer) {
                this.setState({
                    loadingState: 'loaded',
                    customer
                });
                return;
            }
        }
        this.setState({ loadingState: 'loading'});
        this.customerService
            .get(customerId)
            .then(customer => {
                customer = {...customer, id: customerId };
                this.setState({ loadingState: 'loaded', customer });
                CustomerInSessionService.customers = [...customers, customer];
            })
            .catch(() => this.setState({ loadingState: 'error' }));
    }
    render() {
        const loadingStateView = this.getLoadingStateView();
        const backToList = (
            <div className="my-2">
                <Link to="/customers">&lt; Back To List</Link>
            </div>
        );
        return (
            <div>
                {backToList} {loadingStateView}
            </div>
        )
    }

    getLoadingStateView() {
        const loadingState = this.state.loadingState;
        switch (loadingState) {
            case 'loading':
                return(
                    <span>
                        Loading customer details...<ProgressBar />
                    </span>
                );
            case 'loaded':
                return(
                    <Fade>
                        <CustomerDetailsHome customer={this.state.customer}/>
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