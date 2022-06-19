import React from "react";
import Text from "./Text";

async function getAnswers(id) {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    return data;
  } catch {}
}
let questions = JSON.parse(localStorage.getItem("questions"));
questions=questions["questions"]
const Survey = () => {

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {typeof(questions)==="object"?questions.map((e)=>{
        console.log()
        // return <Surveybox nam={e["name"]} setSurvey={setSurvey} survey={survey}/>
    }):console.log("HEY")}
      
    </div>
  );
};

export default Survey;