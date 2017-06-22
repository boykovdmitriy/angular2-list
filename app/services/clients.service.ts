import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";

import {ClientModel, IClientModel} from "../models/client.model";

@Injectable()
export class ClientsService {
    private clients = new BehaviorSubject<Array<ClientModel>>([]);

    constructor(private http: Http) {}

    getClients() {
        return this.http.get('/clients.json').map((x: Response) => {
            const data: Array<ClientModel> = x.json()
                                              .map((x: IClientModel, index: number) => new ClientModel(x, index));
            this.clients.next(data);
            return data;
        });
    }

    getClientById(id: number): Observable<ClientModel> {
        return this.clients.flatMap(x => x).first(x => x.id == id);
    }
}