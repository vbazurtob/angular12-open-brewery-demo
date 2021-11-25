import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Brewery} from "./model/brewery.model";
export const selectBreweries =
    createFeatureSelector<ReadonlyArray<Brewery>>('breweries');
export const selectPage =
    createFeatureSelector<number>('page');

export const selectBreweriesState =
    createSelector(
        selectBreweries,
        (breweries) => {
            return breweries;
        }
    );

export const selectNextPageBreweriesState =
    createSelector(
        selectPage,
        (page) => {
            return page;
        }
    );