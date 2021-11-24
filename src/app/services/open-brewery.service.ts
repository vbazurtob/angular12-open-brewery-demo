import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brewery} from "../model/brewery.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OpenBreweryService {

  listBreweriesUrl = 'https://api.openbrewerydb.org/breweries?per_page=15'

  constructor(private http: HttpClient) { }

  getBreweries(payload: string=''): Observable<Array<Brewery>>{
    // if(payload.length > 3) {
    //
    // } else {
    //
    // }

    return this.http.get<any[]>(this.listBreweriesUrl)
        .pipe(
            map( (breweries: any[]) => {
                  return breweries.map( brewery => {
                    const {
                      address_2,
                      address_3,
                      created_at,
                      updated_at,
                      ...x
                    } = (brewery);
                    return x;
                  });
            })
        );
  }
}
