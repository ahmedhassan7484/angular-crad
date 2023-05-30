import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemsService } from 'src/app/serves/items.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
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
itemId:any;
items:any
constructor(private router:Router,private itemsService:ItemsService, private activatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
  if (this.itemId != 0) {
    this.itemsService
      .getById(this.itemId)
      .subscribe((response) => {
        this.items = response;
        this.getitemName.setValue(this.items.itemName);
        this.getPrice.setValue(this.items.price);
       
        this.getDesc.setValue(this.items.desc);
      });
  }
}
go(e:Event){
e.preventDefault;
  if(this.itemgroup.status=="VALID"){
    this.itemsService
    .editItem(this.itemId, this.itemgroup.value)
    .subscribe();
  this.router.navigate(['/items']);
  }
}
}
