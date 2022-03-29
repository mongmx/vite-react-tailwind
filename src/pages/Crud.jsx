import PageTitle from "../components/PageTitle";
import CRUDTable from "../components/CRUDTable/CRUDTable";
import { Field, TextField } from "../components/CRUDTable/Field";

const Crud = () => {
    return (
        <>
            <PageTitle>CRUD Table</PageTitle>
            
            <CRUDTable>
                <Field name="1" label="id" hidden />
                <Field name="2" label="name" />
                <Field name="3" label="email" />
                <TextField name="4" label="age" />
                <Field name="5" label="created" hidden />
            </CRUDTable>
        </>
    );
}

export default Crud;
