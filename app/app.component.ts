import {Component} from "@angular/core";
import {ClientsService} from "./services/clients.service";

@Component({
    selector: 'app',
    template: `
        <panel>
            <ng-container header>
                <search-input (queryChanged)="search($event)"></search-input>
            </ng-container>
            <ng-container content>
                <client-list></client-list>
            </ng-container>
        </panel>`
})

export class AppComponent {
    constructor(private clientsService: ClientsService) {
        clientsService.getClients().subscribe();
    }

    search(value:string){
        console.log(value);
    }
}