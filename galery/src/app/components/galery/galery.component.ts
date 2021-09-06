import { Component, OnInit } from '@angular/core';
import { GaleriaService } from 'src/app/servies/galeria.service';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})



export class GaleryComponent implements OnInit {


  constructor(private galeria:GaleriaService) {
      console.log("dffddfdffd")
      this.galeria.getGallery().subscribe(resp => {

        console.log(resp)

      });
   }

  ngOnInit(): void {
  }

}
