import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();
  //Filter
  const filterValue = searchParam.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { feild: "status", value: filterValue, method: "eq" };

  //Sort
  const sortByRow = searchParam.get("sortBy") || "startDate-desc";
  const [feild, direction] = sortByRow.split("-");
  const sortBy = { feild, direction };

  //pagenation
  const page = !searchParam.get("page") ? 1 : Number(searchParam.get("page"));
  const {
    isPending,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["Bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["Bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["Bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }
  return { isPending, bookings, error, count };
}

export { useBookings };
