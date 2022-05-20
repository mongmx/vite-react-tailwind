import React, { useState, useMemo, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { useTable, useSortBy } from 'react-table';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { toast } from 'react-toastify';
import { apiClient, apiPath } from '../api/client';

function History() {
  const columns = useMemo(
    () => [
      {
        Header: 'Login Time',
        accessor: 'loginTime',
        sortType: 'basic',
        fieldType: 'hidden',
        fieldName: 'loginTime',
      },
      {
        Header: 'Email',
        accessor: 'email',
        sortType: 'basic',
        fieldType: 'email',
        fieldName: 'email',
      },
    ],
    []
  )

  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient.get(apiPath.getHistory)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  return (
    <>
      <PageTitle>Access logs</PageTitle>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-8">
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
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default History
