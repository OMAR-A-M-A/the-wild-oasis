import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        color="blue"
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={bookings.length}
      />
      <Stat
        color="green"
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
      />
      <Stat
        color="indigo"
        icon={<HiOutlineCalendar />}
        title="Check ins"
        value={confirmedStays.length}
      />
      <Stat
        color="yellow"
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
