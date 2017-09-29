import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdGridListModule,
  MdCardModule,
  MdToolbarModule,
  MdSidenavModule,
  MdMenuModule,
  MdIconModule,
  MdListModule,
  MdTableModule,
  MdPaginatorModule,
  MdTabsModule,
  MdDialogModule,
  MdSelectModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core"; //изменилось
import { TranslateHttpLoader } from "@ngx-translate/http-loader"; //изменилось

import { CountryCodeService } from './services/country-code.service';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'signin', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: '**', component: NotFoundPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdGridListModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdTableModule,
    MdPaginatorModule,
    MdTabsModule,
    MdDialogModule,
    MdSelectModule,
    CdkTableModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CountryCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
