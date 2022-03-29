import React, { useState, Fragment } from "react";
import { CreateForm } from "./CreateForm";

const CRUDTable = ({ children }) => {
  const [data, setData] = useState(React.Children.toArray(children));

  return (
    <div className="mt-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {data.map((d, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {d.props.label}
              </th>
            ))
            }
            <th scope="col" className="px-6 py-3 w-56"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {data.map((d, i) => (
              <td key={i} className="px-6 py-4">
                {i}
              </td>
            ))}
            <td className="px-6 text-right">
              <button className="w-20 justify-center py-2 px-4 mr-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-700">Edit</button>
              <button className="w-20 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-800 active:bg-red-700">Delete</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {data.map((d, i) => (
              <td key={i} className="px-6 py-4">
                {i}
              </td>
            ))}
            <td className="px-6 text-right">
              <button className="w-20 justify-center py-2 px-4 mr-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-700">Edit</button>
              <button className="w-20 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-800 active:bg-red-700">Delete</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {data.map((d, i) => (
              <td key={i} className="px-6 py-4">
                {i}
              </td>
            ))}
            <td className="px-6 text-right">
              <button className="w-20 justify-center py-2 px-4 mr-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-700">Edit</button>
              <button className="w-20 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-800 active:bg-red-700">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <CreateForm children={children} />

    </div >
  );
}

export default CRUDTable;
