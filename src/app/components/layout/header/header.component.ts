import { Component, EventEmitter, Output } from '@angular/core';
import { TokenService } from '../../../service/core/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userName: string = 'Username';
  notifications: number = 5;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    const userData = this.tokenService.getUserDetails();
    this.userName = userData.username;
  }

}
