import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Brewery} from '../model/brewery.model';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() breweries: ReadonlyArray<Brewery> = [];
  @Output() changePage = new EventEmitter<number>();

  displayedColumns = [
    'name', 'type', 'city', 'country', 'link', 'phone'
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go(id: number){
    this.router.navigate(['details', id]);
  }
}
