import React, { useMemo } from "react";
import PageTitle from "../components/PageTitle";
import CRUDTable from "../components/CRUDTable/CRUDTable";

const CRUDTablePage = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: 'Hello',
        description: 'World',
      },
      {
        id: 2,
        name: 'react-table',
        description: 'rocks',
      },
      {
        id: 3,
        name: 'whatever',
        description: 'you want',
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
        sortType: 'basic',
        fieldType: 'hidden',
        fieldName: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
        sortType: 'basic',
        fieldType: 'text',
        fieldName: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
        sortType: 'basic',
        fieldType: 'textarea',
        fieldName: 'description',
      },
    ],
    []
  )

  return (
    <>
      <PageTitle>CRUD Table</PageTitle>
      <CRUDTable columns={columns} data={data} />
    </>
  );
}

export default CRUDTablePage;
