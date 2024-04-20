import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheck from "../../Components/Cart/CartCheck";
import GetAllUserCartHook from "../../HookLogicCode/Cart/GetAllUserCartHook";

const CartPage = () => {
  // eslint-disable-next-line
  const [itemsNum, cartItems, totalPrice, couponnameRes, totalPriceAfterDiscount] =
    GetAllUserCartHook();
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">Shopping Cart</div>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {cartItems && cartItems.length >= 1 ? (
            cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })
          ) : (
            <h3>No Cart Now..</h3>
          )}
        </Col>

        <Col xs="6" md="3">
          <CartCheck
            couponnameRes={couponnameRes}
            totalPriceAfterDiscount={totalPriceAfterDiscount}
            totalPrice={totalPrice}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
