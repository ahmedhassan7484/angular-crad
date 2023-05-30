import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/serves/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
constructor(private router:Router,private itemService:ItemsService){}
add(){
  this.router.navigate(['/add'])
}


items:any
  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((response)=>{

      this.items=response;
    })

  }
  deleteitem(itemid:any){
    this.itemService.deleteItem(itemid).subscribe((respons)=>{
      this.items = this.items.filter((item: any) => item.id != itemid);
    });
  }
}
