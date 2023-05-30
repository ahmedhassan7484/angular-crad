import { ItemsService } from './../../serves/items.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  itemgroup=new FormGroup({
    itemName:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
   
    desc:new FormControl("",[Validators.required])
  });
get getitemName(){
  return this.itemgroup.controls["itemName"]
}
get getPrice(){
  return this.itemgroup.controls["price"]
}

get getDesc(){
  return this.itemgroup.controls["desc"]
}
constructor(private router:Router,private itemsService:ItemsService){}
go(e:Event){
e.preventDefault;
  if(this.itemgroup.status=="VALID"){
    this.itemsService.addItem(this.itemgroup.value).subscribe()
  this.router.navigate(['/items']);
  }
}
}
