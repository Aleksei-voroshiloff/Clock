import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import '../assets/styles/style.css';

export default function ClockCard({ clock }) {
  return (
<<<<<<< HEAD

    <Card className="clock-card" style={{ width: '18rem' } }>
      <Card.Img variant="top" src={clock.img} />
=======
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`http://localhost:3000/${clock.img}`} />
>>>>>>> dev
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
