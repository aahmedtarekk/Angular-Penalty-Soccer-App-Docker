import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass, ngIf, etc.
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]

@Component({
  selector: 'app-penalty-game',
  standalone: true, // Mark this as standalone
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule
  templateUrl: './penalty-game.component.html',
  styleUrls: ['./penalty-game.component.css'],
})
export class PenaltyGameComponent {
  shootOptions: string[] = [
    'top-left', 'top', 'top-right',
    'middle-left', 'middle', 'middle-right',
    'bottom-left', 'bottom', 'bottom-right',
  ];
  userChoice: string = this.shootOptions[0];
  goalkeeperChoice: string | null = null;
  result: string | null = null;

  goals: number = 0;
  saves: number = 0;
  totalShots: number = 0;

  takeShot(): void {
    this.goalkeeperChoice = this.randomizeGoalkeeperChoice();
    this.totalShots++;

    if (this.userChoice === this.goalkeeperChoice) {
      this.saves++;
      this.result = `Saved! Goalkeeper also chose "${this.goalkeeperChoice}".`;
    } else {
      this.goals++;
      this.result = `Goal! Goalkeeper chose "${this.goalkeeperChoice}".`;
    }
  }

  private randomizeGoalkeeperChoice(): string {
    const randomIndex = Math.floor(Math.random() * this.shootOptions.length);
    return this.shootOptions[randomIndex];
  }
}
