import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "signin", component:SigninComponent},
    {path: "dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard]},
    {path: "home", redirectTo:"/", pathMatch:"full"},
    {path: "dash", component: NavComponent},
    {
        path:"user",component:UserComponent, children:[
            // {path:"",component:UserComponent},
            {path:"profile", component:ProfileComponent}
        ]
    },
    // {
    //     path:"user", children:[
    //         {path:"",component:UserComponent},
    //         {path:"profile", component:ProfileComponent}
    //     ]
    // },
    {path:"about", component:AboutComponent},
    {path:"about/:username", component:DynamicPageComponent},
    {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
