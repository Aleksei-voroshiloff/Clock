//   import React from 'react'
import { Button, Form } from "react-bootstrap";

export default function ClockEditForm({ updateHandler, clock }) {
  return (
    <div style={{ background: 'linear-gradient(90deg, rgba(24, 18, 2, 1) 0%, rgba(83, 70, 58, 1) 35%, rgb(153, 134, 116) 100%)', padding: '20px', borderRadius: '5px' }}>
    <Form onSubmit={updateHandler}>
      <Form.Control
        name="title"
        size="sm"
        type="text"
        placeholder="Наименование"
        defaultValue={clock?.title}
        style={{ marginBottom: '10px' }} // Добавляем отступ для удобства
      />
      <Form.Control
        name="desc"
        size="sm"
        type="text"
        placeholder="Описание"
        defaultValue={clock?.desc}
        style={{ marginBottom: '10px' }} // Добавляем отступ для удобства
      />
      <Form.Control name="url" size="sm" type="file" style={{ marginBottom: '10px' }} />
      <Button type="submit" variant="primary">
        Сохранить
      </Button>
    </Form>
  </div>
  );
}

