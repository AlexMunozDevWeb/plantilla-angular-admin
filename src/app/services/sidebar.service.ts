import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
    titulo: 'Componentes',
    icono: 'mdi mdi-gauge',
    submenu: [
      {titulo: 'Cambiar estilos', url: 'account-settings'},
      {titulo: 'Graficas', url: 'grafica1'},
      {titulo: 'Barra de progreso', url: 'progress'},
      {titulo: 'Adivina el número', url: 'encuentra-numero'},
      {titulo: 'Youtube', url: 'youtube-app'},
    ]
    }
  ];

  constructor() { }

}
