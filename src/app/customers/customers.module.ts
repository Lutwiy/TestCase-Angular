import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CustomersComponent,
      },
    ]),
  ],
})
export class CustomersModule {}
