import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/common/Database/database.service';
import { StorageService } from 'src/app/common/Storage/storage.service';

@Component({
  selector: 'app-student-testlist',
  templateUrl: './student-testlist.component.html',
  styleUrls: ['./student-testlist.component.scss'],
})
export class StudentTestlistComponent implements OnInit {
  testlist: any[];

  constructor(private db: DatabaseService, private storageService: StorageService) { }

  ngOnInit() {
    this.getStudentTestList()

  }




  getStudentTestList(){
    this.db.getDatabaseState().subscribe(rdy => {
        if(rdy){
          this.db.getStudentTestList()
          .then(data=>{
            console.log(data)
            if(data!=null && data!=undefined){
                this.testlist=data;
            }
          })

        }
    });

  }

}
