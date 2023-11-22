import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule, AngularSvgIconModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimations()
]
})
  .catch(err => console.error(err));
