import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class GaleriaService {

  private url: string = "https://api.pexels.com/v1/";
  private apiKey: string = "563492ad6f91700001000001c11a41ff7f0747e7bbad1a11de252cef";
  constructor(private http: HttpClient) { 

   
  } 


  getGallery(){

    let header = new HttpHeaders(
      {
        'Authorization': '563492ad6f91700001000001c11a41ff7f0747e7bbad1a11de252cef'
      }
      ).set('Type-content','aplication/json');

      return this.http.get(this.url,{
        headers: header
      });


  }


}
