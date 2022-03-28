import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos_idx: any =[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductsIdx()
      .subscribe((resp:any)=>{
      this.productos_idx=resp;

      });

  }

}
