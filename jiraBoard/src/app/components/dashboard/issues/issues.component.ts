import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  DATA_ISSUES = [
    { srno: '1', Task: 'coc-62225', devloper: 'Manav' },
    { srno: '2', Task: 'coc-62226', devloper: 'Ajay' },
  ]; 
  headers=['srno','Task','Developer'];
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    // this.header = this.commonService.getHeader();
    // this.data = this.commonService.getIssues();
    // console.log('headers',this.header);
    // console.log('Data',this.data);
  }

}
