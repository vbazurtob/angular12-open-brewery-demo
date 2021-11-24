import { Component, OnInit } from '@angular/core';
import {OpenBreweryService} from '../services/open-brewery.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private service: OpenBreweryService) { }

  ngOnInit(): void {
    this.service.getBreweries();
  }

}
