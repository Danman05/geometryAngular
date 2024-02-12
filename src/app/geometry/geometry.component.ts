import { Component } from '@angular/core';
import { Shape } from '../classes/shape';
import { Square } from '../classes/square';
import { Rectangel } from '../classes/rectangel';

/*
 * Component to calculate some geometry shapes
 * Input value is retrived from the DOM. It could also be possible
 * To bind data, but the topic has not been covered yet, so i wont include it
 */

@Component({
  selector: 'app-geometry',
  standalone: true,
  imports: [],
  templateUrl: './geometry.component.html',
  styleUrl: './geometry.component.css'
})
export class GeometryComponent {
  shape: Shape = new Shape(0,0);

  area: number = 0;
  perimiter: number = 0;

  calculateArea(shape: string) {
    // Input elements
    const lengthInput = document.getElementById('length') as HTMLInputElement;
    const widthInput = document.getElementById('width') as HTMLInputElement;

    // Label element
    const areaValue = document.getElementById('area') as HTMLLabelElement;
    const perimiterValue = document.getElementById('perimiter') as HTMLLabelElement;

    // Input string to type number
    const length = Number(lengthInput.value);
    const width = Number(widthInput.value);

    // Switch case on shape type
    switch(shape) {

      case "square":
        this.shape = new Square(length, width);
        this.area = this.shape.length * this.shape.length;
        this.perimiter = this.shape.length * 4;
        break;
      
      case "rectangel":
        this.shape = new Rectangel(length, width);
        this.area = this.shape.length * this.shape.width;
        this.perimiter = this.shape.length * 2 + this.shape.width * 2;
        break;
    }

    areaValue.innerText = `${shape} has an area of ${this.area}`;
    perimiterValue.innerText = `${shape} has an perimiter of ${this.perimiter}`
  }
}
