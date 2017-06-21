import {NgModule} from "@angular/core";
import {SearchComponent} from "./search.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
    imports     : [CommonModule, FormsModule],
    declarations: [SearchComponent],
    exports     : [SearchComponent]
})

export class SearchModule {

}