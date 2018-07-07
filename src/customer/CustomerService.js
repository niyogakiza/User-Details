import { environment, WebServiceProvider } from "../common";


export class CustomerService {
    RESOURCE_URL = `${environment.apiUrl}/customers`;

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
        return this.wsp.get(`${this.RESOURCE_URL}/detail/${id}`);

    }

    getAll(){
        return this.wsp
            .get(`${this.RESOURCE_URL}/list/`)
            .then(res => res.customers)
    }

    getAllWithDetails(){
        console.log(this.getAll())
        return this.getAll().then(customers =>
        Promise.all(
            customers.map(h =>
            this.get(h.id)
                .then(customerDetails => ({
                    ...customerDetails,
                    id: h.id
                }))
                .catch(err => {
                    console.error(err);
                    return h;
                }))
        ))
    }
}