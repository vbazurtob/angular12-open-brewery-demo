import { createAction, props } from '@ngrx/store';
import {Brewery} from "./model/brewery.model";

export const retrieveBreweries = createAction(
    '[Auto Suggest Input] Search Brewery',
    props<{breweries: ReadonlyArray<Brewery>}>()
);

export const nextBreweriesPage = createAction(
    '[Data Table Next Button] Next Brewery Page',
    props<{page: number}>()
);

export const previousBreweriesPage = createAction(
    '[Data Table Previous Button] Previous Brewery Page',
    props<{page: number}>()
);
