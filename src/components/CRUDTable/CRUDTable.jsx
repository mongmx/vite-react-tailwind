import React, { useState } from "react";
import { useTable, useSortBy } from 'react-table';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { CreateForm } from "./CreateForm";
import { UpdateForm } from "./UpdateForm";
import { DeleteForm } from "./DeleteForm";

const CRUDTable = ({columns, data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  const [selected, setSelected] = useState(null);
  const [updateFormOpen, setUpdateFormOpen] = useState(false);
  const [deleteFormOpen, setDeleteFormOpen] = useState(false);

  const openUpdateForm = (item) => {
    setSelected(item.values);
    setUpdateFormOpen(true);
  };

  const closeUpdateForm = () => {
    setUpdateFormOpen(false)
  };

  const openDeleteForm = (item) => {
    setSelected(item.values);
    setDeleteFormOpen(true);
  };

  const closeDeleteForm = () => {
    setDeleteFormOpen(false)
  };

  return (
    <>
      <CreateForm fields={columns} />
      <UpdateForm data={selected} isOpen={updateFormOpen} closeFn={closeUpdateForm} fields={columns} />
      <DeleteForm data={selected} isOpen={deleteFormOpen} closeFn={closeDeleteForm} fields={columns} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    scope="col"
                    className="px-6 py-3"
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ?
                          <ChevronDownIcon className="inline h-3 w-3 ml-1" /> :
                          <ChevronUpIcon className="inline h-3 w-3 ml-1" />) :
                        ''
                      }
                    </span>
                  </th>
                ))}
                <th></th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4"
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                  <td className="px-6 text-right">
                    <UpdateButton onClick={() => openUpdateForm(row)}>Update</UpdateButton>
                    <DeleteButton onClick={() => openDeleteForm(row)}>Delete</DeleteButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
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
