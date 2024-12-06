import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../../public/assets/styles/animation.css';

export default function History() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Добро пожаловать в "Время Чудес"</h1>
      <Row>
        <Col md={6}>
          <Card
            className="text-hover "
            style={{
              backgroundColor: '#787777',
              boxShadow: '5px 5px 20px rgba(0, 0, 0, 10)',
              color: ' #f4f4f4',
              cursor: ' pointer',
            }}
          >
            <Card.Body>
              <Card.Title>Наша История</Card.Title>
              <Card.Text style={{ fontSize: '20px' }}>
                "Время Чудес" — это магазин, основанный в 2023 году с целью предоставить
                нашим клиентам лучшие часы со всего мира. Наша команда увлеченных
                часовщиков и дизайнеров создает уникальные коллекции, которые сочетают в
                себе качество, стиль и инновации.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            className="text-hover "
            style={{
              backgroundColor: '#787777',
              boxShadow: '5px 5px 20px rgba(0, 0, 0, 10)',
              color: ' #f4f4f4',
              cursor: ' pointer',
            }}
          >
            <Card.Body>
              <Card.Title>Почему Мы?</Card.Title>
              <Card.Text style={{ fontSize: '20px' }}>
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
          <Card
            className="text-hover "
            style={{
              backgroundColor: '#787777',
              boxShadow: '5px 5px 20px rgba(0, 0, 0, 10)',
              color: ' #f4f4f4',
              cursor: ' pointer',
              marginTop: '30px',
            }}
          >
            <Card.Body>
              <Card.Title>Юридическая информация</Card.Title>
              <Card.Text style={{ fontSize: '20px' }}>
                Все часы, представленные в нашем магазине, сертифицированы и соответствуют
                международным стандартам качества. Мы гарантируем возврат товара в течение
                30 дней с момента покупки, если он не соответствует вашим ожиданиям.
              </Card.Text>
              <Button
                variant="primary"
                href="/contact"
                style={{
                  backgroundColor: 'black',
                  borderColor: 'black',
                  cursor: 'pointer',
                }}
              >
                Связаться с нами
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
