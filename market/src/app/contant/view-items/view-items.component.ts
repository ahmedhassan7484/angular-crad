import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/serves/items.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  itemId:any;
  item:any
  constructor(private activatedRoute:ActivatedRoute,private itemsService:ItemsService){}
  ngOnInit(): void {
   this.itemId=this.activatedRoute.snapshot.paramMap.get("id");
   this.itemsService.getById(this.itemId).subscribe((response)=>{

      this.item=response;
   })

  }

}
