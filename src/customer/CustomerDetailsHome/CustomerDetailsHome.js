import React from 'react';

 import { NavItem, NavLink} from 'reactstrap';
import {Badge, Collection, CollectionItem} from "react-materialize";


export const CustomerDetailsHome = (props) => {
    const {customer} = props;
    const customerInfo = (
        <div key={customer.id}>
            <div style={styles.title}>
                {customer.name}
            </div>

                <Collection>
                    <CollectionItem style={styles.gap}>
                        Bpid :<Badge>{customer.bpid}</Badge>
                    </CollectionItem>
                    <CollectionItem >
                        Dealer :<Badge>{customer.dealer}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Status :<Badge>{customer.status}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        AgrNo :<Badge>{customer.agrNo}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Parity :<Badge>{customer.parity}</Badge>
                    </CollectionItem>
                    <CollectionItem >
                        Term :<Badge>{customer.term}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Balloon :<Badge>{customer.balloon}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Otrp :<Badge>{customer.otrp}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Rate :<Badge>{customer.rate}</Badge>
                    </CollectionItem>
                    <CollectionItem >
                        Valuation :<Badge>{customer.valuation}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Payment :<Badge>{customer.payment}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        CapID :<Badge>{customer.capID}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Type :<Badge>{customer.type}</Badge>
                    </CollectionItem>
                    <CollectionItem >
                        Make :<Badge>{customer.make}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Model :<Badge>{customer.model}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Derivative :<Badge>{customer.derivative}</Badge>
                    </CollectionItem>
                    <CollectionItem>
                        Vrm :<Badge>{customer.vrm}</Badge>
                    </CollectionItem>
                    <CollectionItem >
                        Vin :<Badge>{customer.vin}</Badge>
                    </CollectionItem>
                    <NavItem>
                        <NavLink href="http://images.capnetwork.co.uk/VehicleImage.aspx?SUBID=152231&HASHCODE=F6C248C967D9B5238AB6F06F2C92DA55&DB=car&CAPID=71890&VIEWPOINT=3">
                            Car Image
                        </NavLink>
                    </NavItem>
                </Collection>
        </div>
    );
    return (
        <div className="my-3">{customerInfo}</div>
    )
};

const styles = {
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    gap: {
        marginBottom: 10
    }
};