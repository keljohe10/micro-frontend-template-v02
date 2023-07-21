import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import useStyles from "../utils/useStyles";
import MediaCard from "../components/MediaCard";
import { cards, footers } from "../api/data";
import FooterContainer from "../containers/FooterContainer";
import Footer from "../components/layout/Footer";

export default function Album() {
  const classes = useStyles.home();
  const layout = useStyles.layout();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <MediaCard classes={classes} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
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
