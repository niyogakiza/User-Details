import React from 'react';

import {ListGroup, ListGroupItem, Badge, NavItem, NavLink} from 'reactstrap';

export const CustomerDetailsHome = (props) => {
    const {customer} = props;
    const customerInfo = (
        <ListGroup key={customer.id}>
            <div style={styles.title}>
                {customer.name}
            </div>
            <div>
                <ListGroupItem>
                    <h4>Bpid :<Badge color="secondary"> {customer.bpid}</Badge></h4>
                    <h4>Dealer :<Badge color="secondary"> {customer.dealer}</Badge></h4>
                    <h4>Status :<Badge color="secondary"> {customer.status}</Badge></h4>
                    <h4>AgrNo :<Badge color="secondary"> {customer.agrNo}</Badge></h4>
                    <h4>Parity :<Badge color="secondary"> {customer.parity}</Badge></h4>
                    <h4>Term :<Badge color="secondary"> {customer.term}</Badge></h4>
                    <h4>Ballon :<Badge color="secondary"> {customer.balloon}</Badge></h4>
                    <h4>Otrp :<Badge color="secondary"> {customer.otrp}</Badge></h4>
                    <h4>Valuation :<Badge color="secondary"> {customer.valuation}</Badge></h4>
                    <h4>Rate :<Badge color="secondary"> {customer.rate}</Badge></h4>
                    <h4>Payment :<Badge color="secondary"> {customer.payment}</Badge></h4>
                    <h4>CapID :<Badge color="secondary"> {customer.capID}</Badge></h4>
                    <h4>Type :<Badge color="secondary"> {customer.type}</Badge></h4>
                    <h4>Make :<Badge color="secondary"> {customer.make}</Badge></h4>
                    <h4>Model :<Badge color="secondary"> {customer.model}</Badge></h4>
                    <h4>Derivative :<Badge color="secondary"> {customer.derivative}</Badge></h4>
                    <h4>Vrm :<Badge color="secondary"> {customer.vrm}</Badge></h4>
                    <h4>Vin :<Badge color="secondary"> {customer.vin}</Badge></h4>
                    <h4>Rate :<Badge color="secondary"> {customer.rate}</Badge></h4>
                    <NavItem>
                        <NavLink href="http://images.capnetwork.co.uk/VehicleImage.aspx?SUBID=152231&HASHCODE=F6C248C967D9B5238AB6F06F2C92DA55&DB=car&CAPID=71890&VIEWPOINT=3">
                            Car Image
                        </NavLink>
                    </NavItem>
                </ListGroupItem>
            </div>
        </ListGroup>
    );
    return (
        <ListGroup className="my-3">{customerInfo}</ListGroup>
    )
};

const styles = {
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
};