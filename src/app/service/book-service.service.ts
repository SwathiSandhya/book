import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  bookapiUrl="http://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yQfe6GGIac9j3FCmSynkQNA4kwOxXTYE";

  hardCover():Observable<any>{
    return this.http.get(this.bookapiUrl);
  }
}
