import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
// import { HeaderContainer, Logo, LogoImg, NavLinks, NavLink, CreateRoomBtn } from './HeaderStyles';
import logoMum from "../icons/photo_2023-12-08_21-49-25.jpg";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000000;
  background-color: #1a1a1a;
  text-decoration: none;
  padding: 16px 5%;
  z-index: 999;
`;

export const Logo = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 22px;
  font-weight: 700;
  line-height: 0;
  margin: 0;
  color: #ebe0e0;

  @media (max-width: 640px) {
    span {
      display: none;
    }
  }
`;

export const LogoImg = styled.img`
  height: 42px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2em;

  @media (max-width: 520px) {
    column-gap: 3em;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 1s;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  padding-bottom: 1px;

  &:hover {
    color: rgb(230, 228, 228);
    text-decoration: none;
    border-color: #845695;
  }
`;

export const CreateRoomBtn = styled(Link)`
  display: block;
  background-color: #845695;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    background-color: #845695;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="nav--list">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <LogoImg src={logoMum} alt="Site Logo" />
            <span>Auction Rooms</span>
          </Logo>
        </Link>
      </div>

      <NavLinks>
        <NavLink href="/" style={{ textDecoration: "none", color: "#fff" }}>
          Lobby
        </NavLink>
        <CreateRoomBtn
          to="/uplivetwo"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Create Room
        </CreateRoomBtn>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import logoMum from "../icons/photo_2023-12-08_21-49-25.jpg";
// import "../VideoCSS/lobby.css";
// import "../VideoCSS/main.css";

// const Header = () => {
//   return (
//     <header id="nav">
//       <div className="nav--list">
//         <Link to="/loppy">
//           <h3 id="logo">
//             <img src={logoMum} alt="Site Logo" />
//             <span>Auction Rooms</span>
//           </h3>
//         </Link>
//       </div>

//       <div id="nav__links">
//         <a className="nav__link" href="/">
//           Lobby
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="#ede0e0"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
//           </svg>
//         </a>
//         <Link className="nav__link" id="create__room__btn" to="/loppy">
//           Create Room
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="#ede0e0"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
//           </svg>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
