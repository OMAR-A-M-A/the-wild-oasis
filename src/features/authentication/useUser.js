import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    error,
    isPending,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 0,
  });
  return {
    user,
    error,
    isPending,
    isAuthenticated: user?.role === "authenticated",
  };
}
