export default class ProductService {
    _apiBase = 'https://demo4233545.mockable.io';
    getProducts = async () => {
        const res = await fetch(`${this._apiBase}/products`);

        if (!res.ok) {
            throw new Error(`Could not fetch /products` +
                `, received ${res.status}`)
        }
        return await res.json();
    }
}