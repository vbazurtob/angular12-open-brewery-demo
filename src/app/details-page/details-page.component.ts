import { Component, OnInit } from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectSelectedBrewery} from "../landing-page.selector";
import {updateSelectedBrewery} from "../landing-page.actions";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  selectedBrewery$ = this.store.select(selectSelectedBrewery);
  // brewery: any;

  constructor(private route: ActivatedRoute, private service: OpenBreweryService, private store: Store) { }

  ngOnInit(): void {
    // this.brewery = {};

    this.route.params.subscribe( (params: Params) =>
        {
          this.service.getById(params['id']).subscribe((d) =>
              // this.brewery = (d)
              this.store.dispatch(updateSelectedBrewery({selectedBrewery: d}))
          );
        }
    );
    // this.service.getBreweryByIdUrl()
  }

}
