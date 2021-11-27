import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brewery} from "../model/brewery.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SearchFilters} from "../model/searchFilters.model";

@Injectable({
  providedIn: 'root'
})
export class OpenBreweryService {

  listBreweriesUrl = 'https://api.openbrewerydb.org/breweries?per_page=15'
  getBreweryByIdUrl = 'https://api.openbrewerydb.org/breweries/'
  searchBreweriesUrl = 'https://api.openbrewerydb.org/breweries/search?query='
  constructor(private http: HttpClient) { }

  private formatFilters(filters: SearchFilters){
    let filterQueryString = '';
    filterQueryString+= filters.name != '' ? `by_name=${encodeURI(filters.name)}&` : '';
    filterQueryString+= filters.city != '' ? `by_city=${encodeURI(filters.city)}` : '';
    return filterQueryString;
  }

  filterBreweries(filters: SearchFilters, page=1){
    return this.getBreweries(
        filters,
        page
    )
  }

  getBreweries(filters: SearchFilters, page: number = 1): Observable<Array<Brewery>>{
    // API accepts page from index 1. Data table start its index from 0. We add one to comply
    // with the API contract
    page++;
    return this.http.get<any[]>(this.listBreweriesUrl + `&page=${page}&${this.formatFilters(filters)}`)
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
