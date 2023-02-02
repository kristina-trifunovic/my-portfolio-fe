import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'show-emails-dialog',
  templateUrl: './show-emails-dialog.component.html',
  styleUrls: ['./show-emails-dialog.component.scss']
})
export class ShowEmailsDialogComponent {
  constructor(private snackBar: MatSnackBar,
    private clipboard: Clipboard) {}

  copy(text: string) {
    this.clipboard.copy(text);
    this.openSnackBar(text);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message + ' copied to clipboard!', 'Close', { duration: 3000});
  }

}
