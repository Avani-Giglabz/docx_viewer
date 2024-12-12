import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { WordFileEditorComponent } from '../word-file-editor/word-file-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WordFileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideHttpClient() // Use provideHttpClient here instead of HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
