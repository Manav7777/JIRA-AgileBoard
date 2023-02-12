import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  menus: any;
  sidebarMenu:any;
  constructor() {}
  setMenu() {
    const menu = [
      {
        id: '1',
        menu_item: 'Your Work',
      },
      {
        id: '2',
        menu_item: 'Projects',
      },
      {
        id: '3',
        menu_item: 'Filters',
      },
      {
        id: '4',
        menu_item: 'Dashboards',
      },
      {
        id: '5',
        menu_item: 'People',
      },
      {
        id: '6',
        menu_item: 'Apps',
      },
    ];
    return (this.menus = menu);
  }
  setSideBar(){
    const sidebarMenus = [
      {
        id: '1',
        menu_item: 'Planing',
        childMenu:[
          {
            id:'2',
            childMenu_item:'Roadmap',
            icon_class:'roadmap',
          },
          {
            id:'3',
            childMenu_item:'Backlog',
            icon_class:'backlog',
          },
          {
            id:'4',
            childMenu_item:'Active sprints',
            icon_class:'kanban',
          },
          {
            id:'5',
            childMenu_item:'Reports',
            icon_class:'reports',
          },
          {
            id: '6',
            childMenu_item: 'Issues',
            icon_class:'issues',
          },
          {
            id: '7',
            childMenu_item: 'Components',
            icon_class:'components',
          },
        ]
      },
      {
        id:'8',
        menu_item: 'Development',
        childMenu:[
          {
            id:'9',
            childMenu_item:'Code',
            icon_class:'code'
          },
          {
            id:'10',
            childMenu_item:'Rebase',
            icon_class:'rebase'
          },
        ]
      }
    ];
    return this.sidebarMenu = sidebarMenus;
  }
}
