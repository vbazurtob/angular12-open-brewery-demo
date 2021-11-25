import {Brewery} from "./model/brewery.model";

export interface AppState {
    breweries: ReadonlyArray<Brewery>,
    page: number
    searchPayload: string
}
