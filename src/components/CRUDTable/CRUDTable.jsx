import React, { useState, Fragment } from "react";
import { UpdateForm } from "react-crud-table";
import { CreateForm } from "./CreateForm";

const CRUDTable = ({ children, items }) => {
  const [data, setData] = useState(React.Children.toArray(children));
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false)
  // }

  // function openModal() {
  //   setIsOpen(true)
  // }

  const handleUpdate = (item) => {
    setSelected(item);
    setIsOpen(true);
    console.log(isOpen);
  };

  const handleDelete = (item) => {
    setSelected(item);
    setIsOpen(true);
    console.log(isOpen);
  };

  return (
    <>
      <CreateForm children={children} />
      <UpdateForm children={children} selected={selected} show={isOpen} />
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
          {items.map((item, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {Object.entries(item).map(([key, value]) => (
                <td key={key} className="px-6 py-4">
                  {value}
                </td>
              ))}
              <td className="px-6 text-right">
                <UpdateButton onClick={() => handleUpdate(item)}>Update</UpdateButton>
                <DeleteButton onClick={() => handleDelete(item)}>Delete</DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {JSON.stringify(items)} */}
    </>
  );
}

export default CRUDTable;

const UpdateButton = ({ children, ...props }) => {
  return (
    <button className="w-20 justify-center py-2 px-4 mr-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-700" {...props}>
      {children}
    </button>
  )
}

const DeleteButton = ({ children, ...props }) => {
  return (
    <button className="w-20 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-800 active:bg-red-700" {...props}>
      {children}
    </button>
  )
}
