import React from 'react';

import { Card, CardDeck, CardHeader } from  'reactstrap';
import { Link } from 'react-router-dom';

export const CustomerListView = (props) => {
    const { customers } = props;
    const customerCards = customers.map(customer => (
        <Card key={customer.id}>
            <CardHeader>
                <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
            </CardHeader>
        </Card>
    ));
    return <CardDeck>{customerCards}</CardDeck>
}