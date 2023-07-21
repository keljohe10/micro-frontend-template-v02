import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../components/layout/Copyrigth";

const FooterContainer = ({ children, classes }) => {
  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      {children}
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default FooterContainer;
