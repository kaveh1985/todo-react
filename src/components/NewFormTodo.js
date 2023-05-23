import { Formik, Form, Field, ErrorMessage } from 'formik';

function NewFormTodo({ todo }) {
  const validateForm = (values) => {
    const errors = {};

    if (!values.item) {
      errors.item = 'The field is empty';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    if (Object.keys(validateForm(values)).length === 0) {
        // the todo method is passed from the parent(App) to get the value from the form
      todo(values.item);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ item: '' }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form className="login-form">
        <h2>To Do</h2>
        <label htmlFor="item">Write down your To Do List:</label>
        <Field type="text" id="item" name="item" autoFocus onBlur={() => {}}/>
        <ErrorMessage name="item" component="div" className="error" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}

export default NewFormTodo;
