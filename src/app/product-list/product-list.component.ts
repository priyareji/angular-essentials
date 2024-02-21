import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name="Priya Renny"
 products:string[]=["phone","Laptop","Notepad","Camera","Earphone"]
  addToCart=0;
  product={
    name:'iPhone 13',
    price:9999,
    color:'Red',
    discount:12,
    inStock:4,
    pImage:'/assets/images/photo-1591337676887-a217a6970a8a.avif'
  }
  getDiscount():number{
    return this.product.price-(this.product.price*this.product.discount/100)
  }
  changeInput(event:any){
    console.log(event.target.value)
    this.name=event.target.value
  }
  incrementStock(){
    if(this.addToCart<this.product.inStock)this.addToCart++
  }
  decrementStock(){
    if(this.addToCart>0)this.addToCart--
  }
}

