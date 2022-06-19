import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
    console.log(choices)
  return (
    <div className="box">
        <h1 className="box-title">{question}</h1>
        {choices[i].map((e)=>{
            return <Radio />
        })}
      </div>
  )
}

export default Box