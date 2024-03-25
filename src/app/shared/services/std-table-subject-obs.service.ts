import { Injectable, OnInit } from '@angular/core';

import { stdInfo } from '../models/student';
import { Subject } from 'rxjs';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StdTableSubjectObsService implements OnInit {
stdDataArray : Array<stdInfo> =[]; 
 studentSub$ : Subject<stdInfo> = new Subject<stdInfo>();

constructor(private _snackBar : SnackBarService) { }
  ngOnInit(): void {
    this.getAllStdInfo()
  }
  getAllStdInfo(){
    return this.stdDataArray
  }

  addStdInfo(stdInfoObj : stdInfo){
    console.log(stdInfoObj);
   this.stdDataArray.push(stdInfoObj)
   this._snackBar.openSnackBar(`Student ${stdInfoObj.stdName} Information is Added in  Table`,`close`)
  }
  updateStdInfo(updatedstd : stdInfo){
    for (let i = 0; i < this.stdDataArray.length; i++) {
     if(this.stdDataArray[i].stdId === updatedstd.stdId){
         this.stdDataArray[i] = updatedstd
     }
    }
  }
  deleteStdInfo(id : string){
    let getIndex = this.stdDataArray.findIndex(std => std.stdId === id)
    this.stdDataArray.splice(getIndex,1)
  
  }
}