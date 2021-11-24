import { Component, OnInit } from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
// import {OpenBreweryService} from '../services/open-brewery.service';
import {on, Store} from "@ngrx/store";
import {selectBreweries} from "../landing-page.selector";
import {retrieveBreweries} from "../landing-page.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    ff: Observable<number> = Observable.create( (x: number) => 2);

  breweries$ = this.store.select(selectBreweries);

  constructor(
      private service: OpenBreweryService,
              private store: Store
              ) { }

  ngOnInit(): void {
    this.service.getBreweries().subscribe(
        (breweries) => {
            // console.log(`breweries`);
            // console.log(breweries);
          this.store.dispatch(retrieveBreweries({ breweries }))
        }
    );
  }

  // search(payload: string) {
  //
  // }

}
