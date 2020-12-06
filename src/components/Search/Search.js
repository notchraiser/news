import React from "react";
import { FormControl, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

export default function Search() {
  const classes = useStyles();
  return (
    <FormControl size="small">
      <Input
        id="input-adornment"
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
