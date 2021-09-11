import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private url: string = "https://api.pexels.com/v1/search?query=nature";
  private apiKey: string = "563492ad6f91700001000001c11a41ff7f0747e7bbad1a11de252cef";
  
  constructor(private http: HttpClient) { }
 

  getGallery(){

    let header = new HttpHeaders(
      {
        'Authorization': this.apiKey
      }
      );

      return this.http.get(this.url,{
        headers: header
      });


  }



}