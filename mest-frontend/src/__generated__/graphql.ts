/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CastMember = {
  __typename?: 'CastMember';
  adult: Scalars['Boolean']['output'];
  cast_id: Scalars['Int']['output'];
  character: Scalars['String']['output'];
  credit_id: Scalars['String']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  job?: Maybe<Scalars['String']['output']>;
  known_for_department: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  original_name: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type MovieClip = {
  __typename?: 'MovieClip';
  id: Scalars['ID']['output'];
  iso_639_1: Scalars['String']['output'];
  iso_3166_1: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  official: Scalars['Boolean']['output'];
  published_at?: Maybe<Scalars['String']['output']>;
  site: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type MovieResponseType = {
  __typename?: 'MovieResponseType';
  adult: Scalars['Boolean']['output'];
  backdrop_path: Scalars['String']['output'];
  genre_ids?: Maybe<Array<Scalars['ID']['output']>>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  media_type: Scalars['String']['output'];
  original_language: Scalars['String']['output'];
  original_title: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  poster_path: Scalars['String']['output'];
  production_companies?: Maybe<Array<ProductionCompany>>;
  release_date: Scalars['String']['output'];
  title: Scalars['String']['output'];
  video: Scalars['Boolean']['output'];
  vote_average: Scalars['Float']['output'];
  vote_count: Scalars['Float']['output'];
};

export type MovieType = {
  __typename?: 'MovieType';
  adult: Scalars['Boolean']['output'];
  backdrop_path: Scalars['String']['output'];
  genre_ids?: Maybe<Array<Scalars['ID']['output']>>;
  id: Scalars['ID']['output'];
  media_type: Scalars['String']['output'];
  original_language: Scalars['String']['output'];
  original_title: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  poster_path: Scalars['String']['output'];
  release_date: Scalars['String']['output'];
  title: Scalars['String']['output'];
  video: Scalars['Boolean']['output'];
  vote_average: Scalars['Float']['output'];
  vote_count: Scalars['Float']['output'];
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getMovieCast: Array<CastMember>;
  getMovieClips: Array<MovieClip>;
  getOneMmovie: MovieResponseType;
  getSimilarMovies: Array<MovieType>;
  getTopTrendingMovies: Array<MovieType>;
  getTrendingMovies: Array<MovieType>;
  searchMovie: Array<MovieType>;
};


export type QueryGetMovieCastArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetMovieClipsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOneMmovieArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSimilarMoviesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTrendingMoviesArgs = {
  page: Scalars['Float']['input'];
};


export type QuerySearchMovieArgs = {
  search: Scalars['String']['input'];
};

export type GetMovieClipsQueryVariables = Exact<{
  getMovieClipsId: Scalars['ID']['input'];
}>;


export type GetMovieClipsQuery = { __typename?: 'Query', getMovieClips: Array<{ __typename?: 'MovieClip', id: string, name: string, key: string, site: string, size: number, type: string, official: boolean, published_at?: string | null }> };

export type GetOneMmovieQueryVariables = Exact<{
  getOneMmovieId: Scalars['ID']['input'];
}>;


export type GetOneMmovieQuery = { __typename?: 'Query', getOneMmovie: { __typename?: 'MovieResponseType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number, production_companies?: Array<{ __typename?: 'ProductionCompany', id: string, name: string }> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string }> | null } };

export type GetSimilarMoviesQueryVariables = Exact<{
  getSimilarMoviesId: Scalars['ID']['input'];
}>;


export type GetSimilarMoviesQuery = { __typename?: 'Query', getSimilarMovies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> };

export type GetTopTrendingMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopTrendingMoviesQuery = { __typename?: 'Query', getTopTrendingMovies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> };

export type GetTrendingMoviesQueryVariables = Exact<{
  page: Scalars['Float']['input'];
}>;


export type GetTrendingMoviesQuery = { __typename?: 'Query', getTrendingMovies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> };

export type SearchMovieQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type SearchMovieQuery = { __typename?: 'Query', searchMovie: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> };


export const GetMovieClipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovieClips"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getMovieClipsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMovieClips"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getMovieClipsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"published_at"}}]}}]}}]} as unknown as DocumentNode<GetMovieClipsQuery, GetMovieClipsQueryVariables>;
export const GetOneMmovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneMmovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getOneMmovieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOneMmovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getOneMmovieId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"production_companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetOneMmovieQuery, GetOneMmovieQueryVariables>;
export const GetSimilarMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSimilarMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getSimilarMoviesId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSimilarMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getSimilarMoviesId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>;
export const GetTopTrendingMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopTrendingMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopTrendingMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<GetTopTrendingMoviesQuery, GetTopTrendingMoviesQueryVariables>;
export const GetTrendingMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrendingMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrendingMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>;
export const SearchMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<SearchMovieQuery, SearchMovieQueryVariables>;