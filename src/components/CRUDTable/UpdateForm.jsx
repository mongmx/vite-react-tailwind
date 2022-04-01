import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Button from "../Button";
import { Field, TextField } from "./Field";

export const UpdateForm = ({ data, isOpen, closeFn, fields }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeFn}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update Form
                </Dialog.Title>
                <form>
                  <div className="mt-2">
                    <div className="w-full mt-4 grid grid-cols-1 gap-6">
                      {fields.map((field, i) => (
                        field.fieldType === "text" ?
                          <Field name={field.fieldName} label={field.fieldName} key={field.fieldName} data={data} /> :
                          field.fieldType === "textarea" ?
                            <TextField name={field.fieldName} label={field.fieldName} key={field.fieldName} data={data} /> :
                            ''
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button onClick={closeFn} primary={+true} className="inline">Update</Button>
                    <Button onClick={closeFn} secondary={+true} className="inline ml-1">Cancel</Button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

{/* <UpdateForm
        title="Task Update Process"
        message="Update task"
        trigger="Update"
        onSubmit={task => service.update(task)}
        submitText="Update"
        validate={(values) => {
          const errors = {};

          if (!values.id) {
            errors.id = 'Please, provide id';
          }

          if (!values.title) {
            errors.title = 'Please, provide task\'s title';
          }

          if (!values.description) {
            errors.description = 'Please, provide task\'s description';
          }

          return errors;
        }}
      /> */}
