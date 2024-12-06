import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function History() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Добро пожаловать в "Время Чудес"</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Наша История</Card.Title>
              <Card.Text>
                "Время Чудес" — это магазин, основанный в 2023 году с целью предоставить
                нашим клиентам лучшие часы со всего мира. Наша команда увлеченных
                часовщиков и дизайнеров создает уникальные коллекции, которые сочетают в
                себе качество, стиль и инновации.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Почему Мы?</Card.Title>
              <Card.Text>
                Мы стремимся к тому, чтобы каждый наш клиент нашел идеальные часы, которые
                подчеркнут его индивидуальность. Мы предлагаем широкий ассортимент часов
                от классических до современных моделей, чтобы удовлетворить любые вкусы.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Юридическая информация</Card.Title>
              <Card.Text>
                Все часы, представленные в нашем магазине, сертифицированы и соответствуют
                международным стандартам качества. Мы гарантируем возврат товара в течение
                30 дней с момента покупки, если он не соответствует вашим ожиданиям.
              </Card.Text>
              <Button variant="primary" href="/contact" style={{backgroundColor: "black", borderColor: "black"}}>
                Связаться с нами
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
