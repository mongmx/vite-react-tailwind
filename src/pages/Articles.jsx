import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../components/PageTitle'
import CRUDTable from '../components/CRUDTable/CRUDTable'
import { apiClient, apiPath } from '../api/client'

const Articles = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Slug',
        accessor: 'slug', // accessor is the "key" in the data
        sortType: 'basic',
        fieldType: 'text',
        fieldName: 'slug',
      },
      {
        Header: 'Title',
        accessor: 'title',
        sortType: 'basic',
        fieldType: 'text',
        fieldName: 'title',
      },
      {
        Header: 'Description',
        accessor: 'description',
        sortType: 'basic',
        fieldType: 'textarea',
        fieldName: 'description',
      },
      {
        Header: 'Body',
        accessor: 'body',
        sortType: 'basic',
        fieldType: 'textarea',
        fieldName: 'body',
      }
    ],
    []
  )

  const hiddenColumns = useMemo(
    () => [
      'slug',
      'body',
    ],
    []
  )

  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient.get(apiPath.articles)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.articles)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }, [])

  const fetchData = () => {
    apiClient.get(apiPath.articles)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.articles)
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleCreate = (formData) => {
    apiClient.post(`${apiPath.articles}`, formData)
      .then((res) => {
        if (res.status === 201) {
          fetchData()
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleUpdate = (formData) => {
    apiClient.put(`${apiPath.articles}/${formData.id}`, formData)
      .then((res) => {
        if (res.status === 200) {
          fetchData()
        } else {
          alert("Error Occoured. Try Again")
        }
      })
  }

  const handleDelete = (id) => {
    apiClient.delete(`${apiPath.articles}/${id}`)
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
      <PageTitle>Articles</PageTitle>
      <CRUDTable
        title="Articles"
        columns={columns}
        data={data}
        hiddenColumns={hiddenColumns}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete} />
    </>
  )
}

export default Articles
