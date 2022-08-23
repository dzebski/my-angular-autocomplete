import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {debounceTime, distinctUntilChanged, Subscription} from "rxjs";
import {Movie, MoviesSearchResults} from "../../interfaces/movie";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  moviesData!: Movie
  moviesSearch!: MoviesSearchResults[]
  searchQueryFormControl: FormControl = new FormControl<string>('')
  searchSubscription!: Subscription
  searchQuerySubscription!: Subscription
  searchResultSubscription!: Subscription

  constructor(public movie: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  ngOnDestroy() {
    this.searchQuerySubscription.unsubscribe()
    this.searchResultSubscription.unsubscribe()
  }

  // getMovies() {
  //   this.searchQueryFormControl.valueChanges
  //     .pipe(debounceTime(500), distinctUntilChanged())
  //     .subscribe(
  //       value => {
  //         console.log('Search Input: ', value)
  //         this.movie.getMovies(value).subscribe(response => {
  //           this.moviesData = response
  //           this.moviesSearch = this.moviesData.Search
  //           console.log(this.moviesSearch)
  //         })
  //       }
  //     )
  // }

  getMovies() {
    //#1
    this.searchQuerySubscription = this.searchQueryFormControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(input => {
        this.searchResultSubscription = this.movie.getMovies(input)
          .subscribe(response => {
            this.moviesData = response
            this.moviesSearch = this.moviesData.Search
          })
      })
    // #0
      // .subscribe(
      //   value => {
      //     console.log('Search Input: ', value)
      //     this.movie.getMovies(value).subscribe(response => {
      //       this.moviesData = response
      //       this.moviesSearch = this.moviesData.Search
      //       console.log(this.moviesSearch)
      //     })
      //   }
      // )
  }
}
