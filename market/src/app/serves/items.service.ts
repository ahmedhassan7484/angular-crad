import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  baseUrl: string = "http://localhost:3005/items";

  getAllItems(){
    return this.http.get(this.baseUrl);
  }
  getById(itemId:any){
    return this.http.get(`${this.baseUrl}/${itemId}`)
  }
  addItem(item:any){
    return this.http.post(this.baseUrl,item)
  }
  deleteItem(itemId:any){
    return this.http.delete(`${this.baseUrl}/${itemId}`)
  }
  editItem(itemId:any, item:any){
    return this.http.put(`${this.baseUrl}/${itemId}`,item)
  }
}
