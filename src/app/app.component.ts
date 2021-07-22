import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Notes', url: '/notes', icon: 'file-tray' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Archived', url: '/archived', icon: 'archive' },
    { title: 'Trash', url: '/trash', icon: 'trash' },
	];
	public notebooksPages = [
		{label: 'Family', url: '/notebook/family'},
		{label: 'Friends', url: '/notebook/friends'},
		{label: 'Work', url: '/notebook/work'},
		{label: 'Travel', url: '/notebook/travel'},
	];
  constructor() {}
}
