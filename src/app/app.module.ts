import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserComponent } from './user/user.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component'
import { ProfileComponent } from './profile/profile.component'
import { SigninComponent } from './signin/signin.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TestComponent } from './test/test.component'

import { Test2Component } from './test2/test2.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatSidenavModule } from '@angular/material/sidenav'
import { NavComponent } from './nav/nav.component'
import { HttpsInterceptor } from './https.interceptor';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component'
import { MaterialModule } from './material.module'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    DynamicPageComponent,
    ProfileComponent,
    SigninComponent,
    DashboardComponent,
    TestComponent,
    Test2Component,
    NavComponent,
    Sibling1Component,
    Sibling2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
