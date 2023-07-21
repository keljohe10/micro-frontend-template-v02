import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Footer = ({ footer }) => {
  return (
    <>
      <Grid item xs={6} sm={3} key={footer.title}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {footer.title}
        </Typography>
        <ul>
          {footer.description.map((item) => (
            <li key={item}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
    </>
  );
};

export default Footer;
