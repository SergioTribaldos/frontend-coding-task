import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isEmployeeProvided = !!this.router.getCurrentNavigation()?.extras?.state?.employee;
    if (!isEmployeeProvided) {
      this.router.navigateByUrl('home');
    }
    return isEmployeeProvided;
  }

}
