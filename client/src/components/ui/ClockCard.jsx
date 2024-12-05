import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../public/assets/styles/style.css';

export default function ClockCard({ clock }) {
  return (
    <Card
      style={{
        width: '18rem',
        marginBottom: '150px',
        marginRight: '10px',
        marginLeft: '10px',
      }}
    >
      <Card.Img
        variant="top"
        src={`http://localhost:3000/${clock.img}`}
        style={{ marginTop: '10px' }}
      />
      <Card.Body>
        <Card.Title className="text-center">{clock.title}</Card.Title>
        <Card.Text className="text-muted">{clock.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">Подробнее</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
