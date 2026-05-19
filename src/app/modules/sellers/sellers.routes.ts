import { Routes } from '@angular/router';

export const SELLERS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./sellers-list/sellers-list.component').then(m => m.SellersListComponent)
    },
    {
        path: 'update',
        loadComponent: () => import('./sellers-update/sellers-update.component').then(m => m.SellersUpdateComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./sellers-create/sellers-create.component').then(m => m.SellersCreateComponent)
    },
];