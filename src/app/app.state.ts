import {Brewery} from "./model/brewery.model";
import {SearchFilters} from "./model/searchFilters.model";

export interface AppState {
    suggestions: ReadonlyArray<Brewery>,
    breweries: ReadonlyArray<Brewery>,
    page: number
    searchPayload: SearchFilters,
    selectedBrewery: Brewery,
    isSearching: boolean
}
