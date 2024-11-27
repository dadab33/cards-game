import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-monster-confirmation-dialog',
  imports: [MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent, MatButtonModule],
  templateUrl: './delete-monster-confirmation-dialog.component.html',
  styleUrl: './delete-monster-confirmation-dialog.component.css'
})
export class DeleteMonsterConfirmationDialogComponent {

}
