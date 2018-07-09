import React from 'react';

import { Link } from 'react-router-dom';
import { Collection, CollectionItem} from "react-materialize";

export const CustomerListView = (props) => {
    const { customers } = props;
    const customerCards = customers.map(customer => (
        <Collection key={customer.id}>
            <CollectionItem style={styles.gap}>
                <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
            </CollectionItem>
        </Collection>
    ));
    return <div> {customerCards} </div>
};

const styles = {
    gap: {
        marginBottom: 10
    }
};