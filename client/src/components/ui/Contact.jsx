import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Связаться с нами</h1>
      <Row>
        <Col md={6}>
          <Card
            className="mb-4"
            style={{
              backgroundColor: '#787777',
              boxShadow: '5px 5px 20px rgba(0, 0, 0, 10)',
              color: ' #f4f4f4',
            }}
          >
            <Card.Body>
              <Card.Title>Наши Контакты</Card.Title>
              <Card.Text>
                <strong>Телефон:</strong> +7 (123) 456-78-90
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> info@vremchudes.ru
              </Card.Text>
              <Card.Text>
                <strong>Адрес:</strong> ул. Часовая, д. 10, Москва, Россия
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            className="mb-4"
            style={{
              backgroundColor: '#787777',
              boxShadow: '5px 5px 20px rgba(0, 0, 0, 10)',
              color: ' #f4f4f4',
            }}
          >
            <Card.Body>
              <Card.Title>Социальные Сети</Card.Title>
              <Card.Text>
                <strong>Instagram:</strong>{' '}
                <a
                  href="https://instagram.com/vremchudes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @vremchudes
                </a>
              </Card.Text>
              <Card.Text>
                <strong>Facebook:</strong>{' '}
                <a
                  href="https://facebook.com/vremchudes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/vremchudes
                </a>
              </Card.Text>
              <Card.Text>
                <strong>VK:</strong>{' '}
                <a
                  href="https://vk.com/vremchudes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vk.com/vremchudes
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link to="/">
          <Button
            variant="secondary"
            href="/"
            style={{ backgroundColor: 'black', borderColor: 'black' }}
          >
            Вернуться назад
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Contact;
