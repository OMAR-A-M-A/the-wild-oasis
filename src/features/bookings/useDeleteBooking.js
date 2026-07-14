import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn:  deleteBookingApi,
    onSuccess: () => {
      toast.success(`the booking has been deleted successfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error(`There is an error while deleting, please try again`);
    },
  });

  return { deleteBooking, isDeleting };
}
