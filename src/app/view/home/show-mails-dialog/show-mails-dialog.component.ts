import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-show-mails-dialog',
  templateUrl: './show-mails-dialog.component.html',
  styleUrls: ['./show-mails-dialog.component.scss']
})
export class ShowMailsDialogComponent {
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
