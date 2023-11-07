import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    border: "2px solid gray",
    borderRadius: "5px",
    margin: "0 1em",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

const Btn = (props) => {
  const history = useHistory();
  const location = useLocation();
  const summ = new URLSearchParams(location.search);

  console.log(summ.get("cat"));
  const query = summ.get("searchQuery");
  const tag = summ.get("tags");
  const classes = useStyles();

  const handleClick = () => {
    history.push(
      `/posts/search?searchQuery=${query === null ? `` : query}&tags=${
        tag === null ? `` : tag
      }&category=${props.category}`
    );
  };

  return (
    <Button 
    key={props.key}
    className={`${classes.button} category-button`}
    onClick={handleClick}
    variant="contained"
    >
      {props.category}
    </Button>
  );
};

export default Btn;
