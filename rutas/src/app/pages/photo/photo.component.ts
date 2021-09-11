import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/servicio/gallery.service';


export interface Foto{
  id: number;
  src: string;
  tumblr: string;

}

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  listFoto:Foto[] = [];


  constructor(private ruta: ActivatedRoute, private _galeria: GalleryService) {


    this.ruta.params.subscribe(params => {

      

      this._galeria.getGallery().subscribe((resp:any)=> {

        console.log(resp); 

        resp.photos.forEach((element:any) => {

          if(element.id == params.id){

            this.listFoto.push({ id: element.id, src: element.src.original, tumblr: element.src.large});
          }

          


        });
        
        
      });

 
    });



   }

  ngOnInit(): void {


  }

}
