import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Routes from 'src/app/Route';
import { ModalService } from '../../common/_modal';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  sidebarMenu: any;
  headers: any;
  profileMenu: any;
  DATA_ISSUES: any;
  constructor(private modal: ModalService,private router:Router,private http:HttpClient) {}
  public setMenu():Observable<any> {
   return this.http.get("assets/header-menu.json");
  }
  public getProfileMenu():Observable<any> {
    // const profileMenu = [
    //   {
    //     items: [
    //       {
    //         label: 'Profile',
    //         icon: 'pi pi-user',
    //       },
    //       {
    //         label: 'Settings',
    //         icon: 'pi pi-cog',
    //       },
    //       {
    //         label: 'Logout',
    //         icon: 'pi pi-sign-out',
    //         command: () => {
    //           this.logout();
    //       }
    //       },
    //     ],
    //   },
    // ];
    // return (this.profileMenu = profileMenu);
    return this.http.get("assets/profile-menu.json");
  }
  public setSideBar():Observable<any> {
    return this.http.get("assets/sidebar-menu.json")
  }
  getIssues() {
    return (this.DATA_ISSUES = [
      { srno: '1', Task: 'coc-62225', devloper: 'Manav' },
      { srno: '2', Task: 'coc-62226', devloper: 'Ajay' },
    ]);
  }
  getHeader() {
    return (this.headers = ['srno', 'Task', 'Developer']);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([Routes.AUTH.LOGIN])
  }
}
