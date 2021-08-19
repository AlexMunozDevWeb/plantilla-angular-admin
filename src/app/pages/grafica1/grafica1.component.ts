import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public etiquetas_nombres: string[] = ['PC', 'Portatiles', 'Móviles'];
  public datos = [
    [10, 20, 33]
  ];

}
