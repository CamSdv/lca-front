import { Routes } from '@angular/router';

export const SUPPLIES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./supply-list/supply-list.component').then(m => m.SupplyListComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./supply-create/supply-create.component').then(m => m.SupplyCreateComponent)
    },

];