import {Component} from "@angular/core";
import {ClientsService} from "./services/clients.service";
import {Observable} from "rxjs/Observable";
import {ClientModel} from "./models/client.model";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app',
    template: `
        <panel>
            <ng-container header>
                <search-input (queryChanged)="search($event)"></search-input>
            </ng-container>
            <ng-container content>
                <client-list [clients]="clients |async | clientSearch: searchQuery"
                             [selectedItem]="selectedItem"></client-list>
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
    public searchQuery: string = '';
    public selectedItem: number;

    constructor(private clientsService: ClientsService, router: Router) {
        this.clients = clientsService.getClients();

        /*To preserve the style of the selected item if we reload a page */
        router.events.subscribe(
            (route: any) => {
                if (route instanceof NavigationEnd) {
                    const id = Number(route.url.split('/').pop());
                    if (route.url.indexOf('client') != -1 && Number.isInteger(id)) {
                        this.selectedItem = id;
                    }
                }
            });
    }

    search(value: string) {
        this.searchQuery = value;
    }
}