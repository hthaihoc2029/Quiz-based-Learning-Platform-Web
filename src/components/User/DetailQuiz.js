import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;

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
    }
  };

  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;
