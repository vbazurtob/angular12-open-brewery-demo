import {Component, OnInit} from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
import { Store} from "@ngrx/store";
import {selectBreweries} from "../landing-page.selector";
import {retrieveBreweries} from "../landing-page.actions";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    breweries$ = this.store.select(selectBreweries);

    constructor(
      private service: OpenBreweryService,
              private store: Store
              ) { }

  ngOnInit(): void {
    this.service.getBreweries().subscribe(
        (breweries) => {
            console.log(breweries);
          this.store.dispatch(retrieveBreweries({ breweries }))
        }
    );
  }


  onPageChanged(page: number){
    this.requestBreweries('', page);
  }

  onSearchText(evt: any){
  }

  requestBreweries(payload = '', page = 1){
      this.service.getBreweries(payload, page + 1 ).subscribe(
          (breweries) => {
              this.store.dispatch(retrieveBreweries({ breweries }))
          }
      );
  }

}
