import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthBoxComponent } from './auth/auth-box/auth-box.component';
import { InputComponent } from './shared/input/input.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ToggleButtonsComponent } from './shared/toggle-buttons/toggle-buttons.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { MobilePreviewComponent } from './dashboard/mobile-preview/mobile-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthBoxComponent,
    InputComponent,
    SignUpComponent,
    DashboardComponent,
    NavbarComponent,
    ToggleButtonsComponent,
    MobilePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
