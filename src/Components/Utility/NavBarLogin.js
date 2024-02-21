import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/photo_2023-12-08_21-49-25.jpg";
import "./UtiltyCss/NavStyle.css";
import NabBarSearchHook from "../../HookLogicCode/Search/NabBarSearchHook";

const NavBarLogin = () => {
  // eslint-disable-next-line
  const [onChangeSearch, searchWord] = NabBarSearchHook();
  // search word
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");
  const navbarStyle = {
    backgroundColor: "#77D1F3",
    height: "80px",
  };
  const searchInputStyle = {
    width: "350px",
  };

  return (
    <Navbar
      className="sticky-top"
      style={navbarStyle}
      variant="dark"
      expand="sm"
    >
      <Container style={{ padding: "0px" }}>
        <Navbar.Brand>
          <a href="/">
            <img
              src={logo}
              className="logo"
              alt="sfvs"
              style={{
                margin: "9px",
                padding: "9px",
                width: "60px",
                borderRadius: "50px",
              }}
            />
          </a>
          <p className="linksPage" style={{ gap: "5px", display: "inline" }}>
            AuctionPlus
          </p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className="nav-text d-flex  justify-content-center"></Nav.Link>
          <Nav className="me-auto" style={{ marginLeft: "auto" }}>
            <Nav.Link
              href="/"
              className="nav-text d-flex  justify-content-center  mt-2 "
              style={{ marginLeft: "auto" }}
            >
              <p className="linksPage">Home</p>
            </Nav.Link>
            <Nav.Link
              href="/stream"
              className="nav-text d-flex  justify-content-center mt-2"
            >
              <p className="linksPage">Auctions</p>
            </Nav.Link>
            <Nav.Link
              href="/products"
              className="nav-text d-flex  justify-content-center mt-2"
            >
              <p className="linksPage">Shop</p>
            </Nav.Link>
            <Nav.Link
              href="/allCatogory"
              className="nav-text d-flex  justify-content-center mt-2"
            >
              <p className="linksPage">Categories</p>
            </Nav.Link>
          </Nav>

          <div className="icc">
            <i className="fa-solid fa-magnifying-glass"></i>
            <FormControl
              value={word}
              onChange={onChangeSearch}
              type="search"
              placeholder="Search for Products..."
              className="formsControl me-3 text-center"
              aria-label="Search"
              style={searchInputStyle}
            />
          </div>

          <Nav className="me-auto iconn">
            <Nav.Link
              href="/cart"
              className="nav-text d-flex  justify-content-center"
              style={{ color: "white" }}
            >
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            <Nav.Link
              href="/login"
              className="nav-text d-flex  justify-content-center signIn"
            >
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
