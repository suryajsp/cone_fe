import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isCollapsed = false;

  // Menu items array with `isOpen` and `isActive` states
  menuItems = [
    {
      title: 'Overview',
      icon: 'bi-columns-gap',
      isOpen: false,
      isActive: false,
      children: [
        { title: 'Summary', icon: 'bi-justify-left', isActive: false },
        { title: 'Custom View', icon: 'bi-funnel', isActive: false }
      ]
    },
    {
      title: 'Alarms',
      icon: 'bi-envelope',
      isOpen: false,
      isActive: false,
      children: []
    },
    {
      title: 'Websites',
      icon: 'bi-globe',
      isOpen: false,
      isActive: false,
      children: []
    },
    {
      title: 'PREP',
      icon: 'bi-copy',
      isOpen: false,
      isActive: false,
      children: [
        { title: 'List All Documents', icon: 'bi-list-ul', isActive: false },
        { title: 'Remediation Request', icon: 'bi-magic', isActive: false },
        { title: 'Self Remediation', icon: 'bi-person-lines-fill', isActive: false }
      ]
    },
    {
      title: 'Video Remediation',
      icon: 'bi-film',
      isOpen: false,
      isActive: false,
      children: []
    },
    {
      title: 'Bug Report',
      icon: 'bi-bug',
      isOpen: false,
      isActive: false,
      children: []
    },
    {
      title: 'Settings',
      icon: 'bi-gear',
      isOpen: false,
      isActive: false,
      children: []
    },
    {
      title: 'Document Repository',
      icon: 'bi-file-earmark-text',
      isOpen: false,
      isActive: false,
      children: []
    },
    {
      title: 'A11Y Knowledge Base',
      icon: 'bi-bank',
      isOpen: false,
      isActive: false,
      children: []
    },
  ];

  constructor(
    private authService: AuthService
  ) { }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleParent(menu: any) {
    menu.isOpen = !menu.isOpen;
    menu.isActive = true;

    // Deactivate other parents
    this.menuItems.forEach((item) => {
      if (item !== menu) {
        item.isActive = false;
        item.isOpen = false;
      }
    });
  }

  activateChild(parent: any, child: any) {
    parent.isActive = true;
    child.isActive = true;

    // Deactivate other children of the same parent
    parent.children.forEach((c: any) => {
      if (c !== child) {
        c.isActive = false;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
