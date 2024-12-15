import { Injectable } from '@nestjs/common';
import { CreateFavoriteMovieInput } from './dto/create-favorite-movie.input';
import { UpdateFavoriteMovieInput } from './dto/update-favorite-movie.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteMoviesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFavoriteMovieInput) {
    // return await this.prisma.favoriteMovie.create({
    //   data,
    // });
  }

  findAll() {
    return `This action returns all favoriteMovies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoriteMovie`;
  }

  update(id: number, updateFavoriteMovieInput: UpdateFavoriteMovieInput) {
    return `This action updates a #${id} favoriteMovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoriteMovie`;
  }
}
