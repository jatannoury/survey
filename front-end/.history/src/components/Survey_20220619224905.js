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
    questions.forEach(e => {
      
      let id = e["id"];
      let counter = 0;
      axios
        .get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`)
        .then((response) => {
          console.log(response.data);
           answers.push(response.data["answers"])
           console.log(answers[0]);
          
        });
    });
    
  }
  console.log(answers[0])
  {if
    console.log(answers[0])}
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
