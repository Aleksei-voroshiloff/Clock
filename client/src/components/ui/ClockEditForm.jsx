  import React from 'react'
import { Button, Form } from "react-bootstrap";

export default function ClockEditForm({ updateHandler, clock }) {
  return (
    <>
      <Form onSubmit={updateHandler}>
        <Form.Control
          name="title"
          size="sm"
          type="text"
          placeholder="Наиминование"
          defaultValue={clock?.title}
        />
        <Form.Control
          name="desc"
          size="sm"
          type="text"
          placeholder="Описание"
          defaultValue={clock?.desc}
        />
        <Form.Control name="url" size="sm" type="file" />
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </Form>
    </>
  );
}

