import {Brewery} from "./model/brewery.model";
import {createReducer, on} from "@ngrx/store";
import {
    setCurrentBreweries,
    setSuggestionsForBreweries,
    updateCurrentPage,
    updateFilters, updateIsSearching, updateSelectedBrewery
} from "./landing-page.actions";

export const dataTableInitialState: ReadonlyArray<Brewery> = [];
export const suggestionsInitialState: ReadonlyArray<Brewery> = [];
export const pageInitialState = 0;
export const searchFilterInitialState = {
    name: '',
    city: ''
};
export const isSearchingInitialState: boolean = false;
export const selectedBreweryInitialState: Brewery = {
    state: '',
    city: '',
    brewery_type: '',
    id: '',
    country: '',
    county_province: '',
    name: '',
    latitude: 0.0,
    longitude: 0.0,
    phone: '',
    postal_code: '',
    street: '',
    website_url: ''
};


export const breweriesReducer = createReducer(
    dataTableInitialState,
    on(setCurrentBreweries, (state, { breweries }) => breweries),
);

export const suggestionsReducer = createReducer(
    suggestionsInitialState,
    on(setSuggestionsForBreweries, (state, { suggestions }) => suggestions),
);

export const pageReducer = createReducer(
    pageInitialState,
    on(updateCurrentPage, (state, { page }) => page  ),
);

export const searchFilterReducer = createReducer(
    searchFilterInitialState,
    on(updateFilters, (state, { searchPayload }) => searchPayload  ),
);

export const isSearchingReducer = createReducer(
    isSearchingInitialState,
    on(updateIsSearching, (state, { isSearching }) => isSearching  ),
);

export const selectedBreweryReducer = createReducer(
    selectedBreweryInitialState,
    on(updateSelectedBrewery, (state, { selectedBrewery }) => selectedBrewery  ),
);