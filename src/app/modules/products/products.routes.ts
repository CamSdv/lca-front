import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./products-list/products-list.component').then(m => m.ProductsListComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./products-create/products-create.component').then(m => m.ProductsCreateComponent)
    },
    {
        path: 'update',
        loadComponent: () => import('./products-update/products-update.component').then(m => m.ProductsUpdateComponent)
    },
];