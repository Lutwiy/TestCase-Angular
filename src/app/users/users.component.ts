import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from '../data.service';

interface IDataItem {
  name: string;
  id: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public data: IDataItem[];
  public selected: IDataItem;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.get().subscribe((result: string) => {
      this.data = [{ id: 1, name: result }];
    });
  }

  public onSelect(item: IDataItem): void {
    this.selected = item;
  }
}
