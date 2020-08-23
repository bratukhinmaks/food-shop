import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
