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
  const searchInputStyle = {
    width: "100%",
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
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

            <p className="linksPage" style={{ gap: "5px", display: "inline" }}>
              AuctionPlus
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                className="nav-text d-flex  justify-content-center  mt-2 "
                // style={{ marginLeft: "auto" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/stream"
                className="nav-text d-flex  justify-content-center mt-2"
              >
                Auctions
              </Nav.Link>
              <Nav.Link
                href="/products"
                className="nav-text d-flex  justify-content-center mt-2"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/allCatogory"
                className="nav-text d-flex  justify-content-center mt-2"
              >
                Categories
              </Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarLogin;
