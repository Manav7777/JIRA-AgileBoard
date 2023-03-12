import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-create-epics',
  templateUrl: './create-epics.component.html',
  styleUrls: ['./create-epics.component.scss'],
})
export class CreateEpicsComponent implements OnInit {
  listOFTask:any;
  constructor(private taskList: TaskService) {}

  ngOnInit(): void {
    console.log(
      'task',
      this.taskList.getTaskDropdown().subscribe((data) => {
        console.log('data', data.create);
        this.listOFTask = data.create
      })
    );
  }
}
