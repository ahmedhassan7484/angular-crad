import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './contant/login/login.component';
import { FooterComponent } from './contant/footer/footer.component';
import { HeaderComponent } from './contant/header/header.component';
import { ItemsComponent } from './contant/items/items.component';
import { ViewItemsComponent } from './contant/view-items/view-items.component';
import { ErrorComponent } from './contant/error/error.component';
import { EditComponent } from './contant/edit/edit.component';
import { AddItemComponent } from './contant/add-item/add-item.component';
import{HttpClientModule}from '@angular/common/http'
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ItemsComponent,
    ViewItemsComponent,
    ErrorComponent,
    EditComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
