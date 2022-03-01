import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class DataProvider {
  constructor(public http: HttpClient) {}

  public getAll<T>(url: string): Observable<T> {
    console.log(url);

    let service = this.http.get<T>(url);

    return service.pipe(map((res) => res));
  }
}
