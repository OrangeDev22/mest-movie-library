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
    "query GetMovieClips($getMovieClipsId: ID!) {\n  getMovieClips(id: $getMovieClipsId) {\n    id\n    name\n    key\n    site\n    size\n    type\n    official\n    published_at\n  }\n}": types.GetMovieClipsDocument,
    "query GetOneMmovie($getOneMmovieId: ID!) {\n  getOneMmovie(id: $getOneMmovieId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n    production_companies {\n      id\n      name\n    }\n    genres {\n      id\n      name\n    }\n  }\n}": types.GetOneMmovieDocument,
    "query GetTopTrendingMovies {\n  getTopTrendingMovies {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}": types.GetTopTrendingMoviesDocument,
    "query GetTrendingMovies($page: Float!) {\n  getTrendingMovies(page: $page) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}": types.GetTrendingMoviesDocument,
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
export function graphql(source: "query GetMovieClips($getMovieClipsId: ID!) {\n  getMovieClips(id: $getMovieClipsId) {\n    id\n    name\n    key\n    site\n    size\n    type\n    official\n    published_at\n  }\n}"): (typeof documents)["query GetMovieClips($getMovieClipsId: ID!) {\n  getMovieClips(id: $getMovieClipsId) {\n    id\n    name\n    key\n    site\n    size\n    type\n    official\n    published_at\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOneMmovie($getOneMmovieId: ID!) {\n  getOneMmovie(id: $getOneMmovieId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n    production_companies {\n      id\n      name\n    }\n    genres {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetOneMmovie($getOneMmovieId: ID!) {\n  getOneMmovie(id: $getOneMmovieId) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n    production_companies {\n      id\n      name\n    }\n    genres {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTopTrendingMovies {\n  getTopTrendingMovies {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"): (typeof documents)["query GetTopTrendingMovies {\n  getTopTrendingMovies {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTrendingMovies($page: Float!) {\n  getTrendingMovies(page: $page) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"): (typeof documents)["query GetTrendingMovies($page: Float!) {\n  getTrendingMovies(page: $page) {\n    id\n    adult\n    backdrop_path\n    title\n    original_language\n    original_title\n    overview\n    poster_path\n    media_type\n    genre_ids\n    popularity\n    release_date\n    video\n    vote_average\n    vote_count\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;