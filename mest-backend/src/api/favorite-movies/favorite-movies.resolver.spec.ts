import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteMoviesResolver } from './favorite-movies.resolver';
import { FavoriteMoviesService } from './favorite-movies.service';

describe('FavoriteMoviesResolver', () => {
  let resolver: FavoriteMoviesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteMoviesResolver, FavoriteMoviesService],
    }).compile();

    resolver = module.get<FavoriteMoviesResolver>(FavoriteMoviesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
