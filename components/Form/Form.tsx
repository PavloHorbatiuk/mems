import { Field, Formik, Form } from "formik";
import { validateSchema } from "./validation";

export interface FormType {
  name: string;
}

interface IProps {
  type: string;
}

const initialValues: FormType = {
  name: "",
};

function FormCategory(props: IProps) {
  const { type } = props;
  const handleSubmit = (values: FormType) => {
    console.log(values);
  };
  return (
    <section>
      <h2>{type} Category</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" />
            {touched.name && errors.name && <div>{errors.name}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default FormCategory;
