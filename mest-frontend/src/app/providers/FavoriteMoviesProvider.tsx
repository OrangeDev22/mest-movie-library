"use client";

import { FindAllFavoriteMoviesDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import useFavoriteMoviesStore from "../stores/favoriteMoviesStores";

const FaboriteMoviesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, isLoading: isLoadingUser } = useUser();
  const { data, loading } = useQuery(FindAllFavoriteMoviesDocument);

  const { setFavoriteMovies } = useFavoriteMoviesStore();

  useEffect(() => {
    if (loading || !data?.favoriteMovies || !user || isLoadingUser) return;
    setFavoriteMovies(data.favoriteMovies);
  }, [data, user]);

  return <>{children}</>;
};

export default FaboriteMoviesProvider;
