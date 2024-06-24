import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { ButtonModule } from 'primeng/button';
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import { AppRoutingModule } from './app-routing.module';
import { TutorsComponent } from './marathon/participants/pages/participants/tutors.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSmImage, MatCardSubtitle,
  MatCardTitle, MatCardTitleGroup
} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import { CoursesComponent } from './marathon/centers/pages/courses/courses.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import {MatCard} from "@angular/material/card";
import {MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {CourseComponent} from "./marathon/course/course/course.component";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle,
  MatExpansionPanelHeader
} from "@angular/material/expansion";
import {MatList, MatListItem} from "@angular/material/list";
import {InputTextModule} from "primeng/inputtext";
import {TutorComponent} from "./marathon/participants/pages/tutor/tutor/tutor.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorsComponent,
    CoursesComponent,
    CourseComponent,
    TutorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule,
    CardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    NgOptimizedImage,
    MatCard,
    MatTabGroup,
    MatTab,
    MatTabNav,
    MatTabLink,
    MatTabNavPanel,
    FileUploadModule,
    ButtonModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    MatList,
    MatListItem,
    MatIcon,
    MatDivider,
    MatCardSmImage,
    InputTextModule,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardSmImage,
    MatButton,
    MatCardActions,
    NgForOf,
    MatDivider,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
