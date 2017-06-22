import {NgModule} from "@angular/core";

import {ClientSearchPipe} from "./clientSearch.pipe";

@NgModule({
    declarations: [ClientSearchPipe],
    exports     : [ClientSearchPipe]
})

export class PipesModule {

}