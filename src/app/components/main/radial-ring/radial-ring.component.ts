import { Component } from '@angular/core';

@Component({
  selector: 'app-radial-ring',
  templateUrl: './radial-ring.component.html',
  styleUrls: ['./radial-ring.component.scss']
})
export class RadialRingComponent {
  public value = 65; // Current value
  public min = 0;    // Minimum value of the scale
  public max = 100;  // Maximum value of the scale
  public colors = [
    { from: 0, to: 50, color: '#FF6347' },  // Red for values 0–50
    { from: 50, to: 75, color: '#FFD700' }, // Yellow for values 50–75
    { from: 75, to: 100, color: '#32CD32' } // Green for values 75–100
  ];
}
