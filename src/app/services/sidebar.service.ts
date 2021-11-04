import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Menú',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Principal', url: '/'},
        { titulo: 'ProgressBar', url: 'progress'},
        { titulo: 'Gráficas', url: 'grafico1'},

      ]
    }
  ];
  constructor() { }
}
