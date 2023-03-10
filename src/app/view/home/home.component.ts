import {Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { saveAs } from 'file-saver';
import { MODE } from 'src/app/app.component';
import { FileService } from 'src/app/service/file.service';
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
  _mode = '';
  modes = MODE;

  @Input()
  set mode(value: any) {
    this._mode = value;
    console.log(this._mode);
  }

  get mode() {
    return this._mode;
  }

  constructor(public dialog: MatDialog,
              private fileService: FileService) {
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
    this.fileService.downloadCV().subscribe((data: any) => saveAs(data, 'Kristina-Trifunovic-CV.pdf'));
  }
}
