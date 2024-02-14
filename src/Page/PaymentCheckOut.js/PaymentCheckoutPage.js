import React from "react";
import { Container } from "react-bootstrap";
import PaymentMethods from "../../Components/PaymentMethods/PaymentMethods";

const PaymentCheckoutPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <PaymentMethods />
    </Container>
  );
};

export default PaymentCheckoutPage;
