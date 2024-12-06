import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm, Button, Container } from 'react-bootstrap';

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

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('model', values.model);
    formData.append('img', values.img);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      alert('Ошибка при отправке формы');
    } else {
    }
  };
  return (
    <Container
      style={{ background: 'rgb(102, 88, 72)', borderRadius: '10px', marginTop: '50px',  }}
    >
      <Formik
        // initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <h2 id='feedback' className="text-center mb-4">Форма обратной связи</h2>

            <BootstrapForm.Group controlId="name">
              <BootstrapForm.Label>Имя</BootstrapForm.Label>
              <Field
                name="name"
                as={BootstrapForm.Control}
                type="text"
                placeholder="Введите ваше имя"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="email">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <Field
                name="email"
                as={BootstrapForm.Control}
                type="email"
                placeholder="Введите ваш email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="phone">
              <BootstrapForm.Label>Телефон</BootstrapForm.Label>
              <Field
                name="phone"
                as={BootstrapForm.Control}
                type="text"
                placeholder="Введите ваш телефон"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="sketch">
              <BootstrapForm.Label>Загрузите эскиз</BootstrapForm.Label>
              <input
                name="sketch"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue('sketch', event.currentTarget.files[0]);
                }}
                className="form-control"
              />
              <ErrorMessage name="sketch" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ textAlign: 'center', backgroundColor: 'black', borderColor: 'black', marginTop: '15px', marginBottom: '15px', marginLeft: '45%'}}
            >
              Отправить
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FeedbackForm;
