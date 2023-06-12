import React, { useState, Dispatch, SetStateAction } from "react";
import Filter from "../src/compoment/filter/Filter";
import drivers from "./data/drivers";
import { Year, searchBy } from "./const/const";

interface Formula1SearchProps {
  fill: Dispatch<SetStateAction<any>>;
}
const FlexFilterApp: React.FC<Formula1SearchProps> = ({ fill }) => {
  const [yearFilter, setYearFilter] = useState(Year[0].name);
  const [inputFilter, setInputFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState(searchBy[0].name);
  const [placehoder, setPlacehoder] = useState("Import driver or car");
  const handleYearFilterChange = (value: string) => {
    setYearFilter(value);
  };

  const handleInputChange = (value: string) => {
    setInputFilter(value);
  };

  const handleSearchFilterChange = (value: string) => {
    setSearchFilter(value);
  };
  const handleSubmit = () => {
    const datafilter = {
      text: inputFilter,
      year: yearFilter,
      search: searchFilter,
    };
    fill(datafilter);
  };
  const handleReset = () => {
    const datafilter = {
      text: "",
      year: Year[0].name,
      search: searchBy[0].name,
    };
    setInputFilter(" ");
    setYearFilter(Year[0].name);
    setSearchFilter(searchBy[0].name);
    fill(datafilter);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        flexWrap: "wrap",
        border: "1px solid #ccc",
      }}
    >
      <Filter
        type="text"
        label="Year"
        placeholder={placehoder}
        value={inputFilter}
        onChange={handleInputChange}
      />
      <Filter
        type="select"
        label="Year"
        sl_value="id"
        sl_key="id"
        value={yearFilter}
        options={Year}
        onChange={handleYearFilterChange}
      />
      <Filter
        type="select"
        label="Search by"
        sl_value="name"
        sl_key="id"
        value={searchFilter}
        options={searchBy}
        onChange={handleSearchFilterChange}
      />
      {/* <Filter
        type="select"
        label="Driver"
        sl_value="driver"
        sl_key="pos"
        value={driverFilter}
        options={drivers}
        onChange={handleDriverFilterChange}
      /> */}
      {/* <Filter
        type="select"
        label="Team"
        sl_value=""
        sl_key=""
        value={teamFilter}
        options={["Mercedes", "Red Bull Racing", "Ferrari"]}
        onChange={handleTeamFilterChange}
      /> */}
      <button
        onClick={handleSubmit}
        style={{ height: "35px", width: "200px", marginTop: "37px" }}
      >
        Tìm kiếm
      </button>
      <button
        onClick={handleReset}
        style={{ height: "35px", width: "200px", marginTop: "37px" }}
      >
        Reset
      </button>
      {/* Hiển thị kết quả tìm kiếm */}
    </div>
  );
};

export default FlexFilterApp;
