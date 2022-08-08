import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
})
export class UsersModule {}
