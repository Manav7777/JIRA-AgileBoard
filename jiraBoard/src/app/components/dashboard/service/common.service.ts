import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Routes from 'src/app/Route';
import { ModalService } from '../../common/_modal';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  menus: any;
  sidebarMenu: any;
  headers: any;
  profileMenu: any;
  DATA_ISSUES: any;
  constructor(private modal: ModalService,private router:Router) {}
  setMenu() {
    const menu = [
      {
        id: '1',
        menu_item: 'Your Work',
        arrow: true,
      },
      {
        id: '2',
        menu_item: 'Projects',
        arrow: true,
      },
      {
        id: '3',
        menu_item: 'Filters',
        arrow: true,
      },
      {
        id: '4',
        menu_item: 'Dashboards',
        arrow: true,
      },
      {
        id: '5',
        menu_item: 'People',
        arrow: true,
      },
      {
        id: '6',
        menu_item: 'Apps',
        arrow: true,
      },
    ];
    return (this.menus = menu);
  }
  getProfileMenu() {
    const profileMenu = [
      {
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logout();
          }
          },
        ],
      },
    ];
    return (this.profileMenu = profileMenu);
  }
  setSideBar() {
    const sidebarMenus = [
      {
        id: '1',
        menu_item: 'Planing',
        childMenu: [
          {
            id: '2',
            childMenu_item: 'Roadmap',
            icon_class: 'bi bi-map',
          },
          {
            id: '3',
            childMenu_item: 'Backlog',
            icon_class: 'bi bi-list-nested',
          },
          {
            id: '4',
            childMenu_item: 'Active sprints',
            icon_class: 'bi bi-layout-three-columns',
          },
          {
            id: '5',
            childMenu_item: 'Reports',
            icon_class: 'bi bi-graph-up-arrow',
          },
          {
            id: '6',
            childMenu_item: 'Issues',
            icon_class: 'bi bi-view-list',
            route_link:`${Routes.DASHBOARD.ISSUES}`
          },
          {
            id: '7',
            childMenu_item: 'Components',
            icon_class: 'bi bi-collection',
          },
        ],
      },
      {
        id: '8',
        menu_item: 'Development',
        childMenu: [
          {
            id: '9',
            childMenu_item: 'Code',
            icon_class: 'bi bi-code-slash',
          },
          {
            id: '10',
            childMenu_item: 'Rebase',
            icon_class: 'bi bi-stack',
          },
        ],
      },
    ];
    return (this.sidebarMenu = sidebarMenus);
  }
  // createIssue(isModalOpen) {
    // isModalOpen = true;
    // this.modal.open('create-issue');
  // }
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
