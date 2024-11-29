import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SectionComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
