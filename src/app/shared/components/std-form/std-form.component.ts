import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { StdTableSubjectObsService } from '../../services/std-table-subject-obs.service';
import { UuidService } from '../../services/uuid.service';
import { stdInfo } from '../../models/student';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  studentForm! : FormGroup;
  isInEditMode : boolean = false;
  editObj !:stdInfo 
  
  constructor(private _stdTableService : StdTableSubjectObsService,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService) { }

  ngOnInit(): void {
    this.createForm()
    this._stdTableService.studentSub$
    .subscribe(res =>{
      
      console.log(res);
      this.editObj = res;
      this.isInEditMode = true;
      this.studentForm.patchValue(this.editObj)
    })
  }
   
  createForm(){
    this.studentForm = new FormGroup({
      stdName : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      branch:new FormControl(null,[Validators.required]),
      contactInfo : new FormControl(null,[Validators.required]),
    })
  }

  onStdAdd(){
    if(this.studentForm.valid){
      let obj = {...this.studentForm.value,stdId : this._uuidService.uuidv4()};
      console.log(obj);
      this._stdTableService.addStdInfo(obj);
        
       this.studentForm.reset()
    }
  }

  onStdInfoUpdate(){
     let updatedStdData = {...this.studentForm.value,stdId : this.editObj.stdId}
     this._stdTableService.updateStdInfo(updatedStdData)
     this.isInEditMode = false;
     alert(`Are you sure,we want to update ${updatedStdData.stdName} information`)
     this._snackBar.openSnackBar(`Student ${updatedStdData.stdName} Information is updated suceessfuuly`,`close`)
     this.studentForm.reset()
  }
}
