import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParam] = useSearchParams();
  //Filter
  const filterValue = searchParam.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { feild: "status", value: filterValue, method: "eq" };

  //Sort
  const sortByRow = searchParam.get("sortBy");
  const [feild, direction] = sortByRow.split("-");
  const sortBy = { feild, direction };

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["Bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isPending, bookings, error };
}

export { useBookings };
