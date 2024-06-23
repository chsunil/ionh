import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  markers: any[] = [];
  constructor(private storage: Storage) {
    this.storage.create(); //Creating a local storage
  }

  //Add marker to a table in storage.Here 'markerData' is the table name.
  addItem(data: any,table:any): Promise<any> {

    return this.storage.get(table).then((items: any[]) => {
      if (items) {
        console.log(items);
        items.push(data);
        return this.storage.set(table, items);
      } else {
        return this.storage.set(table, [data]);
      }
    });

  }

  setSingleItem(item:any,table:any){
    return this.storage.set(table, item);
  }

  //Get an item from database.Key is the name of the table
  getItem(key: string): Promise<any> {
    return this.storage.get(key);
  }

  removeTable(table:any){
    return this.storage.remove(table)
  }


  //Removing a marker from the table
  removeMarker(itemToRemove: any,table:any): Promise<any> {
    this.storage.get(table).then((items: any[]) => {
      console.log(itemToRemove)
      if (items) {
        const updatedItems = items.filter(item => item.lat !== itemToRemove.lat || item.lng !== itemToRemove.lng);
        console.log(updatedItems)
        this.storage.set(table, updatedItems);
      }
    }); return this.storage.get(table);;
  }

    //Removing a post from the table
    removeItem(id: any,table:any): Promise<any> {
      console.log('removing')

      this.storage.get(table).then((items: any[]) => {
        if (items) {
          const updatedItems = items.filter(item => item.id !== id);
          console.log(updatedItems)
          this.storage.set(table, updatedItems);
        }
      }); return this.storage.get(table);;
    }

  
}
