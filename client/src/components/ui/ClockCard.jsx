import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default function ClockCard({ clock }) {
return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text={clock.img} />
        <Carousel.Caption>
          <h3>{clock.title}</h3>
          <p>{clock.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

{/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={clock.img} />
<Card.Body>
<Card.Title>{clock.title}</Card.Title>
<Card.Text>{clock.description}</Card.Text>
</Card.Body>
</Card>
);
} */}
{/* <Button variant="primary">Подробнее</Button> */}