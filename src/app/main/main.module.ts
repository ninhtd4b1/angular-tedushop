import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { MainRoutingModule } from './main-routing.module';




@NgModule({
  declarations: [
    MainComponent,
    
  ],
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    MainRoutingModule,
    
  ]
})
export class MainModule { }
