import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import '../../../public/assets/styles/style.css'; // Импортируем стили

export default function ClockPage() {
  const [clocks, setClocks] = useState([]);
  console.log(clocks);

  useEffect(() => {
    axios.get("/api/clocks").then((res) => setClocks(res.data));
  }, []);

  return (
    <div id="corusel" className="carousel">
      <Carousel>
        {clocks.map((clock) => (
          <Carousel.Item key={clock.id}>
            <img
              className="d-block w-100 img-fluid"
              src={`http://localhost:3000/${clock.img}`}
              alt={clock.description}
            />
            <Carousel.Caption style={{
              marginLeft: '45%'
            }}>
              <h5>{clock.title}</h5>
              
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
