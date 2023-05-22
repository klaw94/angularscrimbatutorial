import { Component } from '@angular/core';
import { ICustomer } from 'src/app/shared/Interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent {
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = '€';

  constructor() {
    this.customersOrderTotal = 0;
  }

  ngOnInit() {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }
}
