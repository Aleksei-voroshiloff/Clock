import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form as BootstrapForm, Button } from "react-bootstrap";
<<<<<<< HEAD
import validationSchema from "./validationSchema";

const MyForm = ({ initialData }) => {
  const initialValues = {
    name: initialData.clientName || "",
    email: initialData.clientEmail || "",
    phone: initialData.clientPhone || "",
    model: "",
    img: "",
  };
=======
// import validationSchema from "./validationSchema";

const FeedbackForm = ({ initialData }) => {
  console.log(initialData);
  
  // const initialValues = {
  //   name: initialData.clientName || "",
  //   email: initialData.clientEmail || "",
  //   phone: initialData.clientPhone || "",
  //   model: "",
  //   img: "",
  // };

>>>>>>> dev

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("model", values.model);
    formData.append("img", values.img);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      alert("Ошибка при отправке формы");
    } else {
    }

<<<<<<< HEAD
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <BootstrapForm.Group controlId="name">
              <BootstrapForm.Label>Имя</BootstrapForm.Label>
              <Field name="name" as={BootstrapForm.Control} type="text" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="email">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <Field name="email" as={BootstrapForm.Control} type="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="phone">
              <BootstrapForm.Label>Телефон</BootstrapForm.Label>
              <Field name="phone" as={BootstrapForm.Control} type="text" />
              <ErrorMessage
                name="phone"
                component="div"
                style={{ color: "red" }}
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="sketch">
              <BootstrapForm.Label>Загрузите эскиз</BootstrapForm.Label>
              <input
                name="sketch"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("sketch", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="sketch"
                component="div"
                style={{ color: "red" }}
              />
            </BootstrapForm.Group>

            <Button type="submit">Отправить</Button>
          </Form>
        )}
      </Formik>
    );
=======
>>>>>>> dev
  };
  return (
    <Formik
      // initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <BootstrapForm.Group controlId="name">
            <BootstrapForm.Label>Имя</BootstrapForm.Label>
            <Field name="name" as={BootstrapForm.Control} type="text" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group controlId="email">
            <BootstrapForm.Label>Email</BootstrapForm.Label>
            <Field name="email" as={BootstrapForm.Control} type="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group controlId="phone">
            <BootstrapForm.Label>Телефон</BootstrapForm.Label>
            <Field name="phone" as={BootstrapForm.Control} type="text" />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: "red" }}
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group controlId="sketch">
            <BootstrapForm.Label>Загрузите эскиз</BootstrapForm.Label>
            <input
              name="sketch"
              type="file"
              accept="image/*"
              onChange={(event) => {
                setFieldValue("sketch", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage
              name="sketch"
              component="div"
              style={{ color: "red" }}
            />
          </BootstrapForm.Group>

          <Button type="submit">Отправить</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
