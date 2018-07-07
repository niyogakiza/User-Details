import React from 'react';

import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export const CustomerDetailsHome = (props) => {
    const {customer} = props;
    const customerInfo = customer['customer details'].map(ts => (
        <ListGroupItem key={ts.id}>
            <div>
                <strong>{ts.name}</strong>
            </div>
            <div>
                <Badge color="primary" pill>{ts.pbdi}</Badge> {' '}
                to{' '}
                <Badge color="primary" pill>{ts.rate}</Badge>
            </div>
        </ListGroupItem>
    ));
    return (
        <ListGroup className="my-3">{customerInfo}</ListGroup>
    )
};