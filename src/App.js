import React, { Component } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';
import { CustomerDetailsHomeContainer} from "./customer/CustomerDetailsHomeContainer";
import { CustomersHomeContainer } from './customer/CustomersHomeContainer'
import { PageNotFound } from './common/PageNotFound';

class App extends Component {
    render() {
        return(
            <Container>
                <h1 className="my-3 text-align-center">Vehicle Founder </h1>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/customers"/>}/>
                        <Route path="/customers" component={CustomersHomeContainer}/>
                        <Route
                            path="/customer/:id"
                            render={({ match }) => (
                                <CustomerDetailsHomeContainer
                                    customerId={+match.params.id}
                                />
                            )}
                        />
                        <Route
                            component={PageNotFound}
                        />

                    </Switch>
                </BrowserRouter>
            </Container>
        )
    }

}
export default App;