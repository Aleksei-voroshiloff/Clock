import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      style={{
        height: "100vh",
        fontFamily: "Montserrat",
        fontWeight: "bolder",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <h1>Не надо так... </h1>
      <h1>
        <span >Ну что тут сказать , ты упал.....</span>
      </h1>
      <img src="../../../public/img/qqq.jpg" style={{
          border: "none",
          borderRadius: "15px",
          width: "400px",
          height: "400px",
          
        }}/>
      <button
        style={{
          border: "none",
          borderRadius: "15px",
          width: "200px",
          height: "50px",
          marginTop: "150px",
        }}
      >
        
        <Link to="/">Вернуться на главную</Link>
      </button>
    </div>
  );
}
