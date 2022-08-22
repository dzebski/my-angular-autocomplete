import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {Movie, SearchResults} from "../../interfaces/movie";
import {FormControl, FormGroup} from "@angular/forms";
import { AppData } from "../../data/AppData";
import {MusicService} from "../../services/music.service";
import {LocalData} from "../../data/local.data";
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // data!: any
  // localUsersData: any[] = []
  musicData: any[] = []
  searchQueryFormControl: FormControl = new FormControl<string>('')

  constructor(
    public movie: MoviesService,
    public music: MusicService,
    public localData: LocalService) { }

  ngOnInit(): void {
    this.searchQueryFormControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(value => {
        console.log('Search Field Input: ', value)
        this.music.searchMusic(value)
          .subscribe(response => {
            this.musicData = response
            console.log('Response: ', response)
            console.log('Saved Data: ', this.musicData)
          })
      })
  }
}
