import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Data {
    startSelecting:boolean=false;
    endSelecting:boolean=false;
    start:any=[{lat:'',lng:'',address:''}];
    end:any=[{lat:'',lng:'',address:''}];
    settings:any;
    constructor() {}
}