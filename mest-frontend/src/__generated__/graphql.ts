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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
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

export type CreateFavoriteMovie = {
  __typename?: 'CreateFavoriteMovie';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  movieId: Scalars['String']['output'];
  poster_path: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type CreateFavoriteMovieInput = {
  movieId: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nickName: Scalars['String']['input'];
};

export type FavoriteMovie = {
  __typename?: 'FavoriteMovie';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  movieId: Scalars['String']['output'];
  poster_path: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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

export type MovieSearchResponse = {
  __typename?: 'MovieSearchResponse';
  movies: Array<MovieType>;
  total_pages: Scalars['Int']['output'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createFavoriteMovie: CreateFavoriteMovie;
  createUser: User;
  deleteUser: User;
  removeFavoriteMovie: RemoveFavoriteMovie;
  updateFavoriteMovie: FavoriteMovie;
  updateUser: User;
};


export type MutationCreateFavoriteMovieArgs = {
  createFavoriteMovieInput: CreateFavoriteMovieInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveFavoriteMovieArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateFavoriteMovieArgs = {
  updateFavoriteMovieInput: UpdateFavoriteMovieInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  favoriteMovie: FavoriteMovie;
  favoriteMovies: Array<FavoriteMovie>;
  getMovieCast: Array<CastMember>;
  getMovieClips: Array<MovieClip>;
  getOneMmovie: MovieResponseType;
  getOneUser: User;
  getSimilarMovies: Array<MovieType>;
  getTopTrendingMovies: Array<MovieType>;
  getTrendingMovies: MovieSearchResponse;
  searchMovie: MovieSearchResponse;
};


export type QueryFavoriteMovieArgs = {
  id: Scalars['Int']['input'];
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
  page?: InputMaybe<Scalars['Float']['input']>;
  search: Scalars['String']['input'];
};

export type RemoveFavoriteMovie = {
  __typename?: 'RemoveFavoriteMovie';
  id: Scalars['Int']['output'];
};

export type UpdateFavoriteMovieInput = {
  id: Scalars['Int']['input'];
  movieId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  auth0Id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateFavoriteMovieMutationVariables = Exact<{
  createFavoriteMovieInput: CreateFavoriteMovieInput;
}>;


export type CreateFavoriteMovieMutation = { __typename?: 'Mutation', createFavoriteMovie: { __typename?: 'CreateFavoriteMovie', id: number, movieId: string, poster_path: string, title: string } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', auth0Id: string, id: number, nickName: string, name: string, email: string, createdAt: any, updatedAt: any } };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: number } };

export type FindAllFavoriteMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllFavoriteMoviesQuery = { __typename?: 'Query', favoriteMovies: Array<{ __typename?: 'FavoriteMovie', id: number, movieId: string, title: string, poster_path: string }> };

export type GetMovieClipsQueryVariables = Exact<{
  getMovieClipsId: Scalars['ID']['input'];
}>;


export type GetMovieClipsQuery = { __typename?: 'Query', getMovieClips: Array<{ __typename?: 'MovieClip', id: string, name: string, key: string, site: string, size: number, type: string, official: boolean, published_at?: string | null }> };

export type GetOneMmovieQueryVariables = Exact<{
  getOneMmovieId: Scalars['ID']['input'];
}>;


export type GetOneMmovieQuery = { __typename?: 'Query', getOneMmovie: { __typename?: 'MovieResponseType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number, production_companies?: Array<{ __typename?: 'ProductionCompany', id: string, name: string }> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string }> | null } };

export type GetOneUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOneUserQuery = { __typename?: 'Query', getOneUser: { __typename?: 'User', id: number, nickName: string, name: string, email: string, auth0Id: string, createdAt: any, updatedAt: any } };

export type GetSimilarMoviesQueryVariables = Exact<{
  getSimilarMoviesId: Scalars['ID']['input'];
}>;


export type GetSimilarMoviesQuery = { __typename?: 'Query', getSimilarMovies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> };

export type GetTopTrendingMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopTrendingMoviesQuery = { __typename?: 'Query', getTopTrendingMovies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> };

export type GetTrendingMoviesQueryVariables = Exact<{
  page: Scalars['Float']['input'];
}>;


export type GetTrendingMoviesQuery = { __typename?: 'Query', getTrendingMovies: { __typename?: 'MovieSearchResponse', total_pages: number, movies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> } };

export type RemoveFavoriteMovieMutationVariables = Exact<{
  removeFavoriteMovieId: Scalars['Int']['input'];
}>;


export type RemoveFavoriteMovieMutation = { __typename?: 'Mutation', removeFavoriteMovie: { __typename?: 'RemoveFavoriteMovie', id: number } };

export type SearchMovieQueryVariables = Exact<{
  search: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Float']['input']>;
}>;


export type SearchMovieQuery = { __typename?: 'Query', searchMovie: { __typename?: 'MovieSearchResponse', total_pages: number, movies: Array<{ __typename?: 'MovieType', id: string, adult: boolean, backdrop_path: string, title: string, original_language: string, original_title: string, overview: string, poster_path: string, media_type: string, genre_ids?: Array<string> | null, popularity: number, release_date: string, video: boolean, vote_average: number, vote_count: number }> } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, nickName: string, name: string, email: string, createdAt: any, updatedAt: any } };


export const CreateFavoriteMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFavoriteMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFavoriteMovieInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFavoriteMovieInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFavoriteMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFavoriteMovieInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFavoriteMovieInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateFavoriteMovieMutation, CreateFavoriteMovieMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth0Id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const FindAllFavoriteMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllFavoriteMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favoriteMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}}]}}]}}]} as unknown as DocumentNode<FindAllFavoriteMoviesQuery, FindAllFavoriteMoviesQueryVariables>;
export const GetMovieClipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovieClips"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getMovieClipsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMovieClips"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getMovieClipsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"published_at"}}]}}]}}]} as unknown as DocumentNode<GetMovieClipsQuery, GetMovieClipsQueryVariables>;
export const GetOneMmovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneMmovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getOneMmovieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOneMmovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getOneMmovieId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"production_companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetOneMmovieQuery, GetOneMmovieQueryVariables>;
export const GetOneUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOneUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"auth0Id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetOneUserQuery, GetOneUserQueryVariables>;
export const GetSimilarMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSimilarMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getSimilarMoviesId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSimilarMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getSimilarMoviesId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>;
export const GetTopTrendingMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopTrendingMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopTrendingMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<GetTopTrendingMoviesQuery, GetTopTrendingMoviesQueryVariables>;
export const GetTrendingMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrendingMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrendingMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}}]}}]}}]} as unknown as DocumentNode<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>;
export const RemoveFavoriteMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFavoriteMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeFavoriteMovieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFavoriteMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeFavoriteMovieId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveFavoriteMovieMutation, RemoveFavoriteMovieMutationVariables>;
export const SearchMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"media_type"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}}]}}]}}]} as unknown as DocumentNode<SearchMovieQuery, SearchMovieQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;