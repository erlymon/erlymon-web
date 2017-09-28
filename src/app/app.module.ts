import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';



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
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
