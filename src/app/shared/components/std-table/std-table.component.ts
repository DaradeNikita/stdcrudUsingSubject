import { Component, OnInit } from '@angular/core';
import { stdInfo } from '../../models/student';
import { StdTableSubjectObsService } from '../../services/std-table-subject-obs.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
stdInfoArray : Array<stdInfo> = [];
  constructor( private _stdTableService : StdTableSubjectObsService,
    private _snackBar : SnackBarService) { }

  ngOnInit(): void {
    this.stdInfoArray = this._stdTableService.getAllStdInfo()
    console.log(this.stdInfoArray);
    
   
  }
  onstdInfoEdit(std : stdInfo){
    console.log(std);
   this._stdTableService.studentSub$.next(std)
  }

  onstdInfoDelete(std :stdInfo){
   this._stdTableService.deleteStdInfo(std.stdId)
   alert(`Are You Sure,We Want to delete ${std.stdName} information from table`)
   this._snackBar.openSnackBar(`Student ${std.stdName} Information is removed from Table`,`close`)
  }
}
