import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product2Service } from '../../services/product2.service';
import { Product2 } from '../../services/interfaces/Product';

@Component({
    selector: 'app-products2-demo',
    templateUrl: './products2-demo.component.html',
    styleUrl: './products2-demo.component.css'
})
export class Products2DemoComponent implements OnInit {
    products2: Product2[] = [];

    constructor(private product2Service: Product2Service) {
    }

    ngOnInit(): void {
        this.product2Service.getProducts().subscribe(response => {
            this.products2 = response.products.slice(0, 5);
            console.log(this.products2);
        });
    }
}
