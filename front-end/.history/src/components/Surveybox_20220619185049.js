import React from "react";

const Surveybox = ({ nam,setSurvey,survey }) => {
  console.log("HEY")
  
  React.useEffect(
    (e) => {
      if(!survey)return
      async function fetchQuestions() {
        const res = await fetch(
          `http://127.0.0.1:8000/api/v1/user/get_questions?survey_name=${survey}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
           
          }
        );
        const data = await res.json();
        console.log(data);
        localStorage.setItem("questions",JSON.stringify(data))
        
        return data;
      }
      fetchQuestions();
      
      localStorage.setItem("surveyName",survey)
      set
    },
    [survey]
    
  );
  console.log(survey)
  return (
    <div
      onClick={(e) => {
        setSurvey(e.target.innerText);

        
      }}
      className="survey_b"
    >
      <h2>{nam}</h2>
    </div>
  );
};

export default Surveybox;