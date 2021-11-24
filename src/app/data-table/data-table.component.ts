import {Component, Input, OnInit} from '@angular/core';

import {Brewery} from '../model/brewery.model';
import {Observable} from "rxjs";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() breweries: ReadonlyArray<Brewery> = [];

  displayedColumns = [
    'name', 'type', 'city', 'country', 'link', 'phone'
  ]

  // dataSource: any[] = [
    // {
    //   name: 'BNA'
    // }
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
