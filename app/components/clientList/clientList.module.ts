import {NgModule} from "@angular/core";
import {ClientListComponent} from "./clientList.component";
import {CommonModule} from "@angular/common";
import {ClientItemComponent} from "./clientItem.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports     : [CommonModule, RouterModule],
    declarations: [ClientListComponent, ClientItemComponent],
    exports     : [ClientListComponent]
})
export class ClientListModule {
}