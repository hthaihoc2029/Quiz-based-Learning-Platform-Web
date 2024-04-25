import React from "react";
import _ from "lodash";

const Question = (props) => {
  const { data, index } = props;

  if (_.isEmpty(data)) {
    return <></>;
  }

  return (
    <>
      {data.questionImg && (
        <div className="q-image">
          <img src={`data:image/png;base64,${data.questionImg}`} alt="" />
        </div>
      )}

      <div className="question">
        Question {index + 1}: {data.questionDesc}{" "}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((a, index) => {
            return (
              <>
                <div key={`answer-${index}`} className="a-child">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label">{a.description}</label>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Question;
