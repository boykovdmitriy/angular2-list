import {Component, Input} from "@angular/core";
import {ClientModel} from "../../models/client.model";

@Component({
    selector: 'client-list',
    template: `
        <client-item *ngFor="let client of clients"
                     [client]="client"
                     routerLink="/client/{{client.id}}"
                     (click)="selectItem(client.id)"
                     [ngClass]="{'selected-item':client.id==selectedId}">
        </client-item>
        <div *ngIf="!clients || clients.length==0">
            user not found
        </div>
    `,
    styles  : [`
        .selected-item {
            border-bottom: 2px solid coral;
            padding-left: 15px;
        }
    `]
})
export class ClientListComponent {
    @Input() clients: Array<ClientModel>;
    private selectedId: number;

    selectItem(id: number) {
        this.selectedId = id;
    }
}