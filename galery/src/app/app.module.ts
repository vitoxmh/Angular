import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GaleryComponent } from './components/galery/galery.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [ 
    AppComponent,
    GaleryComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
