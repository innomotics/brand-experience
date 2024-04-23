import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activeTabIndex = 2;

  handleTabChange(index: number) {
    this.activeTabIndex = index;
  }
}
