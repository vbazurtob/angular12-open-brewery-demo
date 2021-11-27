import { createAction, props } from '@ngrx/store';
import {Brewery} from "./model/brewery.model";
import {SearchFilters} from "./model/searchFilters.model";

export const setCurrentBreweries = createAction(
    '[Data table] List Breweries',
    props<{breweries: ReadonlyArray<Brewery>}>()
);

export const setSuggestionsForBreweries = createAction(
    '[Auto-complete input] Suggestions for Breweries',
    props<{suggestions: ReadonlyArray<Brewery>}>()
);

export const updateCurrentPage = createAction(
    '[Data Table Next Button] Set Brewery Page',
    props<{page: number}>()
);

export const updateFilters = createAction(
    '[Filter panel button] Set filters',
    props<{searchPayload: SearchFilters}>()
);

export const updateSelectedBrewery = createAction(
    '[Auto-complete list | Data table] Select brewery',
    props<{selectedBrewery: Brewery}>()
);

export const updateIsSearching = createAction(
    '[Auto-complete input text] Is auto complete searching',
    props<{isSearching: boolean}>()
);