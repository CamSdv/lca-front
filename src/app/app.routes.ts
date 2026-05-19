import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'orders',
                loadChildren: () => import('./modules/orders/orders.routes').then(m => m.ORTHERS_ROUTES)
            },
            {
                path: 'products',
                loadChildren: () => import('./modules/products/products.routes').then(m => m.PRODUCTS_ROUTES)
            },
            {
                path: 'sellers',
                loadChildren: () => import('./modules/sellers/sellers.routes').then(m => m.SELLERS_ROUTES)
            },
            {
                path: 'supplies',
                loadChildren: () => import('./modules/supplys/supplys.routes').then(m => m.SUPPLIES_ROUTES)
            },
            {
                path: 'kardex',
                loadChildren: () => import('./modules/kardex/kardex.routes').then(m => m.KARDEX_ROUTES)
            },
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full'
            }
        ]
    },
];