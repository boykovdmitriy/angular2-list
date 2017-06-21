import {Routes} from "@angular/router";

import {ClientNotSelectedComponent} from "./pages/clientNotSelected/clientNotSelected.component";
import {ClientDetailsComponent} from "./pages/clientDetails/clientDetails.component";
import {NotFoundComponent} from "./pages/notFound/notFound.component";

export const ROUTES: Routes = [

    {
        path     : '',
        component: ClientNotSelectedComponent
    }, {
        path     : 'client/:id',
        component: ClientDetailsComponent
    }, {
        path     : '**',
        component: NotFoundComponent
    }
];