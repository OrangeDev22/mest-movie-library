import { HttpException, Injectable } from '@nestjs/common';
import { MovieType } from './entities/movie.entity';
import { catchError, firstValueFrom, map, throwError } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { MovieClip } from './entities/movieClip.entity';
import { CastMember } from './entities/castMember';
import { MovieResponseType } from './entities/movie.response';
import { MovieSearchResponse } from './entities/movieSearch.response';

@Injectable()
export class MoviesService {
  private readonly endpoint = process.env.API_URL;
  private readonly accessToken = process.env.ACCESS_TOKEN;
  private readonly imageEndpoint = process.env.IMAGES_API_URL;

  constructor(private readonly httpService: HttpService) {}

  validateMovie<T extends MovieType | MovieResponseType>(
    data: T,
    imageSize?: number,
  ): T {
    return {
      ...data,
      poster_path: data.poster_path
        ? `${this.imageEndpoint}/${imageSize ? `w${imageSize}` : 'w300'}${
            data.poster_path
          }`
        : '',
      media_type: data.media_type || '',
      backdrop_path: data.backdrop_path
        ? `${this.imageEndpoint}/${imageSize ? imageSize : 'w300'}${
            data.backdrop_path
          }`
        : '',
    };
  }

  remapDataWithImages = (data: MovieType[], imageSize?: number) => {
    return data.map((movie) => {
      return this.validateMovie(movie, imageSize);
    });
  };

  async getOneMovie(id: number): Promise<MovieResponseType> {
    const data = await firstValueFrom(
      this.httpService
        .get(`${this.endpoint}/movie/${id}?language=en-US`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .pipe(
          map((response) => {
            return response.data as MovieResponseType;
          }),
          catchError((error) => {
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
            return response.data.results;
          }),
          catchError((error) => {
            console.error('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return this.remapDataWithImages(data);
  }

  async searchMovie(
    search: String,
    page: number,
  ): Promise<MovieSearchResponse> {
    const data = await firstValueFrom(
      this.httpService
        .get(
          `${this.endpoint}/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          },
        )
        .pipe(
          map((response) => {
            return {
              movies: response?.data?.results as MovieType[],
              total_pages: response?.data?.total_pages,
            };
          }),
          catchError((error) => {
            console.error('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    console.log('--data', data.movies);
    return {
      ...data,
      movies: data?.movies ? this.remapDataWithImages(data.movies) : [],
    };
  }

  async getTrendingMovies(page: number): Promise<MovieSearchResponse> {
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
            return {
              total_pages: response?.data?.total_pages,
              movies: response.data.results as MovieType[],
            };
          }),
          catchError((error) => {
            console.error('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return { ...data, movies: this.remapDataWithImages(data.movies) };
  }

  async getTopTrendingMovies() {
    const data = await firstValueFrom(
      this.httpService
        .get(`${this.endpoint}/trending/movie/day?sort_by=vote_average.desc`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .pipe(
          map((response) => {
            return response.data.results as MovieType[];
          }),
          catchError((error) => {
            console.error('--error', error.message);
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return this.remapDataWithImages(data, 200).slice(0, 10);
  }

  async getMovieCast(id: number) {
    const data = await firstValueFrom(
      this.httpService
        .get(`${this.endpoint}/movie/${id}/credits`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .pipe(
          map((response) => {
            return response.data.cast;
          }),
          catchError((error) => {
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return data.slice(0, 10);
  }

  async getMovieCLip(id: number) {
    const data = await firstValueFrom(
      this.httpService
        .get(`${this.endpoint}/movie/${id}/videos`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .pipe(
          map((response) => {
            return response.data.results as MovieClip[];
          }),
          catchError((error) => {
            return throwError(
              () => new HttpException(JSON.stringify(error.message), 400),
            );
          }),
        ),
    );
    return data.filter(({ site }) => site !== 'Youtube');
  }
}
