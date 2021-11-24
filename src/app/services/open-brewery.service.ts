import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brewery} from "../model/brewery.model";

@Injectable({
  providedIn: 'root'
})
export class OpenBreweryService {

  listBreweriesUrl = 'https://api.openbrewerydb.org/breweries?page=15'
  // itemsPerPage = 25
  //
  //     ?per_page=

  constructor(private http: HttpClient) { }

  getBreweries(payload: string=''){
    if(payload.length > 3) {

    } else {

    }

    this.http.get(this.listBreweriesUrl).subscribe((data) => {
        console.log(data);
          // data.map()

        }
    );

  }
}
