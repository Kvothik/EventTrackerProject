import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // F i e l d s
  private baseUrl = 'http://localhost:8090/';
  private url = this.baseUrl + 'api/movie/';

  // M e t h o d s
  comingSoon() {
    return this.http.get<Movie[]>(this.url + 'search/comingSoon')
      .pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError('MovieService.comingSoon(): Error retrieving comingSoon');
        })
      );
  }

  inTheatres() {
    return this.http.get<Movie[]>(this.url + 'search/inTheatres')
      .pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError('MovieService.inTheatres(): Error retrieving inTheatres');
        })
      );
  }

  create(newMovie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<Movie>(
      this.url,
      newMovie
    ).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('MovieService.create(): Error creating movie.');
      }));
  }

  update(movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put(`${this.url}/${movie.id}`, movie, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('MovieService.update(): Error updating movie.');
      }));
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('MovieService.delete(): Error deleting movie.');
      }));
  }


  // C o n s t r u c t o r
  constructor(private http: HttpClient) { }
}
