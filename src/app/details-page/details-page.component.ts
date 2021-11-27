import { Component, OnInit } from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Brewery} from "../model/brewery.model";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  brewery: any;

  constructor(private route: ActivatedRoute, private service: OpenBreweryService) { }

  ngOnInit(): void {
    this.brewery = {};
    this.route.params.subscribe( (params: Params) =>
        {
          this.service.getById(params['id']).subscribe((d) => this.brewery = (d));
        }
    );
    // this.service.getBreweryByIdUrl()
  }

}
