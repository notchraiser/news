import React, { useState } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { SetSearchText } from "../../actions";

export default function Search() {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SetSearchText(searchText));
    setSearchText("");
  };
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <IconButton aria-label="Search" type="submit">
        <SearchIcon />
      </IconButton>
      <FormControl className={classes.margin}>
        <Input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </FormControl>
    </form>
  );
}
