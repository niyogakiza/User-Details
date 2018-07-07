import React from 'react';

import {ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

export const CustomerListView = (props) => {
    const { customers } = props;
    const customerCards = customers.map(customer => (
        <ListGroup key={customer.id}>
            <ListGroupItem>
                <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
            </ListGroupItem>
        </ListGroup>
    ));
    return <ListGroup>{customerCards}</ListGroup>
};