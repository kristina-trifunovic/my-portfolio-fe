import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HomeComponent } from './view/home/home.component';
import { EducationComponent } from './view/education/education.component';
import { WorkComponent } from './view/work/work.component';
import { ProjectsComponent } from './view/projects/projects.component';
import { SkillsComponent } from './view/skills/skills.component';
import { ContactComponent } from './view/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowEmailsDialogComponent } from './view/home/show-emails-dialog/show-emails-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    WorkComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ShowEmailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressBarModule,
    ClipboardModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
