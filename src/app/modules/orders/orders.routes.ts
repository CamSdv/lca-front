import { Routes } from '@angular/router';

export const ORTHERS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./orders-list/orders-list.component').then(m => m.OrdersListComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./orders-create/orders-create.component').then(m => m.OrdersCreateComponent)
    },
    {
        path: 'update',
        loadComponent: () => import('./orders-update/orders-update.component').then(m => m.OrdersUpdateComponent)
    },
];