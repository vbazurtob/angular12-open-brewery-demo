import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    MatAutocompleteModule],
    exports: [MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule,
      MatAutocompleteModule]
})
export class MaterialModule {

}
