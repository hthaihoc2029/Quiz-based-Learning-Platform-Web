import React from "react";
import _ from "lodash";

const Question = (props) => {
  const { data, index } = props;

  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleCheckBox = (event, aId, qId) => {
    props.handleCheckBox(aId, qId);
  };

  return (
    <>
      <div className="q-image">
        {data.questionImg && (
          <img src={`data:image/png;base64,${data.questionImg}`} alt="" />
        )}
      </div>

      <div className="question">
        Question {index + 1}: {data.questionDesc}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((a, index) => {
            return (
              <>
                <div key={`answer-${index}`} className="a-child">
                  <div className="form-check">
                    <input
                      onChange={(event) =>
                        handleCheckBox(event, a.id, data.questionId)
                      }
                      className="form-check-input"
                      type="checkbox"
                      checked={a.isSelected}
                    />
                    <label className="form-check-label">{a.description}</label>
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
