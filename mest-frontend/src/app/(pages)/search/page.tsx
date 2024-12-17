import { MovieType, SearchMovieDocument } from "@/__generated__/graphql";
import MovieList from "@/app/components/MovieList";
import PaginationComponent from "@/app/components/PaginationComponent";
import { getClient } from "@/lib/client";
import { redirect } from "next/navigation";

async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const searchValue =
    typeof searchParams.searchValue === "string"
      ? searchParams.searchValue
      : "";

  if (page > 500) redirect(`/search?searchValue=${searchValue}&page=1`);

  const { data, loading } = await getClient().query({
    query: SearchMovieDocument,
    variables: { search: searchValue, page },
  });

  const {
    searchMovie: { movies, total_pages },
  } = data;

  const redirectTo = `/search`;

  if (page > total_pages) {
    redirect(`/search?searchValue=${searchValue}&page=${total_pages}`);
  }

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto my-4 p-4 md:p-0">
      <PaginationComponent
        page={page}
        paginationLimit={total_pages}
        redirectTo={redirectTo}
        query={{ searchValue }}
      />

      <h2 className="text-2xl font-bold mb-4">Search Results</h2>

      {movies.length === 0 && !loading && <div>No Results...</div>}

      {((movies && movies.length > 0) || loading) && (
        <>
          <MovieList data={movies as MovieType[]} loading={loading} />
        </>
      )}

      <PaginationComponent
        page={page}
        paginationLimit={total_pages}
        redirectTo={redirectTo}
      />
    </div>
  );
}

export default Search;
