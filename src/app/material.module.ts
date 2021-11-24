import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule],
    exports: [MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class MaterialModule {

}
