import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  STORAGE_KEY = 'user-color-scheme';
  COLOR_MODE_KEY = '--color-mode';
  modeToggleText = '';


//   TODO toggle color-mode dark/light
//   color-mode is set on html-tag
//   respect prefers-color-scheme
//   localStorage color-mode


  setButtonLabel(currentSetting: string) {
    this.modeToggleText = currentSetting === 'dark' ? 'light' : 'dark';
  }

  getCSSCustomProp(propKey:string) {
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);
    if (response.length) {
      response = response.replace(/\"/g, '').trim()
    }

    return response;
  }

  applySetting(passedSetting:string | null) {
    let currentSetting = passedSetting || localStorage.getItem(this.STORAGE_KEY);
    if (currentSetting) {
      document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
      this.setButtonLabel(currentSetting)
    } else {
      this.setButtonLabel(this.getCSSCustomProp(this.COLOR_MODE_KEY));
    }
  }

  toggleSetting() {
    let currentSetting = localStorage.getItem(this.STORAGE_KEY);

    switch (currentSetting) {
      case null:
        currentSetting = this.getCSSCustomProp(this.COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
        break;
      case 'light':
        currentSetting = 'dark';
        break;
      case 'dark':
        currentSetting = 'light';
        break;
    }
    localStorage.setItem(this.STORAGE_KEY, currentSetting);
    return currentSetting;
  }
  ngOnInit() {
    this.applySetting(null);
  }

}
