import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";
import Box from "./Box";

const Survey = () => {
  let questions=localStorage.getItem("questions")
  console.log(questions)
  return (
    <></>
  );
};

export default Survey;
