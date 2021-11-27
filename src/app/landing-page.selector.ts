import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Brewery} from "./model/brewery.model";
import {SearchFilters} from "./model/searchFilters.model";
export const selectBreweries = createFeatureSelector<ReadonlyArray<Brewery>>('breweries');
export const selectSuggestions = createFeatureSelector<ReadonlyArray<Brewery>>('suggestions');
export const selectPage = createFeatureSelector<number>('page');
export const selectSearchPayload = createFeatureSelector<SearchFilters>('searchPayload');
export const selectIsSearching = createFeatureSelector<boolean>('isSearching');
export const selectSelectedBrewery = createFeatureSelector<Brewery>('selectedBrewery');


export const selectBreweriesState =
    createSelector(
        selectBreweries,
        (breweries) => {
            return breweries;
        }
    );

export const selectCurrentSuggestions =
    createSelector(
        selectIsSearching,
        (isSearching) => {
            return isSearching;
        }
    );

export const selectCurrentSelectedBrewery =
    createSelector(
        selectSelectedBrewery,
        (brewery) => {
            return brewery;
        }
    );

export const selectCurrentPage =
    createSelector(
        selectPage,
        (page) => {
            return page;
        }
    );

export const selectCurrentFilters =
    createSelector(
        selectSearchPayload,
        (searchPayload: SearchFilters) => {
            return searchPayload;
        }
    );

export const selectPageAndFilters =
    createSelector(
        selectSearchPayload,
        selectCurrentPage,
        (searchPayload: SearchFilters, page:number) => {
            return {
                filters: searchPayload,
                page: page
            };
        }
    );

