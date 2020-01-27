import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
products : Product[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }

}
