import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  products$;
  constructor(private prodSer: ProductService) { }

  ngOnInit() {
    this.products$ = this.prodSer.getAll()
  }

}
