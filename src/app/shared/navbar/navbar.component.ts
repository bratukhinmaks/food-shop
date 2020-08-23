import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cat = 'main';
  constructor(private router: Router , private prodServ: ProductService) { }

  ngOnInit() {
  }
  setType(cat) {
    this.cat = cat ;
    this.router.navigate(['/'], {
      queryParams: {
        cat: this.cat
      }
    })
    this.prodServ.setType(this.cat)
  }

}
