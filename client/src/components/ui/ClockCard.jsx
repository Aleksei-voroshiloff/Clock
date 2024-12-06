import Contact from './ui/Contact';


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
          {/* <Button variant="primary">Подробнее</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
}

// import React from "react";
// import { Carousel, Container } from "react-bootstrap";

// export default function ClockCard({ clock }) {
//   return (
//     <Container>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={`http://localhost:3000/img/${clock.img}`} // URL изображения
//           />
//         </Carousel.Item>
//       </Carousel>
//     </Container>
//   );
// }


