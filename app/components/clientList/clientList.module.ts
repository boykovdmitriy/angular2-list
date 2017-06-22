import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {ClientItemComponent} from "./clientItem.component";
import {ClientListComponent} from "./clientList.component";

@NgModule({
    imports     : [CommonModule, RouterModule],
    declarations: [ClientListComponent, ClientItemComponent],
    exports     : [ClientListComponent]
})
export class ClientListModule {
}