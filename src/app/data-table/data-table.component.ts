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

  @Input() currentPage: number = 1;
  @Input() breweries: ReadonlyArray<Brewery> = [];
  @Output() changePage = new EventEmitter<number>();

  readonly displayedColumns = [
    'name', 'type', 'city', 'country', 'link', 'phone'
  ]
  readonly maxItemsPerPage = 15;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go(id: number){
    this.router.navigate(['details', id]);
  }

  computeMaxLength(paginator: any){
    if(this.breweries.length < this.maxItemsPerPage) {
      return this.breweries.length;
    }
    return (this.breweries.length * (paginator.pageIndex == 0 ?
            1: paginator.pageIndex
    )) + 16;
  }
}
