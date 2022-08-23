import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {Movie, MoviesSearchResults} from "../../interfaces/movie";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  moviesData!: Movie
  moviesSearch!: MoviesSearchResults[]
  searchQueryFormControl: FormControl = new FormControl<string>('')

  constructor(public movie: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.searchQueryFormControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(
        value => {
          console.log('Search Input: ', value)
          this.movie.getMovies(value).subscribe(response => {
            this.moviesData = response
            this.moviesSearch = this.moviesData.Search
            console.log(this.moviesSearch)
          })
        }
      )
  }
}
