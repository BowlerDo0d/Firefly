import { Component } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private authService: AuthService) { }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
