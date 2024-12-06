import axios from "axios";
import { useEffect, useState, useParams, Link } from "react";
import { Button, Card } from "react-bootstrap";
import ClockEditForm from "../ui/ClockEditForm";

export default function ClockRedax() {
  const [clock, setClock] = useState({ title: "", desc: "", url: "" });
  const [show, setShow] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios(`/api/clocks/${id}`).then((data) => setClock(data));
  }, []);

  const updateHandler = async (event) => {
    event.preventDefault();
    try {
      const dataForApi = Object.fromEntries(new FormData(event.target));
      const res = await axios.put(`/api/clocks/${id}`, dataForApi);
      setClock(res.data);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{clock.title}</h5>
        <p className="card-text">{clock.desc}</p>
      </div>
    </div>
  </div>
</div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={clock.url} />
        <Card.Body>
          <Card.Title>{clock.title}</Card.Title>
          <Card.Text>{clock.desc}</Card.Text>
          <Link to={"/toys"}>
            <Button variant="primary">Back</Button>
          </Link>
          <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
            {show ? "Close" : "Edit"}
          </Button>
        </Card.Body>
      </Card>
      {show && <ClockEditForm updateHandler={updateHandler} clock={clock} />}
    </>
  );
}
