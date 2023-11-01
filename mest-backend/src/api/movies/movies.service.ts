import { HttpException, Injectable } from '@nestjs/common';
import { MovieType } from './entities/movie.entity';
import { catchError, firstValueFrom, map, throwError } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MoviesService {
  private readonly endpoint = process.env.API_URL;
  private readonly accessToken = process.env.ACCESS_TOKEN;
  private readonly imageEndpoint = process.env.IMAGES_API_URL;

  constructor(private readonly httpService: HttpService) {}

  validateMovie = (data: MovieType) => {
    return {
      ...data,
      poster_path: data.poster_path
        ? `${this.imageEndpoint}/w300${data.poster_path}`
        : '',
      media_type: data.media_type || '',
      backdrop_path: data.backdrop_path
        ? `${this.imageEndpoint}/w300${data.backdrop_path}`
        : '',
    };
  };

  remapDataWithImages = (data: MovieType[]) => {
    return data.map((movie) => {
      return this.validateMovie(movie);
    });
  };

  async getOneMovie(id: number): Promise<MovieType> {
    console.log('--value', this.endpoint);
    const data = await firstValueFrom(
      this.httpService
        .get(`${this.endpoint}/movie/${id}?language=en-US`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .pipe(
          map((response) => {
            return response.data as MovieType;
          }),
          catchError((error) => {
            console.log('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return this.validateMovie(data);
  }

  async getSimilarMovies(id: number): Promise<MovieType[]> {
    const data = await firstValueFrom(
      this.httpService
        .get(`${this.endpoint}/movie/${id}/similar?language=en-US`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .pipe(
          map((response) => {
            // console.log('--data', response.data);
            return response.data.results as MovieType[];
          }),
          catchError((error) => {
            console.log('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return this.remapDataWithImages(data);
  }

  async searchMovie(search: String): Promise<MovieType[]> {
    const data = await firstValueFrom(
      this.httpService
        .get(
          `${this.endpoint}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          },
        )
        .pipe(
          map((response) => {
            return response.data.results as MovieType[];
          }),
          catchError((error) => {
            console.log('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return this.remapDataWithImages(data);
  }

  //https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
  async getTrendingMovies(page: number): Promise<MovieType[]> {
    const data = await firstValueFrom(
      this.httpService
        .get(
          `${this.endpoint}/trending/movie/day?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          },
        )
        .pipe(
          map((response) => {
            return response.data.results as MovieType[];
          }),
          catchError((error) => {
            console.log('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return this.remapDataWithImages(data);
  }

  // curl --request GET \
  //    --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \
  //    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDZmY2ViZjIzYTgxMjY2OWJiY2M4Y2ZmYjhkZjk5MyIsInN1YiI6IjY1MzA5ZDE2NTFhNjRlMDBjOGZkOWJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.59Fsd9dZdPtm32n27ndEzhrKtMAUfbyFqXPHVmsjutI' \
  //    --header 'accept: application/json'
}
