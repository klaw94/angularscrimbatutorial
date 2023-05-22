import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/Interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[] = [];
  // isVisible = true;

  // setVisible() {
  //   this.isVisible = !this.isVisible;
  // }

  //Because dataService is a service, when this components loads this component will be created by the provider and injecter by the constructor
  constructor(private dataService: DataService) {
    this.title = '';
  }

  ngOnInit(): void {
    this.title = 'Customers';
    this.dataService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.people = customers));
  }
}
