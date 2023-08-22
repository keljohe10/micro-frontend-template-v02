import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/layout/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header />
          <MarketingApp />
        </>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
