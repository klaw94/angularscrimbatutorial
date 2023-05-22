import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //'' if you go to the root url, it goes to 'customers
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  //'**' if the root doesnt exist, it goes to /customers
  { path: '**', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
  //you only call forRoot once, normally in the root.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
