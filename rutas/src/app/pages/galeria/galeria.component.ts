import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/servicio/gallery.service';

export interface Foto{
  id: number;
  src: string;
  tumblr: string;

}


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  
  listFoto:Foto[] = [];

  constructor(private galeria: GalleryService) {


    this.galeria.getGallery().subscribe((resp:any)=> {

        console.log(resp); 

        resp.photos.forEach((element:any) => {


          this.listFoto.push({ id: element.id, src: element.src.original, tumblr: element.src.large});


        });
        
        
      });


   }

  ngOnInit(): void {
  }

}
