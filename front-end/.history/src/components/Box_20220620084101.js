import axios from "axios";
import React, { useEffect } from "react";
import Radio from "./Radio";
const Box = ({ question }) => {
  const [choices, setChoices] = React.useState([]);
  const getChoices = async () => {
    const resp = await fetch(
      `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${question.id}`
    );
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getChoices();
      setChoices(data);
    };
    getData();
  }, []);
  if (choices.length === 0) {
    return <div>Loading</div>;
  }
  return (
    <div className="box">
      <h1 className="box-title">{question}</h1>
      {setTimeout(
        choices.map((e) => {
          return <Radio />;
        }),
        500
      )}
    </div>
  );
};

export default Box;