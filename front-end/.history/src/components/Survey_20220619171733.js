import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";


const Survey = () => {
  const [ans, setAns] = React.useState("");
let counter=0
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {
      questions.map(e)=>{
        return <B
      }}
    </div>
  );
};

export default Survey;
