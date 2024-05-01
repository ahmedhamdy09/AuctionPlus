import React, { useState } from "react";
import "./AuctionLivePage.css";
import fluentLive from "./images/fluent_live-24-filled.png";
import { Container, Modal } from "react-bootstrap";
import arror from "./images/feArrowDown1.png";
import { Link, useNavigate } from "react-router-dom";
const AuctionLivePage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const goPageOption1 = () => {
    navigate("/uplivefour");
  };

  const goPageOption2 = () => {
    navigate("/uplivetwo");
  };

  return (
    <Container>
      <div className="fullPageAuction">
        <div className="fluentlive">
          <img src={fluentLive} className="searchBid" alt="searchBid" />
          <h2>Live auction area</h2>
        </div>
        <hr className="divider" />
        <div className="chh3">
          <div className="contAuction">
            <h3>There are no live shows at the moment</h3>
            <Link to="/stream" className="livesMeet">
              Start live streaming now
            </Link>
            <br />
          </div>
          <Link to={"/upliveone"}>
            <button className="viewShow" alt="show">
              View Shows
            </button>
          </Link>
        </div>
        <hr className="divider" />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body onClick={goPageOption1}>
          Start live streaming now{" "}
          <img
            src={arror}
            style={{ width: "15px", height: "15px", objectFit: "cover" }}
            alt="hh"
          />
        </Modal.Body>
        <hr />
        <Modal.Body onClick={goPageOption2}>
          Schedule a live show{" "}
          <img
            src={arror}
            style={{ width: "15px", height: "15px", objectFit: "cover" }}
            alt="hh"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AuctionLivePage;
