import {Brewery} from "./model/brewery.model";
import {createReducer, on} from "@ngrx/store";
import {retrieveBreweries} from "./landing-page.actions";

export const initialState: ReadonlyArray<Brewery> = [];

export const breweriesReducer = createReducer(
    initialState,
    on(retrieveBreweries, (state, { breweries }) => breweries),
);

