import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";

const DetailQuiz = (props) => {
  const location = useLocation();
  const quizTitle = location?.state?.quizTitle;
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  const params = useParams();
  const quizId = params.id;

  const handlePrev = () => {
    console.log(index);
    if (index > 0) setIndex(index - 1);
  };
  const handleNext = () => {
    console.log(index);
    if (dataQuiz && dataQuiz.length >= index + 2) setIndex(index + 1);
  };

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let questionDesc = value[0].description;
          let questionImg = value[0].image;
          let answers = [];
          value.forEach((item, index) => {
            answers.push(item.answers);
          });
          return { questionId: key, answers, questionDesc, questionImg };
        })
        .value();
      setDataQuiz(data);
    }
  };
  console.log("data", dataQuiz);
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          {" "}
          Quiz {quizId}: {quizTitle}
        </div>
        <hr />
        <div className="q-body">
          <img />
        </div>
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
        </div>
        <div className="footer">
          <button onClick={() => handlePrev()} className="btn btn-secondary">
            Prev
          </button>
          <button onClick={() => handleNext()} className="btn btn-primary">
            Next
          </button>
        </div>
      </div>
      <div className="right-content">count</div>
    </div>
  );
};

export default DetailQuiz;
