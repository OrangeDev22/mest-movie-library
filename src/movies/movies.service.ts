import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  async fetchMovies(): Promise<String> {
    console.log('fetching movies');
    return 'these movies';
  }
}
