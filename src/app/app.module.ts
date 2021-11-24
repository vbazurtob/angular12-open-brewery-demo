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
// import {breweriesReducer} from "./landing-page.reducer";

@NgModule({
  declarations: [
    AppComponent,
    AutosuggestInputFieldComponent,
    FilterPanelComponent,
    DataTableComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({}, {}),

    // StoreModule.forRoot({ breweries: breweriesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
