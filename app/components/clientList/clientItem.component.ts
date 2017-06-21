import {Component, Input} from "@angular/core";
import {ClientModel} from "../../models/client.model";
@Component({
    selector : 'client-item',
    template : `
        <div class="avatar">
            <img src="{{client.general.avatar}}"/>
        </div>
        <div class="user-info">
            <span class="header-title">{{client.general.firstName + ' ' + client.general.lastName}}</span>
            <span class="job-title">{{client.job.title}}</span>
        </div>
    `,
    styleUrls: ['./clientItem.style.css']
})
export class ClientItemComponent {
    @Input() client: ClientModel;
}