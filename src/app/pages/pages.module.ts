import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Not403Component } from './not403/not403.component';
import { Not404Component } from './not404/not404.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,//falta flex
        MatCardModule,
        //PdfViewerModule,
        PagesRoutingModule, //cuando se llame a page.module. este carga a PagesRoutingModule
    ],
    exports: [],
    declarations: [
        InicioComponent, // inicio 
        LayoutComponent,
        Not403Component,
        Not404Component,
    ],
    providers: [],
})
export class PagesModule { }
