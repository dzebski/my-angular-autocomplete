import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  endpoint: string = 'http://www.omdbapi.com/'
  key: string = 'ce3a2992'
  query: string = 'mad max fury'

  constructor(public http: HttpClient) { }
  getMovies(search: string): Observable<any> {
    return this.http.get(this.endpoint + '?apikey=' + this.key + '&s=' + search + '&plott=full')
  }
}
