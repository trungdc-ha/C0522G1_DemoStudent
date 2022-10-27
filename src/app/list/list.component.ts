import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Student} from "../model/Student";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page = 1;
  pageSize = 4;
  studentList$ : Observable<Student[]>;
  total$: Observable<number>;
  birthdayFrom:NgbDateStruct;
  birthdayTo:NgbDateStruct;


  constructor(private studentService:StudentService) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.studentService.paginate(this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.studentList$ = new BehaviorSubject<Student[]>(data.data);
      this.total$ = new BehaviorSubject<number>(data.pagination._totalRows);
    })
  }

  search() {
    console.log(this.birthdayFrom);
    console.log(this.birthdayTo);
  }
}
