import { Routes } from '@angular/router';

export const WEIGHTS_ROUTES: Routes = [
    {
        path: 'update',
        loadComponent: () => import('./weights-update/weights-update.component').then(m => m.WeightsUpdateComponent)
    },
];