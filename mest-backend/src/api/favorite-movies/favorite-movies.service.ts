import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateFavoriteMovieInput } from './dto/create-favorite-movie.input';
import { UpdateFavoriteMovieInput } from './dto/update-favorite-movie.input';
import { PrismaService } from '../../prisma/prisma.service';
import { MoviesService } from '../movies/movies.service';

@Injectable()
export class FavoriteMoviesService {
  constructor(
    private prisma: PrismaService,
    private readonly movieService: MoviesService,
  ) {}

  async create(data: CreateFavoriteMovieInput, auth0Id: string) {
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      include: { favoriteMovies: true },
    });

    if (!user) {
      throw new HttpException(
        'User not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const isMovieAlreadyFavorite = user.favoriteMovies.some(
      (movie) => movie.movieId === data.movieId,
    );

    if (isMovieAlreadyFavorite) {
      throw new BadRequestException('Movie already in favorites');
    }

    const newFavoriteMovie = await this.prisma.favoriteMovie.create({
      data: { ...data, userId: user.id },
    });

    const apiMovie = await this.movieService.getOneMovie(
      +newFavoriteMovie.movieId,
    );
    return { ...apiMovie, ...newFavoriteMovie };
  }

  async findAll(auth0Id: string) {
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      include: { favoriteMovies: true },
    });

    if (!user) {
      throw new HttpException(
        'User not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const favoriteMovies = await this.prisma.favoriteMovie.findMany({
      where: { userId: user.id },
    });

    const apiMovies = await Promise.all(
      favoriteMovies.map(async (movie) => {
        const apiMovie = await this.movieService.getOneMovie(+movie.movieId);
        return { ...apiMovie, ...movie };
      }),
    );

    return await apiMovies;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoriteMovie`;
  }

  update(id: number, updateFavoriteMovieInput: UpdateFavoriteMovieInput) {
    return `This action updates a #${id} favoriteMovie`;
  }

  async remove(id: number) {
    return this.prisma.favoriteMovie.delete({ where: { id } });
  }
}
