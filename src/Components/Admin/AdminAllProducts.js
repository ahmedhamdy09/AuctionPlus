import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductCard from "./AdminAllProductCard";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">Manage all products</div>
      <Row className="justify-content-start">
        {products ? (
          products.map((item, index) => (
            <AdminAllProductCard key={index} item={item} />
          ))
        ) : (
          <h4>No products Now</h4>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
