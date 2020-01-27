import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.scss']
})
export class ProductdescriptionComponent implements OnInit {

  product: Product;
  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    //we are going to grab the id
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);

  }

  getProduct(sku: string) {
    //find this information via service
    console.log(sku);
    this.dService.getItem(sku).subscribe(
      x => this.product = x
    );
  
  }

}
