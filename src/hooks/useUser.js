import useSWR from "swr";
import axios from "axios";

export function useUser(pageIndex) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/comments?postId=${pageIndex}`,
    fetcher
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
