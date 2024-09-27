import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { InicioComponent } from './inicio/inicio.component';
import { GuardService } from '../_service/guard.service';
import { Not403Component } from './not403/not403.component';


export const routes: Routes = [

    { path: 'inicio', component: InicioComponent, canActivate: [GuardService] },

    { path: 'not-403', component: Not403Component },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}