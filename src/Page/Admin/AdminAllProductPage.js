import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Utility/Pagination";
import ViewProdcutAdminHook from "../../HookLogicCode/Admin/ViewProductAdminHook";

const AdminAllProductPage = () => {
  const [items, Paginations, onPress] = ViewProdcutAdminHook();
  if (Paginations) var pageCount = Paginations;
  else pageCount = 0;

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllProducts products={items} />
          {/* <Pagination pageCount={pageCount} onPress={onPress} /> */}
          {pageCount >= 1 ? (
            <Pagination pageCount={pageCount} onPress={onPress} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductPage;
