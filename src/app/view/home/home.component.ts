import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ShowEmailsDialogComponent } from './show-emails-dialog/show-emails-dialog.component';

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
    this.dialog.open(ShowEmailsDialogComponent);
  }

  navigateToGitHub() {
    window.open('https://github.com/kristina-trifunovic')
  }

  navigateToLinkedIn() {
    window.open('https://rs.linkedin.com/in/kristinatrifunovic');
  }

  downloadCV() {
    
  }
}
