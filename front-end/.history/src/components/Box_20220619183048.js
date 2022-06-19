import React from 'react'
import Radio from './Radio'
const Box = ({question,choices,i}) => {
    console.log(choices[0])
  return (
    <div className="box">
        <h1 className="box-title">{question}</h1>
        {setTimeout(choices.map((e)=>{
            return <Radio />
        }))}
      </div>
  )
}

export default Box