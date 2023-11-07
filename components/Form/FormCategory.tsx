"use client";

import { Field, Formik, Form } from "formik";
import { validateSchema } from "./validation";
import Check from "@/assets/icons/check.svg";
import Checked from "@/assets/icons/checked.svg";

export interface FormType {
  _id?: string;
  category: string;
  check: boolean;
}

interface IProps {
  type: string;
  handleSubmit: (values: FormType) => void;
}

const initialValues: FormType = {
  category: "",
  check: false,
};

function FormCategory(props: IProps) {
  const { type, handleSubmit } = props;

  const onHandleSubmit = (values: FormType) => {
    handleSubmit(values);
  };

  return (
    <section className="flex flex-col items-center py-4">
      <h2 className="mb-3">{type} Category</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={validateSchema}
      >
        {({ errors, touched, values }) => (
          <Form className="form">
            <Field placeholder="Name" className="field" name="category" />
            {touched.category && errors.category && (
              <div className=" pt-1 text-rose-600">{errors.category}</div>
            )}
            <div className="mt-5">
              <div className="flex">
                <span className="pr-2">Active</span>
                <label>
                  <Field type="checkbox" name="check" hidden />
                  {values.check ? <Check /> : <Checked />}
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button className="btn w-full" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default FormCategory;
