import React from 'react'
import Text from './Text'
function getQuestionDetails(question){

}
const Survey = () => {
  return (
    <div className="survey_container">
        <div className="header">
          <h1>{localStorage.getItem("surveyName")}</h1>
        </div>
        <div className="box">
          <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
          <Text/>
          {const questions=localStorage.getItem("questions")}
        </div>
        
    </div>
  )
}

export default Survey