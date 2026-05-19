import { Routes } from '@angular/router';

export const KARDEX_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./kardex/kardex.component').then(m => m.KardexComponent)
    }
];