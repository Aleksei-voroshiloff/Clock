// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
export default function ClockCard({ clock }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={clock.img} />
      <Card.Body>
        <Card.Title>{clock.title}</Card.Title>
        <Card.Text>{clock.description}</Card.Text>
      </Card.Body>
    </Card>
    // <Button variant="primary">Подробнее</Button>
  );
}


