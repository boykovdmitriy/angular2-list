import {Component, OnDestroy} from "@angular/core";
import {ClientsService} from "../../services/clients.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ClientModel} from "../../models/client.model";
import "rxjs/add/operator/toPromise";

@Component({
    selector   : 'client-details',
    templateUrl: './clientDetails.template.html',
    styleUrls  : ['./clientDetails.style.css']
})

export class ClientDetailsComponent implements OnDestroy {
    private subscription: Subscription;
    private client: ClientModel;

    constructor(clientsService: ClientsService, private route: ActivatedRoute) {
        this.subscription = this.route.params.subscribe((params: Params) => {
            const id = params['id'];
            clientsService.getClientById(id)
                          .toPromise()
                          .then((x: ClientModel) => {
                              this.client = x;
                          });
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}