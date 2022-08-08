import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from '../data.service';

interface IDataItem {
  name: string;
  id: number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  public data$: Observable<IDataItem>;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.get().pipe(
      map((result: string) => {
        return {
          id: 1,
          name: result,
        };
      })
    );

    this.data$.subscribe();
  }
}
