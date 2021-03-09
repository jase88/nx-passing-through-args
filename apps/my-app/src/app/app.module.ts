import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildableLibModule } from '@my-workspace/buildable-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BuildableLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
