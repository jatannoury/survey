import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";
import Box from "./Box";

const Survey = () => {
  let questions = JSON.parse(localStorage.getItem("questions"));
  questions = questions["questions"];
  let answers = [];
  let counter = 0;
  {
    questions.forEach(element => {
      
    });
    questions.map((e) => {
    });
  }
  
  let index = 0;
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {questions.map((e) => {
        console.log("index", answers);
        index = index + 1;
        return <Box question={e["content"]} choices={answers} />;
      })}
    </div>
  );
};

export default Survey;