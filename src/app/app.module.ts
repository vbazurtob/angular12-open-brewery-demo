import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutosuggestInputFieldComponent } from './autosuggest-input-field/autosuggest-input-field.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {
  breweriesReducer,
  isSearchingReducer,
  pageReducer,
  searchFilterReducer, selectedBreweryReducer,
  suggestionsReducer
} from "./landing-page.reducer";
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AutosuggestInputFieldComponent,
    FilterPanelComponent,
    DataTableComponent,
    LandingPageComponent,
    DetailsPageComponent
  ],
  imports: [
    AppRoutingModule,
    StoreModule.forRoot(
    {
              searchPayload: searchFilterReducer,
              page: pageReducer,
              breweries: breweriesReducer,
              suggestions: suggestionsReducer,
              isSearching: isSearchingReducer,
              selectedBrewery: selectedBreweryReducer
    }),
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
