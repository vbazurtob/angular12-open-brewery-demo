import { Component, OnInit } from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectBreweryCoordinates, selectCurrentSelectedBrewery} from "../landing-page/landing-page.selector";
import {updateSelectedBrewery} from "../landing-page/landing-page.actions";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  selectedBrewery$ = this.store.select(selectCurrentSelectedBrewery);
  selectBreweryCoordinates$ = this.store.select(selectBreweryCoordinates);
  readonly defaultCenter = new google.maps.LatLng(0,0);
  isLoading = false;

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  constructor(private route: ActivatedRoute, private service: OpenBreweryService, private store: Store) { }
  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) =>
        {
          this.isLoading = true;
          this.service.getById(params['id']).subscribe({
            next: async (d) => {
              this.isLoading = false;
              this.store.dispatch(updateSelectedBrewery({selectedBrewery: d}))
            },
            error: (e) => this.isLoading = false
          });
        }
    );
  }

}
