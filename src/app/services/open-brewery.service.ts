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
  getBreweryByIdUrl = 'https://api.openbrewerydb.org/breweries/'
  searchBreweriesUrl = 'https://api.openbrewerydb.org/breweries/search?query='
  constructor(private http: HttpClient) { }

  getBreweries(payload: string='', page: number = 1): Observable<Array<Brewery>>{
    // if(payload.length > 3) {
    //
    // } else {
    //
    // }

    return this.http.get<any[]>(this.listBreweriesUrl + `&page=${page}`)
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
                  })  || [] ;
            })
        );
  }

  getById(id: string){
    return this.http.get<Brewery>(this.getBreweryByIdUrl + `/${id}`);
  }

  searchBreweries(payload: string){
    return this.http.get<any[]>(this.searchBreweriesUrl + `${payload}`)
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
              }).slice(0,10)  || [] ;
            })
        );
  }
}
