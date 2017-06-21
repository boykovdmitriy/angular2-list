import {NgModule} from "@angular/core";

import {ClientDetailsComponent} from "./clientDetails/clientDetails.component";
import {ClientNotSelectedComponent} from "./clientNotSelected/clientNotSelected.component";
import {NotFoundComponent} from "./notFound/notFound.component";

@NgModule({
    declarations: [NotFoundComponent, ClientNotSelectedComponent, ClientDetailsComponent],
    exports: [NotFoundComponent, ClientNotSelectedComponent, ClientDetailsComponent]
})

export class PagesModule {
}