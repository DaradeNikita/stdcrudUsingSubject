import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _matSnack : MatSnackBar) { }

  openSnackBar(msg:string,action : string){
          this._matSnack.open(msg,action,{
            duration : 2000,
            horizontalPosition :'center',
            verticalPosition:'top'
          })
  }
}
