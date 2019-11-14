import * as React from "react";

import Board from "../../components/Board";
// import LandingPage from "../LandingPage";
import Navbar from "../../components/Navbar";

type Props = {
  handleLogout(): void;
};
const Home: React.FC<Props> = props => {

  return (
    <React.Fragment>
      <Navbar />
      <Board  />
    </React.Fragment>
  );
};

export default Home;
