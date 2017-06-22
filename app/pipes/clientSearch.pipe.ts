import {Pipe, PipeTransform} from "@angular/core";

import {ClientModel} from "../models/client.model";

@Pipe({
    name: 'clientSearch'
})
export class ClientSearchPipe implements PipeTransform {

    transform(array: Array<ClientModel>, query: any): Array<any> {
        if (Array.isArray(array)) {
            return array.filter((x) => {
                /*iterate all of object properties*/
                for (let pr in x) {
                    for (let prDeep in x[pr]) {
                        const value = x[pr][prDeep];
                        if (value.toLowerCase().indexOf(query.toLowerCase()) != -1)
                            return true;
                    }
                }
                return false;
            });
        } else {
            return array;
        }
    }
}