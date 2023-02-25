import { Component, OnInit } from '@angular/core';
import { LoadingService } from './components/common/spiner/loading.service';
import { CommonService } from './components/dashboard/service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jiraBoard';
  isLoadings = false;
  constructor(private loadingService: LoadingService) {}
  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(
      (isLoading) => (this.isLoadings = isLoading)
    );
  }
}
