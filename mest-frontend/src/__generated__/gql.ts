/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateFavoriteMovie($createFavoriteMovieInput: CreateFavoriteMovieInput!) {\n  createFavoriteMovie(createFavoriteMovieInput: $createFavoriteMovieInput) {\n    id\n    movieId\n    poster_path\n    title\n  }\n}": types.CreateFavoriteMovieDocument,
    "mutation CreateUser($createUserInput: CreateUserInput!) {\n  createUser(createUserInput: $createUserInput) {\n    auth0Id\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}": types.CreateUserDocument,
    "mutation DeleteUser {\n  deleteUser {\n    id\n  }\n}": types.DeleteUserDocument,
    "query FindAllFavoriteMovies {\n  favoriteMovies {\n    id\n    movieId\n    title\n    poster_path\n  }\n}": types.FindAllFavoriteMoviesDocument,
    "query GetMovieClips($getMovieClipsId: ID!) {\n  getMovieClips(id: $getMovieClipsId) {\n    id\n    name\n    key\n    site\n    size\n    type\n    official\n    published_at\n  }\n}": types.GetMovieClipsDocument,
    "query GetOneMmovie($getOneMmovieId: ID!) {\n  getOneMmovie(id: $getOneMmovieId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n    production_companies {\n      id\n      name\n    }\n    genres {\n      id\n      name\n    }\n  }\n}": types.GetOneMmovieDocument,
    "query GetOneUser($id: Float!) {\n  getOneUser(id: $id) {\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}": types.GetOneUserDocument,
    "query GetOneByAuth0IdUser($authId: String!) {\n  getOneByAuth0IdUser(authId: $authId) {\n    auth0Id\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}": types.GetOneByAuth0IdUserDocument,
    "query GetSimilarMovies($getSimilarMoviesId: ID!) {\n  getSimilarMovies(id: $getSimilarMoviesId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}": types.GetSimilarMoviesDocument,
    "query GetTopTrendingMovies {\n  getTopTrendingMovies {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}": types.GetTopTrendingMoviesDocument,
    "query GetTrendingMovies($page: Float!) {\n  getTrendingMovies(page: $page) {\n    movies {\n      id\n      adult\n      backdrop_path\n      title\n      original_language\n      original_title\n      overview\n      poster_path\n      media_type\n      genre_ids\n      popularity\n      release_date\n      video\n      vote_average\n      vote_count\n    }\n    total_pages\n  }\n}": types.GetTrendingMoviesDocument,
    "mutation RemoveFavoriteMovie($removeFavoriteMovieId: Int!) {\n  removeFavoriteMovie(id: $removeFavoriteMovieId) {\n    id\n  }\n}": types.RemoveFavoriteMovieDocument,
    "query SearchMovie($search: String!, $page: Float) {\n  searchMovie(search: $search, page: $page) {\n    movies {\n      id\n      adult\n      backdrop_path\n      title\n      original_language\n      original_title\n      overview\n      poster_path\n      media_type\n      genre_ids\n      popularity\n      release_date\n      video\n      vote_average\n      vote_count\n    }\n    total_pages\n  }\n}": types.SearchMovieDocument,
    "mutation UpdateUser($updateUserInput: UpdateUserInput!) {\n  updateUser(updateUserInput: $updateUserInput) {\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}": types.UpdateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateFavoriteMovie($createFavoriteMovieInput: CreateFavoriteMovieInput!) {\n  createFavoriteMovie(createFavoriteMovieInput: $createFavoriteMovieInput) {\n    id\n    movieId\n    poster_path\n    title\n  }\n}"): (typeof documents)["mutation CreateFavoriteMovie($createFavoriteMovieInput: CreateFavoriteMovieInput!) {\n  createFavoriteMovie(createFavoriteMovieInput: $createFavoriteMovieInput) {\n    id\n    movieId\n    poster_path\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($createUserInput: CreateUserInput!) {\n  createUser(createUserInput: $createUserInput) {\n    auth0Id\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateUser($createUserInput: CreateUserInput!) {\n  createUser(createUserInput: $createUserInput) {\n    auth0Id\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteUser {\n  deleteUser {\n    id\n  }\n}"): (typeof documents)["mutation DeleteUser {\n  deleteUser {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindAllFavoriteMovies {\n  favoriteMovies {\n    id\n    movieId\n    title\n    poster_path\n  }\n}"): (typeof documents)["query FindAllFavoriteMovies {\n  favoriteMovies {\n    id\n    movieId\n    title\n    poster_path\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMovieClips($getMovieClipsId: ID!) {\n  getMovieClips(id: $getMovieClipsId) {\n    id\n    name\n    key\n    site\n    size\n    type\n    official\n    published_at\n  }\n}"): (typeof documents)["query GetMovieClips($getMovieClipsId: ID!) {\n  getMovieClips(id: $getMovieClipsId) {\n    id\n    name\n    key\n    site\n    size\n    type\n    official\n    published_at\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOneMmovie($getOneMmovieId: ID!) {\n  getOneMmovie(id: $getOneMmovieId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n    production_companies {\n      id\n      name\n    }\n    genres {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetOneMmovie($getOneMmovieId: ID!) {\n  getOneMmovie(id: $getOneMmovieId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n    production_companies {\n      id\n      name\n    }\n    genres {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOneUser($id: Float!) {\n  getOneUser(id: $id) {\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetOneUser($id: Float!) {\n  getOneUser(id: $id) {\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOneByAuth0IdUser($authId: String!) {\n  getOneByAuth0IdUser(authId: $authId) {\n    auth0Id\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetOneByAuth0IdUser($authId: String!) {\n  getOneByAuth0IdUser(authId: $authId) {\n    auth0Id\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSimilarMovies($getSimilarMoviesId: ID!) {\n  getSimilarMovies(id: $getSimilarMoviesId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"): (typeof documents)["query GetSimilarMovies($getSimilarMoviesId: ID!) {\n  getSimilarMovies(id: $getSimilarMoviesId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTopTrendingMovies {\n  getTopTrendingMovies {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"): (typeof documents)["query GetTopTrendingMovies {\n  getTopTrendingMovies {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTrendingMovies($page: Float!) {\n  getTrendingMovies(page: $page) {\n    movies {\n      id\n      adult\n      backdrop_path\n      title\n      original_language\n      original_title\n      overview\n      poster_path\n      media_type\n      genre_ids\n      popularity\n      release_date\n      video\n      vote_average\n      vote_count\n    }\n    total_pages\n  }\n}"): (typeof documents)["query GetTrendingMovies($page: Float!) {\n  getTrendingMovies(page: $page) {\n    movies {\n      id\n      adult\n      backdrop_path\n      title\n      original_language\n      original_title\n      overview\n      poster_path\n      media_type\n      genre_ids\n      popularity\n      release_date\n      video\n      vote_average\n      vote_count\n    }\n    total_pages\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveFavoriteMovie($removeFavoriteMovieId: Int!) {\n  removeFavoriteMovie(id: $removeFavoriteMovieId) {\n    id\n  }\n}"): (typeof documents)["mutation RemoveFavoriteMovie($removeFavoriteMovieId: Int!) {\n  removeFavoriteMovie(id: $removeFavoriteMovieId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchMovie($search: String!, $page: Float) {\n  searchMovie(search: $search, page: $page) {\n    movies {\n      id\n      adult\n      backdrop_path\n      title\n      original_language\n      original_title\n      overview\n      poster_path\n      media_type\n      genre_ids\n      popularity\n      release_date\n      video\n      vote_average\n      vote_count\n    }\n    total_pages\n  }\n}"): (typeof documents)["query SearchMovie($search: String!, $page: Float) {\n  searchMovie(search: $search, page: $page) {\n    movies {\n      id\n      adult\n      backdrop_path\n      title\n      original_language\n      original_title\n      overview\n      poster_path\n      media_type\n      genre_ids\n      popularity\n      release_date\n      video\n      vote_average\n      vote_count\n    }\n    total_pages\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUser($updateUserInput: UpdateUserInput!) {\n  updateUser(updateUserInput: $updateUserInput) {\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateUser($updateUserInput: UpdateUserInput!) {\n  updateUser(updateUserInput: $updateUserInput) {\n    id\n    nickName\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;