import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor() { }

    getProducts() {
        return [
            {
                name: 'Laptop - from service',
                price: 1200,
                category: 'Electronics'
            },
            {
                name: 'PhoneLaptop - from service',
                price: 800,
                category: 'Electronics'
            },
            {
                name: 'Desk ChairLaptop - from service',
                price: 250,
                category: 'Furniture'
            },
            {
                name: 'MonitorLaptop - from service',
                price: 300,
                category: 'Electronics'
            }
        ];
    }
}
