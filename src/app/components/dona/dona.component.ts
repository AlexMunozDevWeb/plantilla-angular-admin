import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  @Input() title: string = 'Sin titulo';

   //datos grafica
   @Input('etiquetas') doughnutChartLabels: Label[] = ['Datos 1', 'Datos 2', 'Datos 3'];
   @Input('data') doughnutChartData: MultiDataSet = [
     [1, 2, 3]
   ];

   public doughnutChartType: ChartType = 'doughnut';
 
   public colores: Color[] = [
     { backgroundColor: ['#6857E6','#009fee','#F02059']}
   ];
 

}
