export class Movie {

  id: number;
  title: string;
  length: string;
  rating: string;
  type: string;
  description: string;
  trailer: string;
  director: string;
  cast: string;
  releaseDate: string;
  imgUrl: string;

  // tslint:disable-next-line: max-line-length
  constructor(id?: number, title?: string, length?: string, rating?: string, type?: string, description?: string, trailer?: string, director?: string, cast?: string, releaseDate?: string, imgUrl?: string) {
    this.id = id;
    this.title = title;
    this.length = length;
    this.rating = rating;
    this.type = type;
    this.description = description;
    this.trailer = trailer;
    this.director = director;
    this.cast = cast;
    this.releaseDate = releaseDate;
    this.imgUrl = imgUrl;
  }

}
