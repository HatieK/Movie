import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../apis/adminMovie";

export const useListMovies = (currentPage, options) => {
  const queryResult = useQuery({
    queryKey: ["list-movies", { currentPage }],
    queryFn: () => movieApi.getListMovies({ page: currentPage }),
    ...options,
  });
  return queryResult;
};
