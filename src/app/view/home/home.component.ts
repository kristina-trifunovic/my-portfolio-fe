import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ShowMailsDialogComponent } from './show-mails-dialog/show-mails-dialog.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  linkedIn = faLinkedin;
  gitHub = faGithub;
  email = faEnvelope;
  instagram = faInstagram;

  constructor(public dialog: MatDialog) {
    
  }

  openDialog() {
    this.dialog.open(ShowMailsDialogComponent);
  }
}
