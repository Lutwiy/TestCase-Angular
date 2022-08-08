import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly httpClient: HttpClient) {}

  public get(): Observable<string> {
    return this.httpClient
      .get('https://randomuser.me/api/')
      .pipe(
        map((response) =>
          (response as any).results.map((x) => `${x.name.first} ${x.name.last}`)
        )
      );
  }
}
