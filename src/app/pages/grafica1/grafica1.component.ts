import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  public labels1 = ['Pan', 'Bebidas', 'Cereales'];
  public data1 = [
    [30, 50, 10],

  ];

}
