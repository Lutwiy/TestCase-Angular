import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'customers',
        pathMatch: 'full',
        loadChildren: () =>
          import('./customers/customers.module').then((x) => x.CustomersModule),
      },
      {
        path: 'users',
        pathMatch: 'full',
        loadChildren: () =>
          import('./users/users.module').then((x) => x.UsersModule),
      },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
