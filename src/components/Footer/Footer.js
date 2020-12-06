import React from "react";
import { Box, Typography, Link } from '@material-ui/core';
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();
  return (<Box className={classes.box}>
        <Typography className={classes.footer} position="static" variant="body2" align="center">

        {'Copyright © '}{new Date().getFullYear()}{' '}<Link color="inherit" href="">The Daily Digest</Link>{' from News Maker Corporation '}
        </Typography>
    </Box>
    );
}
