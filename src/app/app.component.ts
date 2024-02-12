import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeometryComponent } from './geometry/geometry.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeometryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geometry';
}
