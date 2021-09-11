import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryService } from './servicio/gallery.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { BannerComponent } from './componets/banner/banner.component';




const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: '', component: IndexComponent, pathMatch: 'full' }, // Si no encuentra la ruta redirect a inicio
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NosotrosComponent,
    ContactoComponent,
    GaleriaComponent,
    HeaderComponent,
    FooterComponent,
    PhotoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
