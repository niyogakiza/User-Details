import { environment, WebServiceProvider } from "../common";

export class CustomerService {
    _wsp;

    get wsp(){
        if(!this._wsp) {
            this._wsp = new WebServiceProvider();
        }
        return this._wsp;
    }

    set wsp(value) {
        this._wsp = value;
    }

    get(id) {
        return this.wsp.get(`${environment.lead}/${id}`);

    }

    getAll(){
        return this.wsp
            .get(`${environment.leads}`)
            .then(res => {
                return res
            })
    }

    getAllWithDetails() {
        return this.getAll()
            .then(customers => {
                return Promise.all(
                    customers.map(h => {
                            return this.get(h.id)
                                .then(customerDetails => {
                                    return customerDetails
                                })
                                .catch(err => {
                                    console.error(err);
                                })
                        }
                    )
                )
            }).catch(err => {
                console.log('some weird errrr', err);
            })
    }
}