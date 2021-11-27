import {Component, OnInit} from '@angular/core';
import {OpenBreweryService} from "../services/open-brewery.service";
import { Store} from "@ngrx/store";
import {
    selectBreweries,
    selectCurrentFilters,
    selectCurrentPage, selectIsSearching,
    selectPageAndFilters,
    selectSuggestions
} from "../landing-page.selector";
import {
    setCurrentBreweries,
    setSuggestionsForBreweries,
    updateCurrentPage,
    updateFilters, updateIsSearching
} from "../landing-page.actions";
import {SearchFilters} from "../model/searchFilters.model";
import {pageInitialState, suggestionsInitialState} from "../landing-page.reducer";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    breweries$ = this.store.select(selectBreweries);
    suggestions$ = this.store.select(selectSuggestions);
    currentPage$ = this.store.select(selectCurrentPage);
    currentFilters$ = this.store.select(selectCurrentFilters);
    currentFiltersAndPage$ = this.store.select(selectPageAndFilters);
    isSearching$ = this.store.select(selectIsSearching);

    constructor(
      private service: OpenBreweryService,
              private store: Store
              ) { }

  ngOnInit(): void {
      this.store.dispatch(updateCurrentPage({page: pageInitialState}));

      this.currentFiltersAndPage$.subscribe( (filtersAndPage) =>
          this.requestBreweries(filtersAndPage.filters, filtersAndPage.page)
      );
  }

  onPageChanged(page: number){
    this.store.dispatch(updateCurrentPage({page: page}));
  }


  requestBreweries(payload: SearchFilters, page: number){
      this.service.getBreweries(payload, page ).subscribe(
          (breweries) => {
              this.store.dispatch(setCurrentBreweries({ breweries }))
          }
      );
  }

  debounceText(e:string){
      this.store.dispatch(updateIsSearching({isSearching: true}))
        this.store.dispatch(setSuggestionsForBreweries({suggestions: suggestionsInitialState}));
        this.service.searchBreweries(e).subscribe(
            {
                next:
                    async (breweries)  => {
                        this.store.dispatch(updateIsSearching({isSearching: false}))
                        this.store.dispatch(setSuggestionsForBreweries({suggestions: breweries}));
                    },
                error:
                    error => this.store.dispatch(updateIsSearching({isSearching: false}))
            }
        );
  }

  filterBreweries(filters: SearchFilters){
      this.store.dispatch(updateFilters({searchPayload: filters}));
      this.store.dispatch(updateCurrentPage({page: pageInitialState }));
  }

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
