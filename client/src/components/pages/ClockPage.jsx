import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";

import "../../../public/assets/styles/style.css";
import "../../../public/assets/styles/carusel.css";
import { Link } from "react-router-dom";

export default function ClockPage() {
  const [clocks, setClocks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [carouselInterval, setCarouselInterval] = useState(3000);
  

  const togglePopup = () => {
    setIsOpen(!isOpen);
    // Остановить карусель при открытии попапа
    if (!isOpen) {
      setCarouselInterval(null); // Остановить карусель
    } else {
      setCarouselInterval(3000); // Вернуть интервал при закрытии
    }
  };

  useEffect(() => {
    axios.get("/api/clocks").then((res) => setClocks(res.data));
  }, []);

  return (
    <div className="carousel">
      <Carousel id="corusel" interval={carouselInterval}>

        {clocks.map((clock) => (
          <Carousel.Item key={clock.id}>
            <img
              className="d-block w-100 img-fluid"
              src={`http://localhost:3000/${clock.img}`}
              alt={clock.description}
            />
            <Carousel.Caption style={{ textAlign: "right" }}>
              <h5>{clock.title}</h5>
              <div>
                <Button style={{ paddingBottom: '30px', margin: "10px"}} onClick={togglePopup} variant="dark">
                  Подробнее
                </Button>
                {isOpen && (
                  <div className={`popup ${isOpen ? 'active' : ''}`}>
                    <div className="popup-content">
                      <img
                        className="photoClock"
                        src={`http://localhost:3000/${clock.img}`}
                        alt="часы"
                      />
                      <div className="infoClock">
                        <div className="title">{clock.title}</div>
                        <div className="desc">{clock.description}</div>
                        <div >
                          <Link to={"/clock/redax"} >
                          <Button style={{ paddingBottom: '30px', marginRight: "30px"}} variant="warning"> Изменить
                          </Button>
                          </Link>
                        <Button style={{ paddingBottom: '30px', marginRight: "50px"}} variant="dark" onClick={togglePopup}>Назад</Button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
