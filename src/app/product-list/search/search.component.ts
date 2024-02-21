import { Component } from '@angular/core';
import { FormsModule,NgModel } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchItem:string="womens watch"
  // serchText(event:any){
  //   this.searchItem=event.target.value;
  // }

}
