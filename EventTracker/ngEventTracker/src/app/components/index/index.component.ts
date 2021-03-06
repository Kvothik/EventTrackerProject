import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // F i e l d s

  inTheatres: Movie[] = [];
  comingSoon: Movie[] = [];
  selected = null;
  editMovie: Movie = null;
  createMovie: Movie = new Movie();
  isCreating = false;

  // M e t h o d s

  displayMovie = function (movie: Movie) {
    return this.selected = movie;
  };

  displayAll() {
    this.selected = null;
    console.log(this.editMovie);
  }

  loadInTheatres() {
    this.svc.inTheatres().subscribe(
      data => {
        this.inTheatres = data;
        console.log(data);
      },
      err => {
        console.error('MovieComponent.loadInTheatres(): error loading movies.');
      });
  }

  loadComingSoon() {
    this.svc.comingSoon().subscribe(
      data => {
        this.comingSoon = data;
        console.log(data);
      },
      err => {
        console.error('MovieComponent.loadComingSoon(): error loading movies.');
      });
  }

  setEditMovie() {
    this.editMovie = Object.assign({}, this.selected);
  }

  updateMovie(movie: Movie) {
    this.svc.update(movie).subscribe(
      data => {
        this.editMovie = null;
        this.selected = data;
        this.ngOnInit();
      },
      err => {
        console.error('MovieComponent.update(): error updating movie.');
        console.error(err);
      });
  }

  setCreateMovie() {
    this.isCreating = true;
  }

  addMovie(movie: Movie) {
    this.svc.create(movie).subscribe(
      data => {
        this.createMovie = null;
        this.ngOnInit();
      },
      err => {
        console.error('MovieComponent.create(): error creating movie.');
        console.error(err);
      });
  }

  deleteMovie(id: number) {
    this.svc.delete(id).subscribe(
      good => {
        this.ngOnInit();
      },
      bad => {
        console.error('MovieComponent.delete(): error deleting todos');
        console.error(bad);
      }
    );
  }

  // C o n s t r u c t o r
  constructor(private svc: MovieService) { }

  ngOnInit() {
    this.loadInTheatres();
    this.loadComingSoon();
  }

}
