import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalResult from "./ModalResult";

const DetailQuiz = (props) => {
  const location = useLocation();
  const quizTitle = location?.state?.quizTitle;
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [isShowModalResult, setIsShowModalResult] = useState(false);
  const [dataModalResult, setDataModalResult] = useState({});

  const params = useParams();
  const quizId = params.id;

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length >= index + 2) setIndex(index + 1);
  };

  const handleFinishQuiz = async () => {
    let payload = {
      quizId: +quizId,
      answers: [],
    };
    if (dataQuiz && dataQuiz.length > 0) {
      dataQuiz.forEach((item) => {
        let questionId = +item.questionId;
        let userAnswerId = [];
        item.answers.forEach((a) => {
          if (a.isSelected === true) {
            userAnswerId.push(a.id);
          }
        });
        payload.answers.push({
          questionId: questionId,
          userAnswerId: userAnswerId,
        });
      });
      let res = await postSubmitQuiz(payload);
      console.log("checkres:", res);
      if (res && res.EC === 0) {
        setDataModalResult({
          countCorrect: res.DT.countCorrect,
          countTotal: res.DT.countTotal,
          quizData: res.DT.quizData,
        });
        setIsShowModalResult(true);
      } else {
        alert("wrong");
      }
    }
  };

  const handleCheckBox = (aId, qId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find((item) => +item.questionId === +qId);
    if (question && question.answers) {
      let b = question.answers.map((item) => {
        if (+item.id === +aId) item.isSelected = !item.isSelected;
        return item;
      });
      question.answers = b;
    }
    let index = dataQuizClone.findIndex((item) => +item.questionId === +qId);
    if (index > -1) {
      dataQuizClone[index] = question;
      setDataQuiz(dataQuizClone);
    }
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
            item.answers.isSelected = false;
            answers.push(item.answers);
          });
          return { questionId: key, answers, questionDesc, questionImg };
        })
        .value();
      setDataQuiz(data);
    }
  };

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
            handleCheckBox={handleCheckBox}
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
          <button
            onClick={() => handleFinishQuiz()}
            className="btn btn-warning"
          >
            Finish
          </button>
        </div>
      </div>
      <div className="right-content">count</div>
      <ModalResult
        dataModalResult={dataModalResult}
        show={isShowModalResult}
        setShow={setIsShowModalResult}
      />
    </div>
  );
};

export default DetailQuiz;
