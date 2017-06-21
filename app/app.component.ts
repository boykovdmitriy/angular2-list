import {Component} from "@angular/core";
import {ClientsService} from "./services/clients.service";
import {Observable} from "rxjs/Observable";
import {ClientModel} from "./models/client.model";

@Component({
    selector: 'app',
    template: `
        <panel>
            <ng-container header>
                <search-input (queryChanged)="search($event)"></search-input>
            </ng-container>
            <ng-container content>
                <client-list [clients]="clients|async"></client-list>
            </ng-container>
        </panel>
        <section class="content">
            <router-outlet></router-outlet>
        </section>
    `,
    styles  : [`
        :host {
            display: flex;
            flex-direction: row;
        }

        .content {
            padding: 20px;
        }
    `]
})

export class AppComponent {
    public clients: Observable<Array<ClientModel>>;

    constructor(private clientsService: ClientsService) {
        this.clients = clientsService.getClients();
    }

    search(value: string) {
    }
}