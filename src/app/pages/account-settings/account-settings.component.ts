import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private SettingService: SettingService) { }

  ngOnInit(): void {
    this.SettingService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.SettingService.changeTheme( theme );
  }

}
