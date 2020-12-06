import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import Search from "../Search/Search";

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.maincontainer} container  justify='space-between' alignItems='stretch'>
        <Grid item>
          <Typography className={classes.heading}>The Daily Digest</Typography>
        </Grid>
        <Grid item>
          <Search />
        </Grid>
      </Grid>
    </div>
  );
}
