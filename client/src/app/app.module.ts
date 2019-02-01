import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { JwtModule } from "@auth0/angular-jwt";
import { NgFlashMessagesModule } from "ng-flash-messages";

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { EventService } from "./services/event.service";
import { AuthService } from "./services/auth.service";
import { ValidateService } from "./services/validate.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { AuthGuard } from "./guards/auth.guard";

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ...RoutingComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        blacklistedRoutes: [],
        whitelistedDomains: ['http://localhost:3000']
      }
    })
  ],
  providers: [
    EventService,
    ValidateService,
    AuthService,
    AuthGuard
    /*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
