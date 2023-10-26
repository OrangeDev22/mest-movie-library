import { Test, TestingModule } from '@nestjs/testing';
import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';
import { HttpModule } from '@nestjs/axios';
import { findOneMovieExpectedValue } from './testData';

describe('MoviesResolver', () => {
  let resolver: MoviesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [MoviesResolver, MoviesService],
    }).compile();

    resolver = module.get<MoviesResolver>(MoviesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return a movie', async () => {
    const result = await resolver.getOneMmovie(120);
    expect(result).toEqual(findOneMovieExpectedValue);
  });
});
