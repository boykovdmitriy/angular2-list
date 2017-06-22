import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {PanelModule} from "./components/sidePanel/panel.module";
import {ClientListModule} from "./components/clientList/clientList.module";
import {SearchModule} from "./components/search/search.module";
import {PagesModule} from "./pages/pages.module";
import {PipesModule} from "./pipes/pipes.module";
import {ROUTES} from "./app.routes";
import {ClientsService} from "./services/clients.service";


@NgModule
({
    imports     : [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: false}),
        HttpModule,
        PanelModule,
        ClientListModule,
        SearchModule,
        PagesModule,
        PipesModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent],
    providers   : [ClientsService]
})

export class AppModule {

}