import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotesService } from '../services/notes.service';

@Injectable({
  providedIn: 'root'
})
export class ValidNotebookGuard implements CanActivate {
	constructor(private notesService: NotesService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
	Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const notebook = route.params.id;

    return this.notesService.getValidNotebooks().includes(notebook) ? true : this.router.parseUrl('/notes');
  }
}
