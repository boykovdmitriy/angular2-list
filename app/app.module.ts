import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {ClientsService} from "./services/clients.service";
import {PanelModule} from "./components/sidePanel/panel.module";
import {ClientListModule} from "./components/clientList/clientList.module";
import {SearchModule} from "./components/search/search.module";
import {PagesModule} from "./pages/pages.module";
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {PipesModule} from "./pipes/pipes.module";

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