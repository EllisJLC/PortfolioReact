import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const style = {
  padding: 0,
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
}

const App = () => <PortfolioContainer style={style}/>;

export default App;
