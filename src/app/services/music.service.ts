import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  // clientID: string = 'efe9e706a13f46a687b891ba901de9cb'
  clientID: string = 'BQBhm2VEwhDICHvwN_4o2BwJl6LBQw7s_oMklRPl6TEKNbUov2ALRCI1dBY7tsTh9UvQTzrk5xRfKQljfncco5OOZyqmCwNuVJfvCRs'
  baseURL: string =
    'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' +
    this.clientID +
    '&q='

  constructor(public HTTP: HttpClient) { }

  searchMusic(query: string):Observable<any> {
    let URL: string = this.baseURL + query
    return this.HTTP.get(URL)
  }
}
