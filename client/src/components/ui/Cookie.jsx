import CookieConsent from "react-cookie-consent";
import React from "react";
export default function Cookie() {
  return (
    <CookieConsent
      location="top"
      buttonText="Принять"
      enableDeclineButton
      declineButtonText="Отклонить"
      cookieName="userConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={365}
    >
      Это приложение использует cookies для улучшения работы с ним.{" "}
      <a
        href="/policy"
        style={{ color: "#f5f5f5", textDecoration: "underline" }}
      >
        Узнать больше
      </a>
      .
    </CookieConsent>
  );
}
