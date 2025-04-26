import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';
import { count } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId!: string;
  productInfo!: Iproduct;
  onclickSmImg: any;
  quantity: number = 1;
  prodImg!:Array<string>
  constructor(
    private _activateRoute: ActivatedRoute,
    private _productservice: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this._activateRoute.snapshot.params['Id'];
    console.log(this.productId);
    this._productservice.getsingleproduct(this.productId).subscribe((res) => {
      console.log(res);
      this.productInfo = res;
      this.prodImg=res.images
    });
  }

  Ondecres() {
   if(this.quantity>1){
    this.quantity--;
   }
  }
  OnIncrece(){
    this.quantity++
  }

  OnSmImg(imgg:string){
console.log(imgg);
this.productInfo.images[0]=imgg

  }
}
