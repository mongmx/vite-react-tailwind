import React, { useState, useMemo, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import CRUDTable from "../components/CRUDTable/CRUDTable";
// import { axios } from "../api/client";
import axios from "axios";

import { createServer } from "miragejs"

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob", email: "bob@mail.com", role: "admin" }] })

const Users = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        sortType: 'basic',
        fieldType: 'hidden',
        fieldName: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
        sortType: 'basic',
        fieldType: 'text',
        fieldName: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
        sortType: 'basic',
        fieldType: 'text',
        fieldName: 'email',
      },
      {
        Header: 'Role',
        accessor: 'role',
        sortType: 'basic',
        fieldType: 'text',
        fieldName: 'role',
      },
    ],
    []
  )

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }, [])

  const fetchData = () => {
    axios.get('/api/users')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleCreate = (formData) => {
    axios.post(`/api/users`, formData)
      .then((res) => {
        if (res.status === 201) {
          fetchData()
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleUpdate = (formData) => {
    axios.put(`/api/users/${formData.id}`, formData)
      .then((res) => {
        if (res.status === 200) {
          fetchData()
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleDelete = (id) => {
    axios.delete(`/api/users/${id}`)
      .then((res) => {
        if (res.status === 200) {
          fetchData()
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }
  return (
    <>
      <PageTitle>Users</PageTitle>
      <CRUDTable
        title="User"
        columns={columns}
        data={data}
        hiddenColumns={[]}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete} />
    </>
  );
}

export default Users;
