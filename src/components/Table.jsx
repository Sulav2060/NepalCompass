import React from "react";

const Table = ({ data }) => {
  const { columns, dataSource } = data;

  return (
    <div className="overflow-x-auto dark:text-gray-300">
      <table className="w-full table-auto border-collapse dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 text-left border border-gray-300 dark:border-gray-600"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, index) => (
            <tr key={index} className="even:bg-gray-100 dark:even:bg-gray-800">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700"
                >
                  {row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
