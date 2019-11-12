import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

// import logo from '../../assets/logo.png'
// const logo = require('../../assets/logo.png')
import * as S from "./styles";

import { handleLogout } from "../../utils/utils";

const Navbar = () => {
  return (
    <S.HeaderDiv>
      <div />
      <Link to="/">{/* <S.Logo src={logo} alt="" /> */}</Link>
      <div>
        <Button onClick={handleLogout}>Sign out</Button>
      </div>
    </S.HeaderDiv>
  );
};

export default Navbar;
