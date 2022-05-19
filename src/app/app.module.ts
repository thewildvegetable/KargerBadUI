import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubmitModalComponent } from './submit-modal/submit-modal.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitModalComponent,
    ResumeFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
