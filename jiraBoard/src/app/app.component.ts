import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './components/common/spiner/loading.service';
import Routes from './Route';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jiraBoard';
  isLoadings = false;
  constructor(private loadingService: LoadingService,private router:Router) {}
  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(
      (isLoading) => (this.isLoadings = isLoading)
    );
    // if(this.router.url === '/'){
    //   this.router.navigate([Routes.AUTH.LOGIN])
    // }
  }
}
