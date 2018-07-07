export class WebServiceProvider {
    get(url) {
        return fetch(url).then(res => res.json());
    }
}