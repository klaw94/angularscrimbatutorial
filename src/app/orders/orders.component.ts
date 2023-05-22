import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/Interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer | null = null;

  //ActivatedRoute is the route where you are in (active route)
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //You only need to subscribe to it (with ParamMap) if the component stays visible in the screen while the url changes. Now it is not necessary, so we only grab it once
    let stringId = this.route.snapshot.paramMap.get('id');
    let id: number;

    if (stringId !== null) {
      console.log(stringId);
      id = +stringId;
      this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
        this.orders = orders;
      });

      this.dataService
        .getCustomer(id)
        .subscribe((customer: ICustomer | null) => {
          this.customer = customer;
        });
    }
  }
}
