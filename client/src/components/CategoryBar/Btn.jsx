import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const Btn = (props) => {
  const history = useHistory();
  const location = useLocation();
  const summ = new URLSearchParams(location.search);

  console.log(summ.get("cat"));
  const query = summ.get("searchQuery");
  const tag = summ.get("tags");

  const handleClick = () => {
    history.push(
      `/posts/search?searchQuery=${query === null ? `` : query}&tags=${
        tag === null ? `` : tag
      }&category=${props.category}`
    );
  };

  return (
    <Button style={{ border: "2px solid gray", borderRadius: "5px", margin: "0 1em" }}
      key={props.key}
      className="category-button"
      onClick={handleClick}
    >
      {props.category}
    </Button>
  );
};

export default Btn;
