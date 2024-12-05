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
      }}
    >
      <h1>Не надо так... </h1>
      <h1>
        <span>Ну что тут сказать , ты упал.....</span>
      </h1>
      <img src="https://media.tenor.com/tzLNfUMBmPYAAAAM/%D0%BF%D1%8C%D1%8F%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D0%B8%D0%BA-%D1%83%D0%BF%D0%B0%D0%BB.gif" />
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
