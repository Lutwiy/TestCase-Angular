import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public data$: Observable<string>;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.get();

    this.data$.subscribe();
  }
}
