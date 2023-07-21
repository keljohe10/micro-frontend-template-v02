import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PriceCard from "../components/PriceCard";
import Footer from "../components/layout/Footer";
import useStyles from "../utils/useStyles";
import { tiers, footers } from "../api/data";
import FooterContainer from "../containers/FooterContainer";

export default function Pricing() {
  const classes = useStyles.pricing();
  const layout = useStyles.layout();

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <PriceCard tier={tier} classes={classes} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterContainer classes={layout}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Footer footer={footer} key={footer.title} />
          ))}
        </Grid>
      </FooterContainer>
    </>
  );
}
