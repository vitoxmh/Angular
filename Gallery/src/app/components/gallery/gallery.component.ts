import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../servies/gallery.service';

export interface Foto{
  id: number;
  src: string;
  tumblr: string;

}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {

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
