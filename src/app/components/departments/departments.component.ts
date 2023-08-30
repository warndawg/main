import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interface/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];

  constructor(
    public departmentsService: DepartmentsService,
  ) { }
  
  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }

}
