import React, { useMemo, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import CRUDTable from "../components/CRUDTable/CRUDTable";
import axios from "axios";

const CRUDTablePage = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/tasks')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }, [])

  const fetchData = () => {
    axios.get('http://localhost:8080/tasks')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/tasks/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setData(res.data)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleUpdate = (id, data) => {
    axios.put(`http://localhost:8080/tasks/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setData(res.data)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleCreate = (formData) => {
    axios.post(`http://localhost:8080/tasks`, formData)
      .then((res) => {
        if (res.status === 201) {
          fetchData()
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

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
      <CRUDTable 
        columns={columns} 
        data={data} 
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete} />
    </>
  );
}

export default CRUDTablePage;
