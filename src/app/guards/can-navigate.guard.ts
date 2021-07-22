import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanNavigateGuard implements CanActivate {
	constructor(private router: Router){}

	canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
	Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const allow = childRoute.data.allowed as Array<string>;
		const id = childRoute.params.id;

		return allow.includes(id) ? true : this.router.parseUrl('/notes');
  }
}
