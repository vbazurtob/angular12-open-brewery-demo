import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Brewery} from "../model/brewery.model";
import {SearchFilters} from "../model/searchFilters.model";

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @ViewChild('nameFilter') nameFilter!: ElementRef<HTMLInputElement>;
  @ViewChild('cityFilter') cityFilter!: ElementRef<HTMLInputElement>;


  @Input() breweries: ReadonlyArray<Brewery> = [];
  @Output() filtersEventEmitter = new EventEmitter<SearchFilters>();

  constructor() { }

  ngOnInit(): void {
  }

  filterResults(){
    this.filtersEventEmitter.emit({
      name: this.nameFilter.nativeElement.value,
      city: this.cityFilter.nativeElement.value
    });
  }

}
