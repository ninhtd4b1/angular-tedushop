import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('../main/home/home.module').then(m => m.HomeModule) },
            { path: 'user', loadChildren: () => import('../main/user/user.module').then(m => m.UserModule) },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
