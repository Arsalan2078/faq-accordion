import { useState } from "react";

const AccordionItem = ({ id, question, answer }) => {
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const onButtonClickHandler = () => {
    setAccordionExpanded(!accordionExpanded);
  };

  return (
    <li className="accordion-item">
      <button
        aria-expanded={accordionExpanded ? "true" : "false"}
        aria-label={accordionExpanded ? "Hide the Answer" : "Show the Answer"}
        aria-controls={`accordion-answer-${id}`}
        id={`accordion-question-${id}`}
        onClick={onButtonClickHandler}
      >
        <p>{question}</p>
        <img
          src={
            accordionExpanded
              ? "./images/icon-minus.svg"
              : "./images/icon-plus.svg"
          }
          alt=""
          className="button-image"
        />
      </button>

      <div id={`accordion-answer-${id}`}>
        {accordionExpanded && <p>{answer}</p>}
      </div>
    </li>
  );
};

export default AccordionItem;
