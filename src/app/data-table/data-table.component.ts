import { Component, OnInit } from '@angular/core';

import {Brewery} from '../model/brewery.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns = [
    'name', 'type', 'city', 'country', 'link', 'phone'
  ]

  dataSource: any[] = [
    // {
    //   name: 'BNA'
    // }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
