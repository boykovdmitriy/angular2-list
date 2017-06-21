import {NgModule} from "@angular/core";
import {ClientListComponent} from "./clientList.component";

@NgModule({
    declarations: [ClientListComponent],
    exports     : [ClientListComponent]
})
export class ClientListModule {
}