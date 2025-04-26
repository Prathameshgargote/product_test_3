import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  prodcutArr!: Array<Iproduct>;
  hoverProperty:any=null
  constructor(private _productservice: ProductService) {}

  ngOnInit(): void {
    this._productservice.fetchAllProduct().subscribe((res) => {
      console.log(res);
      this.prodcutArr=res
    });
  }
}
