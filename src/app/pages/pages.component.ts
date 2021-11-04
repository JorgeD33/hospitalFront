import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function custonInit();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  tema: string;
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {

    custonInit();
    this.tema = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';
    this.linkTheme.setAttribute('href', this.tema);
  }

}
