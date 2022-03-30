import PageTitle from "../components/PageTitle";
import CRUDTable from "../components/CRUDTable/CRUDTable";
import { Field, TextField } from "../components/CRUDTable/Field";

let tasks = [
  {
    id: 1,
    title: 'Create an example',
    description: 'Create an example of how to use the component',
  },
  {
    id: 2,
    title: 'Improve',
    description: 'Improve the component!',
  },
];

const Crud = () => {
  return (
    <>
      <PageTitle>CRUD Table</PageTitle>

      {/* <CRUDTable items={tasks}>
        <Field name="1" label="id" hidden />
        <Field name="2" label="name" />
        <Field name="3" label="email" />
        <TextField name="4" label="age" />
        <Field name="5" label="created" hidden />
      </CRUDTable> */}

      <CRUDTable items={tasks}>
        <Field name="id" label="id" hidden />
        <Field name="title" label="title" />
        <TextField name="description" label="description" />
      </CRUDTable>
    </>
  );
}

export default Crud;
