import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {ClientsService} from "./services/clients.service";
import {PanelModule} from "./components/sidePanel/panel.module";
import {ClientListModule} from "./components/clientList/clientList.module";
import {SearchModule} from "./components/search/search.module";

@NgModule
({
    imports     : [
        BrowserModule,
        HttpModule,
        PanelModule,
        ClientListModule,
        SearchModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent],
    providers   : [ClientsService]
})

export class AppModule {

}