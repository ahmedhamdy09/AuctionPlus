import React, { useState } from "react";
import "./AuctionLivePage.css";
import searchIconsbid from "./images/input-group-append.png";
import scannerMer from "./images/Seminar-pana 1.png";
import fluentLive from "./images/fluent_live-24-filled.png";
import {  Container, Modal } from "react-bootstrap";
import arror from "./images/feArrowDown1.png";
import { useNavigate } from "react-router-dom";
const AuctionLivePage = () => {
  const [show, setShow] = useState(false);
  const navegate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const goPageOption1 = () => {
    navegate("sdfhsdfj");
  };

  const goPageOption2 = () => {
    navegate("sdsd");
  };
  return (
    <Container>
      <div className="fullPageAuction">
        <div className="auctionshow">
          <div className="generationAuction">
            <h3>Next Generation Auction</h3>
            <h2>Find Your Next Deal!</h2>
            <p>
              Online Auction is where everyone goes to
              <br />
              shop, sell,and give ,while discovering
              <br />
              variety and affordability
            </p>
            <div className="chooses">
              <input
                type="text"
                placeholder="search for bids"
                className="searchBids"
              />
              <select name="bids" id="bids">
                <option value="Category">Category</option>
                <option value="Category">Category</option>
                <option value="Category">Category</option>
                <option value="Category">Category</option>
              </select>
              <img src={searchIconsbid} className="searchBid" alt="searchBid" />
            </div>
          </div>
          <div className="searchScanners">
            <img src={scannerMer} className="searchBidimg" alt="searchBid" />
          </div>
        </div>
        <div className="fluentlive">
          <img src={fluentLive} className="searchBid" alt="searchBid" />
          <h2>Live auction area</h2>
        </div>
        <hr className="divider" />
        <div className="chh3">
          <div className="contAuction">
            <h3>There are no live shows at the moment</h3>
            <a href="/liveshow" alt="live" className="livesMeet">
              Start live streaming now
            </a>
            <br />
          </div>
          <button className="viewShow" alt="show" onClick={handleShow}>
            View Shows
          </button>
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
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default AuctionLivePage;
