import React from "react";
import Surveybox from "./Surveybox";
let surveys = {};
async function fetchSurveys() {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/user/get_surveys`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const surveys = await res.json();
  console.log(data);

  return data;
}

console.log("S",surveys)
const UserLanding = () => {

  return (
    <div className="survey_container">
      <div className="header">
        <h1>Select the survey</h1>
      </div>
      <div className="surveys">
     
       
      </div>
    </div>
  );
};

export default UserLanding;