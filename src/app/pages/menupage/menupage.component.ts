import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }
  getMenuId: number;
  menuData: any;
  ngOnInit(): void {
    this.getMenuId = Number(this.param.snapshot.paramMap.get('id'));
    if (this.getMenuId) {
      this.menuData =  this.service.foodDetails.filter((value) => {
          return value.id === this.getMenuId;
        });
    }
    console.log(this.menuData);
  }

}
