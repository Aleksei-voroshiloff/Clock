import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ClockEditForm from "../ui/ClockEditForm";

export default function ClockRedax({ id }) { // Принимаем id как пропс
  const [info, setInfo] = useState({ title: "", desc: "", img: "" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchClock = async () => {
      try {
        const response = await axios(`/api/clocks/${id}`);
        setInfo(response.data); // Убедитесь, что данные приходят в response.data
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchClock();
  }, [id]); // Добавьте id в зависимости

  const updateHandler = async (event) => {
    event.preventDefault();
    try {
      const dataForApi = Object.fromEntries(new FormData(event.target));
      const res = await axios.put(`/api/clocks/${id}`, {...dataForApi});
      setInfo(res.data);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card mb-3" style={{ maxWidth: '540px', background: 'linear-gradient(90deg, rgba(24, 18, 2, 1) 0%, rgba(83, 70, 58, 1) 35%, rgb(153, 134, 116) 100%)' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`http://localhost:3000/clock/${info.img}`} className="img-fluid rounded-start" alt="foto" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{info.title}</h5>
              <p className="card-text">{info.desc}</p>
              <Link to={'/clock'}>
                <Button variant="primary">Назад</Button>
              </Link>
              <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
                {show ? "Оставить" : "Изменить"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {show && <ClockEditForm updateHandler={updateHandler} clock={info} />}
    </>
  );
}
