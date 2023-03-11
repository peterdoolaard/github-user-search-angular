import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  animations: [
    trigger('showHideLabel', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', [
        animate('250ms ease-in')
      ]),
      transition('show => hide', [
        animate('250ms ease-out')
      ]),
    ]),
  ],
})
export class SearchFormComponent {
  userSearchControl = new FormControl;
  hasFocusSearchControl = false;


  onFocusSearchControl() {
  this.hasFocusSearchControl = true;

  }
  onBlurSearchControl() {
  this.hasFocusSearchControl = false;
  }
}
