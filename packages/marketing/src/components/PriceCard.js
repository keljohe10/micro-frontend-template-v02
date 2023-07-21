import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/StarBorder";
import Button from "@material-ui/core/Button";

const PriceCard = ({ tier, classes }) => {

  return (
    <Card>
      <CardHeader
        title={tier.title}
        subheader={tier.subheader}
        titleTypographyProps={{ align: "center" }}
        subheaderTypographyProps={{ align: "center" }}
        action={tier.title === "Pro" ? <StarIcon /> : null}
        className={classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography component="h2" variant="h3" color="textPrimary">
            ${tier.price}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            /mo
          </Typography>
        </div>
        <ul>
          {tier.description.map((line) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to="/auth/signup"
          fullWidth
          color="primary"
        >
          {tier.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PriceCard;
