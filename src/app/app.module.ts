import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegeBranchComponent } from './college-branch/college-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CollegeBranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
