import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from './data.service';

interface IDataItem {
  name: string;
  id: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
