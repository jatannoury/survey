import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";

let questions = JSON.parse(localStorage.getItem("questions"));
questions = questions["questions"];
const Survey = () => {
  const [ans, setAns] = React.useState("");

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      <div className="box">
        <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
        <h1>HELLLOOO</h1>
      </div>
    </div>
  );
};

export default Survey;
