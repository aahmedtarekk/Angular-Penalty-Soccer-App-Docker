import { Component } from '@angular/core';
import { PenaltyGameComponent } from './penalty-game/penalty-game.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Mark this as a standalone component
  imports: [NgFor, NgIf, PenaltyGameComponent], // Import dependencies and other components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Penalty Soccer Game';
}
