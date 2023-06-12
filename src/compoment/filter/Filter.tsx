import React, { useState } from "react";
import "./filter.css";
interface FilterProps {
  label: string;
  value: string;
  type: string;
  options?: any;
  sl_key?: string;
  sl_value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  label,
  value,
  options,
  sl_key,
  sl_value,
  placeholder,
  type = "text",
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="filter-container">
      {type === "text" && (
        <div>
          <p
            style={{
              marginBlockStart: "0.5em",
              marginBlockEnd: "0.5em",
            }}
          >
            &nbsp;
          </p>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
      )}

      {type === "select" && (
        <div>
          <p
            style={{
              marginBlockStart: "0.5em",
              marginBlockEnd: "0.5em",
            }}
          >
            {label}
          </p>
          <select value={value} onChange={handleSelectChange}>
            {options.map((option: any) => (
              <option key={option[`${sl_key}`]} value={option[`${sl_value}`]}>
                {option[`${sl_value}`]}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Filter;
