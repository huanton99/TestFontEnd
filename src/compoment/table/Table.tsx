import React from "react";
import "./table.css";
import { Column } from "../../const/const";
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.header}>{String(item[column.accessor])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
