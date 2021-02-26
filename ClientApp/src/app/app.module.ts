import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './compenents/nav-menu/nav-menu.component';
import { HomeComponent } from './compenents/home/home.component';
import { BreakfastComponent } from './compenents/breakfast/breakfast.component';
import { BreakfastService } from './services/breakfast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BreakfastComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: BreakfastComponent, pathMatch: 'full' }
    ])
  ],
  providers: [BreakfastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
