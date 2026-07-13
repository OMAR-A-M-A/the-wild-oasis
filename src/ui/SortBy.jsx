import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy") || "";
  function onChange(e) {
    searchParam.set("sortBy", e.target.value);
    setSearchParam(searchParam);
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={onChange}
    ></Select>
  );
}

export default SortBy;
