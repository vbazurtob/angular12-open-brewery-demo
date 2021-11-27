import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, fromEvent} from "rxjs";
import {map} from "rxjs/operators";
import {Brewery} from "../model/brewery.model";

@Component({
  selector: 'app-autosuggest-input-field',
  templateUrl: './autosuggest-input-field.component.html',
  styleUrls: ['./autosuggest-input-field.component.scss']
})
export class AutosuggestInputFieldComponent implements OnInit {

  @Input() isLoading = true;
  @Input() breweries: ReadonlyArray<Brewery> = [];
  @Output() textChange = new EventEmitter<string>();
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.debounceSearch();
  }

  debounceSearch(){
    fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(
          // get value
          map((event: any) => {
              return event.target.value;
          })
          , filter(res => res.length > 3)
          , debounceTime(1000)
          , distinctUntilChanged()

      ).subscribe((text: string) => {
          this.textChange.emit(text);
      });
  }

}
