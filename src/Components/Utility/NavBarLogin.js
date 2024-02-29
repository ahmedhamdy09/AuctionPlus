import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import logo from "../../assets/photo_2023-12-08_21-49-25.jpg";
import "./UtiltyCss/NavStyle.css";
import NabBarSearchHook from "../../HookLogicCode/Search/NabBarSearchHook";
// import { useDispatch } from "react-redux";
// import { getLoggedUser } from "../../Redux/Actions/AuthAction";

const NavBarLogin = () => {
  // const dispatch = useDispatch();
  // eslint-disable-next-line
  const [onChangeSearch, searchWord] = NabBarSearchHook();
  // search word
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");
  const searchInputStyle = {
    width: "100%",
  };

  // let user = "";
  // if (localStorage.getItem("user") != null)
  //    user = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState("");

  // logged user Not Working yet
  // const res = useSelector((state) => state.authReducer.currentLoggedUser);

  useEffect(
    () => {
      if (localStorage.getItem("user") != null)
        setUser(JSON.parse(localStorage.getItem("user")));
      // dispatch(getLoggedUser());
    },
    // eslint-disable-next-line
    []
  );
  const logOut = () => {
    localStorage.removeItem("user");
    setUser("");
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
                {user && user.name !== "" ? (
                  <NavDropdown
                    title={user.name}
                    id="basic-nav-dropdown"
                    style={{ marginTop: "6px" }}
                  >
                    {/* <NavDropdown.Item href="/admin/allproducts">
                      Admin
                    </NavDropdown.Item> */}

                    <NavDropdown.Item href="/user/profile">
                      Personal page
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} href="/">
                      LogOut
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    href="/login"
                    className="nav-text d-flex  justify-content-center signIn"
                  >
                    Sign In
                  </Nav.Link>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarLogin;
