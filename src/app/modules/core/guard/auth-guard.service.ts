import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Path } from '../../utilities/path';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl(`${Path.LOGIN}`);
      return false;
    }
    return true;
  }
}
