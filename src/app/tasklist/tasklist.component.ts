import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  newTask: string = "";
  tasklist = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(){
    this.tasklist.push(this.newTask);
    this.newTask = "";

    console.log(this.tasklist);
  }

}
