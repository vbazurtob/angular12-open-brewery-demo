import {Component, OnInit} from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
import { Store} from "@ngrx/store";
import {selectBreweries} from "../landing-page.selector";
import {retrieveBreweries} from "../landing-page.actions";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    breweries$ = this.store.select(selectBreweries);

    constructor(
      private service: OpenBreweryService,
              private store: Store
              ) { }

  ngOnInit(): void {
    this.service.getBreweries().subscribe(
        (breweries) => {
          this.store.dispatch(retrieveBreweries({ breweries }))
        }
    );
  }


  onPageChanged(page: number){
    this.requestBreweries('', page);
  }

  onSearchText(evt: any){
        //TODO
      // fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      //
      //     // get value
      //     map((event: any) => {
      //         return event.target.value;
      //     })
      //     , filter(res => res.length >3)
      //     , debounceTime(1000)
      //     , distinctUntilChanged()
      //
      // ).subscribe((text: string) => {
      //
      //     this.isSearching = true;
      //
      //     this.searchGetCall(text).subscribe((res) => {
      //         console.log('res', res);
      //         this.isSearching = false;
      //         this.apiResponse = res;
      //     }, (err) => {
      //         this.isSearching = false;
      //         console.log('error', err);
      //     });
      //
      // });
  }

  requestBreweries(payload = '', page = 1){
      this.service.getBreweries(payload, page + 1 ).subscribe(
          (breweries) => {
              this.store.dispatch(retrieveBreweries({ breweries }))
          }
      );
  }

}
