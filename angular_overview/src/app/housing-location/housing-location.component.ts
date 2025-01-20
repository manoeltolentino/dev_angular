import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {

  @Input() housingLocation!: Housinglocation;

}
