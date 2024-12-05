import axios from "axios";
import { useEffect, useState } from "react";

// import ClockCard from "../ui/ClockCard";
import { Carousel } from "react-bootstrap";

export default function ClockPage() {
  const [clocks, setClocks] = useState([]);
  console.log(clocks);

  useEffect(() => {
    axios.get("/api/clocks").then((res) => setClocks(res.data));
  }, []);

  return (
    <Carousel>
      {clocks.map((clock) => (
        <Carousel.Item key={clock.id}>
          <img
            style={{
              height: "",
            }}
            className="d-block w-100 img-fluid"
            src={`http://localhost:3000/${clock.img}`}
            alt={clock.description}
          />
          <Carousel.Caption>
            <h3>{clock.title}</h3>
            <p>{clock.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
