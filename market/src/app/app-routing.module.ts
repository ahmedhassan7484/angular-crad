import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './contant/login/login.component';
import { ItemsComponent } from './contant/items/items.component';
import { ViewItemsComponent } from './contant/view-items/view-items.component';
import { EditComponent } from './contant/edit/edit.component';
import { ErrorComponent } from './contant/error/error.component';
import { AddItemComponent } from './contant/add-item/add-item.component';

const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"items",component:ItemsComponent},
 {path:"items/:id",component:ViewItemsComponent},
 {path:"items/:id/edit",component:EditComponent},
 {path:"add",component:AddItemComponent},
 {path:"**",component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
